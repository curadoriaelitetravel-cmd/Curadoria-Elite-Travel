const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = process.env.STRIPE_PRICE_ID;

    if (!secretKey) {
      res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
      return;
    }
    if (!priceId) {
      res.status(500).json({ error: "Missing STRIPE_PRICE_ID env var" });
      return;
    }

    const stripe = new Stripe(secretKey, {
      apiVersion: "2024-06-20",
    });

    const { category, city } = req.body || {};

    if (!category || !city) {
      res.status(400).json({ error: "Missing category or city" });
      return;
    }

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
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        category,
        city,
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
