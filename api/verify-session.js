const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
      return;
    }

    const sessionId =
      (req.query && req.query.session_id) ? String(req.query.session_id) : "";
    if (!sessionId) {
      res.status(400).json({ error: "Missing session_id" });
      return;
    }

    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session && session.payment_status === "paid";
    if (!isPaid) {
      res.status(200).json({
        ok: false,
        reason: "not_paid",
        payment_status: session ? session.payment_status : "unknown",
      });
      return;
    }

    const category =
      session.metadata && session.metadata.category ? session.metadata.category : "";
    const city =
      session.metadata && session.metadata.city ? session.metadata.city : "";

    res.status(200).json({
      ok: true,
      category,
      city,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to verify session",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
