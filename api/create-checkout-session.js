// api/create-checkout-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

module.exports = async function handler(req, res) {
  // Sempre retornar JSON
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    // Seus 2 preços (um para City Guide e outro para as demais categorias)
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

    // Supabase server-side
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secretKey) {
      console.error("[Stripe] Missing STRIPE_SECRET_KEY");
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    }

    if (!priceCityGuide) {
      console.error("[Stripe] Missing STRIPE_PRICE_ID_CITY_GUIDE");
      return res
        .status(500)
        .json({ error: "Missing STRIPE_PRICE_ID_CITY_GUIDE env var" });
    }

    if (!priceDefault) {
      console.error("[Stripe] Missing STRIPE_PRICE_ID_DEFAULT");
      return res
        .status(500)
        .json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });
    }

    if (!supabaseUrl) {
      console.error("[Supabase] Missing SUPABASE_URL");
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }

    if (!supabaseServiceKey) {
      console.error("[Supabase] Missing SUPABASE_SERVICE_ROLE_KEY");
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const stripe = new Stripe(secretKey);

    const { category, city } = req.body || {};

    if (!category || !city) {
      console.error("[Stripe] Missing category or city", { category, city });
      return res.status(400).json({ error: "Missing category or city" });
    }

    // =========================================================
    // 1) EXIGIR LOGIN ANTES DO STRIPE
    // Espera receber token no header Authorization: Bearer <token>
    // =========================================================
    const authHeader = (req.headers && req.headers.authorization) ? String(req.headers.authorization) : "";
    let accessToken = "";

    if (authHeader.toLowerCase().startsWith("bearer ")) {
      accessToken = authHeader.slice(7).trim();
    }

    if (!accessToken) {
      return res.status(401).json({
        error: "Not authenticated",
        code: "LOGIN_REQUIRED",
        message: "Faça login ou crie seu cadastro antes de prosseguir para o pagamento.",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: userData, error: userErr } = await supabase.auth.getUser(accessToken);
    if (userErr || !userData || !userData.user || !userData.user.id) {
      return res.status(401).json({
        error: "Invalid session",
        code: "LOGIN_REQUIRED",
        message: "Sessão inválida. Faça login novamente para prosseguir.",
      });
    }

    const userId = userData.user.id;

    // =========================================================
    // 2) EXIGIR PERFIL DE NOTA FISCAL ANTES DO STRIPE
    //
    // Como o nome da sua tabela pode variar, tentamos alguns nomes comuns.
    // Assim a gente não depende de “adivinhar” e evita quebrar o fluxo.
    // =========================================================
    const possibleInvoiceTables = [
      "invoice_profiles",
      "invoice_profile",
      "invoice_profiles_v2",
      "invoice_profile_v2",
      "customer_invoice_profile",
      "customer_invoice_profiles",
    ];

    let hasInvoiceProfile = false;
    let invoiceCheckWorked = false;

    for (const table of possibleInvoiceTables) {
      // tenta achar qualquer linha do usuário
      const { data, error } = await supabase
        .from(table)
        .select("id")
        .eq("user_id", userId)
        .limit(1);

      if (error) {
        // se a tabela não existe ou a coluna não existe, tenta a próxima
        continue;
      }

      invoiceCheckWorked = true;
      if (Array.isArray(data) && data.length > 0) {
        hasInvoiceProfile = true;
      }
      break;
    }

    // Se não conseguimos checar nenhuma tabela, é melhor avisar claramente (pra não liberar checkout errado)
    if (!invoiceCheckWorked) {
      return res.status(500).json({
        error: "Invoice profile table not found",
        code: "INVOICE_TABLE_MISSING",
        message:
          "Não foi possível validar os dados de Nota Fiscal no Supabase. Verifique o nome da tabela usada no save-invoice-profile.",
      });
    }

    if (!hasInvoiceProfile) {
      return res.status(403).json({
        error: "Invoice profile missing",
        code: "INVOICE_REQUIRED",
        message:
          "Antes do pagamento, precisamos dos dados para Nota Fiscal. Preencha seus dados e tente novamente.",
      });
    }

    // =========================================================
    // Stripe (mantém sua lógica 100% como estava)
    // =========================================================

    // Escolha do priceId dependendo da categoria
    const isCityGuide = String(category).trim().toLowerCase() === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    // Origem segura (mantém seu fallback)
    const origin =
      (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && origin.startsWith("http")
        ? origin.replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl =
      `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;

    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,

      // ✅ Mantém metadata para o backend achar o PDF certo
      metadata: {
        category,
        city,
      },
    });

    if (!session || !session.url) {
      console.error("[Stripe] Session created but missing URL", session);
      return res.status(500).json({
        error: "Stripe session missing URL",
      });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("[Stripe] Failed to create checkout session:", err);

    return res.status(500).json({
      error: "Failed to create checkout session",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
