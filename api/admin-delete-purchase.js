// api/admin-delete-purchase.js
// ADMIN: Remove (deleta) compra(s) da tabela public.purchase
// Protegido por ADMIN_GRANT_KEY (Vercel Env)
//
// Uso (recomendado):
//  DELETE /api/admin-delete-purchase?purchase_id=<id>
//
// Alternativa:
//  DELETE /api/admin-delete-purchase?stripe_session_id=<sessao_stripe>
//
// Modo teste (não apaga):
//  DELETE /api/admin-delete-purchase?purchase_id=<id>&dry_run=true
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

function toBool(v) {
  const s = String(v || "").trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes" || s === "y";
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method !== "DELETE") {
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

    const purchaseId = req.query?.purchase_id ? String(req.query.purchase_id).trim() : "";
    const stripeSessionId = req.query?.stripe_session_id
      ? String(req.query.stripe_session_id).trim()
      : "";
    const dryRun = toBool(req.query?.dry_run);

    if (!purchaseId && !stripeSessionId) {
      return res.status(400).json({
        error: "missing_identifier",
        tip: "Envie purchase_id (recomendado) ou stripe_session_id.",
      });
    }

    // 1) Carrega o que vai apagar (para devolver no response e evitar confusão)
    let findQuery = supabase
      .from("purchase")
      .select("id, user_id, category, city, pdf_url, stripe_session_id, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (purchaseId) findQuery = findQuery.eq("id", purchaseId);
    if (!purchaseId && stripeSessionId) findQuery = findQuery.eq("stripe_session_id", stripeSessionId);

    const { data: found, error: findErr } = await findQuery;

    if (findErr) {
      return res.status(500).json({ error: "lookup_failed", details: findErr.message });
    }

    if (!found || found.length === 0) {
      return res.status(404).json({
        error: "not_found",
        purchase_id: purchaseId || null,
        stripe_session_id: stripeSessionId || null,
      });
    }

    if (dryRun) {
      return res.status(200).json({
        ok: true,
        dry_run: true,
        will_delete_count: found.length,
        will_delete: found,
      });
    }

    // 2) Deleta
    let delQuery = supabase.from("purchase").delete();

    if (purchaseId) delQuery = delQuery.eq("id", purchaseId);
    if (!purchaseId && stripeSessionId) delQuery = delQuery.eq("stripe_session_id", stripeSessionId);

    const { error: delErr } = await delQuery;

    if (delErr) {
      return res.status(500).json({ error: "delete_failed", details: delErr.message });
    }

    return res.status(200).json({
      ok: true,
      deleted_count: found.length,
      deleted: found,
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
