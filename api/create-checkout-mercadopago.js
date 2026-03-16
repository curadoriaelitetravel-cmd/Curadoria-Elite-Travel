// api/create-checkout-mercadopago.js
const { createClient } = require("@supabase/supabase-js");
const crypto = require("crypto");

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

// =====================================================
// PREÇO PADRÃO (fallback de segurança)
// =====================================================
function getPriceForCategory(category) {
  return isCityGuideCategory(category) ? 88.92 : 57.83;
}

function toCentsBRL(v) {
  const n = Number(v || 0);
  return Math.round(n * 100) / 100;
}

function normalizeCompareText(value) {
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

function sameCity(a, b) {
  return normalizeCompareText(a) === normalizeCompareText(b);
}

/**
 * Decide automaticamente qual token do Mercado Pago usar:
 * - VERCEL_ENV=production  -> usa MERCADOPAGO_ACCESS_TOKEN_PROD
 * - VERCEL_ENV=preview/dev -> usa MERCADOPAGO_ACCESS_TOKEN_TEST
 * Fallback: MERCADOPAGO_ACCESS_TOKEN
 */
function getMercadoPagoAccessToken() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  const isProd = vercelEnv === "production";

  const tokenProd = process.env.MERCADOPAGO_ACCESS_TOKEN_PROD;
  const tokenTest = process.env.MERCADOPAGO_ACCESS_TOKEN_TEST;
  const tokenLegacy = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (isProd) return tokenProd || tokenLegacy || "";
  return tokenTest || tokenLegacy || "";
}

function isProductionEnv() {
  const vercelEnv = String(process.env.VERCEL_ENV || "").toLowerCase();
  return vercelEnv === "production";
}

// =====================================================
// CUPOM (SUPABASE)
// =====================================================
const COUPONS_TABLE = "coupons";
const MULTI_ITEM_PERCENT = 0.20; // 20%

function nowISO() {
  return new Date().toISOString();
}

