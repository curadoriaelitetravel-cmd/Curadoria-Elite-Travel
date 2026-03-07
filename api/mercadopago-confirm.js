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

function getResendApiKey() {
  return String(process.env.RESEND_API_KEY || "").trim();
}

function logStep(step, details = {}) {
  try {
    console.log(
      JSON.stringify({
        source: "mercadopago-confirm",
        step,
        ...details,
      })
    );
  } catch (e) {
    console.log("[mercadopago-confirm]", step, details);
  }
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

  const ok = crypto.timingSafeEqual(
    Buffer.from(computed, "utf8"),
    Buffer.from(v1, "utf8")
  );

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

  return {
    ok: true,
    granted: toInsert.length,
    total_items: items.length,
    already_owned: purchaseRows.length - toInsert.length,
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function getCustomerEmailAndName(supabase, userId) {
  let email = "";
  let name = "";

  try {
    const { data, error } = await supabase.auth.admin.getUserById(userId);
    if (!error && data?.user) {
      email = String(data.user.email || "").trim();

      const md = data.user.user_metadata || {};
      name =
        String(md.full_name || "").trim() ||
        String(md.name || "").trim() ||
        String(md.nome || "").trim();
    }
  } catch (e) {}

  return { email, name };
}

function buildAccessEmailHtml(customerName) {
  const safeName = escapeHtml(customerName || "");
  const greeting = safeName ? `Olá ${safeName},` : "Olá,";

  return `
    <div style="margin:0;padding:0;background:#0b0b0b;font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="background:linear-gradient(145deg,#111111,#000000);border:1px solid #222222;border-radius:16px;padding:32px;">
          <div style="font-family:Georgia,serif;font-size:24px;line-height:1.2;color:#d4af37;text-transform:uppercase;letter-spacing:0.6px;text-align:center;margin-bottom:6px;">
            Curadoria Elite Travel
          </div>

          <div style="text-align:center;color:rgba(255,255,255,0.72);font-size:13px;line-height:1.5;margin-bottom:28px;">
            O seu mundo, bem indicado.
          </div>

          <div style="font-size:16px;line-height:1.8;color:#ffffff;">
            <p style="margin:0 0 18px;">${greeting}</p>

            <p style="margin:0 0 18px;">
              Sua compra foi confirmada com sucesso.
            </p>

            <p style="margin:0 0 18px;">
              O material adquirido já está disponível em sua conta e pode ser acessado a qualquer momento.
            </p>

            <p style="margin:0 0 18px;">
              Para acessar:
            </p>

            <p style="margin:0 0 10px;">
              Entre em sua conta<br />
              Acesse a seção <strong style="color:#d4af37;">“Meus materiais”</strong>
            </p>

            <p style="margin:24px 0 0;">
              Caso tenha qualquer dúvida, estaremos à disposição.
            </p>

            <p style="margin:24px 0 0;">
              Agradecemos por confiar na <strong style="color:#d4af37;">Curadoria Elite Travel</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function sendApprovedPurchaseEmail(supabase, userId, paymentId, grantedCount) {
  try {
    logStep("email.start", {
      userId,
      paymentId,
      grantedCount,
    });

    if (!grantedCount || grantedCount <= 0) {
      logStep("email.skip.no_new_grant", {
        userId,
        paymentId,
        grantedCount,
      });
      return { ok: true, skipped: true, reason: "Nothing new granted" };
    }

    const resendApiKey = getResendApiKey();
    if (!resendApiKey) {
      logStep("email.error.missing_resend_key");
      return { ok: false, error: "Missing RESEND_API_KEY env var" };
    }

    const { email, name } = await getCustomerEmailAndName(supabase, userId);

    logStep("email.customer_lookup", {
      userId,
      foundEmail: !!email,
      emailPreview: email ? email.replace(/^(.{3}).+(@.*)$/, "$1***$2") : "",
      foundName: !!name,
    });

    if (!email) {
      return { ok: false, error: "Customer email not found" };
    }

    const html = buildAccessEmailHtml(name);

    const payload = {
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [email],
      subject: "Confirmação de acesso – Curadoria Elite Travel",
      html,
      reply_to: "curadoriaelitetravel@gmail.com",
    };

    logStep("email.resend_request", {
      userId,
      paymentId,
      to: email,
      from: payload.from,
      subject: payload.subject,
    });

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `mp-approved-${String(paymentId || "")}-${String(userId || "")}-${String(grantedCount || 0)}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => null);

    logStep("email.resend_response", {
      userId,
      paymentId,
      status: r.status,
      ok: r.ok,
      response: data,
    });

    if (!r.ok) {
      return {
        ok: false,
        error:
          data?.message ||
          data?.error ||
          `Resend returned status ${r.status}`,
      };
    }

    return { ok: true, id: data?.id || null };
  } catch (e) {
    logStep("email.exception", {
      userId,
      paymentId,
      message: e?.message || "Failed to send email",
    });

    return {
      ok: false,
      error: e?.message || "Failed to send email",
    };
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    const mpAccessToken = getMercadoPagoAccessToken();
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    logStep("handler.start", {
      method: req.method,
      hasMpToken: !!mpAccessToken,
      hasSupabaseUrl: !!supabaseUrl,
      hasSupabaseServiceKey: !!supabaseServiceKey,
      hasResendApiKey: !!getResendApiKey(),
      vercelEnv: process.env.VERCEL_ENV || "",
    });

    if (!mpAccessToken) {
      return res.status(500).json({
        error:
          "Missing Mercado Pago token. Configure MERCADOPAGO_ACCESS_TOKEN_TEST / MERCADOPAGO_ACCESS_TOKEN_PROD (or MERCADOPAGO_ACCESS_TOKEN fallback).",
      });
    }
    if (!supabaseUrl) {
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }
    if (!supabaseServiceKey) {
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    if (req.method === "POST") {
      const body = req.body || {};
      const eventId = String(body?.data?.id || body?.id || "").trim();

      logStep("webhook.received", {
        eventId,
        bodyKeys: Object.keys(body || {}),
      });

      const v = verifyWebhookSignature(req, eventId);
      if (!v.ok) {
        logStep("webhook.invalid_signature", {
          eventId,
          error: v.error || "Unauthorized",
        });
        return res.status(401).json({ error: v.error || "Unauthorized" });
      }

      if (!eventId) {
        logStep("webhook.skip.missing_event_id");
        return res.status(200).json({ ok: true, ignored: true, reason: "Missing event id" });
      }

      const pay = await mpGetPayment(mpAccessToken, eventId);
      if (!pay.ok || !pay.data) {
        logStep("webhook.skip.payment_fetch_failed", {
          eventId,
          status: pay.status,
        });
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: "Failed to fetch payment",
          status: pay.status,
        });
      }

      const status = String(pay.data.status || "").toLowerCase();
      const metadata = pay.data.metadata || {};

      logStep("webhook.payment_fetched", {
        eventId,
        paymentStatus: status,
        metadataKeys: Object.keys(metadata || {}),
      });

      if (status !== "approved") {
        logStep("webhook.skip.not_approved", {
          eventId,
          paymentStatus: status,
        });
        return res.status(200).json({ ok: true, payment_status: status, granted: 0 });
      }

      const userId = String(metadata.user_id || "").trim();
      if (!userId) {
        logStep("webhook.skip.missing_user_id", { eventId });
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
      } catch (e) {
        items = [];
      }

      logStep("webhook.items_parsed", {
        eventId,
        userId,
        itemsCount: items.length,
        items,
      });

      if (!items.length) {
        logStep("webhook.skip.invalid_items", {
          eventId,
          userId,
        });
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: "Missing/invalid metadata.items",
        });
      }

      const grant = await grantPurchasesFromPayment(supabase, userId, items);

      logStep("webhook.grant_result", {
        eventId,
        userId,
        grant,
      });

      if (!grant.ok) {
        return res.status(200).json({
          ok: true,
          ignored: true,
          reason: grant.error || "Grant failed",
        });
      }

      const emailResult = await sendApprovedPurchaseEmail(
        supabase,
        userId,
        eventId,
        grant.granted
      );

      logStep("webhook.email_result", {
        eventId,
        userId,
        emailResult,
      });

      return res.status(200).json({
        ok: true,
        payment_status: status,
        granted: grant.granted,
        total_items: grant.total_items,
        email_sent: !!emailResult.ok && !emailResult.skipped,
        email_error: emailResult.ok ? null : emailResult.error || null,
      });
    }

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const paymentId = String(req.query?.payment_id || "").trim();
    if (!paymentId) {
      return res.status(400).json({ error: "Missing payment_id" });
    }

    logStep("return.received", {
      paymentId,
      query: req.query || {},
    });

    const token = getBearerToken(req);
    if (!token) {
      logStep("return.login_required.no_token", { paymentId });
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      logStep("return.login_required.invalid_token", {
        paymentId,
        error: userErr?.message || null,
      });
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const userId = userData.user.id;

    const pay = await mpGetPayment(mpAccessToken, paymentId);
    if (!pay.ok || !pay.data) {
      logStep("return.payment_fetch_failed", {
        paymentId,
        userId,
        status: pay.status,
      });
      return res.status(500).json({
        error: "Failed to fetch Mercado Pago payment",
        status: pay.status,
        details: pay.data || null,
      });
    }

    const status = String(pay.data.status || "").toLowerCase();
    const metadata = pay.data.metadata || {};

    logStep("return.payment_fetched", {
      paymentId,
      userId,
      paymentStatus: status,
      metadataKeys: Object.keys(metadata || {}),
    });

    const metaUserId = String(metadata.user_id || "").trim();
    if (!metaUserId || metaUserId !== String(userId)) {
      logStep("return.forbidden.user_mismatch", {
        paymentId,
        userId,
        metaUserId,
      });
      return res.status(403).json({ error: "Payment does not belong to this user" });
    }

    if (status !== "approved") {
      logStep("return.not_approved", {
        paymentId,
        userId,
        paymentStatus: status,
      });
      return res.status(200).json({
        ok: false,
        payment_status: status,
        message: "Pagamento ainda não aprovado.",
      });
    }

    let items = [];
    try {
      const raw = metadata.items;
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        items = parsed.map(normalizeItem).filter((x) => x.category && x.city);
      }
    } catch (e) {
      items = [];
    }

    logStep("return.items_parsed", {
      paymentId,
      userId,
      itemsCount: items.length,
      items,
    });

    if (!items.length) {
      return res.status(500).json({ error: "Payment metadata items missing/invalid" });
    }

    const grant = await grantPurchasesFromPayment(supabase, userId, items);

    logStep("return.grant_result", {
      paymentId,
      userId,
      grant,
    });

    if (!grant.ok) {
      return res.status(500).json({ error: grant.error || "Failed to grant purchases" });
    }

    const emailResult = await sendApprovedPurchaseEmail(
      supabase,
      userId,
      paymentId,
      grant.granted
    );

    logStep("return.email_result", {
      paymentId,
      userId,
      emailResult,
    });

    return res.status(200).json({
      ok: true,
      granted: grant.granted,
      total_items: grant.total_items,
      payment_status: status,
      email_sent: !!emailResult.ok && !emailResult.skipped,
      email_error: emailResult.ok ? null : emailResult.error || null,
    });
  } catch (err) {
    logStep("handler.exception", {
      message: err?.message || "Unknown error",
      stack: err?.stack || null,
    });

    return res.status(500).json({
      error: "Failed to confirm Mercado Pago payment",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
