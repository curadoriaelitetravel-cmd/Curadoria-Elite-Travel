// /api/seed-br-cities.js
// Popula a tabela public.br_cities (uf, city_name) usando BrasilAPI (IBGE).
// Segurança: exige token via ?token=... ou header x-seed-token.

module.exports = async function handler(req, res) {
  try {
    // Só permite POST/GET (para facilitar rodar 1x no navegador)
    if (req.method !== "POST" && req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const {
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      SEED_TOKEN,
    } = process.env;

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({
        error:
          "Missing env vars: SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY",
      });
    }

    // Proteção para ninguém rodar isso publicamente
    const tokenFromQuery = (req.query && req.query.token) ? String(req.query.token) : "";
    const tokenFromHeader = req.headers["x-seed-token"] ? String(req.headers["x-seed-token"]) : "";
    const providedToken = tokenFromQuery || tokenFromHeader;

    if (!SEED_TOKEN) {
      return res.status(500).json({
        error: "Missing env var: SEED_TOKEN (create one in Vercel env vars)",
      });
    }

    if (!providedToken || providedToken !== SEED_TOKEN) {
      return res.status(401).json({ error: "Unauthorized (invalid token)" });
    }

    // 1) Busca UFs
    const ufsResp = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
    if (!ufsResp.ok) {
      return res.status(502).json({ error: "Failed to fetch UFs from BrasilAPI" });
    }
    const ufs = await ufsResp.json();

    // ufs esperado: [{ sigla: "SP", ... }, ...]
    const ufSiglas = (Array.isArray(ufs) ? ufs : [])
      .map((x) => x && x.sigla ? String(x.sigla).trim().toUpperCase() : "")
      .filter(Boolean);

    if (!ufSiglas.length) {
      return res.status(500).json({ error: "No UFs returned from BrasilAPI" });
    }

    // Função para inserir em lotes no Supabase (PostgREST)
    async function upsertBatch(rows) {
      const url = `${SUPABASE_URL}/rest/v1/br_cities`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          // Para fazer UPSERT, você precisa do unique index (uf, city_name)
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify(rows),
      });

      if (!resp.ok) {
        const txt = await resp.text().catch(() => "");
        throw new Error(`Supabase insert failed: ${resp.status} ${txt}`);
      }
    }

    let totalInserted = 0;

    // 2) Para cada UF, busca municípios e insere
    for (const uf of ufSiglas) {
      const citiesResp = await fetch(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${encodeURIComponent(uf)}`
      );

      if (!citiesResp.ok) {
        return res.status(502).json({
          error: `Failed to fetch cities for UF ${uf} from BrasilAPI`,
        });
      }

      const cities = await citiesResp.json();
      const rows = (Array.isArray(cities) ? cities : [])
        .map((c) => {
          const name = c && c.nome ? String(c.nome).trim() : "";
          return name ? { uf, city_name: name } : null;
        })
        .filter(Boolean);

      // insere em lotes de 1000
      const batchSize = 1000;
      for (let i = 0; i < rows.length; i += batchSize) {
        const batch = rows.slice(i, i + batchSize);
        await upsertBatch(batch);
        totalInserted += batch.length;
      }
    }

    return res.status(200).json({
      ok: true,
      message: "br_cities populated successfully",
      approx_rows_processed: totalInserted,
      ufs_processed: ufSiglas.length,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      details: err && err.message ? err.message : String(err),
    });
  }
};
