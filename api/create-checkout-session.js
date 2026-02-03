// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

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

    if (!secretKey) {
      console.error("[Stripe] Missing STRIPE_SECRET_KEY");
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    }
    if (!priceCityGuide) {
      console.error("[Stripe] Missing STRIPE_PRICE_ID_CITY_GUIDE");
      return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_CITY_GUIDE env var" });
    }
    if (!priceDefault) {
      console.error("[Stripe] Missing STRIPE_PRICE_ID_DEFAULT");
      return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });
    }
    if (!supabaseUrl) {
      console.error("[Supabase] Missing SUPABASE_URL");
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }
    if (!supabaseServiceKey) {
      console.error("[Supabase] Missing SUPABASE_SERVICE_ROLE_KEY");
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    // -----------------------------------------------------
    // Body robusto (às vezes req.body pode vir como string)
    // -----------------------------------------------------
    let body = req.body || {};
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }

    const { category, city } = body || {};
    if (!category || !city) {
      console.error("[Checkout] Missing category or city", { category, city });
      return res.status(400).json({ error: "Missing category or city" });
    }

    // =====================================================
    // 1) EXIGIR LOGIN (Bearer token)
    // =====================================================
    const authHeader = req.headers && (req.headers.authorization || req.headers.Authorization);
    const rawAuth = authHeader ? String(authHeader) : "";

    const token =
      rawAuth.toLowerCase().startsWith("bearer ")
        ? rawAuth.slice(7).trim()
        : "";

    if (!token) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Valida token e pega usuário
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);

    if (userErr || !userData || !userData.user) {
      console.error("[Supabase] Invalid session token", userErr ? userErr.message : "no user");
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const user = userData.user;

    // =====================================================
    // 2) EXIGIR DADOS DE NOTA FISCAL ANTES DO STRIPE
    //    (tentamos nomes de tabela possíveis, porque seu log
    //     mostrou várias rotas diferentes no PostgREST)
    // =====================================================
    const invoiceTablesToTry = [
      "invoice_profiles",
      "invoice_profile",
      "invoice_profiles_v2",
      "invoice_profile_v2",
      "customer_invoice_profiles",
      "customer_invoice_profile",
    ];

    let hasInvoiceProfile = false;
    let lastInvoiceError = null;

    for (const tableName of invoiceTablesToTry) {
      const { data: invoiceRow, error: invoiceErr } = await supabase
        .from(tableName)
        .select("id")
        .eq("user_id", user.id)
        .limit(1)
        .maybeSingle();

      if (invoiceErr) {
        // Se a tabela não existir, tentamos a próxima
        const msg = invoiceErr.message || String(invoiceErr);
        lastInvoiceError = msg;

        // normalmente quando a tabela não existe, vem "relation ... does not exist"
        // então seguimos tentando as outras
        if (msg.toLowerCase().includes("does not exist") || msg.toLowerCase().includes("relation")) {
          continue;
        }

        // outros erros (permissão, schema etc) -> devolvemos detalhe
        console.error(`[Supabase] ${tableName} query error:`, msg);
        return res.status(500).json({
          error: "Failed to check invoice profile",
          stage: "invoice_check",
          table: tableName,
          details: msg,
        });
      }

      if (invoiceRow && invoiceRow.id) {
        hasInvoiceProfile = true;
        break;
      }
    }

    if (!hasInvoiceProfile) {
      // Se não achou em nenhuma tabela, NÃO estoura 500.
      // Apenas pede a etapa de Nota Fiscal antes do Stripe.
      return res.status(200).json({
        code: "INVOICE_REQUIRED",
        stage: "invoice_missing",
        details: lastInvoiceError || null,
      });
    }

    // =====================================================
    // 3) SOMENTE AGORA CRIAR CHECKOUT NO STRIPE
    // =====================================================
    const stripe = new Stripe(secretKey);

    const isCityGuide = String(category).trim().toLowerCase() === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && origin.startsWith("http")
        ? origin.replace(/\/$/, "")
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
        user_id: String(user.id),
      },
    });

    if (!session || !session.url) {
      console.error("[Stripe] Session created but missing URL", session);
      return res.status(500).json({ error: "Stripe session missing URL", stage: "stripe_create" });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("[Checkout] Unexpected error:", err);
    return res.status(500).json({
      error: "Failed to create checkout session",
      stage: "unexpected",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
