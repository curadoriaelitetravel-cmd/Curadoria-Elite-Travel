// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// Regras principais:
// - CPF: exige full_name + gender + birth_date
// - CNPJ: exige corporate_name (Razão Social) e exige ie_indicator
//   ie_indicator: "CONTRIBUINTE" | "ISENTO" | "NAO_CONTRIBUINTE"
//   Se "CONTRIBUINTE" => IE obrigatório
//
// Observação:
// - Mantemos ie_isento por compatibilidade com a coluna já existente.
// - Salvamos Razão Social no campo full_name para não depender de coluna extra.

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

function normalizeUF(uf) {
  return asText(uf).toUpperCase();
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

function normalizeIEIndicator(v) {
  const s = asText(v).toUpperCase();

  // Aceita valores já "certos"
  if (s === "CONTRIBUINTE" || s === "ISENTO" || s === "NAO_CONTRIBUINTE") return s;

  // Aceita variações comuns (por segurança)
  if (s === "NÃO CONTRIBUINTE" || s === "NAO CONTRIBUINTE") return "NAO_CONTRIBUINTE";
  if (s === "NÃO-CONTRIBUINTE" || s === "NAO-CONTRIBUINTE") return "NAO_CONTRIBUINTE";

  return null;
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
    const corporate_name = asText(body.corporate_name); // CNPJ (Razão Social)

    // IE Indicator (CNPJ)
    const ie_indicator = normalizeIEIndicator(body.ie_indicator);

    // Mantido por compatibilidade (vamos setar com base no indicador)
    const ie = asText(body.ie) || null;

    const birth_date = asText(body.birth_date) || null; // YYYY-MM-DD (CPF obrigatório)
    const cep = onlyDigits(body.cep);

    const uf = normalizeUF(body.uf);
    const city_name = asText(body.city_name);

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
      // Para CNPJ, a Razão Social vem em corporate_name
      if (!corporate_name) {
        return res.status(400).json({ error: "corporate_name_required_for_cnpj" });
      }

      // Indicador de IE obrigatório para CNPJ
      if (!ie_indicator) {
        return res.status(400).json({ error: "ie_indicator_required_for_cnpj" });
      }

      // Salvamos Razão Social no campo full_name (sem mexer em estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;

      // Se Contribuinte => IE obrigatório
      if (ie_indicator === "CONTRIBUINTE") {
        if (!ie) {
          return res.status(400).json({ error: "ie_required_when_contribuinte" });
        }
      }
    }

    // Derivamos ie_isento a partir do indicador
    const ie_isento =
      person_type === "CNPJ"
        ? (ie_indicator === "ISENTO" || ie_indicator === "NAO_CONTRIBUINTE")
        : true;

    const payload = {
      user_id: userId,
      person_type,
      doc_number,

      full_name, // ✅ CPF = Nome completo | CNPJ = Razão Social

      // Novidade: indicador (se a coluna existir, salva; se não existir, a API retornará erro e veremos no log)
      ie_indicator: person_type === "CNPJ" ? ie_indicator : null,

      ie_isento: ie_isento,
      ie:
        person_type === "CNPJ"
          ? (ie_indicator === "CONTRIBUINTE" ? ie : null)
          : null,

      birth_date: person_type === "CPF" ? (birth_date ? birth_date : null) : null,
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
