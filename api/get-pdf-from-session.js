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
      return res
        .status(500)
        .json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    const sessionId =
      (req.query && req.query.session_id) ? String(req.query.session_id).trim() : "";

    if (!sessionId) {
      return res.status(400).json({ error: "Missing session_id" });
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

    // ===== Helpers de normalização (tolerância a diferenças invisíveis) =====
    function collapseSpaces(s) {
      return String(s || "").replace(/\s+/g, " ").trim();
    }

    function swapDashes(s) {
      // troca alguns traços comuns para aumentar chance de match
      return String(s || "")
        .replace(/\u2013/g, "-") // EN DASH (–) -> hyphen
        .replace(/\u2014/g, "-") // EM DASH (—) -> hyphen
        .trim();
    }

    function toDashVariants(s) {
      const original = collapseSpaces(String(s || ""));
      const hyphen = collapseSpaces(swapDashes(original));
      const enDash = collapseSpaces(original.replace(/-/g, "–"));
      const emDash = collapseSpaces(original.replace(/-/g, "—"));

      // remove duplicados mantendo ordem
      const uniq = [];
      [original, hyphen, enDash, emDash].forEach(v => {
        if (v && !uniq.includes(v)) uniq.push(v);
      });
      return uniq;
    }

    function toCategoryVariants(s) {
      const base = collapseSpaces(String(s || ""));
      return [base]; // hoje só normaliza espaços; pode expandir depois se precisar
    }

    // Busca do PDF no Supabase (SERVER-SIDE com Service Role)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const catVariants = toCategoryVariants(category);
    const cityVariants = toDashVariants(city);

    // 1) tenta match mais estrito primeiro (com ILIKE exato pra tolerar caixa)
    async function tryFind(catValue, cityValue) {
      // ilike sem % = match exato, mas case-insensitive
      const { data, error } = await supabase
        .from("curadoria_materials")
        .select("pdf_url, category, city_label")
        .eq("is_active", true)
        .ilike("category", catValue)
        .ilike("city_label", cityValue)
        .limit(1)
        .maybeSingle();

      return { data, error };
    }

    let found = null;
    let lastError = null;

    for (const catVal of catVariants) {
      for (const cityVal of cityVariants) {
        const { data, error } = await tryFind(catVal, cityVal);

        if (error) {
          lastError = error;
          continue;
        }

        if (data && data.pdf_url) {
          found = data;
          break;
        }
      }
      if (found) break;
    }

    if (lastError) {
      return res.status(500).json({
        error: "Supabase query error",
        details: lastError.message || String(lastError),
        category,
        city,
        tried: { catVariants, cityVariants },
      });
    }

    if (!found || !found.pdf_url) {
      return res.status(404).json({
        error: "Material not found for this purchase",
        category,
        city,
        tried: { catVariants, cityVariants },
        tip:
          "Verifique se category e city_label no Supabase batem com o que foi salvo no Stripe (atenção a hífen '-' vs '–').",
      });
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
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
