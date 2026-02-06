// api/get-prices.js
const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceCityGuide = process.env.STRIPE_PRICE_ID_CITY_GUIDE;
    const priceDefault = process.env.STRIPE_PRICE_ID_DEFAULT;

    if (!secretKey) return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    if (!priceCityGuide) return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_CITY_GUIDE env var" });
    if (!priceDefault) return res.status(500).json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });

    const stripe = new Stripe(secretKey);

    const [p1, p2] = await Promise.all([
      stripe.prices.retrieve(priceCityGuide),
      stripe.prices.retrieve(priceDefault),
    ]);

    function fmt(price) {
      const currency = (price && price.currency) ? String(price.currency).toUpperCase() : "BRL";
      const amount = (price && typeof price.unit_amount === "number") ? price.unit_amount : null;
      if (amount === null) return null;

      // Stripe vem em centavos
      const value = amount / 100;
      try {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(value);
      } catch (e) {
        // fallback simples
        return "R$ " + value.toFixed(2).replace(".", ",");
      }
    }

    return res.status(200).json({
      ok: true,
      prices: {
        city_guide: fmt(p1),
        default: fmt(p2),
      },
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Failed to load prices",
      message: err?.message || String(err),
    });
  }
};
