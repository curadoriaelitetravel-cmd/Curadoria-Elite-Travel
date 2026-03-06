// api/create-checkout-mercadopago.js
const { createClient } = require("@supabase/supabase-js");

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const s = String(h || "");
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return "";
}

function normalizeText(value) {
  return String(value || "").trim();
}

function normalizeCategoryKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[—–−]/g, "-")
    .replace(/\s*-\s*/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCouponCode(code) {
  return String(code || "").trim().toUpperCase();
}

function parseDateSafe(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function nowUtc() {
  return new Date();
}

function roundMoney(value) {
  return Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
}

function toIsoDate(value) {
  if (!(value instanceof Date)) return null;
  return value.toISOString();
}

function getMercadoPagoAccessToken() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  const isProd = vercelEnv === "production";

  const tokenProd = process.env.MERCADOPAGO_ACCESS_TOKEN_PROD;
  const tokenTest = process.env.MERCADOPAGO_ACCESS_TOKEN_TEST;
  const tokenLegacy = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (isProd) return tokenProd || tokenLegacy || "";
  return tokenTest || tokenLegacy || "";
}

function getBaseUrl(req) {
  if (process.env.SITE_URL) return String(process.env.SITE_URL).replace(/\/+$/, "");

  const host = req.headers?.host || "";
  const protoHeader = req.headers?.["x-forwarded-proto"];
  const proto = protoHeader ? String(protoHeader).split(",")[0].trim() : "https";
  return `${proto}://${host}`;
}

async function createMercadoPagoPreference(mpAccessToken, payload) {
  const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${mpAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await r.json().catch(() => null);
  return { ok: r.ok, status: r.status, data };
}

async function loadUserFromToken(supabase, token) {
  if (!token) return null;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.id) return null;
  return data.user;
}

async function loadCategoryPricesMap(supabase) {
  const pricesMap = new Map();

  const { data, error } = await supabase
    .from("category_prices")
    .select("category, price, is_active")
    .eq("is_active", true);

  if (error) {
    return pricesMap;
  }

  (data || []).forEach((row) => {
    const category = normalizeText(row.category);
    const price = Number(row.price || 0);
    if (!category) return;
    if (!Number.isFinite(price) || price <= 0) return;
    pricesMap.set(normalizeCategoryKey(category), roundMoney(price));
  });

  return pricesMap;
}

function getFallbackPrice(category) {
  const key = normalizeCategoryKey(category);
  if (key === "city guide") return 88.92;
  return 57.83;
}

function getCategoryPrice(category, pricesMap) {
  const key = normalizeCategoryKey(category);
  if (pricesMap.has(key)) return pricesMap.get(key);
  return getFallbackPrice(category);
}

async function loadMaterialByCategoryAndCity(supabase, category, city) {
  const { data, error } = await supabase
    .from("curadoria_materials")
    .select("category, city_label, pdf_url, is_active")
    .eq("is_active", true)
    .eq("category", category)
    .eq("city_label", city)
    .limit(1)
    .maybeSingle();

  if (error) return null;
  if (!data) return null;
  if (!data.pdf_url) return null;
  return data;
}

async function loadCouponByCode(supabase, couponCode) {
  const code = normalizeCouponCode(couponCode);
  if (!code) return null;

  const { data, error } = await supabase
    .from("coupons")
    .select("*")
    .eq("code", code)
    .limit(1)
    .maybeSingle();

  if (error) return null;
  return data || null;
}

function isCouponCurrentlyValid(coupon) {
  if (!coupon) return false;

  if (coupon.is_active === false) return false;

  const now = nowUtc();

  const startsAt =
    parseDateSafe(coupon.starts_at) ||
    parseDateSafe(coupon.start_date) ||
    parseDateSafe(coupon.valid_from);

  const endsAt =
    parseDateSafe(coupon.ends_at) ||
    parseDateSafe(coupon.end_date) ||
    parseDateSafe(coupon.valid_until);

  if (startsAt && now < startsAt) return false;
  if (endsAt && now > endsAt) return false;

  const maxUses = Number(coupon.max_uses || 0);
  const usedCount = Number(coupon.used_count || 0);
  if (maxUses > 0 && usedCount >= maxUses) return false;

  return true;
}

function couponAllowsCategory(coupon, category) {
  if (!coupon) return false;

  const raw =
    coupon.categories ||
    coupon.allowed_categories ||
    coupon.category_list ||
    null;

  if (!raw) return true;

  let list = [];

  if (Array.isArray(raw)) {
    list = raw;
  } else if (typeof raw === "string") {
    list = raw.split(",").map((x) => x.trim()).filter(Boolean);
  } else {
    return true;
  }

  if (!list.length) return true;

  const categoryKey = normalizeCategoryKey(category);
  return list.some((item) => normalizeCategoryKey(item) === categoryKey);
}

function calcCouponDiscountForItem(coupon, unitPrice, qty) {
  const quantity = Number(qty || 1) || 1;
  const base = roundMoney(Number(unitPrice || 0) * quantity);
  if (base <= 0) return 0;

  const percentFields = [
    coupon.discount_percent,
    coupon.percentage,
    coupon.percent_off,
    coupon.discount_percentage,
  ];

  for (const value of percentFields) {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) {
      return Math.min(base, roundMoney((base * n) / 100));
    }
  }

  const fixedFields = [
    coupon.discount_amount,
    coupon.amount_off,
    coupon.fixed_discount,
    coupon.value,
  ];

  for (const value of fixedFields) {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) {
      return Math.min(base, roundMoney(n));
    }
  }

  return 0;
}

