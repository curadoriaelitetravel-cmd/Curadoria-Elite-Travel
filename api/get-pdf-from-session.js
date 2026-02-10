// api/get-pdf-from-session.js
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

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
    .replace(/\u2014/g, "-")
    .replace(/[—–−]/g, "-");
  out = out.replace(/\s*-\s*/g, " - ");
  return out;
}
function normalizeKey(s) {
  return normalizeSpaces(normalizeDashesToHyphen(removeDiacritics(s))).toLowerCase();
}

async function findMaterial(supabase, category, city) {
  const wantedCategoryKey = normalizeKey(category);
  const wantedCityKey = normalizeKey(city);

  // Busca candidatos por categoria e ativos
  const { data: candidates, error } = await supabase
    .from("curadoria_materials")
    .select("pdf_url, category, city_label")
    .eq("is_active", true)
    .ilike("category", category.trim())
    .limit(300);

  if (error) {
    return { error };
  }

  let pool = Array.isArray(candidates) ? candidates : [];

  if (pool.length === 0) {
    const { data: candidates2, error: error2 } = await supabase
      .from("curadoria_materials")
      .select("pdf_url, category, city_label")
      .eq("is_active", true)
      .ilike("category", `%${category.trim()}%`)
      .limit(600);

    if (error2) return { error: error2 };
    pool = Array.isArray(candidates2) ? candidates2 : [];
  }

  const found = pool.find((row) => {
    const rowCategoryKey = normalizeKey(row.category || "");
    const rowCityKey = normalizeKey(row.city_label || "");
    return rowCategoryKey === wantedCategoryKey && rowCityKey === wantedCityKey && row.pdf_url;
  });

  if (!found?.pdf_url) {
    return { notFound: true, wantedCategoryKey, wantedCityKey };
  }

  return { found, wantedCategoryKey, wantedCityKey };
}

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

    if (!secretKey) return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY env var" });
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const sessionId = (req.query && req.query.session_id) ? String(req.query.session_id).trim() : "";
    if (!sessionId) return res.status(400).json({ error: "Missing session_id" });

    // =========================================================
    // exige token (pra salvar acesso e evitar liberação pública)
    // =========================================================
    const authHeader = (req.headers && (req.headers.authorization || req.headers.Authorization)) ? String(req.headers.authorization || req.headers.Authorization) : "";
    let accessToken = "";

    if (authHeader.toLowerCase().startsWith("bearer ")) {
      accessToken = authHeader.slice(7).trim();
    } else if (req.query && req.query.access_token) {
      accessToken = String(req.query.access_token).trim();
    }

    if (!accessToken) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) return res.status(404).json({ error: "Session not found" });

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

    // Itens do carrinho vêm em metadata.items (JSON)
    let items = [];
    const rawItems = session.metadata?.items ? String(session.metadata.items) : "";

    if (rawItems) {
      try {
        const parsed = JSON.parse(rawItems);
        if (Array.isArray(parsed)) items = parsed;
      } catch(e) {}
    }

    // fallback (se for sessão antiga)
    if (!items.length) {
      const category = session.metadata?.category ? String(session.metadata.category).trim() : "";
      const city = session.metadata?.city ? String(session.metadata.city).trim() : "";
      if (category && city) items = [{ category, city }];
    }

    if (!items.length) {
      return res.status(500).json({ error: "Missing items in Stripe session metadata" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // valida usuário do token
    const { data: userData, error: userErr } = await supabase.auth.getUser(accessToken);
    if (userErr || !userData?.user?.id) {
      return res.status(401).json({ error: "Invalid session" });
    }
    const userId = userData.user.id;

    const results = [];

    for (const it of items) {
      const category = String(it?.category || "").trim();
      const city = String(it?.city || "").trim();
      if (!category || !city) continue;

      const foundRes = await findMaterial(supabase, category, city);
      if (foundRes?.error) {
        return res.status(500).json({
          error: "Supabase query error",
          details: foundRes.error.message || String(foundRes.error),
          category,
          city,
        });
      }

      if (foundRes?.notFound) {
        results.push({
          category,
          city,
          ok: false,
          error: "Material not found",
          normalized: {
            wantedCategoryKey: foundRes.wantedCategoryKey,
            wantedCityKey: foundRes.wantedCityKey,
          }
        });
        continue;
      }

      const pdf_url = foundRes.found.pdf_url;

      // ✅ não duplicar: se já existe (user_id + category + city), não insere de novo
      const { data: existing, error: existingErr } = await supabase
        .from("purchase")
        .select("id")
        .eq("user_id", userId)
        .eq("category", category)
        .eq("city", city)
        .limit(1);

      if (existingErr) {
        return res.status(500).json({
          error: "Supabase purchase check error",
          details: existingErr.message || String(existingErr),
        });
      }

      const alreadyOwned = Array.isArray(existing) && existing.length > 0;

      if (!alreadyOwned) {
        const { error: insertErr } = await supabase
          .from("purchase")
          .insert({
            user_id: userId,
            category,
            city,
            pdf_url,
            stripe_session_id: sessionId,
          });

        if (insertErr) {
          return res.status(500).json({
            error: "Supabase purchase insert error",
            details: insertErr.message || String(insertErr),
          });
        }
      }

      results.push({
        category,
        city,
        ok: true,
        pdf_url,
        already_owned: alreadyOwned,
      });
    }

    return res.status(200).json({
      ok: true,
      items: results,
      redirect: "account.html",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      message: err && err.message ? err.message : "Unknown error",
    });
  }
};
