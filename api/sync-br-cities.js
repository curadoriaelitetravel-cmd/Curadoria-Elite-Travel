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

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchJson(url) {
  const resp = await fetch(url);
  const text = await resp.text();

  if (!resp.ok) {
    return { ok: false, status: resp.status, text };
  }

  try {
    const json = JSON.parse(text);
    return { ok: true, json };
  } catch {
    return { ok: false, status: resp.status, text: "Invalid JSON: " + text.slice(0, 200) };
  }
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
    const ufResult = await fetchJson("https://brasilapi.com.br/api/ibge/uf/v1");
    if (!ufResult.ok) {
      return res.status(502).json({
        error: "BrasilAPI UF error",
        status: ufResult.status,
        details: ufResult.text,
      });
    }

    const ufs = ufResult.json;

    const ufList = (ufs || [])
      .map((x) => normalizeUF(x.sigla))
      .filter(Boolean);

    if (!ufList.length) {
      return res.status(500).json({ error: "No UFs returned from BrasilAPI" });
    }

    let totalUpserted = 0;
    let totalUfsProcessed = 0;

    const failures = [];

    // 2) para cada UF, lista municípios e faz upsert
    for (const uf of ufList) {
      // Tentativa A (sem providers)
      const urlA = `https://brasilapi.com.br/api/ibge/municipios/v1/${encodeURIComponent(uf)}`;
      const resultA = await fetchJson(urlA);

      // Tentativa B (com providers)
      const urlB = `https://brasilapi.com.br/api/ibge/municipios/v1/${encodeURIComponent(
        uf
      )}?providers=dados-abertos-br`;
      const resultB = resultA.ok ? null : await fetchJson(urlB);

      const ok = resultA.ok || (resultB && resultB.ok);
      const cities = resultA.ok ? resultA.json : resultB.ok ? resultB.json : null;

      if (!ok) {
        failures.push({
          uf,
          attemptA: { status: resultA.status, details: String(resultA.text || "").slice(0, 200) },
          attemptB: resultB
            ? { status: resultB.status, details: String(resultB.text || "").slice(0, 200) }
            : null,
        });
        continue;
      }

      const rows = (cities || [])
        .map((c) => ({
          uf,
          city_name: normalizeCityName(c.nome),
        }))
        .filter((r) => r.uf && r.city_name);

      if (!rows.length) {
        failures.push({
          uf,
          attemptA: { status: 200, details: "Returned 0 cities" },
          attemptB: null,
        });
        continue;
      }

      // Faz em lotes para evitar payload grande
      const batches = chunkArray(rows, 1000);

      for (const batch of batches) {
        const { error } = await supabase
          .from("br_cities")
          .upsert(batch, { onConflict: "uf,city_name" });

        if (error) {
          return res.status(500).json({
            error: "Supabase upsert failed",
            details: error.message,
            uf,
          });
        }

        totalUpserted += batch.length;
      }

      totalUfsProcessed += 1;
    }

    // Se não inseriu nada, devolve erro com diagnóstico (para você ver o motivo)
    if (totalUpserted === 0) {
      return res.status(500).json({
        ok: false,
        error: "No rows inserted",
        message:
          "A tabela br_cities continua vazia porque as chamadas de municipios falharam ou retornaram 0 cidades.",
        ufs_total: ufList.length,
        ufs_processed: totalUfsProcessed,
        upserted_rows: totalUpserted,
        sample_failures: failures.slice(0, 5),
      });
    }

    return res.status(200).json({
      ok: true,
      message: "br_cities sync completed",
      ufs_total: ufList.length,
      ufs_processed: totalUfsProcessed,
      upserted_rows: totalUpserted,
      failures: failures.length,
    });
  } catch (err) {
    return res.status(500).json({
      error: "sync failed",
      details: err?.message || String(err),
    });
  }
};
