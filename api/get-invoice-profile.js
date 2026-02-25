// api/get-invoice-profile.js
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
    if (!token) return res.status(401).json({ error: "Not authenticated" });

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) return res.status(401).json({ error: "Invalid session" });

    const userId = userData.user.id;

    // =========================
    // 1) tenta invoice_profiles (plural)
    // =========================
    const { data: row, error } = await supabase
      .from("invoice_profiles")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!error) {
      return res.status(200).json({ ok: true, exists: !!row, profile: row || null });
    }

    // =========================
    // 2) fallback: invoice_profile (singular)
    // =========================
    const { data: row2, error: error2 } = await supabase
      .from("invoice_profile")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error2) {
      return res.status(500).json({
        error: "Invoice fetch failed",
        details: error2.message || String(error2),
      });
    }

    return res.status(200).json({ ok: true, exists: !!row2, profile: row2 || null });
  } catch (err) {
    return res.status(500).json({ error: "Unexpected error", message: err?.message || "Unknown error" });
  }
};
