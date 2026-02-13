// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// ✅ Ajustes:
// 1) Normaliza city_name para MAIÚSCULO e valida contra br_cities (FK uf+city_name)
// 2) IE Indicator para CNPJ (CONTRIBUINTE / ISENTO / NAO_CONTRIBUINTE)
// 3) Mantém compatibilidade com ie_isento (boolean) e ie (texto)

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function getBearerToken(req) {
  const h = req.headers?.authorization || req.headers?.Authorization || "";
  const parts = String(h).split(" ");
  if (parts.length === 2 && parts[0].toLowerCase() === "bearer") return parts[1];
  return null;
}

function asText(v) {
  return String(v ?? "").trim();
}

function onlyDigits(v) {
  return asText(v).replace(/\D+/g, "");
}

function normalizeUF(uf) {
  return asText(uf).toUpperCase();
}

function normalizeCityName(v) {
  // FK exige city_name exatamente como está em br_cities.
  // Sua br_cities está em MAIÚSCULO (ex: "SÃO PAULO").
  return asText(v)
    .toUpperCase()
    .replace(/\s+/g, " ")
    .trim();
}

function isIsoDate(v) {
  // Aceita YYYY-MM-DD
  return /^\d{4}-\d{2}-\d{2}$/.test(asText(v));
}

function normalizeGender(v) {
  const g = asText(v);
  if (!g) return null;
  if (g === "Mulher" || g === "Homem" || g === "Outro") return g;
  return null;
}

function normalizeIeIndicator(v) {
  const x = asText(v).toUpperCase();
  if (!x) return "";
  if (x === "CONTRIBUINTE" || x === "ISENTO" || x === "NAO_CONTRIBUINTE") return x;
  return "";
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ error: "missing_token" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    // Descobre user_id pelo token
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(401).json({ error: "invalid_token" });
    }
    const userId = userData.user.id;

    const body = req.body || {};

    const person_type = asText(body.person_type); // "CPF" | "CNPJ"
    const doc_number = onlyDigits(body.doc_number);

    // Campos do formulário
    const full_name_input = asText(body.full_name);     // CPF
    const corporate_name = asText(body.corporate_name); // CNPJ

    // IE Indicator (novo)
    const ie_indicator = normalizeIeIndicator(body.ie_indicator); // CONTRIBUINTE/ISENTO/NAO_CONTRIBUINTE
    const ie = onlyDigits(body.ie) || null;

    const birth_date = asText(body.birth_date) || null; // YYYY-MM-DD (CPF obrigatório)
    const cep = onlyDigits(body.cep);

    const uf = normalizeUF(body.uf);
    let city_name = normalizeCityName(body.city_name);

    const neighborhood = asText(body.neighborhood);
    const street = asText(body.street);
    const street_number = asText(body.street_number);
    const complement = asText(body.complement) || null;

    // Gender (CPF obrigatório / CNPJ sempre null)
    let gender = normalizeGender(body.gender);

    // =========================
    // Validações mínimas
    // =========================
    if (person_type !== "CPF" && person_type !== "CNPJ") {
      return res.status(400).json({ error: "invalid_person_type" });
    }

    if (!doc_number) {
      return res.status(400).json({ error: "doc_number_required" });
    }

    if (!cep) {
      return res.status(400).json({ error: "cep_required" });
    }

    if (!uf || uf.length !== 2) {
      return res.status(400).json({ error: "uf_required" });
    }

    if (!city_name) {
      return res.status(400).json({ error: "city_name_required" });
    }

    if (!neighborhood) {
      return res.status(400).json({ error: "neighborhood_required" });
    }

    if (!street) {
      return res.status(400).json({ error: "street_required" });
    }

    if (!street_number) {
      return res.status(400).json({ error: "street_number_required" });
    }

    // =========================
    // 🔒 FK uf+city_name → br_cities(uf, city_name)
    // Precisamos garantir que (uf, city_name) exista exatamente.
    // =========================
    const { data: cityExact, error: cityErr } = await supabase
      .from("br_cities")
      .select("city_name")
      .eq("uf", uf)
      .eq("city_name", city_name)
      .limit(1)
      .maybeSingle();

    if (cityErr) {
      return res.status(400).json({
        error: "city_lookup_failed",
        details: cityErr.message,
      });
    }

    // Se não achou exato, tenta ILIKE (case-insensitive) e pega o nome oficial
    let canonicalCity = cityExact?.city_name || null;

    if (!canonicalCity) {
      const { data: cityLike, error: cityLikeErr } = await supabase
        .from("br_cities")
        .select("city_name")
        .eq("uf", uf)
        .ilike("city_name", city_name)
        .limit(1)
        .maybeSingle();

      if (cityLikeErr) {
        return res.status(400).json({
          error: "city_lookup_failed",
          details: cityLikeErr.message,
        });
      }

      canonicalCity = cityLike?.city_name || null;
    }

    if (!canonicalCity) {
      return res.status(400).json({
        error: "city_not_found_for_uf",
        details: `Cidade não encontrada na base br_cities para UF=${uf}. Use o nome exatamente como está no banco (ex.: "SÃO PAULO").`,
      });
    }

    // usa SEMPRE o valor oficial do banco → FK nunca quebra
    city_name = canonicalCity;

    // =========================
    // Regras CPF / CNPJ
    // =========================
    let full_name = "";

    if (person_type === "CPF") {
      if (!full_name_input) {
        return res.status(400).json({ error: "full_name_required_for_cpf" });
      }
      full_name = full_name_input;

      if (!birth_date || !isIsoDate(birth_date)) {
        return res.status(400).json({ error: "birth_date_required_for_cpf" });
      }

      if (!gender) {
        return res.status(400).json({ error: "gender_required_for_cpf" });
      }
    }

    if (person_type === "CNPJ") {
      if (!corporate_name) {
        return res.status(400).json({ error: "corporate_name_required_for_cnpj" });
      }

      // Salvamos Razão Social no campo full_name (sem mexer em estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;

      // IE Indicator obrigatório no CNPJ
      if (!ie_indicator) {
        return res.status(400).json({ error: "ie_indicator_required_for_cnpj" });
      }

      // Se CONTRIBUINTE → IE obrigatório
      if (ie_indicator === "CONTRIBUINTE" && !ie) {
        return res.status(400).json({ error: "ie_required_when_contribuinte" });
      }
    }

    // Compatibilidade com coluna antiga ie_isento (boolean)
    const ie_isento =
      person_type === "CNPJ" ? (ie_indicator === "ISENTO") : true;

    const payload = {
      user_id: userId,
      person_type,
      doc_number,

      full_name, // ✅ CPF = Nome completo | CNPJ = Razão Social

      // novo campo (se existir no banco)
      ie_indicator: person_type === "CNPJ" ? ie_indicator : null,

      // legado
      ie_isento: person_type === "CNPJ" ? ie_isento : true,

      // IE só existe quando CONTRIBUINTE
      ie:
        person_type === "CNPJ"
          ? (ie_indicator === "CONTRIBUINTE" ? ie : null)
          : null,

      birth_date: person_type === "CPF" ? (birth_date ? birth_date : null) : null,
      gender: person_type === "CPF" ? gender : null,

      cep,
      uf,
      city_name, // ✅ agora sempre bate FK com br_cities
      neighborhood,
      street,
      street_number,
      complement,

      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("invoice_profiles")
      .upsert(payload, { onConflict: "user_id" });

    if (error) {
      return res.status(400).json({
        error: "upsert_failed",
        details: error.message,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      details: err?.message || String(err),
    });
  }
};
