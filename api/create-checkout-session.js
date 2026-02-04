// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = getEnv("STRIPE_SECRET_KEY");
    const priceCityGuide = getEnv("STRIPE_PRICE_ID_CITY_GUIDE");
    const priceDefault = getEnv("STRIPE_PRICE_ID_DEFAULT");

    const supabaseUrl = getEnv("SUPABASE_URL");
    const supabaseServiceKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const { category, city } = req.body || {};
    if (!category || !city) {
      return res.status(400).json({ error: "Missing category or city" });
    }

    // =====================================================
    // 1) EXIGIR LOGIN (Bearer token)
    // =====================================================
    const token = getBearerToken(req);
    if (!token) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    // Valida token e pega usuário
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      console.error("[Supabase] Invalid token:", userErr?.message || "no user");
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }
    const userId = userData.user.id;

    // =====================================================
    // 2) EXIGIR NOTA FISCAL ANTES DO STRIPE
    //    (não usar "id" pois sua tabela pode não ter essa coluna)
    // =====================================================
    const { data: invoiceRow, error: invoiceErr } = await supabase
      .from("invoice_profiles")
      .select("user_id") // ✅ coluna que existe no seu payload do save-invoice-profile.js
      .eq("user_id", userId)
      .limit(1)
      .maybeSingle();

    if (invoiceErr) {
      console.error("[Supabase] invoice_profiles query error:", invoiceErr.message);
      return res.status(500).json({
        error: "Failed to check invoice profile",
        details: invoiceErr.message,
      });
    }

    if (!invoiceRow) {
      return res.status(200).json({ code: "INVOICE_REQUIRED" });
    }

    // =====================================================
    // 3) CRIAR CHECKOUT STRIPE
    // =====================================================
    const stripe = new Stripe(secretKey);

    const isCityGuide = String(category).trim().toLowerCase() === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        category: String(category),
        city: String(city),
        user_id: String(userId),
      },
    });

    if (!session?.url) {
      console.error("[Stripe] Session missing URL");
      return res.status(500).json({ error: "Stripe session missing URL" });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("[Checkout] Unexpected error:", err?.message || err);
    return res.status(500).json({
      error: "Failed to create checkout session",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
