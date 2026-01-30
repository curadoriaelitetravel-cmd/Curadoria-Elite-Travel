// api/br-cities.js
// Lista ESTADOS (UFs) e CIDADES a partir da tabela public.br_cities
// - GET /api/br-cities            -> retorna { estados: ["SP","RJ", ...] }
// - GET /api/br-cities?uf=SP      -> retorna { estado: "SP", cidades: ["SÃO PAULO", ...] }

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeUF(uf) {
  return String(uf || "").trim().toUpperCase();
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const uf = req.query?.uf ? normalizeUF(req.query.uf) : "";

    // ✅ IMPORTANTE:
    // PostgREST (Supabase) costuma limitar resultados por padrão (ex.: 1000 linhas).
    // Como br_cities tem 5571 linhas, precisamos buscar em "páginas" ou aumentar o range.
    async function fetchAllRows(queryBuilder, pageSize = 1000) {
      let all = [];
      let from = 0;

      while (true) {
        const to = from + pageSize - 1;
        const { data, error } = await queryBuilder.range(from, to);

        if (error) throw error;
        if (!data || data.length === 0) break;

        all = all.concat(data);

        // se veio menos que pageSize, acabou
        if (data.length < pageSize) break;

        from += pageSize;
      }

      return all;
    }

    // Se não vier UF: lista estados (UFs)
    if (!uf) {
      const rows = await fetchAllRows(
        supabase.from("br_cities").select("uf").order("uf", { ascending: true }),
        1000
      );

      const uniqueUFs = Array.from(new Set((rows || []).map((x) => x.uf))).filter(Boolean);

      return res.status(200).json({
        estados: uniqueUFs,
      });
    }

    // Se veio UF: lista cidades daquela UF
    const rows = await fetchAllRows(
      supabase
        .from("br_cities")
        .select("city_name")
        .eq("uf", uf)
        .order("city_name", { ascending: true }),
      1000
    );

    const cities = (rows || []).map((x) => x.city_name).filter(Boolean);

    return res.status(200).json({
      estado: uf,
      cidades: cities,
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
