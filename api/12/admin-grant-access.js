// api/admin-grant-access.js
// ADMIN: Libera acesso manualmente (sem Stripe) inserindo em public.purchase
// Protegido por ADMIN_GRANT_KEY (Vercel Env)
//
// POST /api/admin-grant-access
// Header obrigatório:
//  x-admin-grant-key: <sua chave>
//
// Body JSON (recomendado):
// {
//   "user_id": "uuid-do-user",
//   "category": "Gastronomia",
//   "city": "NEW YORK - USA"
// }
//
// Alternativa (se você não tiver user_id):
// {
//   "user_email": "cliente@email.com",
//   "category": "...",
//   "city": "..."
// }
//
// Retorna ok + registro inserido/encontrado.
// Evita duplicar: se já existir purchase para (user_id + category + city), retorna existing=true.

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

function asText(v) {
  return String(v ?? "").trim();
}

// Normalização tolerante: remove acentos + converte travessão para hífen + normaliza espaços
function normalizeKey(s) {
  return asText(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[—–−]/g, "-")
    .replace(/\s*-\s*/g, " - ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

async function findUserIdByEmail(supabaseAdmin, email) {
  const target = normalizeKey(email);
  // Para base pequena, listar e procurar é ok.
  // Pagina até 5 páginas de 200 (1000 usuários) para não travar.
  let page = 1;
  const perPage = 200;

  for (let i = 0; i < 5; i++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage });
    if (error) throw new Error("auth_list_users_failed: " + error.message);

    const users = data?.users || [];
    const found = users.find(u => normalizeKey(u.email || "") === target);
    if (found?.id) return found.id;

    if (users.length < perPage) break; // acabou
    page += 1;
  }

  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method !== "POST") {
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

    const body = req.body || {};
    const category = asText(body.category);
    const city = asText(body.city);

    let userId = asText(body.user_id);
    const userEmail = asText(body.user_email);

    if (!category || !city) {
      return res.status(400).json({ error: "missing_category_or_city" });
    }

    if (!userId) {
      if (!userEmail) {
        return res.status(400).json({ error: "missing_user_id_or_user_email" });
      }
      const foundId = await findUserIdByEmail(supabase, userEmail);
      if (!foundId) {
        return res.status(404).json({ error: "user_not_found_by_email", user_email: userEmail });
      }
      userId = foundId;
    }

    const wantedCategoryKey = normalizeKey(category);
    const wantedCityKey = normalizeKey(city);

    // 1) Buscar o material ativo na curadoria_materials
    const { data: pool, error: poolErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, category, city_label, is_active")
      .eq("is_active", true)
      .limit(1000);

    if (poolErr) {
      return res.status(500).json({ error: "materials_lookup_failed", details: poolErr.message });
    }

    const found = (pool || []).find((row) => {
      const rowCategoryKey = normalizeKey(row.category || "");
      const rowCityKey = normalizeKey(row.city_label || "");
      return rowCategoryKey === wantedCategoryKey && rowCityKey === wantedCityKey && row.pdf_url;
    });

    if (!found?.pdf_url) {
      return res.status(404).json({
        error: "material_not_found",
        tip: "Verifique se existe linha em curadoria_materials com is_active=TRUE para essa categoria/cidade.",
        requested: { category, city },
      });
    }

    // 2) Evitar duplicar: se já existe purchase para (user_id + category + city), não insere novamente
    const { data: existing, error: existErr } = await supabase
      .from("purchase")
      .select("id, user_id, category, city, pdf_url, stripe_session_id, created_at")
      .eq("user_id", userId)
      .eq("category", category)
      .eq("city", city)
      .limit(1);

    if (existErr) {
      return res.status(500).json({ error: "purchase_check_failed", details: existErr.message });
    }

    if (existing && existing.length > 0) {
      return res.status(200).json({
        ok: true,
        existing: true,
        purchase: existing[0],
        pdf_url: existing[0].pdf_url,
      });
    }

    // 3) Inserir manualmente
    const manualSessionId = "manual_" + Date.now();

    const { data: inserted, error: insErr } = await supabase
      .from("purchase")
      .insert({
        user_id: userId,
        category,
        city,
        pdf_url: found.pdf_url,
        stripe_session_id: manualSessionId,
      })
      .select("id, user_id, category, city, pdf_url, stripe_session_id, created_at")
      .limit(1);

    if (insErr) {
      return res.status(500).json({ error: "purchase_insert_failed", details: insErr.message });
    }

    return res.status(200).json({
      ok: true,
      existing: false,
      purchase: inserted?.[0] || null,
      pdf_url: found.pdf_url,
      matched: { category: found.category, city_label: found.city_label },
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
