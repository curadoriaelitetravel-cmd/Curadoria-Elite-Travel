// api/create-checkout-mercadopago.js
const { createClient } = require("@supabase/supabase-js");
const crypto = require("crypto");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function isCityGuideCategory(category) {
  return String(category || "").trim().toLowerCase() === "city guide";
}

function normalizeItem(it) {
  const category = String(it?.category || "").trim();
  const city = String(it?.city || "").trim();
  return { category, city };
}

// Valores atuais do seu site (mantendo exatamente como está no front):
function getPriceForCategory(category) {
  // City Guide = 88.92 | Demais = 57.83
  return isCityGuideCategory(category) ? 88.92 : 57.83;
}

function toCentsBRL(v) {
  // Mercado Pago aceita decimal, mas vamos manter 2 casas com segurança
  const n = Number(v || 0);
  return Math.round(n * 100) / 100;
}

/**
 * Decide automaticamente qual token do Mercado Pago usar:
 * - VERCEL_ENV=production  -> usa MERCADOPAGO_ACCESS_TOKEN_PROD
 * - VERCEL_ENV=preview/dev -> usa MERCADOPAGO_ACCESS_TOKEN_TEST
 * Fallback: MERCADOPAGO_ACCESS_TOKEN (antiga) para não quebrar nada.
 */
function getMercadoPagoAccessToken() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase(); // "production" | "preview" | "development"
  const isProd = vercelEnv === "production";

  const tokenProd = process.env.MERCADOPAGO_ACCESS_TOKEN_PROD;
  const tokenTest = process.env.MERCADOPAGO_ACCESS_TOKEN_TEST;

  // fallback (antiga)
  const tokenLegacy = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (isProd) return tokenProd || tokenLegacy || "";
  // preview/development
  return tokenTest || tokenLegacy || "";
}

function isProductionEnv() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  return vercelEnv === "production";
}

// =====================================================
// WEBHOOK HELPERS (ADICIONADO - não altera checkout)
// =====================================================

function parseXSignature(headerValue) {
  // Ex: "ts=1700000000000,v1=abcdef..."
  const out = { ts: "", v1: "" };
  const s = String(headerValue || "").trim();
  if (!s) return out;

  const parts = s.split(",").map((p) => p.trim());
  for (const p of parts) {
    const [k, ...rest] = p.split("=");
    const key = String(k || "").trim().toLowerCase();
    const val = rest.join("=").trim();
    if (key === "ts") out.ts = val;
    if (key === "v1") out.v1 = val;
  }
  return out;
}

function safeEqualHex(a, b) {
  try {
    const ba = Buffer.from(String(a || ""), "hex");
    const bb = Buffer.from(String(b || ""), "hex");
    if (ba.length !== bb.length) return false;
    return crypto.timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}

// Valida assinatura do Mercado Pago se você tiver MERCADOPAGO_WEBHOOK_SECRET.
// Se não tiver, não bloqueia (mas no seu caso você JÁ criou, então valida).
function validateWebhookSignature(req, paymentId) {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) {
    return { ok: true, bypassed: true, reason: "Missing MERCADOPAGO_WEBHOOK_SECRET" };
  }

  const xSignature = req.headers?.["x-signature"] || req.headers?.["X-Signature"] || "";
  const xRequestId = req.headers?.["x-request-id"] || req.headers?.["X-Request-Id"] || "";
  const { ts, v1 } = parseXSignature(xSignature);

  if (!ts || !v1 || !xRequestId) {
    return { ok: false, bypassed: false, reason: "Missing x-signature/ts/v1 or x-request-id" };
  }

  // Manifest usado pelo MP (formato amplamente adotado na doc/implementações)
  const manifest = `id:${paymentId};request-id:${xRequestId};ts:${ts};`;
  const computed = crypto.createHmac("sha256", secret).update(manifest).digest("hex");
  const ok = safeEqualHex(computed, v1);

  return { ok, bypassed: false, reason: ok ? "" : "Invalid signature" };
}

function getPaymentIdFromWebhook(req) {
  // Suporta formatos comuns:
  // body.data.id | body.id | query.id | query["data.id"] | query.payment_id
  const b = req.body || {};
  const q = req.query || {};
  const candidates = [b?.data?.id, b?.id, q?.id, q?.["data.id"], q?.payment_id];

  for (const c of candidates) {
    const v = String(c || "").trim();
    if (v) return v;
  }
  return "";
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

async function grantPurchasesFromPayment({ supabase, userId, items }) {
  // Evitar duplicação: pega compras existentes do usuário
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

  const rowsToInsert = [];

  for (const it of items) {
    // Busca pdf_url no curadoria_materials usando city_label
    const { data: mat, error: matErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url")
      .eq("is_active", true)
      .eq("category", it.category)
      .eq("city_label", it.city)
      .limit(1)
      .maybeSingle();

    if (matErr || !mat?.pdf_url) continue;

    const key = `${it.category}||${it.city}`;
    if (existingSet.has(key)) continue;

    rowsToInsert.push({
      user_id: userId,
      category: it.category,
      city: it.city,
      pdf_url: mat.pdf_url,
      // stripe_session_id fica null (ok)
    });
  }

  if (!rowsToInsert.length) {
    return { ok: true, inserted: 0, reason: "Nothing new to insert (already granted or no materials found)" };
  }

  const { error: insErr } = await supabase.from("purchase").insert(rowsToInsert);
  if (insErr) {
    return { ok: false, error: "Failed to insert into purchase", details: insErr.message };
  }

  return { ok: true, inserted: rowsToInsert.length };
}

async function handleWebhook(req, res) {
  const mpAccessToken = getMercadoPagoAccessToken();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!mpAccessToken) {
    // Webhook: melhor responder 200 com "ignored" do que quebrar e ficar em retry eterno
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing Mercado Pago token" });
  }
  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing Supabase env vars" });
  }

  const paymentId = getPaymentIdFromWebhook(req);
  if (!paymentId) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing payment id" });
  }

  const sig = validateWebhookSignature(req, paymentId);
  if (!sig.ok) {
    // Assinatura inválida => não processa
    return res.status(401).json({ ok: false, error: "Invalid webhook signature", details: sig.reason });
  }

  const pay = await mpGetPayment(mpAccessToken, paymentId);
  if (!pay.ok || !pay.data) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Failed to fetch payment" });
  }

  const status = String(pay.data.status || "").toLowerCase();
  if (status !== "approved") {
    return res.status(200).json({ ok: true, ignored: true, payment_status: status });
  }

  const metadata = pay.data.metadata || {};
  const userId = String(metadata.user_id || "").trim();
  if (!userId) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing metadata.user_id" });
  }

  let items = [];
  try {
    const raw = metadata.items;
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) {
      items = parsed.map(normalizeItem).filter((x) => x.category && x.city);
    }
  } catch {
    items = [];
  }

  if (!items.length) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing/invalid metadata.items" });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });

  const granted = await grantPurchasesFromPayment({ supabase, userId, items });
  if (!granted.ok) {
    return res.status(200).json({ ok: true, ignored: true, reason: granted.error, details: granted.details || "" });
  }

  return res.status(200).json({
    ok: true,
    webhook: true,
    payment_id: paymentId,
    payment_status: status,
    inserted: granted.inserted,
    signature_bypassed: !!sig.bypassed,
  });
}