function parseDateSafe(v) {
  if (!v) return null;
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function isWithinWindow(row) {
  const start = parseDateSafe(row.start_date || row.starts_at || row.start_at);
  const end = parseDateSafe(row.end_date || row.ends_at || row.end_at);
  const now = new Date();

  if (start && now < start) return false;
  if (end && now > end) return false;
  return true;
}

async function loadCouponByCode({ supabase, code }) {
  const c = String(code || "").trim();
  if (!c) return null;

  const { data, error } = await supabase
    .from(COUPONS_TABLE)
    .select("*")
    .ilike("code", c)
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  if (typeof data.is_active === "boolean" && data.is_active === false) return null;
  if (!isWithinWindow(data)) return null;

  return data;
}

function getCouponCityLabel(row) {
  return String(row.city_label || row.city || row.destination || "").trim();
}

function getCouponDiscountAmount(row) {
  const v = Number(row.discount_amount || row.discount || 0);
  return Number.isFinite(v) ? v : 0;
}

async function loadCategoryPricesMap(supabase) {
  const out = new Map();

  try {
    const { data, error } = await supabase
      .from("category_prices")
      .select("category, price, is_active");

    if (error || !Array.isArray(data)) return out;

    for (const row of data) {
      if (row?.is_active === false) continue;
      const category = String(row?.category || "").trim();
      const price = Number(row?.price || 0);
      if (!category || !Number.isFinite(price) || price <= 0) continue;
      out.set(normalizeCompareText(category), toCentsBRL(price));
    }
  } catch (_) {}

  return out;
}

function getBasePriceForItem(item, pricesMap) {
  const key = normalizeCompareText(item?.category || "");
  const dynamicPrice = pricesMap instanceof Map ? pricesMap.get(key) : null;

  if (Number.isFinite(dynamicPrice) && dynamicPrice > 0) {
    return toCentsBRL(dynamicPrice);
  }

  return toCentsBRL(getPriceForCategory(item?.category || ""));
}

function computePricesWithCoupon({ items, couponRow, pricesMap }) {
  const baseItems = (items || []).map((it) => {
    const base = getBasePriceForItem(it, pricesMap);
    return {
      ...it,
      base_price: base,
      final_price: base,
      discount_applied: null,
    };
  });

  const subtotal = baseItems.reduce((sum, x) => sum + Number(x.base_price || 0), 0);

  if (!couponRow) {
    return {
      applied: null,
      items: baseItems,
      totals: {
        subtotal: toCentsBRL(subtotal),
        discount_total: 0,
        total: toCentsBRL(subtotal),
      },
    };
  }

  const cityLabel = getCouponCityLabel(couponRow);
  const discountAmount = getCouponDiscountAmount(couponRow);

  if (!cityLabel) {
    return {
      applied: {
        code: String(couponRow.code || "").trim(),
        valid: false,
        reason: "Missing city_label on coupon",
      },
      items: baseItems,
      totals: {
        subtotal: toCentsBRL(subtotal),
        discount_total: 0,
        total: toCentsBRL(subtotal),
      },
    };
  }

  // conta SOMENTE os itens do destino do cupom
  const matchingItems = baseItems.filter((x) => sameCity(x.city, cityLabel));
  const matchCount = matchingItems.length;

  // se não houver item do destino do cupom, não aplica desconto
  if (matchCount === 0) {
    return {
      applied: {
        code: String(couponRow.code || "").trim(),
        city_label: cityLabel,
        valid: false,
        match_count: 0,
        reason: "Coupon destination not found in cart",
      },
      items: baseItems,
      totals: {
        subtotal: toCentsBRL(subtotal),
        discount_total: 0,
        total: toCentsBRL(subtotal),
      },
    };
  }

  let discountTotal = 0;

  for (const x of baseItems) {
    if (!sameCity(x.city, cityLabel)) continue;

    if (matchCount >= 2) {
      const d = toCentsBRL(Number(x.base_price || 0) * MULTI_ITEM_PERCENT);
      x.final_price = toCentsBRL(Math.max(0.01, Number(x.base_price || 0) - d));
      x.discount_applied = {
        type: "PERCENT",
        percent: MULTI_ITEM_PERCENT,
        amount: d,
      };
      discountTotal += d;
    } else {
      const rawDiscount = toCentsBRL(discountAmount);
      const safeDiscount = toCentsBRL(Math.min(Number(x.base_price || 0) - 0.01, rawDiscount));
      const appliedDiscount = Math.max(0, safeDiscount);

      x.final_price = toCentsBRL(Math.max(0.01, Number(x.base_price || 0) - appliedDiscount));
      x.discount_applied = {
        type: "FIXED",
        amount: appliedDiscount,
      };
      discountTotal += appliedDiscount;
    }
  }

  const total = baseItems.reduce((sum, x) => sum + Number(x.final_price || 0), 0);

  return {
    applied: {
      code: String(couponRow.code || "").trim(),
      city_label: cityLabel,
      rule: matchCount >= 2
        ? "20% on matching destination items"
        : "fixed amount on one matching destination item",
      match_count: matchCount,
      valid: true,
    },
    items: baseItems,
    totals: {
      subtotal: toCentsBRL(subtotal),
      discount_total: toCentsBRL(discountTotal),
      total: toCentsBRL(total),
    },
  };
}

// =====================================================
// WEBHOOK HELPERS
// =====================================================

function parseXSignature(headerValue) {
  const out = { ts: "", v1: "" };
  const s = String(headerValue || "").trim();
  if (!s) return out;

  const parts = s.split(",").map((p) => p.trim());
  for (const p of parts) {
    const [k, ...rest] = p.split("=");
    const key = String(k || "").trim().toLowerCase();
    const val = rest.join("=").trim();
    if (key === "ts") out.ts = val;
    if (key === "v1") out.v1 = val;
  }
  return out;
}

function safeEqualHex(a, b) {
  try {
    const ba = Buffer.from(String(a || ""), "hex");
    const bb = Buffer.from(String(b || ""), "hex");
    if (ba.length !== bb.length) return false;
    return crypto.timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}

function validateWebhookSignature(req, paymentId) {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) {
    return { ok: true, bypassed: true, reason: "Missing MERCADOPAGO_WEBHOOK_SECRET" };
  }

  const xSignature = req.headers?.["x-signature"] || req.headers?.["X-Signature"] || "";
  const xRequestId = req.headers?.["x-request-id"] || req.headers?.["X-Request-Id"] || "";
  const { ts, v1 } = parseXSignature(xSignature);

  if (!ts || !v1 || !xRequestId) {
    return { ok: false, bypassed: false, reason: "Missing x-signature/ts/v1 or x-request-id" };
  }

  const manifest = `id:${paymentId};request-id:${xRequestId};ts:${ts};`;
  const computed = crypto.createHmac("sha256", secret).update(manifest).digest("hex");
  const ok = safeEqualHex(computed, v1);

  return { ok, bypassed: false, reason: ok ? "" : "Invalid signature" };
}

function getPaymentIdFromWebhook(req) {
  const b = req.body || {};
  const q = req.query || {};
  const candidates = [b?.data?.id, b?.id, q?.id, q?.["data.id"], q?.payment_id];

  for (const c of candidates) {
    const v = String(c || "").trim();
    if (v) return v;
  }
  return "";
}

async function mpGetPayment(mpAccessToken, paymentId) {
  const r = await fetch(
    `https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${mpAccessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await r.json().catch(() => null);
  return { ok: r.ok, status: r.status, data };
}

async function grantPurchasesFromPayment({ supabase, userId, items }) {
  const { data: existing, error: exErr } = await supabase
    .from("purchase")
    .select("category, city")
    .eq("user_id", userId)
    .limit(1000);

  const existingSet = new Set();
  if (!exErr && Array.isArray(existing)) {
    existing.forEach((r) => {
      existingSet.add(`${String(r.category || "").trim()}||${String(r.city || "").trim()}`);
    });
  }

  const rowsToInsert = [];

  for (const it of items) {
    const { data: mat, error: matErr } = await supabase
      .from("curadoria_materials")
      .select("pdf_url")
      .eq("is_active", true)
      .eq("category", it.category)
      .eq("city_label", it.city)
      .limit(1)
      .maybeSingle();

    if (matErr || !mat?.pdf_url) continue;

    const key = `${it.category}||${it.city}`;
    if (existingSet.has(key)) continue;

    rowsToInsert.push({
      user_id: userId,
      category: it.category,
      city: it.city,
      pdf_url: mat.pdf_url,
    });
  }

  if (!rowsToInsert.length) {
    return { ok: true, inserted: 0, reason: "Nothing new to insert" };
  }

  const { error: insErr } = await supabase.from("purchase").insert(rowsToInsert);
  if (insErr) {
    return { ok: false, error: "Failed to insert into purchase", details: insErr.message };
  }

  return { ok: true, inserted: rowsToInsert.length };
}

// =====================================================
// EMAIL HELPERS
// =====================================================

function formatBRL(value) {
  const n = Number(value || 0);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(n);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function getUserEmailById(supabase, userId) {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(userId);
    if (error) return "";
    return String(data?.user?.email || "").trim();
  } catch (_) {
    return "";
  }
}

async function getCustomerNameByUserId(supabase, userId) {
  try {
    const { data, error } = await supabase
      .from("invoice_profiles")
      .select("full_name, corporate_name")
      .eq("user_id", userId)
      .limit(1)
      .maybeSingle();

    if (error || !data) return "";

    return String(data.full_name || data.corporate_name || "").trim();
  } catch (_) {
    return "";
  }
}

function getFirstName(fullName) {
  const name = String(fullName || "").trim();
  if (!name) return "";
  return name.split(/\s+/)[0] || "";
}

function buildPurchasedItemsForEmail(paymentData, items) {
  const mpItemsA = Array.isArray(paymentData?.additional_info?.items)
    ? paymentData.additional_info.items
    : [];

  const mpItemsB = Array.isArray(paymentData?.order?.items)
    ? paymentData.order.items
    : [];

  const mpItems = mpItemsA.length ? mpItemsA : mpItemsB;

  return (items || []).map((it) => {
    const category = String(it?.category || "").trim();
    const city = String(it?.city || "").trim();

    const match = mpItems.find((mp) => {
      const title = String(mp?.title || "").toLowerCase();
      return title.includes(category.toLowerCase()) && title.includes(city.toLowerCase());
    });

    const amount = Number(match?.unit_price || 0);

    return {
      label: `${category} - ${city}`,
      amount: amount > 0 ? amount : null,
    };
  });
}

function getPaymentTotal(paymentData) {
  const metadataTotal = Number(paymentData?.metadata?.pricing?.total);
  if (Number.isFinite(metadataTotal) && metadataTotal > 0) return metadataTotal;

  const tx = Number(paymentData?.transaction_amount);
  if (Number.isFinite(tx) && tx > 0) return tx;

  return 0;
}

function getInstallmentsText(paymentData) {
  const installments = Number(paymentData?.installments || 0);
  const installmentAmount = Number(paymentData?.transaction_details?.installment_amount || 0);

  if (installments > 1 && installmentAmount > 0) {
    return `${installments}x de ${formatBRL(installmentAmount)}`;
  }

  return "à vista";
}
async function sendPurchaseEmail({ toEmail, customerName, paymentData, items }) {
  const resendApiKey = String(process.env.RESEND_API_KEY || "").trim();
  if (!resendApiKey) return { ok: false, skipped: true, reason: "Missing RESEND_API_KEY" };
  if (!toEmail) return { ok: false, skipped: true, reason: "Missing recipient email" };

  const accountUrl = "https://curadoria-elite-travel.vercel.app/account.html";
  const roseUrl = "https://curadoria-elite-travel.vercel.app/images/rosa-dos-ventos.png";
  const logoUrl = "https://curadoria-elite-travel.vercel.app/images/logo-curadoria.jpg";

  const purchasedItems = buildPurchasedItemsForEmail(paymentData, items);
  const total = getPaymentTotal(paymentData);
  const installmentsText = getInstallmentsText(paymentData);
  const firstName = getFirstName(customerName);

  const greetingHtml = firstName
    ? `<p style="margin:0 0 18px 0;font-size:16px;color:#f5f1e8;">Olá, <strong>${escapeHtml(firstName)}</strong>.</p>`
    : `<p style="margin:0 0 18px 0;font-size:16px;color:#f5f1e8;">Olá.</p>`;

  const itemsHtml = purchasedItems.length
    ? `
      <ul style="margin:0 0 18px 0;padding-left:20px;color:#f5f1e8;">
        ${purchasedItems
          .map((it) => {
            const valueText = it.amount != null ? ` — ${formatBRL(it.amount)}` : "";
            return `<li style="margin:0 0 8px 0;">${escapeHtml(it.label)}${escapeHtml(valueText)}</li>`;
          })
          .join("")}
      </ul>
    `
    : `<p style="margin:0 0 18px 0;color:#f5f1e8;">Compra confirmada.</p>`;

  const html = `
    <div style="margin:0;padding:24px;background:#5f5a52;">
      <div style="max-width:760px;margin:0 auto;background:#2b2b2f;border:1px solid #d9c78c;border-radius:18px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.35);">
        <div style="height:3px;background:#c79a18;"></div>

        <div
          style="
            position:relative;
            padding:34px 28px 34px 28px;
            font-family:Segoe UI,Arial,sans-serif;
            line-height:1.7;
            color:#f5f1e8;
            background:
              linear-gradient(rgba(38,38,41,0.92), rgba(38,38,41,0.96)),
              url('${logoUrl}') center center / 340px auto no-repeat;
          "
        >
          <div style="text-align:center;margin-bottom:28px;">
            <div style="display:inline-flex;align-items:center;justify-content:center;gap:12px;">
              <img
                src="${roseUrl}"
                alt="Rosa dos Ventos"
                style="width:34px;height:34px;display:block;object-fit:contain;"
              />
              <div
                style="
                  font-family:Georgia,serif;
                  font-size:22px;
                  color:#c79a18;
                  font-weight:700;
                  letter-spacing:0.6px;
                  text-transform:uppercase;
                "
              >
                CURADORIA ELITE TRAVEL
              </div>
            </div>

            <div style="margin-top:6px;font-size:13px;color:#d8d2c4;">
              O seu mundo, bem indicado.
            </div>
          </div>

          <h2 style="margin:0 0 20px 0;font-size:28px;line-height:1.2;color:#ffffff;">
            Compra confirmada
          </h2>

          ${greetingHtml}

          <p style="margin:0 0 18px 0;font-size:16px;color:#f5f1e8;">
            Parabéns pela sua escolha. Sua compra foi confirmada com sucesso.
            Ficamos felizes em fazer parte da sua próxima experiência.
          </p>

          <p style="margin:0 0 10px 0;font-size:16px;color:#f5f1e8;">
            <strong>Detalhes da compra:</strong>
          </p>

          ${itemsHtml}

          <p style="margin:0 0 8px 0;font-size:16px;color:#f5f1e8;">
            <strong>Total da compra:</strong> ${escapeHtml(formatBRL(total))}
          </p>

          <p style="margin:0 0 22px 0;font-size:16px;color:#f5f1e8;">
            <strong>Forma de pagamento:</strong> ${escapeHtml(installmentsText)}
          </p>

          <div
            style="
              margin:0 0 22px 0;
              padding:18px;
              border:1px solid #d8c792;
              border-radius:14px;
              background:#6b675d;
            "
          >
            <p style="margin:0 0 8px 0;font-size:15px;color:#ffffff;">
              <strong>Importante:</strong>
            </p>
            <p style="margin:0;font-size:15px;color:#f5f1e8;">
              Por se tratar de conteúdo digital com acesso imediato após a compra,
              não é possível realizar cancelamentos, trocas ou reembolsos.
            </p>
          </div>

          <p style="margin:0 0 22px 0;font-size:16px;color:#f5f1e8;">
            Para acessar seu material, entre em <strong>Minha conta</strong> no site da Curadoria Elite Travel.
          </p>

          <div style="margin:0 0 28px 0;text-align:center;">
            <a
              href="${accountUrl}"
              style="
                display:inline-block;
                background:#9e7800;
                color:#ffffff;
                text-decoration:none;
                font-weight:700;
                padding:14px 26px;
                border-radius:10px;
                font-size:15px;
              "
            >
              Acessar Minha Conta
            </a>
          </div>

          <p style="margin:0 0 18px 0;font-size:16px;color:#f5f1e8;">
            Agradecemos a sua compra.
          </p>

          <div style="margin-top:10px;">
            <p style="margin:0;font-size:15px;color:#f5f1e8;">
              <strong>CURADORIA ELITE TRAVEL</strong><br/>
              O seu mundo, bem indicado.
            </p>
          </div>

          <div style="text-align:right;margin-top:18px;">
            <img
              src="${logoUrl}"
              alt="Logo Curadoria Elite Travel"
              style="
                width:92px;
                max-width:92px;
                height:auto;
                display:inline-block;
                border-radius:8px;
                opacity:0.95;
              "
            />
          </div>
        </div>
      </div>
    </div>
  `;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Curadoria Elite Travel <contato@curadoriaelitetravel.com>",
      to: [toEmail],
      subject: "Sua compra foi confirmada",
      html,
    }),
  });

  const data = await r.json().catch(() => null);

  if (!r.ok) {
    return {
      ok: false,
      status: r.status,
      error: data?.message || data?.error || "Failed to send email",
    };
  }

  return { ok: true, id: data?.id || null };
}

async function handleWebhook(req, res) {
  const mpAccessToken = getMercadoPagoAccessToken();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!mpAccessToken) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing Mercado Pago token" });
  }
  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing Supabase env vars" });
  }

  const paymentId = getPaymentIdFromWebhook(req);
  if (!paymentId) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing payment id" });
  }

  const sig = validateWebhookSignature(req, paymentId);
  if (!sig.ok) {
    return res.status(401).json({ ok: false, error: "Invalid webhook signature", details: sig.reason });
  }

  const pay = await mpGetPayment(mpAccessToken, paymentId);
  if (!pay.ok || !pay.data) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Failed to fetch payment" });
  }

  const status = String(pay.data.status || "").toLowerCase();
  if (status !== "approved") {
    return res.status(200).json({ ok: true, ignored: true, payment_status: status });
  }

  const metadata = pay.data.metadata || {};
  const userId = String(metadata.user_id || "").trim();
  if (!userId) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing metadata.user_id" });
  }

  let items = [];
  try {
    const raw = metadata.items;
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) {
      items = parsed.map(normalizeItem).filter((x) => x.category && x.city);
    }
  } catch {
    items = [];
  }

  if (!items.length) {
    return res.status(200).json({ ok: true, ignored: true, reason: "Missing/invalid metadata.items" });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });

  const granted = await grantPurchasesFromPayment({ supabase, userId, items });
  if (!granted.ok) {
    return res.status(200).json({
      ok: true,
      ignored: true,
      reason: granted.error,
      details: granted.details || "",
    });
  }

  if (granted.inserted > 0) {
    try {
      const userEmail = await getUserEmailById(supabase, userId);
      const customerName = await getCustomerNameByUserId(supabase, userId);

      await sendPurchaseEmail({
        toEmail: userEmail,
        customerName,
        paymentData: pay.data,
        items,
      });
    } catch (emailErr) {
      console.error("purchase email failed:", emailErr?.message || emailErr);
    }
  }

  return res.status(200).json({
    ok: true,
    webhook: true,
    payment_id: paymentId,
    payment_status: status,
    inserted: granted.inserted,
    signature_bypassed: !!sig.bypassed,
  });
}

// =====================================================
// HANDLER
// =====================================================
module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "POST") {
    const tokenMaybe = getBearerToken(req);
    if (!tokenMaybe) {
      return handleWebhook(req, res);
    }
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const mpAccessToken = getMercadoPagoAccessToken();
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!mpAccessToken) {
      return res.status(500).json({
        error:
          "Missing Mercado Pago token. Configure MERCADOPAGO_ACCESS_TOKEN_TEST / MERCADOPAGO_ACCESS_TOKEN_PROD (or MERCADOPAGO_ACCESS_TOKEN fallback).",
      });
    }
    if (!supabaseUrl) return res.status(500).json({ error: "Missing SUPABASE_URL env var" });
    if (!supabaseServiceKey) return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY env var" });

    const body = req.body || {};

    let items = [];

    if (Array.isArray(body.items) && body.items.length > 0) {
      items = body.items.map(normalizeItem).filter((x) => x.category && x.city);
    } else if (body.category && body.city) {
      items = [normalizeItem({ category: body.category, city: body.city })];
    }

    if (!items.length) {
      return res.status(400).json({ error: "Missing category/city or items[]" });
    }

    const couponCode = String(body.coupon_code || "").trim();
    const previewOnly = body.preview_only === true;

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

    if (!previewOnly) {
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
    }

    let couponRow = null;
    if (couponCode) {
      couponRow = await loadCouponByCode({ supabase, code: couponCode });
    }

    const pricesMap = await loadCategoryPricesMap(supabase);
    const pricing = computePricesWithCoupon({ items, couponRow, pricesMap });

    if (previewOnly) {
      return res.status(200).json({
        ok: true,
        preview: true,
        requested_at: nowISO(),
        coupon_code: couponCode || null,
        applied: pricing.applied,
        items: pricing.items,
        totals: pricing.totals,
      });
    }
        const origin = (req.headers && (req.headers.origin || req.headers.referer)) || "";
    const safeOrigin =
      origin && String(origin).startsWith("http")
        ? String(origin).replace(/\/$/, "")
        : "https://curadoria-elite-travel.vercel.app";

    const successUrl = `${safeOrigin}/checkout-success.html?mp=success`;
    const pendingUrl = `${safeOrigin}/checkout-success.html?mp=pending`;
    const failureUrl = `${safeOrigin}/checkout-success.html?mp=failure`;

    const mpItems = (pricing.items || []).map((it) => ({
      title: `${it.city} — ${it.category}`,
      quantity: 1,
      unit_price: toCentsBRL(it.final_price),
      currency_id: "BRL",
    }));

    const itemsJson = JSON.stringify(items);

    const preferenceBody = {
      items: mpItems,

      back_urls: {
        success: successUrl,
        pending: pendingUrl,
        failure: failureUrl,
      },

      auto_return: "approved",

      external_reference: `cet_${userId}_${Date.now()}`,

      metadata: {
        user_id: String(userId),
        items: itemsJson,
        source: "curadoria-elite-travel",
        coupon_code: couponCode || null,
        pricing: {
          subtotal: pricing.totals?.subtotal || null,
          discount_total: pricing.totals?.discount_total || null,
          total: pricing.totals?.total || null,
        },
      },
    };

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

    const isProd = isProductionEnv();
    const url = isProd ? (data?.init_point || null) : (data?.sandbox_init_point || null);

    if (!url) {
      return res.status(500).json({
        error: "Mercado Pago preference missing checkout URL",
        hint: isProd ? "Expected init_point" : "Expected sandbox_init_point",
        returned_keys: data ? Object.keys(data) : [],
      });
    }

    return res.status(200).json({
      url,
      coupon_code: couponCode || null,
      pricing: pricing.totals || null,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to create Mercado Pago checkout",
      message: err?.message ? err.message : "Unknown error",
    });
  }
};
