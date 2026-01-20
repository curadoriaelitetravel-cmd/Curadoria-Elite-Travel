const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    // Dois preços:
    // - City Guide (preço diferente)
    // - Default (todas as outras categorias)
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

    if (!secretKey) {
      res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
      return;
    }
    if (!priceCityGuide) {
      res
        .status(500)
        .json({ error: "Missing STRIPE_PRICE_ID_CITY_GUIDE env var" });
      return;
    }
    if (!priceDefault) {
      res.status(500).json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });
      return;
    }

    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });

    const { category, city } = req.body || {};
    if (!category || !city) {
      res.status(400).json({ error: "Missing category or city" });
      return;
    }

    const normalizedCategory = String(category).trim().toLowerCase();
    const selectedPriceId =
      normalizedCategory === "city guide" ? priceCityGuide : priceDefault;

    const origin =
      (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin = origin.startsWith("http")
      ? origin.replace(/\/$/, "")
      : "https://curadoria-elite-travel.vercel.app";

    // Usamos {CHECKOUT_SESSION_ID} para confirmar pagamento depois
    const successUrl = `${safeOrigin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: selectedPriceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,

      // Metadados para sabermos o que a pessoa escolheu
      metadata: {
        category: String(category),
        city: String(city),
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({
      error: "Failed to create checkout session",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
  
