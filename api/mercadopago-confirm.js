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

  const xSignature = req.headers["x-signature"] || "";
  const xRequestId = req.headers["x-request-id"] || "";

  let ts = "";
  let v1 = "";

  xSignature.split(",").forEach((part) => {
    const [k, v] = part.split("=", 2);
    if (k.trim() === "ts") ts = v.trim();
    if (k.trim() === "v1") v1 = v.trim();
  });

  const manifest = `id:${eventId};request-id:${xRequestId};ts:${ts};`;

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
    const { data: mat } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, city_label, category")
      .eq("is_active", true)
      .eq("category", it.category)
      .eq("city_label", it.city)
      .limit(1)
      .maybeSingle();

    if (!mat?.pdf_url) continue;

    purchaseRows.push({
      user_id: userId,
      category: it.category,
      city: it.city,
      pdf_url: mat.pdf_url,
    });
  }

  const { data: existing } = await supabase
    .from("purchase")
    .select("category, city")
    .eq("user_id", userId);

  const existingSet = new Set(
    (existing || []).map((r) => `${r.category}||${r.city}`)
  );

  const toInsert = purchaseRows.filter(
    (r) => !existingSet.has(`${r.category}||${r.city}`)
  );

  if (toInsert.length) {
    await supabase.from("purchase").insert(toInsert);
  }

  return { ok: true, granted: toInsert.length, total_items: items.length };
}

async function sendPurchaseEmail(email, items, total, installments, installmentAmount) {

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  let itemsHtml = "";
  items.forEach((it) => {
    itemsHtml += `<p>${it.category} - ${it.city}</p>`;
  });

  let paymentInfo = "Forma de pagamento: à vista";
  if (installments && installments > 1) {
    paymentInfo = `Forma de pagamento: ${installments}x de R$ ${installmentAmount}`;
  }

  const html = `
  <h2>Compra confirmada</h2>

  ${itemsHtml}

  <p><strong>Total da compra: R$ ${total}</strong></p>

  <p>${paymentInfo}</p>

  <p>Para acessar seu material, entre em <strong>Minha conta</strong> no site da Curadoria Elite Travel.</p>

  <p>Agradecemos a sua compra.</p>

  <p><strong>CURADORIA ELITE TRAVEL</strong><br/>
  O seu mundo, bem indicado.</p>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [email],
      subject: "Sua compra foi confirmada",
      html: html,
    }),
  });
}

module.exports = async function handler(req, res) {

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {

    const mpAccessToken = getMercadoPagoAccessToken();
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    if (req.method === "POST") {

      const body = req.body || {};
      const eventId = String(body?.data?.id || body?.id || "").trim();

      const v = verifyWebhookSignature(req, eventId);
      if (!v.ok) {
        return res.status(401).json({ error: v.error });
      }

      const pay = await mpGetPayment(mpAccessToken, eventId);
      if (!pay.ok || !pay.data) {
        return res.status(200).json({ ok: true });
      }

      const status = String(pay.data.status || "").toLowerCase();
      if (status !== "approved") {
        return res.status(200).json({ ok: true });
      }

      const metadata = pay.data.metadata || {};
      const userId = metadata.user_id;

      let items = [];
      try {
        items = JSON.parse(metadata.items || "[]").map(normalizeItem);
      } catch {
        items = [];
      }

      const grant = await grantPurchasesFromPayment(supabase, userId, items);

      // ===== ENVIO DE EMAIL (SEGURANÇA TOTAL) =====
      try {

        const payerEmail = pay.data.payer?.email;
        const installments = pay.data.installments;
        const installmentAmount = pay.data.transaction_details?.installment_amount;
        const total = pay.data.transaction_amount;

        if (payerEmail) {
          await sendPurchaseEmail(
            payerEmail,
            items,
            total,
            installments,
            installmentAmount
          );
        }

      } catch (emailErr) {
        console.log("email error", emailErr);
      }

      return res.status(200).json({
        ok: true,
        payment_status: status,
        granted: grant.granted,
        total_items: grant.total_items,
      });
    }

    return res.status(405).json({ error: "Method Not Allowed" });

  } catch (err) {
    return res.status(500).json({
      error: "Failed to confirm Mercado Pago payment",
      message: err?.message || "Unknown error",
    });
  }
};
