// api/sync-br-cities.js
// Popula a tabela public.br_cities usando BrasilAPI (UFs + municípios)
// Segurança: usa SUPABASE_SERVICE_ROLE_KEY (server-side), não vai para o browser.

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeUF(uf) {
  return String(uf || "").trim().toUpperCase();
}

function normalizeCityName(name) {
  return String(name || "").trim();
}

module.exports = async (req, res) => {
  try {
    // Apenas GET (evita uso acidental)
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    // 1) lista UFs
    const ufResp = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
    if (!ufResp.ok) {
      const text = await ufResp.text();
      return res.status(502).json({ error: "BrasilAPI UF error", details: text });
    }
    const ufs = await ufResp.json();

    const ufList = (ufs || [])
      .map((x) => normalizeUF(x.sigla))
      .filter(Boolean);

    if (!ufList.length) {
      return res.status(500).json({ error: "No UFs returned from BrasilAPI" });
    }

    let totalInserted = 0;

    // 2) para cada UF, lista municípios e faz upsert
    for (const uf of ufList) {
      const cityResp = await fetch(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${encodeURIComponent(
          uf
        )}?providers=dados-abertos-br`
      );

      if (!cityResp.ok) {
        // se uma UF falhar, seguimos com as outras (robustez)
        continue;
      }

      const cities = await cityResp.json();

      const rows = (cities || [])
        .map((c) => ({
          uf,
          city_name: normalizeCityName(c.nome),
        }))
        .filter((r) => r.uf && r.city_name);

      if (!rows.length) continue;

      // Upsert baseado em (uf, city_name) — você pode criar unique index depois se quiser
      // Para evitar erro se já existir, usamos upsert
      const { error } = await supabase
        .from("br_cities")
        .upsert(rows, { onConflict: "uf,city_name" });

      if (!error) totalInserted += rows.length;
    }

    return res.status(200).json({
      ok: true,
      message: "br_cities sync completed",
      ufs: ufList.length,
      attempted_rows: totalInserted,
    });
  } catch (err) {
    return res.status(500).json({
      error: "sync failed",
      details: err?.message || String(err),
    });
  }
};
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

    // Se não vier UF: lista estados (UFs)
    if (!uf) {
      const { data, error } = await supabase
        .from("br_cities")
        .select("uf")
        .order("uf", { ascending: true });

      if (error) return res.status(500).json({ error: error.message });

      const uniqueUFs = Array.from(new Set((data || []).map((x) => x.uf))).filter(Boolean);

      // Enviamos como "ESTADO" no payload (mais claro)
      return res.status(200).json({
        estados: uniqueUFs,
      });
    }

    // Se veio UF: lista cidades daquela UF
    const { data, error } = await supabase
      .from("br_cities")
      .select("city_name")
      .eq("uf", uf)
      .order("city_name", { ascending: true });

    if (error) return res.status(500).json({ error: error.message });

    const cities = (data || []).map((x) => x.city_name).filter(Boolean);

    // Enviamos como "CIDADE" no payload (mais claro)
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
