// api/br-cities.js
// Lista ESTADOS (UFs) e CIDADES a partir da tabela public.br_cities
// - GET /api/br-cities            -> retorna { estados: ["SP","RJ", ...] }
// - GET /api/br-cities?uf=SP      -> retorna { estado: "SP", cidades: ["São Paulo", ...] }
//
// ✅ Importante:
// Para evitar paginação/limite quando listar estados, este endpoint usa a VIEW:
// public.br_states (select distinct uf from br_cities)

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

    // ✅ Se não vier UF: lista estados (UFs) pela VIEW (sem paginação)
    if (!uf) {
      const { data, error } = await supabase
        .from("br_states")
        .select("uf")
        .order("uf", { ascending: true });

      if (error) return res.status(500).json({ error: error.message });

      const estados = (data || []).map((x) => x.uf).filter(Boolean);

      return res.status(200).json({ estados });
    }

    // ✅ Se veio UF: lista cidades daquela UF
    const { data, error } = await supabase
      .from("br_cities")
      .select("city_name")
      .eq("uf", uf)
      .order("city_name", { ascending: true });

    if (error) return res.status(500).json({ error: error.message });

    const cidades = (data || []).map((x) => x.city_name).filter(Boolean);

    return res.status(200).json({
      estado: uf,
      cidades,
    });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
