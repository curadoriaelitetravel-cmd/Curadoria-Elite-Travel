// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function json(res, status, payload) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  return res.status(status).json(payload);
}

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function getOrigin(req) {
  const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
  const safe =
    origin && String(origin).startsWith("http")
      ? String(origin).replace(/\/$/, "")
      : "https://curadoria-elite-travel.vercel.app";
  return safe;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return json(res, 405, { code: "METHOD_NOT_ALLOWED", message: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const missing = [];
    if (!secretKey) missing.push("STRIPE_SECRET_KEY");
    if (!priceCityGuide) missing.push("STRIPE_PRICE_ID_CITY_GUIDE");
    if (!priceDefault) missing.push("STRIPE_PRICE_ID_DEFAULT");
    if (!supabaseUrl) missing.push("SUPABASE_URL");
    if (!supabaseServiceKey) missing.push("SUPABASE_SERVICE_ROLE_KEY");

    if (missing.length) {
      console.error("[Checkout] Missing env vars:", missing);
      return json(res, 200, {
        code: "CONFIG_ERROR",
        message: "Configuração incompleta no servidor (Vercel).",
        missing,
      });
    }

    const { category, city } = req.body || {};
    if (!category || !city) {
      console.error("[Checkout] Missing category/city:", { category, city });
      return json(res, 200, {
        code: "BAD_REQUEST",
        message: "Dados incompletos (category/city).",
      });
    }

    // =====================================================
    // 1) EXIGIR LOGIN
    // =====================================================
    const token = getBearerToken(req);
    if (!token) {
      return json(res, 200, { code: "LOGIN_REQUIRED", message: "Login necessário." });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      console.error("[Supabase] Invalid token:", userErr?.message || "no user");
      return json(res, 200, { code: "LOGIN_REQUIRED", message: "Sessão inválida. Faça login novamente." });
    }

    const userId = userData.user.id;
    const userEmail = userData.user.email || null;

    // =====================================================
    // 2) EXIGIR NOTA FISCAL ANTES DO STRIPE
    // ✅ Sua tabela não tem coluna id, então checamos por user_id
    // =====================================================
    const { data: invoiceRow, error: invoiceErr } = await supabase
      .from("invoice_profiles")
      .select("user_id")
      .eq("user_id", userId)
      .limit(1)
      .maybeSingle();

    if (invoiceErr) {
      console.error("[Supabase] invoice_profiles query error:", invoiceErr.message);
      return json(res, 200, {
        code: "INVOICE_CHECK_ERROR",
        message: "Erro ao verificar dados de Nota Fiscal.",
        details: invoiceErr.message,
      });
    }

    if (!invoiceRow) {
      return json(res, 200, { code: "INVOICE_REQUIRED", message: "Dados de Nota Fiscal necessários." });
    }

    // =====================================================
    // 3) CRIAR CHECKOUT NA STRIPE
    // =====================================================
    let stripe;
    try {
      stripe = new Stripe(secretKey);
    } catch (e) {
      console.error("[Stripe] Failed to init Stripe:", e?.message || e);
      return json(res, 200, {
        code: "STRIPE_INIT_ERROR",
        message: "Falha ao inicializar Stripe.",
        details: e?.message || String(e),
      });
    }

    const isCityGuide = String(category).trim().toLowerCase() === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    const safeOrigin = getOrigin(req);
    const successUrl = `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: userEmail || undefined,
        metadata: {
          category: String(category),
          city: String(city),
          user_id: String(userId),
        },
      });

      if (!session?.url) {
        console.error("[Stripe] Session created without url:", session?.id || session);
        return json(res, 200, {
          code: "STRIPE_SESSION_NO_URL",
          message: "Sessão criada, mas sem URL de pagamento.",
        });
      }

      return json(res, 200, { url: session.url });
    } catch (e) {
      console.error("[Stripe] Create session error:", e?.message || e);
      return json(res, 200, {
        code: "STRIPE_ERROR",
        message: "A Stripe recusou criar a sessão de pagamento.",
        details: e?.message || String(e),
      });
    }
  } catch (err) {
    console.error("[Checkout] Unexpected error:", err?.message || err);
    return json(res, 200, {
      code: "UNEXPECTED_ERROR",
      message: "Erro inesperado no servidor.",
      details: err?.message || String(err),
    });
  }
};