function buildBackUrls(baseUrl) {
  const root = String(baseUrl || "").replace(/\/+$/, "");
  return {
    success: `${root}/checkout-success.html?mp=success`,
    pending: `${root}/checkout-success.html?mp=pending`,
    failure: `${root}/checkout-success.html?mp=failure`,
  };
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const mpAccessToken = getMercadoPagoAccessToken();

    if (!supabaseUrl) {
      return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    }

    if (!supabaseServiceKey) {
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });
    }

    if (!mpAccessToken) {
      return res.status(500).json({
        error:
          "Missing Mercado Pago token. Configure MERCADOPAGO_ACCESS_TOKEN_TEST / MERCADOPAGO_ACCESS_TOKEN_PROD (or MERCADOPAGO_ACCESS_TOKEN fallback).",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const token = getBearerToken(req);
    const user = await loadUserFromToken(supabase, token);

    if (!user?.id) {
      return res.status(401).json({ error: "LOGIN_REQUIRED" });
    }

    const body = req.body || {};
    const previewOnly = body.preview_only === true;

    const pricesMap = await loadCategoryPricesMap(supabase);

    let requestItems = [];

    if (Array.isArray(body.items) && body.items.length) {
      requestItems = body.items.map((it) => ({
        category: normalizeText(it?.category),
        city: normalizeText(it?.city),
        qty: Math.max(1, Number(it?.qty || 1) || 1),
      }));
    } else if (body.category && body.city) {
      requestItems = [{
        category: normalizeText(body.category),
        city: normalizeText(body.city),
        qty: 1,
      }];
    }

    requestItems = requestItems.filter((it) => it.category && it.city);

    if (!requestItems.length) {
      return res.status(400).json({ error: "Missing checkout items" });
    }

    const normalizedItems = [];
    for (const item of requestItems) {
      const material = await loadMaterialByCategoryAndCity(supabase, item.category, item.city);
      if (!material) {
        return res.status(400).json({
          error: `Material não encontrado para ${item.city} - ${item.category}.`,
        });
      }

      const unitPrice = getCategoryPrice(item.category, pricesMap);
      normalizedItems.push({
        category: item.category,
        city: item.city,
        qty: item.qty,
        unit_price: roundMoney(unitPrice),
      });
    }

    const couponCode = normalizeCouponCode(body.coupon_code || "");
    const coupon = couponCode ? await loadCouponByCode(supabase, couponCode) : null;
    const couponIsValid = coupon ? isCouponCurrentlyValid(coupon) : false;

    const pricedItems = normalizedItems.map((item) => {
      const subtotal = roundMoney(item.unit_price * item.qty);

      let discount = 0;
      let couponMatched = false;

      if (coupon && couponIsValid && couponAllowsCategory(coupon, item.category)) {
        couponMatched = true;
        discount = calcCouponDiscountForItem(coupon, item.unit_price, item.qty);
      }

      const total = roundMoney(Math.max(0, subtotal - discount));

      return {
        category: item.category,
        city: item.city,
        qty: item.qty,
        unit_price: item.unit_price,
        subtotal,
        discount,
        total,
        coupon_matched: couponMatched,
      };
    });

    const subtotal = roundMoney(pricedItems.reduce((acc, item) => acc + item.subtotal, 0));
    const discountTotal = roundMoney(pricedItems.reduce((acc, item) => acc + item.discount, 0));
    const total = roundMoney(Math.max(0, subtotal - discountTotal));
    const matchCount = pricedItems.filter((item) => item.coupon_matched && item.discount > 0).length;

    const responsePayload = {
      ok: true,
      coupon_code: couponCode || null,
      applied: couponCode
        ? {
            valid: !!couponIsValid,
            match_count: matchCount,
          }
        : null,
      totals: {
        subtotal,
        discount_total: discountTotal,
        total,
      },
      items: pricedItems,
    };

    if (previewOnly) {
      return res.status(200).json(responsePayload);
    }

    const mpItems = pricedItems.map((item) => ({
      title: `${item.city} — ${item.category}`,
      quantity: 1,
      unit_price: item.total,
      currency_id: "BRL",
    }));

    const baseUrl = getBaseUrl(req);
    const backUrls = buildBackUrls(baseUrl);

    const preferencePayload = {
      items: mpItems,
      payer: {
        email: user.email || undefined,
      },
      back_urls: backUrls,
      auto_return: "approved",
      notification_url: `${String(baseUrl).replace(/\/+$/, "")}/api/mercadopago-confirm`,
      external_reference: String(user.id),
      metadata: {
        user_id: String(user.id),
        coupon_code: couponCode || "",
        items: JSON.stringify(
          pricedItems.map((item) => ({
            category: item.category,
            city: item.city,
            qty: item.qty,
            unit_price: item.unit_price,
            subtotal: item.subtotal,
            discount: item.discount,
            total: item.total,
          }))
        ),
      },
    };

    const mp = await createMercadoPagoPreference(mpAccessToken, preferencePayload);

    if (!mp.ok || !mp.data) {
      return res.status(500).json({
        error: "Não foi possível criar o checkout no Mercado Pago.",
        status: mp.status,
        details: mp.data || null,
      });
    }

    return res.status(200).json({
      ...responsePayload,
      id: mp.data.id || null,
      init_point: mp.data.init_point || null,
      sandbox_init_point: mp.data.sandbox_init_point || null,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create Mercado Pago checkout",
      message: err?.message || "Unknown error",
    });
  }
};
