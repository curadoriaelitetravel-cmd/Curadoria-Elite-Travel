// api/br-cities-v2.js
const { createClient } = require("@supabase/supabase-js");

function mustEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function normalizeUF(uf) {
  return String(uf || "").trim().toUpperCase();
}

async function fetchAllRows(qb, pageSize = 1000) {
  let all = [];
  let from = 0;

  while (true) {
    const to = from + pageSize - 1;
    const { data, error } = await qb.range(from, to);
    if (error) throw error;
    if (!data || data.length === 0) break;

    all = all.concat(data);
    if (data.length < pageSize) break;

    from += pageSize;
  }

  return all;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const VERSION = "br-cities-v2-2026-01-30";

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed", version: VERSION });
    }

    const supabaseUrl = mustEnv("SUPABASE_URL");
    const serviceRole = mustEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(supabaseUrl, serviceRole, {
      auth: { persistSession: false },
    });

    const uf = req.query?.uf ? normalizeUF(req.query.uf) : "";

    // A) Lista de UFs (27)
    if (!uf) {
      const rows = await fetchAllRows(
        supabase.from("br_cities").select("uf").order("uf", { ascending: true }),
        1000
      );

      const estados = Array.from(new Set((rows || []).map((r) => r.uf))).filter(Boolean);

      return res.status(200).json({ estados, version: VERSION, total: estados.length });
    }

    // B) Lista de cidades por UF
    const rows = await fetchAllRows(
      supabase
        .from("br_cities")
        .select("city_name")
        .eq("uf", uf)
        .order("city_name", { ascending: true }),
      1000
    );

    const cidades = (rows || []).map((r) => r.city_name).filter(Boolean);

    return res.status(200).json({ estado: uf, cidades, version: VERSION, total: cidades.length });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to load cities",
      details: err?.message || String(err),
      version: VERSION,
    });
  }
};
