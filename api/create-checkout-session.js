// api/create-checkout-session.js
const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
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
      res
        .status(500)
        .json({ error: "Missing STRIPE_PRICE_ID_DEFAULT env var" });
      return;
    }

    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });

    const body = req.body || {};
    const category = body.category;
    const city = body.city;

    if (!category || !city) {
      res.status(400).json({ error: "Missing category or city" });
      return;
    }

    // City Guide é o único com preço diferente
    const normalizedCategory = String(category).trim().toLowerCase();
    const isCityGuide = normalizedCategory === "city guide";
    const priceId = isCityGuide ? priceCityGuide : priceDefault;

    const origin =
      (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin = origin.startsWith("http")
      ? origin.replace(/\/$/, "")
      : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/?checkout=success&category=${encodeURIComponent(
      category
    )}&city=${encodeURIComponent(city)}`;
    const cancelUrl = `${safeOrigin}/?checkout=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { category, city },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({
      error: "Failed to create checkout session",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
