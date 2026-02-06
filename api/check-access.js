// api/check-access.js
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const token = getBearerToken(req);
    if (!token) return res.status(200).json({ ok: true, logged: false, has: false });

    const category = (req.query?.category ? String(req.query.category) : "").trim();
    const city = (req.query?.city ? String(req.query.city) : "").trim();
    if (!category || !city) return res.status(400).json({ error: "Missing category or city" });

    const supabase = createClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false } });

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) return res.status(200).json({ ok: true, logged: false, has: false });

    const userId = userData.user.id;

    const { data, error } = await supabase
      .from("purchase")
      .select("id, pdf_url")
      .eq("user_id", userId)
      .eq("category", category)
      .eq("city", city)
      .limit(1);

    if (error) {
      return res.status(500).json({ error: "Purchase check failed", details: error.message || String(error) });
    }

    const row = Array.isArray(data) && data.length ? data[0] : null;

    return res.status(200).json({
      ok: true,
      logged: true,
      has: !!row,
      pdf_url: row?.pdf_url || null,
    });
  } catch (err) {
    return res.status(500).json({ error: "Unexpected error", message: err?.message || "Unknown error" });
  }
};
