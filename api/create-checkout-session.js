// api/create-checkout-session.js
const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  // Sempre retornar JSON
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    // Seus 2 preços (um para City Guide e outro para as demais categorias)
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

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

    const stripe = new Stripe(secretKey);

    const { category, city } = req.body || {};

    if (!category || !city) {
      console.error("[Stripe] Missing category or city", { category, city });
      return res.status(400).json({ error: "Missing category or city" });
    }

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

    /**
     * ✅ NOVO SUCCESS URL (robusto):
     * Em vez de voltar para "/?checkout=success...", volta para uma página pequena
     * que valida o pagamento pelo session_id e abre o PDF NA MESMA ABA.
     */
    const successUrl =
      `${safeOrigin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`;

    /**
     * Cancelamento pode continuar simples
     * (se quiser, depois a gente cria um cancel.html também, mas não precisa agora)
     */
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
