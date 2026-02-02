// api/get-pdf-from-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secretKey) {
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    }
    if (!supabaseUrl) {
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }
    if (!supabaseServiceKey) {
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const sessionId =
      (req.query && req.query.session_id) ? String(req.query.session_id).trim() : "";

    if (!sessionId) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    // =========================================================
    // Identificar usuário logado (para salvar acesso vitalício)
    // Espera receber token no header Authorization: Bearer <token>
    // (ou, opcionalmente, via query access_token)
    // =========================================================
    const authHeader = (req.headers && req.headers.authorization) ? String(req.headers.authorization) : "";
    let accessToken = "";

    if (authHeader.toLowerCase().startsWith("bearer ")) {
      accessToken = authHeader.slice(7).trim();
    } else if (req.query && req.query.access_token) {
      accessToken = String(req.query.access_token).trim();
    }

    if (!accessToken) {
      return res.status(401).json({
        error: "Not authenticated",
        tip: "Faça login antes de confirmar a compra e chame esta API enviando Authorization: Bearer <access_token>.",
      });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Confirmação de pagamento (Stripe)
    const paid =
      session.payment_status === "paid" ||
      (session.status === "complete" && session.payment_status);

    if (!paid) {
      return res.status(402).json({
        error: "Payment not confirmed",
        payment_status: session.payment_status,
        status: session.status,
      });
    }

    const category =
      session.metadata && session.metadata.category ? String(session.metadata.category).trim() : "";
    const city =
      session.metadata && session.metadata.city ? String(session.metadata.city).trim() : "";

    if (!category || !city) {
      return res.status(500).json({
        error: "Missing metadata in Stripe session",
        metadata: session.metadata || null,
      });
    }

    // =========================
    // Helpers de normalização
    // Objetivo: nunca depender de "–" ou "—".
    // Tudo vira hífen normal "-" e espaços padronizados.
    // Também remove acentos para tolerância extra.
    // =========================
    function removeDiacritics(s) {
      return String(s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function normalizeSpaces(s) {
      return String(s || "").replace(/\s+/g, " ").trim();
    }

    function normalizeDashesToHyphen(s) {
      // Converte EN DASH (–) e EM DASH (—) para hífen simples (-)
      let out = String(s || "")
        .replace(/\u2013/g, "-")
        .replace(/\u2014/g, "-");

      // Padroniza espaços ao redor do hífen: "A- B" / "A -B" -> "A - B"
      out = out.replace(/\s*-\s*/g, " - ");

      return out;
    }

    function normalizeKey(s) {
      // Remove acentos, padroniza traços, padroniza espaços, e deixa minúsculo
      return normalizeSpaces(normalizeDashesToHyphen(removeDiacritics(s))).toLowerCase();
    }

    const wantedCategoryKey = normalizeKey(category);
    const wantedCityKey = normalizeKey(city);

    // =========================
    // Supabase (SERVER-SIDE com Service Role)
    // Estratégia:
    // 1) buscar candidatos por categoria (case-insensitive) e ativos
    // 2) comparar category + city_label por chave normalizada (JS)
    // Isso resolve o problema do hífen/traço e pequenas diferenças invisíveis.
    // =========================
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1) descobrir o usuário real pelo token recebido
    const { data: userData, error: userErr } = await supabase.auth.getUser(accessToken);

    if (userErr || !userData || !userData.user || !userData.user.id) {
      return res.status(401).json({
        error: "Invalid session",
        tip: "Faça login novamente e tente de novo.",
      });
    }

    const userId = userData.user.id;

    // Busca candidatos da categoria (não usa match exato em city_label no banco, porque o problema está no traço)
    const { data: candidates, error: supaErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, category, city_label")
      .eq("is_active", true)
      .ilike("category", category.trim())
      .limit(200);

    if (supaErr) {
      return res.status(500).json({
        error: "Supabase query error",
        details: supaErr.message || String(supaErr),
        category,
        city,
      });
    }

    // Se não vier nada, tenta uma segunda abordagem mais tolerante na categoria
    let pool = Array.isArray(candidates) ? candidates : [];
    if (pool.length === 0) {
      const { data: candidates2, error: supaErr2 } = await supabase
        .from("curadoria_materials")
        .select("pdf_url, category, city_label")
        .eq("is_active", true)
        .ilike("category", `%${category.trim()}%`)
        .limit(500);

      if (supaErr2) {
        return res.status(500).json({
          error: "Supabase query error",
          details: supaErr2.message || String(supaErr2),
          category,
          city,
        });
      }

      pool = Array.isArray(candidates2) ? candidates2 : [];
    }

    // Filtra por chaves normalizadas
    const found = pool.find((row) => {
      const rowCategoryKey = normalizeKey(row.category || "");
      const rowCityKey = normalizeKey(row.city_label || "");
      return rowCategoryKey === wantedCategoryKey && rowCityKey === wantedCityKey && row.pdf_url;
    });

    if (!found || !found.pdf_url) {
      return res.status(404).json({
        error: "Material not found for this purchase",
        category,
        city,
        normalized: {
          wantedCategoryKey,
          wantedCityKey,
        },
        tip:
          "O código já normaliza traços ( - / – / — ) e acentos automaticamente. Se ainda não achou, verifique se existe uma linha ativa (is_active=true) no Supabase com essa categoria e cidade.",
      });
    }

    // =========================================================
    // SALVAR ACESSO VITALÍCIO NA TABELA purchase (singular)
    // Evita duplicar: se já existir (user_id + stripe_session_id), não insere de novo.
    // =========================================================
    const { data: existing, error: existingErr } = await supabase
      .from("purchase")
      .select("id")
      .eq("user_id", userId)
      .eq("stripe_session_id", sessionId)
      .limit(1);

    if (existingErr) {
      return res.status(500).json({
        error: "Supabase purchase check error",
        details: existingErr.message || String(existingErr),
      });
    }

    if (!existing || existing.length === 0) {
      const { error: insertErr } = await supabase
        .from("purchase")
        .insert({
          user_id: userId,
          category,
          city,
          pdf_url: found.pdf_url,
          stripe_session_id: sessionId,
        });

      if (insertErr) {
        return res.status(500).json({
          error: "Supabase purchase insert error",
          details: insertErr.message || String(insertErr),
        });
      }
    }

    return res.status(200).json({
      ok: true,
      pdf_url: found.pdf_url,
      category,
      city,
      matched: {
        category: found.category,
        city_label: found.city_label,
      },
      saved_access: true,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
