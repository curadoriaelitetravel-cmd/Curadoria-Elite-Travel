// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function normalizeCategory(cat) {
  return String(cat || "").trim().toLowerCase();
}

function safeString(v) {
  return String(v || "").trim();
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

    // =====================================================
    // 0) Ler body (compatível com antigo e novo)
    // Novo: { items: [{ category, city }, ...] }
    // Antigo: { category, city }
    // =====================================================
    const body = req.body || {};
    let items = [];

    if (Array.isArray(body.items) && body.items.length > 0) {
      items = body.items;
    } else {
      const category = body.category;
      const city = body.city;
      if (category && city) items = [{ category, city }];
    }

    // validação
    items = items
      .map((it) => ({
        category: safeString(it?.category),
        city: safeString(it?.city),
      }))
      .filter((it) => it.category && it.city);

    if (items.length === 0) {
      return res.status(400).json({ error: "Missing items (category/city)" });
    }

    // limite de segurança
    if (items.length > 12) {
      return res.status(400).json({ error: "Too many items in cart (max 12)" });
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
    // OBS: NÃO usa column "id" pois no seu banco pode não existir.
    // =====================================================
    async function tryInvoiceTable(tableName) {
      // usa coluna user_id (que com certeza existe, porque filtramos por ela)
      const { data, error } = await supabase
        .from(tableName)
        .select("user_id")
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

    // =====================================================
    // 3) CRIAR CHECKOUT STRIPE (multi-itens)
    // =====================================================
    const stripe = new Stripe(secretKey);

    const line_items = items.map((it) => {
      const isCityGuide = normalizeCategory(it.category) === "city guide";
      const priceId = isCityGuide ? priceCityGuide : priceDefault;
      return { price: priceId, quantity: 1 };
    });

    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    // metadata tem limite — guardamos um “resumo” + json compacto
    // (para carrinhos pequenos isso funciona bem)
    const compactItems = items.map((it) => ({
      c: it.category,
      t: it.city,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        user_id: String(userId),
        items_json: JSON.stringify(compactItems).slice(0, 450), // segurança com limite
        // compatibilidade: caso você ainda use em algum lugar
        category: String(items[0].category),
        city: String(items[0].city),
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
