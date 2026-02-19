// api/mercadopago-confirm.js
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function normalizeItem(it) {
  const category = String(it?.category || "").trim();
  const city = String(it?.city || "").trim();
  return { category, city };
}

async function mpGetPayment(mpAccessToken, paymentId) {
  const r = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${mpAccessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await r.json().catch(() => null);
  return { ok: r.ok, status: r.status, data };
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!mpAccessToken) return res.status(500).json({ error: "Missing MERCADOPAGO_ACCESS_TOKEN env var" });
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const paymentId = String(req.query?.payment_id || "").trim();
    if (!paymentId) {
      return res.status(400).json({ error: "Missing payment_id" });
    }

    // =====================================================
    // 1) EXIGIR LOGIN (mesmo padrão do Stripe)
    // =====================================================
    const token = getBearerToken(req);
    if (!token) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(200).json({ code: "LOGIN_REQUIRED" });
    }

    const userId = userData.user.id;

    // =====================================================
    // 2) BUSCAR PAGAMENTO NO MERCADO PAGO
    // =====================================================
    const pay = await mpGetPayment(mpAccessToken, paymentId);
    if (!pay.ok || !pay.data) {
      return res.status(500).json({
        error: "Failed to fetch Mercado Pago payment",
        status: pay.status,
        details: pay.data || null,
      });
    }

    const status = String(pay.data.status || "").toLowerCase(); // approved | pending | rejected | ...
    const metadata = pay.data.metadata || {};

    // segurança: user_id no metadata precisa bater com o usuário logado
    const metaUserId = String(metadata.user_id || "").trim();
    if (!metaUserId || metaUserId !== String(userId)) {
      return res.status(403).json({ error: "Payment does not belong to this user" });
    }

    // se não aprovado, não libera
    if (status !== "approved") {
      return res.status(200).json({
        ok: false,
        payment_status: status,
        message: "Pagamento ainda não aprovado.",
      });
    }

    // =====================================================
    // 3) ITENS (do metadata)
    // =====================================================
    let items = [];
    try {
      const raw = metadata.items;
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) items = parsed.map(normalizeItem).filter(x => x.category && x.city);
    } catch (e) {
      items = [];
    }

    if (!items.length) {
      return res.status(500).json({ error: "Payment metadata items missing/invalid" });
    }

    // =====================================================
    // 4) PARA CADA ITEM: buscar PDF na curadoria_materials e gravar na purchase
    // =====================================================
    // Busca PDFs ativos
    const purchaseRows = [];
    for (const it of items) {
      const { data: mat, error: matErr } = await supabase
        .from("curadoria_materials")
        .select("pdf_url, city_label, category")
        .eq("is_active", true)
        .eq("category", it.category)
        .eq("city_label", it.city)
        .limit(1)
        .maybeSingle();

      if (matErr || !mat?.pdf_url) {
        // Se algum item não achar PDF, não falha geral: só pula.
        continue;
      }

      purchaseRows.push({
        user_id: userId,
        category: it.category,
        city: it.city,
        pdf_url: mat.pdf_url,
        // campos extras só se existirem na tabela (se não existirem, supabase ignora? normalmente dá erro)
        // então NÃO vamos enviar colunas extras aqui.
      });
    }

    if (!purchaseRows.length) {
      return res.status(500).json({ error: "No valid materials found to grant access" });
    }

    // Evitar duplicar: checa o que já existe
    const { data: existing, error: exErr } = await supabase
      .from("purchase")
      .select("category, city")
      .eq("user_id", userId)
      .limit(1000);

    const existingSet = new Set();
    if (!exErr && Array.isArray(existing)) {
      existing.forEach(r => {
        existingSet.add(`${String(r.category || "").trim()}||${String(r.city || "").trim()}`);
      });
    }

    const toInsert = purchaseRows.filter(r => !existingSet.has(`${r.category}||${r.city}`));

    // Se já tinha tudo, ok também
    if (toInsert.length) {
      const { error: insErr } = await supabase.from("purchase").insert(toInsert);
      if (insErr) {
        return res.status(500).json({
          error: "Failed to grant purchases",
          details: insErr.message,
        });
      }
    }

    return res.status(200).json({
      ok: true,
      granted: toInsert.length,
      total_items: items.length,
      payment_status: status,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to confirm Mercado Pago payment",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
