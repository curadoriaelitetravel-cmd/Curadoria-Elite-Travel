// api/get-pdf-from-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const secretKey = getEnv("STRIPE_SECRET_KEY");
    const supabaseUrl = getEnv("SUPABASE_URL");
    const supabaseServiceKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const sessionId =
      req.query && req.query.session_id ? String(req.query.session_id).trim() : "";

    if (!sessionId) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    // =========================================================
    // Stripe: busca sessão e confirma pagamento
    // =========================================================
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

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
    const metadataUserId =
      session.metadata && session.metadata.user_id ? String(session.metadata.user_id).trim() : "";

    if (!category || !city) {
      return res.status(500).json({
        error: "Missing metadata in Stripe session",
        metadata: session.metadata || null,
      });
    }

    // =========================================================
    // Supabase (SERVER-SIDE com Service Role)
    // =========================================================
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    // =========================================================
    // Identificar user_id:
    // 1) tenta pelo token (se vier)
    // 2) fallback: usa user_id salvo na metadata do Stripe
    // =========================================================
    let userId = "";

    const accessToken =
      getBearerToken(req) ||
      (req.query && req.query.access_token ? String(req.query.access_token).trim() : "");

    if (accessToken) {
      const { data: userData, error: userErr } = await supabase.auth.getUser(accessToken);
      if (!userErr && userData?.user?.id) {
        userId = userData.user.id;
      }
    }

    if (!userId) {
      // fallback: usa metadata.user_id (já vem do create-checkout-session)
      userId = metadataUserId;
    }

    if (!userId) {
      return res.status(401).json({
        error: "Not authenticated",
        tip: "Sem token e sem user_id na metadata. Verifique se create-checkout-session está enviando metadata.user_id.",
      });
    }

    // =========================
    // Helpers de normalização (hífen / travessão / acentos)
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
      let out = String(s || "")
        .replace(/\u2013/g, "-")
        .replace(/\u2014/g, "-");

      out = out.replace(/\s*-\s*/g, " - ");
      return out;
    }

    function normalizeKey(s) {
      return normalizeSpaces(normalizeDashesToHyphen(removeDiacritics(s))).toLowerCase();
    }

    const wantedCategoryKey = normalizeKey(category);
    const wantedCityKey = normalizeKey(city);

    // =========================================================
    // Buscar o PDF na curadoria_materials (ativos)
    // Estratégia:
    // 1) pega pool por categoria (tolerante)
    // 2) compara por chave normalizada (category + city_label)
    // =========================================================
    const { data: candidates, error: supaErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, category, city_label")
      .eq("is_active", true)
      .ilike("category", category.trim())
      .limit(500);

    if (supaErr) {
      return res.status(500).json({
        error: "Supabase query error",
        details: supaErr.message || String(supaErr),
        category,
        city,
      });
    }

    let pool = Array.isArray(candidates) ? candidates : [];

    if (pool.length === 0) {
      const { data: candidates2, error: supaErr2 } = await supabase
        .from("curadoria_materials")
        .select("pdf_url, category, city_label")
        .eq("is_active", true)
        .ilike("category", `%${category.trim()}%`)
        .limit(1000);

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
        normalized: { wantedCategoryKey, wantedCityKey },
        tip:
          "Verifique se existe uma linha ativa (is_active=true) no Supabase com category e city_label exatamente como no site.",
      });
    }

    // =========================================================
    // SALVAR ACESSO VITALÍCIO NA TABELA purchase (singular)
    // Evita duplicar por (user_id + stripe_session_id)
    // (não usa coluna 'id' pra não quebrar se não existir)
    // =========================================================
    const { data: existing, error: existingErr } = await supabase
      .from("purchase")
      .select("stripe_session_id")
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
      user_id_used: userId,
      used_token: Boolean(accessToken),
      used_metadata_user_id: !Boolean(accessToken) && Boolean(metadataUserId),
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
