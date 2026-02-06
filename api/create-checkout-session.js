// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
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

    const { category, city } = req.body || {};
    if (!category || !city) {
      return res.status(400).json({ error: "Missing category or city" });
    }

    // 1) EXIGIR LOGIN
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

    // 2) EXIGIR NOTA FISCAL ANTES DO STRIPE
    //    NÃO depende de coluna "id". Só verifica se existe algum registro do user_id.
    async function tryInvoiceTable(tableName) {
      const { data, error } = await supabase
        .from(tableName)
        .select("user_id") // <- aqui é o FIX (não usa id)
        .eq("user_id", userId)
        .limit(1)
        .maybeSingle();

      return { data, error };
    }

    let invoiceRow = null;

    // tentativa 1: plural
    let attempt1 = await tryInvoiceTable("invoice_profiles");
    if (attempt1.error) {
      const msg = String(attempt1.error.message || "");
      const notFound =
        msg.includes("Could not find the table") ||
        msg.includes("relation") ||
        msg.toLowerCase().includes("does not exist");

      if (!notFound) {
        return res.status(500).json({
          error: "Failed to check invoice profile",
          details: attempt1.error.message,
        });
      }

      // fallback: singular
      let attempt2 = await tryInvoiceTable("invoice_profile");
      if (attempt2.error) {
        return res.status(500).json({
          error: "Failed to check invoice profile",
          details:
            "Não encontramos a tabela de Nota Fiscal. Verifique se existe 'invoice_profiles' (recomendado). Erro: " +
            (attempt2.error.message || "unknown"),
        });
      }

      invoiceRow = attempt2.data || null;
    } else {
      invoiceRow = attempt1.data || null;
    }

    if (!invoiceRow) {
      return res.status(200).json({ code: "INVOICE_REQUIRED" });
    }

    // 3) CRIAR CHECKOUT STRIPE
    const stripe = new Stripe(secretKey);

    const isCityGuide = String(category).trim().toLowerCase() === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/index.html?checkout=cancel`;

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
      return res.status(500).json({ error: "Stripe session missing URL" });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create checkout session",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
