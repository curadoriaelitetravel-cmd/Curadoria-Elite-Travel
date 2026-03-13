// api/mercadopago-confirm.js
const { createClient } = require("@supabase/supabase-js");
const crypto = require("crypto");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function normalizeItem(it) {
  const category = String(it?.category || "").trim();
  const city = String(it?.city || "").trim();
  return { category, city };
}

function getMercadoPagoAccessToken() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  const isProd = vercelEnv === "production";

  const tokenProd = process.env.MERCADOPAGO_ACCESS_TOKEN_PROD;
  const tokenTest = process.env.MERCADOPAGO_ACCESS_TOKEN_TEST;
  const tokenLegacy = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (isProd) return tokenProd || tokenLegacy || "";
  return tokenTest || tokenLegacy || "";
}

function getWebhookSecret() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  const isProd = vercelEnv === "production";

  const secProd = process.env.MERCADOPAGO_WEBHOOK_SECRET_PROD;
  const secTest = process.env.MERCADOPAGO_WEBHOOK_SECRET_TEST;
  const secLegacy = process.env.MERCADOPAGO_WEBHOOK_SECRET;

  if (isProd) return secProd || secLegacy || "";
  return secTest || secLegacy || "";
}

async function mpGetPayment(mpAccessToken, paymentId) {
  const r = await fetch(
    `https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${mpAccessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await r.json().catch(() => null);
  return { ok: r.ok, status: r.status, data };
}

function verifyWebhookSignature(req, eventId) {
  const secret = getWebhookSecret();
  if (!secret) return { ok: false, error: "Missing webhook secret env var" };

  const xSignature = req.headers["x-signature"] || req.headers["X-Signature"] || "";
  const xRequestId = req.headers["x-request-id"] || req.headers["X-Request-Id"] || "";

  const sig = String(xSignature || "");
  const reqId = String(xRequestId || "");

  if (!sig || !reqId) return { ok: false, error: "Missing x-signature or x-request-id" };

  let ts = "";
  let v1 = "";

  sig.split(",").forEach((part) => {
    const [k, v] = part.split("=", 2);
    const key = String(k || "").trim();
    const val = String(v || "").trim();
    if (key === "ts") ts = val;
    if (key === "v1") v1 = val;
  });

  if (!ts || !v1) return { ok: false, error: "Invalid x-signature format" };
  if (!eventId) return { ok: false, error: "Missing event id for signature" };

  const manifest = `id:${eventId};request-id:${reqId};ts:${ts};`;

  const computed = crypto
    .createHmac("sha256", secret)
    .update(manifest)
    .digest("hex");

  const a = Buffer.from(computed, "utf8");
  const b = Buffer.from(v1, "utf8");

  if (a.length !== b.length) {
    return { ok: false, error: "Invalid signature" };
  }

  const ok = crypto.timingSafeEqual(a, b);
  return ok ? { ok: true } : { ok: false, error: "Invalid signature" };
}

async function grantPurchasesFromPayment(supabase, userId, items) {
  const purchaseRows = [];

  for (const it of items) {
    const { data: mat, error: matErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, city_label, category")
      .eq("is_active", true)
      .eq("category", it.category)
      .eq("city_label", it.city)
      .limit(1)
      .maybeSingle();

    if (matErr || !mat?.pdf_url) continue;

    purchaseRows.push({
      user_id: userId,
      category: it.category,
      city: it.city,
      pdf_url: mat.pdf_url,
    });
  }

  if (!purchaseRows.length) {
    return { ok: false, error: "No valid materials found to grant access" };
  }

  const { data: existing, error: exErr } = await supabase
    .from("purchase")
    .select("category, city")
    .eq("user_id", userId)
    .limit(1000);

  const existingSet = new Set();
  if (!exErr && Array.isArray(existing)) {
    existing.forEach((r) => {
      existingSet.add(`${String(r.category || "").trim()}||${String(r.city || "").trim()}`);
    });
  }

  const toInsert = purchaseRows.filter(
    (r) => !existingSet.has(`${r.category}||${r.city}`)
  );

  if (toInsert.length) {
    const { error: insErr } = await supabase.from("purchase").insert(toInsert);
    if (insErr) {
      return { ok: false, error: insErr.message || "Failed to grant purchases" };
    }
  }

  return { ok: true, granted: toInsert.length, total_items: items.length };
}

async function hasAllPurchasesGranted(supabase, userId, items) {
  const { data: existing, error } = await supabase
    .from("purchase")
    .select("category, city")
    .eq("user_id", userId)
    .limit(1000);

  if (error || !Array.isArray(existing)) return false;

  const existingSet = new Set();
  existing.forEach((r) => {
    existingSet.add(`${String(r.category || "").trim()}||${String(r.city || "").trim()}`);
  });

  return items.every((it) => existingSet.has(`${it.category}||${it.city}`));
}

async function getUserEmailById(supabase, userId) {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(userId);
    if (error) return "";
    return String(data?.user?.email || "").trim();
  } catch (_) {
    return "";
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatBRL(value) {
  const n = Number(value || 0);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(n);
}

function getPaymentTotal(paymentData) {
  const metadataTotal = Number(paymentData?.metadata?.pricing?.total);
  if (Number.isFinite(metadataTotal) && metadataTotal > 0) return metadataTotal;

  const tx = Number(paymentData?.transaction_amount);
  if (Number.isFinite(tx) && tx > 0) return tx;

  return 0;
}

function getInstallmentsText(paymentData) {
  const installments = Number(paymentData?.installments || 0);
  const installmentAmount = Number(paymentData?.transaction_details?.installment_amount || 0);

  if (installments > 1 && installmentAmount > 0) {
    return `${installments}x de ${formatBRL(installmentAmount)}`;
  }

  return "à vista";
}

function buildPurchasedItemsForEmail(paymentData, items) {
  const mpItemsA = Array.isArray(paymentData?.additional_info?.items)
    ? paymentData.additional_info.items
    : [];

  const mpItemsB = Array.isArray(paymentData?.order?.items)
    ? paymentData.order.items
    : [];

  const mpItems = mpItemsA.length ? mpItemsA : mpItemsB;

  return (items || []).map((it) => {
    const normalizedCategory = String(it?.category || "").trim();
    const normalizedCity = String(it?.city || "").trim();

    const match = mpItems.find((mp) => {
      const title = String(mp?.title || "").toLowerCase();
      return (
        title.includes(normalizedCategory.toLowerCase()) &&
        title.includes(normalizedCity.toLowerCase())
      );
    });

    const unitPrice = Number(match?.unit_price || 0);

    return {
      label: `${normalizedCategory} - ${normalizedCity}`,
      amount: unitPrice > 0 ? unitPrice : null,
    };
  });
}

async function sendPurchaseEmail({ toEmail, paymentData, items }) {
  const resendApiKey = String(process.env.RESEND_API_KEY || "").trim();
  if (!resendApiKey) return { ok: false, skipped: true, reason: "Missing RESEND_API_KEY" };
  if (!toEmail) return { ok: false, skipped: true, reason: "Missing recipient email" };

  const purchasedItems = buildPurchasedItemsForEmail(paymentData, items);
  const total = getPaymentTotal(paymentData);
  const installmentsText = getInstallmentsText(paymentData);

  const itemsHtml = purchasedItems.length
    ? purchasedItems
        .map((it) => {
          const valueText = it.amount != null ? ` — ${formatBRL(it.amount)}` : "";
          return `<p style="margin:0 0 10px 0;">${escapeHtml(it.label)}${escapeHtml(valueText)}</p>`;
        })
        .join("")
    : `<p style="margin:0 0 10px 0;">Compra confirmada.</p>`;

  const html = `
    <div style="font-family:Segoe UI,Arial,sans-serif;color:#111;line-height:1.6;">
      <h2 style="margin:0 0 18px 0;">Compra confirmada</h2>

      ${itemsHtml}

      <p style="margin:18px 0 8px 0;"><strong>Total da compra: ${escapeHtml(formatBRL(total))}</strong></p>
      <p style="margin:0 0 18px 0;">Forma de pagamento: ${escapeHtml(installmentsText)}</p>

      <p style="margin:0 0 18px 0;">Para acessar seu material, entre em <strong>Minha conta</strong> no site da Curadoria Elite Travel.</p>

      <p style="margin:0 0 18px 0;">Agradecemos a sua compra.</p>

      <p style="margin:0;">
        <strong>CURADORIA ELITE TRAVEL</strong><br/>
        O seu mundo, bem indicado.
      </p>
    </div>
  `;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [toEmail],
      subject: "Sua compra foi confirmada",
      html,
    }),
  });

  const data = await r.json().catch(() => null);

  if (!r.ok) {
    return {
      ok: false,
      status: r.status,
      error: data?.message || data?.error || "Failed to send email",
    };
  }

  return { ok: true, id: data?.id || null };
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    const mpAccessToken = getMercadoPagoAccessToken();
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!mpAccessToken) {
      return res.status(500).json({
        error:
          "Missing Mercado Pago token. Configure MERCADOPAGO_ACCESS_TOKEN_TEST / MERCADOPAGO_ACCESS_TOKEN_PROD (or MERCADOPAGO_ACCESS_TOKEN fallback).",
      });
    }
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    if (req.method === "POST") {
      const body = req.body || {};
      const eventId = String(body?.data?.id || body?.id || "").trim();

      const v = verifyWebhookSignature(req, eventId);
      if (!v.ok) {
        return res.status(401).json({ error: v.error || "Unauthorized" });
      }

      if (!eventId) {
        return res.status(200).json({ ok: true, ignored: true, reason: "Missing event id" });
      }

      const pay = await mpGetPayment(mpAccessToken, eventId);
      if (!pay.ok || !pay.data) {
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: "Failed to fetch payment",
          status: pay.status,
        });
      }

      const status = String(pay.data.status || "").toLowerCase();
      const metadata = pay.data.metadata || {};

      if (status !== "approved") {
        return res.status(200).json({ ok: true, payment_status: status, granted: 0 });
      }

      const userId = String(metadata.user_id || "").trim();
      if (!userId) {
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: "Missing metadata.user_id",
        });
      }

      let items = [];
      try {
        const raw = metadata.items;
        const parsed = raw ? JSON.parse(raw) : [];
        if (Array.isArray(parsed)) {
          items = parsed.map(normalizeItem).filter((x) => x.category && x.city);
        }
      } catch (_) {
        items = [];
      }

      if (!items.length) {
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: "Missing/invalid metadata.items",
        });
      }

      const grant = await grantPurchasesFromPayment(supabase, userId, items);
      if (!grant.ok) {
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: grant.error || "Grant failed",
        });
      }

      try {
        const userEmail = await getUserEmailById(supabase, userId);
        await sendPurchaseEmail({
          toEmail: userEmail,
          paymentData: pay.data,
          items,
        });
      } catch (emailErr) {
        console.error("purchase email failed (webhook):", emailErr?.message || emailErr);
      }

      return res.status(200).json({
        ok: true,
        payment_status: status,
        granted: grant.granted,
        total_items: grant.total_items,
      });
    }

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const paymentId = String(req.query?.payment_id || "").trim();
    if (!paymentId) {
      return res.status(400).json({ error: "Missing payment_id" });
    }

    const token = getBearerToken(req);
    if (!token) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const userId = userData.user.id;

    const pay = await mpGetPayment(mpAccessToken, paymentId);
    if (!pay.ok || !pay.data) {
      return res.status(500).json({
        error: "Failed to fetch Mercado Pago payment",
        status: pay.status,
        details: pay.data || null,
      });
    }

    const status = String(pay.data.status || "").toLowerCase();
    const metadata = pay.data.metadata || {};

    const metaUserId = String(metadata.user_id || "").trim();
    if (!metaUserId || metaUserId !== String(userId)) {
      return res.status(403).json({ error: "Payment does not belong to this user" });
    }

    let items = [];
    try {
      const raw = metadata.items;
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        items = parsed.map(normalizeItem).filter((x) => x.category && x.city);
      }
    } catch (_) {
      items = [];
    }

    if (!items.length) {
      return res.status(500).json({ error: "Payment metadata items missing/invalid" });
    }

    if (status !== "approved") {
      const alreadyGranted = await hasAllPurchasesGranted(supabase, userId, items);

      if (alreadyGranted) {
        return res.status(200).json({
          ok: true,
          granted: 0,
          total_items: items.length,
          payment_status: "approved",
          derived_from_access: true,
        });
      }

      return res.status(200).json({
        ok: false,
        payment_status: status,
        message: "Pagamento ainda não aprovado.",
      });
    }

    const grant = await grantPurchasesFromPayment(supabase, userId, items);
    if (!grant.ok) {
      return res.status(500).json({ error: grant.error || "Failed to grant purchases" });
    }

    try {
      const userEmail = await getUserEmailById(supabase, userId);
      await sendPurchaseEmail({
        toEmail: userEmail,
        paymentData: pay.data,
        items,
      });
    } catch (emailErr) {
      console.error("purchase email failed (return):", emailErr?.message || emailErr);
    }

    return res.status(200).json({
      ok: true,
      granted: grant.granted,
      total_items: grant.total_items,
      payment_status: status,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to confirm Mercado Pago payment",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
