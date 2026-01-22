// api/get-pdf-from-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secretKey) {
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    }
    if (!supabaseUrl) {
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }
    if (!supabaseServiceKey) {
      return res
        .status(500)
        .json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const sessionId = (req.query && req.query.session_id) ? String(req.query.session_id) : "";

    if (!sessionId) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Confirmação de pagamento (Stripe)
    const paid =
      session.payment_status === "paid" ||
      (session.status === "complete" && session.payment_status);

    if (!paid) {
      return res.status(402).json({
        error: "Payment not confirmed",
        payment_status: session.payment_status,
        status: session.status,
      });
    }

    const category = session.metadata && session.metadata.category ? String(session.metadata.category) : "";
    const city = session.metadata && session.metadata.city ? String(session.metadata.city) : "";

    if (!category || !city) {
      return res.status(500).json({
        error: "Missing metadata in Stripe session",
        metadata: session.metadata || null,
      });
    }

    // Busca do PDF no Supabase (SERVER-SIDE com Service Role)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("curadoria_materials")
      .select("pdf_url")
      .eq("is_active", true)
      .eq("category", category)
      .eq("city_label", city)
      .limit(1)
      .maybeSingle();

    if (error) {
      return res.status(500).json({
        error: "Supabase query error",
        details: error.message || String(error),
        category,
        city,
      });
    }

    if (!data || !data.pdf_url) {
      return res.status(404).json({
        error: "Material not found for this purchase",
        category,
        city,
      });
    }

    return res.status(200).json({
      ok: true,
      pdf_url: data.pdf_url,
      category,
      city,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
