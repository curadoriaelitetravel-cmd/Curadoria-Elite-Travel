// api/get-invoice-profile.js
// Lê o invoice_profiles do usuário logado (1 registro por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token
// - Retorna { profile: {...} } ou { profile: null }

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const parts = String(h).split(" ");
  if (parts.length === 2 && parts[0].toLowerCase() === "bearer") return parts[1];
  return null;
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ error: "missing_token" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    // Descobre user_id pelo token
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(401).json({ error: "invalid_token" });
    }
    const userId = userData.user.id;

    const { data, error } = await supabase
      .from("invoice_profiles")
      .select(
        "user_id, person_type, doc_number, full_name, ie_isento, ie, birth_date, cep, uf, city_name, neighborhood, street, street_number, complement, created_at, updated_at"
      )
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: "select_failed", details: error.message });
    }

    return res.status(200).json({
      profile: data || null,
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
