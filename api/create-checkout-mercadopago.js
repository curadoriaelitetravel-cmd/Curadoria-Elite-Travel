// api/create-checkout-mercadopago.js
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h);
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function isCityGuideCategory(category) {
  return String(category || "").trim().toLowerCase() === "city guide";
}

function normalizeItem(it) {
  const category = String(it?.category || "").trim();
  const city = String(it?.city || "").trim();
  return { category, city };
}

// Valores atuais do seu site (mantendo exatamente como está no front):
function getPriceForCategory(category) {
  // City Guide = 88.92 | Demais = 57.83
  return isCityGuideCategory(category) ? 88.92 : 57.83;
}

function toCentsBRL(v) {
  // Mercado Pago aceita decimal, mas vamos manter 2 casas com segurança
  const n = Number(v || 0);
  return Math.round(n * 100) / 100;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!mpAccessToken) return res.status(500).json({ error: "Missing MERCADOPAGO_ACCESS_TOKEN env var" });
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const body = req.body || {};

    // ✅ suporte a:
    // A) { category, city }  (1 item)
    // B) { items: [{category, city}, ...] } (carrinho)
    let items = [];

    if (Array.isArray(body.items) && body.items.length > 0) {
      items = body.items.map(normalizeItem).filter(x => x.category && x.city);
    } else if (body.category && body.city) {
      items = [ normalizeItem({ category: body.category, city: body.city }) ];
    }

    if (!items.length) {
      return res.status(400).json({ error: "Missing category/city or items[]" });
    }

    // =====================================================
    // 1) EXIGIR LOGIN
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
    // 2) EXIGIR NOTA FISCAL ANTES DO PAGAMENTO
    // =====================================================
    const { data: invoiceRow, error: invoiceErr } = await supabase
      .from("invoice_profiles")
      .select("user_id")
      .eq("user_id", userId)
      .limit(1)
      .maybeSingle();

    if (invoiceErr) {
      return res.status(500).json({
        error: "Failed to check invoice profile",
        details: invoiceErr.message,
      });
    }

    if (!invoiceRow) {
      return res.status(200).json({ code: "INVOICE_REQUIRED" });
    }

    // =====================================================
    // 3) Criar PREFERENCE (Checkout Pro) no Mercado Pago
    // =====================================================
    // Origem segura (igual ao Stripe)
    const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    // URLs de retorno (vamos ajustar a tela depois, por enquanto já deixamos pronto)
    const successUrl = `${safeOrigin}/checkout-success.html?mp=success`;
    const pendingUrl = `${safeOrigin}/checkout-success.html?mp=pending`;
    const failureUrl = `${safeOrigin}/checkout-success.html?mp=failure`;

    // Itens para o Mercado Pago (um por material)
    const mpItems = items.map((it) => {
      const price = toCentsBRL(getPriceForCategory(it.category));
      return {
        title: `${it.city} — ${it.category}`,
        quantity: 1,
        unit_price: price,
        currency_id: "BRL",
      };
    });

    // Guardar contexto (user + itens) de forma segura
    const itemsJson = JSON.stringify(items);

    const preferenceBody = {
      items: mpItems,

      back_urls: {
        success: successUrl,
        pending: pendingUrl,
        failure: failureUrl,
      },

      // Retorna automaticamente quando aprovado (cartão pode aprovar na hora; Pix pode ficar pendente)
      auto_return: "approved",

      // Referência externa para conciliação / webhooks
      external_reference: `cet_${userId}_${Date.now()}`,

      metadata: {
        user_id: String(userId),
        items: itemsJson,
        source: "curadoria-elite-travel",
      },
    };

    // Cria a preferência via API do Mercado Pago
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mpAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferenceBody),
    });

    const data = await r.json().catch(() => null);

    if (!r.ok) {
      return res.status(500).json({
        error: "Failed to create Mercado Pago preference",
        status: r.status,
        details: data || null,
      });
    }

    const url = data?.init_point || data?.sandbox_init_point || null;

    if (!url) {
      return res.status(500).json({ error: "Mercado Pago preference missing init_point" });
    }

    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create Mercado Pago checkout",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
