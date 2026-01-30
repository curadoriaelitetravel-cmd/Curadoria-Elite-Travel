// api/br-cities.js
const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeUF(uf) {
  return String(uf || "").trim().toUpperCase();
}

async function fetchAllRows(queryBuilder, pageSize = 1000) {
  let all = [];
  let from = 0;

  while (true) {
    const to = from + pageSize - 1;
    const { data, error } = await queryBuilder.range(from, to);

    if (error) throw error;
    if (!data || data.length === 0) break;

    all = all.concat(data);

    if (data.length < pageSize) break;
    from += pageSize;
  }

  return all;
}

module.exports = async (req, res) => {
  // ✅ evita qualquer cache da Vercel/Browser
  res.setHeader("Cache-Control", "no-store, max-age=0");

  // ✅ “assinatura” pra confirmar versão no ar
  const VERSION = "br-cities-v3-2026-01-30";

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed", version: VERSION });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const uf = req.query?.uf ? normalizeUF(req.query.uf) : "";

    // ✅ 1) Lista UFs (retorna 27)
    if (!uf) {
      const rows = await fetchAllRows(
        supabase.from("br_cities").select("uf").order("uf", { ascending: true }),
        1000
      );

      const estados = Array.from(new Set((rows || []).map((x) => x.uf))).filter(Boolean);

      return res.status(200).json({ estados, version: VERSION });
    }

    // ✅ 2) Lista cidades por UF (continua funcionando)
    const rows = await fetchAllRows(
      supabase
        .from("br_cities")
        .select("city_name")
        .eq("uf", uf)
        .order("city_name", { ascending: true }),
      1000
    );

    const cidades = (rows || []).map((x) => x.city_name).filter(Boolean);

    return res.status(200).json({ estado: uf, cidades, version: VERSION });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
      version: VERSION,
    });
  }
};
