// api/admin-grant-purchase.js
const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function asText(v) {
  return String(v ?? "").trim();
}

function removeDiacritics(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeDashesToHyphen(s) {
  return String(s || "")
    .replace(/\u2013/g, "-")
    .replace(/\u2014/g, "-")
    .replace(/\s*-\s*/g, " - ");
}

function normalizeKey(s) {
  return removeDiacritics(normalizeDashesToHyphen(asText(s)))
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const adminKey = asText(req.headers["x-admin-key"] || req.headers["X-Admin-Key"]);
    const expected = getEnv("ADMIN_GRANT_KEY");
    if (!adminKey || adminKey !== expected) {
      return res.status(401).json({ error: "unauthorized" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const body = req.body || {};
    const user_id = asText(body.user_id);
    const category = asText(body.category);
    const city_label = asText(body.city_label);

    if (!user_id) return res.status(400).json({ error: "user_id_required" });
    if (!category) return res.status(400).json({ error: "category_required" });
    if (!city_label) return res.status(400).json({ error: "city_label_required" });

    // encontra o pdf_url no curadoria_materials (tolerante a hífen/acentos)
    const { data: rows, error: qErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, category, city_label, is_active")
      .eq("is_active", true)
      .limit(500);

    if (qErr) {
      return res.status(500).json({ error: "query_failed", details: qErr.message });
    }

    const wantCat = normalizeKey(category);
    const wantCity = normalizeKey(city_label);

    const found = (rows || []).find(r => {
      return normalizeKey(r.category) === wantCat &&
             normalizeKey(r.city_label) === wantCity &&
             r.pdf_url;
    });

    if (!found || !found.pdf_url) {
      return res.status(404).json({
        error: "material_not_found",
        tip: "Verifique se existe linha ativa (is_active=true) para essa categoria e cidade.",
      });
    }

    // evita duplicar (mesmo user + category + city + pdf_url)
    const { data: exists, error: eErr } = await supabase
      .from("purchase")
      .select("id")
      .eq("user_id", user_id)
      .eq("category", category)
      .eq("city", city_label)
      .eq("pdf_url", found.pdf_url)
      .limit(1);

    if (eErr) {
      return res.status(500).json({ error: "purchase_check_failed", details: eErr.message });
    }

    if (exists && exists.length > 0) {
      return res.status(200).json({ ok: true, already: true });
    }

    const stripe_session_id = "manual_" + Date.now();

    const { error: insErr } = await supabase
      .from("purchase")
      .insert({
        user_id,
        category,
        city: city_label,
        pdf_url: found.pdf_url,
        stripe_session_id,
      });

    if (insErr) {
      return res.status(500).json({ error: "insert_failed", details: insErr.message });
    }

    return res.status(200).json({ ok: true, granted: true });
  } catch (err) {
    return res.status(500).json({ error: "failed", details: err?.message || String(err) });
  }
};
