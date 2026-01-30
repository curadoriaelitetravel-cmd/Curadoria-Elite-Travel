// api/br-cities.js
// ✅ VERSÃO: 2026-01-29-v2 (debug)
// Lista ESTADOS (UFs) e CIDADES a partir da tabela public.br_cities
// - GET /api/br-cities            -> retorna { version, estados: [...] }
// - GET /api/br-cities?uf=SP      -> retorna { version, estado: "SP", cidades: [...] }
//
// Para garantir TODOS os estados sem limite, tenta:
// 1) view public.br_states (select distinct uf from br_cities)
// 2) fallback seguro: distinct em br_cities com paginação (range)

const { createClient } = require("@supabase/supabase-js");

const VERSION = "2026-01-29-v2";

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeUF(uf) {
  return String(uf || "").trim().toUpperCase();
}

module.exports = async (req, res) => {
  // evita cache no browser/proxy
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ version: VERSION, error: "Method not allowed" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const uf = req.query?.uf ? normalizeUF(req.query.uf) : "";

    // ✅ Se não vier UF: lista estados (UFs)
    if (!uf) {
      // 1) tenta pela VIEW (se existir)
      const viewTry = await supabase
        .from("br_states")
        .select("uf")
        .order("uf", { ascending: true });

      if (!viewTry.error) {
        const estados = (viewTry.data || []).map((x) => x.uf).filter(Boolean);
        return res.status(200).json({ version: VERSION, source: "view:br_states", estados });
      }

      // 2) fallback: distinct via br_cities com paginação (range)
      // busca em páginas de 1000 e junta os UFs únicos
      const estadosSet = new Set();
      const pageSize = 1000;
      let from = 0;

      while (true) {
        const { data, error } = await supabase
          .from("br_cities")
          .select("uf")
          .order("uf", { ascending: true })
          .range(from, from + pageSize - 1);

        if (error) {
          return res.status(500).json({
            version: VERSION,
            error: "Failed to load states",
            details: error.message,
            source: "fallback:br_cities",
          });
        }

        (data || []).forEach((row) => {
          if (row && row.uf) estadosSet.add(row.uf);
        });

        if (!data || data.length < pageSize) break;
        from += pageSize;

        // segurança extra (não deve passar disso)
        if (from > 200000) break;
      }

      const estados = Array.from(estadosSet).sort();
      return res.status(200).json({
        version: VERSION,
        source: "fallback:br_cities_paged",
        estados,
      });
    }

    // ✅ Se veio UF: lista cidades daquela UF
    const { data, error } = await supabase
      .from("br_cities")
      .select("city_name")
      .eq("uf", uf)
      .order("city_name", { ascending: true });

    if (error) return res.status(500).json({ version: VERSION, error: error.message });

    const cidades = (data || []).map((x) => x.city_name).filter(Boolean);

    return res.status(200).json({
      version: VERSION,
      estado: uf,
      cidades,
    });
  } catch (err) {
    return res.status(500).json({
      version: VERSION,
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
