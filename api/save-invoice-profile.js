// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// ✅ Regras:
// - CPF: exige full_name + gender + birth_date
// - CNPJ: exige corporate_name e salva a Razão Social no campo full_name
//
// ✅ IMPORTANTE (FK uf_city):
// - A tabela invoice_profiles tem FK (uf, city_name). Então aqui normalizamos:
//   - uf: UPPER
//   - city_name: remove acentos + trim + colapsa espaços + UPPER
//   Isso evita falha quando o usuário digita "São Paulo" e o cadastro base está "SAO PAULO".

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

function normalizeUF(uf) {
  return asText(uf).toUpperCase();
}

function stripAccents(s) {
  // remove acentos/diacríticos (São -> Sao)
  return asText(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeCityName(city) {
  // padroniza para casar com tabela de cidades (FK):
  // - remove acento
  // - remove espaços extras
  // - UPPER
  const t = stripAccents(city)
    .replace(/\s+/g, " ")
    .trim();
  return t.toUpperCase();
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
    const full_name_input = asText(body.full_name);          // CPF
    const corporate_name = asText(body.corporate_name);      // CNPJ

    // IE indicator (novo)
    const ie_indicator_raw = asText(body.ie_indicator); // "CONTRIBUINTE" | "ISENTO" | "NAO_CONTRIBUINTE" | ""

    // IE number (somente se contribuinte)
    const ie = asText(body.ie) || null;

    const birth_date = asText(body.birth_date) || null; // YYYY-MM-DD (CPF obrigatório)
    const cep = onlyDigits(body.cep);

    // ✅ Normalização para FK
    const uf = normalizeUF(body.uf);
    const city_name = normalizeCityName(body.city_name);

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

    if (!uf) {
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

      // Salvamos Razão Social no full_name (sem mexer na estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;
    }

    // =========================
    // IE indicator (CNPJ)
    // =========================
    let ie_indicator = null;

    if (person_type === "CNPJ") {
      const allowed = ["CONTRIBUINTE", "ISENTO", "NAO_CONTRIBUINTE"];
      if (!allowed.includes(ie_indicator_raw)) {
        return res.status(400).json({ error: "ie_indicator_required_for_cnpj" });
      }
      ie_indicator = ie_indicator_raw;

      if (ie_indicator === "CONTRIBUINTE" && !ie) {
        return res.status(400).json({ error: "ie_required_when_contribuinte" });
      }
    }

    const payload = {
      user_id: userId,
      person_type,
      doc_number,

      full_name, // ✅ CPF = Nome completo | CNPJ = Razão Social

      // IE indicator + IE (somente CNPJ)
      ie_indicator: person_type === "CNPJ" ? ie_indicator : null,
      ie: person_type === "CNPJ" ? (ie_indicator === "CONTRIBUINTE" ? ie : null) : null,

      birth_date: person_type === "CPF" ? birth_date : null,
      gender: person_type === "CPF" ? gender : null,

      cep,
      uf,
      city_name,
      neighborhood,
      street,
      street_number,
      complement,

      updated_at: new Date().toISOString(),
    };

    // Upsert por user_id (1 registro por usuário)
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
