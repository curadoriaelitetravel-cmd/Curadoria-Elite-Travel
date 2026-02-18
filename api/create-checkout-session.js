// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

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

// ✅ Parcelamento somente acima de R$ 250,00
const INSTALLMENTS_MIN_TOTAL_CENTS = 25000;

// ✅ Cache simples para evitar buscar o mesmo preço toda hora
const priceUnitAmountCache = new Map();

async function getUnitAmountCents(stripe, priceId) {
  if (!priceId) return null;
  if (priceUnitAmountCache.has(priceId)) return priceUnitAmountCache.get(priceId);

  const p = await stripe.prices.retrieve(priceId);
  const amt = (p && typeof p.unit_amount === "number") ? p.unit_amount : null;

  priceUnitAmountCache.set(priceId, amt);
  return amt;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secretKey) return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    if (!priceCityGuide) return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_CITY_GUIDE env var" });
    if (!priceDefault) return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const body = req.body || {};

    // ✅ suporte a:
    // A) { category, city }  (1 item)
    // B) { items: [{category, city}, ...] } (carrinho)
    let items = [];

    if (Array.isArray(body.items) && body.items.length > 0) {
      items = body.items.map(normalizeItem).filter(x => x.category && x.city);
    } else if (body.category && body.city) {
      items = [ normalizeItem({ category: body.category, city: body.city }) ];
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
    // 2) EXIGIR NOTA FISCAL ANTES DO STRIPE
    // ✅ CORREÇÃO: não depende de invoice_profiles.id
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
    // 3) CRIAR CHECKOUT STRIPE (1 sessão com N itens)
    // + Parcelamento somente acima de R$ 250
    // =====================================================
    const stripe = new Stripe(secretKey);

    const line_items = items.map((it) => {
      const priceId = isCityGuideCategory(it.category) ? priceCityGuide : priceDefault;
      return { price: priceId, quantity: 1 };
    });

    // ✅ Calcula o total em centavos usando os Prices do Stripe
    let totalCents = 0;
    for (const it of items) {
      const priceId = isCityGuideCategory(it.category) ? priceCityGuide : priceDefault;
      const unitAmount = await getUnitAmountCents(stripe, priceId);
      if (typeof unitAmount === "number") totalCents += unitAmount;
    }

    const enableInstallments = totalCents >= INSTALLMENTS_MIN_TOTAL_CENTS;

    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    // ⚠️ metadata: guarda o carrinho inteiro
    // Stripe metadata é texto — vamos compactar:
    const itemsJson = JSON.stringify(items);

    const sessionParams = {
      mode: "payment",
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        user_id: String(userId),
        items: itemsJson,
      },
    };

    // ✅ Parcelamento somente acima de R$ 250
    // (o Stripe só exibirá parcelas se o método/cartão for elegível e se estiver habilitado no Dashboard)
    if (enableInstallments) {
      sessionParams.payment_method_options = {
        card: {
          installments: { enabled: true },
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    if (!session?.url) {
      return res.status(500).json({ error: "Stripe session missing URL" });
    }

    return res.status(200).json({
      url: session.url,
      installments_enabled: enableInstallments,
      total_cents: totalCents,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create checkout session",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
