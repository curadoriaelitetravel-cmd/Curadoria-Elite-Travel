// api/admin-list-purchases.js
// ADMIN: Lista compras da tabela public.purchase
// Protegido por ADMIN_GRANT_KEY (Vercel Env)
// Uso:
//  GET /api/admin-list-purchases
//  GET /api/admin-list-purchases?user_id=<uuid>
//  GET /api/admin-list-purchases?q=new%20york
//
// Header obrigatório:
//  x-admin-grant-key: <sua chave>

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function getAdminKey(req) {
  const h =
    req.headers?.["x-admin-grant-key"] ||
    req.headers?.["X-Admin-Grant-Key"] ||
    req.headers?.["x-admin-key"] ||
    req.headers?.["X-Admin-Key"] ||
    "";
  return String(h || "").trim();
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const ADMIN_GRANT_KEY = getEnv("ADMIN_GRANT_KEY");
    const provided = getAdminKey(req);

    if (!provided || provided !== ADMIN_GRANT_KEY) {
      return res.status(401).json({ error: "unauthorized" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const userId = req.query?.user_id ? String(req.query.user_id).trim() : "";
    const q = req.query?.q ? String(req.query.q).trim() : "";

    let query = supabase
      .from("purchase")
      .select(
        "id, user_id, category, city, pdf_url, stripe_session_id, created_at",
        { count: "exact" }
      )
      .order("created_at", { ascending: false })
      .limit(200);

    if (userId) query = query.eq("user_id", userId);

    // Filtro simples por texto (category/city) — útil pra achar duplicados
    if (q) {
      // OR ilike em duas colunas
      query = query.or(`category.ilike.%${q}%,city.ilike.%${q}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      return res.status(500).json({
        error: "query_failed",
        details: error.message,
      });
    }

    return res.status(200).json({
      ok: true,
      count: typeof count === "number" ? count : (data || []).length,
      items: data || [],
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
