// api/get-pdf-url.js
const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!stripeSecret) {
      console.error("[get-pdf-url] Missing STRIPE_SECRET_KEY");
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    }

    if (!supabaseUrl) {
      console.error("[get-pdf-url] Missing SUPABASE_URL");
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }

    if (!supabaseServiceKey) {
      console.error("[get-pdf-url] Missing SUPABASE_SERVICE_ROLE_KEY");
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const { session_id } = req.body || {};
    if (!session_id) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    const stripe = new Stripe(stripeSecret);

    // 1) Busca a sessão na Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session) {
      return res.status(404).json({ error: "Stripe session not found" });
    }

    // 2) Valida pagamento
    //    - session.payment_status normalmente retorna "paid" quando ok.
    //    - (isso evita liberar PDF sem pagamento)
    if (session.payment_status !== "paid") {
      return res.status(402).json({
        error: "Payment not confirmed",
        payment_status: session.payment_status,
      });
    }

    const metadata = session.metadata || {};
    const category = (metadata.category || "").trim();
    const city = (metadata.city || "").trim();

    if (!category || !city) {
      console.error("[get-pdf-url] Missing metadata category/city", { metadata });
      return res.status(500).json({ error: "Missing category/city in Stripe metadata" });
    }

    // 3) Busca no Supabase o PDF certo
    //    Usando Service Role Key (server-side) para não depender de RLS/Anon.
    const url = `${supabaseUrl}/rest/v1/curadoria_materials` +
      `?select=pdf_url,is_active,category,city_label` +
      `&category=eq.${encodeURIComponent(category)}` +
      `&city_label=eq.${encodeURIComponent(city)}` +
      `&is_active=eq.true` +
      `&limit=1`;

    const sbRes = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!sbRes.ok) {
      const t = await sbRes.text().catch(() => "");
      console.error("[get-pdf-url] Supabase error", sbRes.status, t);
      return res.status(500).json({ error: "Failed to query Supabase" });
    }

    const rows = await sbRes.json();
    const row = Array.isArray(rows) && rows.length ? rows[0] : null;

    if (!row || !row.pdf_url) {
      console.error("[get-pdf-url] Material not found", { category, city });
      return res.status(404).json({ error: "Material not found for this purchase" });
    }

    return res.status(200).json({
      pdf_url: row.pdf_url,
      category,
      city,
    });
  } catch (err) {
    console.error("[get-pdf-url] Error:", err);
    return res.status(500).json({
      error: "Internal error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