// =====================================================
// HANDLER (mantido, só adicionamos o webhook em cima)
// =====================================================
module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  // =====================================================
  // 0) WEBHOOK: POST sem Bearer token
  // =====================================================
  // Checkout (site) sempre manda Bearer token.
  // Webhook (Mercado Pago) NÃO manda Bearer token.
  if (req.method === "POST") {
    const tokenMaybe = getBearerToken(req);
    if (!tokenMaybe) {
      return handleWebhook(req, res);
    }
  }

  // =====================================================
  // Checkout (código original)
  // =====================================================
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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

    const body = req.body || {};

    // ✅ suporte a:
    // A) { category, city }  (1 item)
    // B) { items: [{category, city}, ...] } (carrinho)
    let items = [];

    if (Array.isArray(body.items) && body.items.length > 0) {
      items = body.items.map(normalizeItem).filter((x) => x.category && x.city);
    } else if (body.category && body.city) {
      items = [normalizeItem({ category: body.category, city: body.city })];
    }

    if (!items.length) {
      return res.status(400).json({ error: "Missing category/city or items[]" });
    }

    // =====================================================
    // 1) EXIGIR LOGIN
    // =====================================================
    const token = getBearerToken(req);
    if (!token) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const userId = userData.user.id;

    // =====================================================
    // 2) EXIGIR NOTA FISCAL ANTES DO PAGAMENTO
    // =====================================================
    const { data: invoiceRow, error: invoiceErr } = await supabase
      .from("invoice_profiles")
      .select("user_id")
      .eq("user_id", userId)
      .limit(1)
      .maybeSingle();

    if (invoiceErr) {
      return res.status(500).json({
        error: "Failed to check invoice profile",
        details: invoiceErr.message,
      });
    }

    if (!invoiceRow) {
      return res.status(200).json({ code: "INVOICE_REQUIRED" });
    }

    // =====================================================
    // 3) Criar PREFERENCE (Checkout Pro) no Mercado Pago
    // =====================================================
    // Origem segura (igual ao Stripe)
    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    // URLs de retorno
    const successUrl = `${safeOrigin}/checkout-success.html?mp=success`;
    const pendingUrl = `${safeOrigin}/checkout-success.html?mp=pending`;
    const failureUrl = `${safeOrigin}/checkout-success.html?mp=failure`;

    // Itens para o Mercado Pago (um por material)
    const mpItems = items.map((it) => {
      const price = toCentsBRL(getPriceForCategory(it.category));
      return {
        title: `${it.city} — ${it.category}`,
        quantity: 1,
        unit_price: price,
        currency_id: "BRL",
      };
    });

    // Guardar contexto (user + itens) de forma segura
    const itemsJson = JSON.stringify(items);

    const preferenceBody = {
      items: mpItems,

      back_urls: {
        success: successUrl,
        pending: pendingUrl,
        failure: failureUrl,
      },

      // Retorna automaticamente quando aprovado
      auto_return: "approved",

      // Referência externa para conciliação / webhooks
      external_reference: `cet_${userId}_${Date.now()}`,

      metadata: {
        user_id: String(userId),
        items: itemsJson,
        source: "curadoria-elite-travel",
      },
    };

    // Cria a preferência via API do Mercado Pago
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mpAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferenceBody),
    });

    const data = await r.json().catch(() => null);

    if (!r.ok) {
      return res.status(500).json({
        error: "Failed to create Mercado Pago preference",
        status: r.status,
        details: data || null,
      });
    }

    // ✅ Link correto por ambiente:
    // - Produção: init_point
    // - Teste: sandbox_init_point
    const isProd = isProductionEnv();
    const url = isProd ? (data?.init_point || null) : (data?.sandbox_init_point || null);

    if (!url) {
      return res.status(500).json({
        error: "Mercado Pago preference missing checkout URL",
        hint: isProd ? "Expected init_point" : "Expected sandbox_init_point",
        returned_keys: data ? Object.keys(data) : [],
      });
    }

    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create Mercado Pago checkout",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
