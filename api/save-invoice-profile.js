// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// ✅ Ajuste importante:
// - CPF: exige full_name + gender + birth_date
// - CNPJ: exige corporate_name e salva a Razão Social no campo full_name
//   (para não depender de coluna extra no banco)

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

    const ie_isento = body.ie_isento === true; // checkbox
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

      // Salvamos Razão Social no campo full_name (sem mexer em estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;
    }

    // CNPJ: se NÃO for isento, IE é obrigatório
    if (person_type === "CNPJ" && !ie_isento) {
      if (!ie) {
        return res.status(400).json({ error: "ie_required_when_not_exempt" });
      }
    }

    const payload = {
      user_id: userId,
      person_type,
      doc_number,

      full_name, // ✅ CPF = Nome completo | CNPJ = Razão Social

      ie_isento: person_type === "CNPJ" ? ie_isento : true,
      ie: person_type === "CNPJ" ? (ie_isento ? null : ie) : null,

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
// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// Ajustes (2026-02):
// - Aceita person_type em vários formatos (cpf/cnpj, CPF/CNPJ, pf/pj) e normaliza para "CPF"|"CNPJ"
// - Aceita doc_number vindo como doc_number OU document
// - Implementa indicador de IE (CONTRIBUINTE | ISENTO | NAO_CONTRIBUINTE) e salva em ie_indicator
// - Se indicador = CONTRIBUINTE, IE é obrigatório
// - Se indicador = ISENTO ou NAO_CONTRIBUINTE, IE é nulo
//
// Observação: Mantém o padrão antigo do banco:
// - CPF: exige full_name + gender + birth_date
// - CNPJ: exige corporate_name e salva Razão Social no campo full_name

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

// "cpf"|"CPF"|"pf"|"PF" => "CPF"
// "cnpj"|"CNPJ"|"pj"|"PJ" => "CNPJ"
function normalizePersonType(v) {
  const raw = asText(v);
  if (!raw) return "";
  const low = raw.toLowerCase();

  if (low === "cpf" || low === "pf" || low.includes("fisica") || low.includes("física")) return "CPF";
  if (low === "cnpj" || low === "pj" || low.includes("juridica") || low.includes("jurídica")) return "CNPJ";

  if (raw === "CPF" || raw === "CNPJ") return raw;

  return "";
}

function normalizeIeIndicator(v) {
  const raw = asText(v);
  if (!raw) return "";

  const low = raw.toLowerCase();

  // aceita variações comuns
  if (low === "contribuinte" || low === "ie_contribuinte" || low === "1") return "CONTRIBUINTE";
  if (low === "isento" || low === "ie_isento" || low === "2") return "ISENTO";
  if (low === "nao_contribuinte" || low === "não contribuinte" || low === "nao contribuinte" || low === "3") {
    return "NAO_CONTRIBUINTE";
  }

  // também aceita se já vier normalizado
  if (raw === "CONTRIBUINTE" || raw === "ISENTO" || raw === "NAO_CONTRIBUINTE") return raw;

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

    // ---------
    // ENTRADAS (compatibilidade com front antigo e novo)
    // ---------
    const person_type = normalizePersonType(body.person_type || body.personType || body.tipo);

    // doc_number pode vir como doc_number OU document
    const doc_number = onlyDigits(body.doc_number || body.document);

    // CPF (nome)
    const full_name_input = asText(body.full_name || body.fullName || body.name);

    // CNPJ (razão social)
    const corporate_name = asText(body.corporate_name || body.corporateName || body.razao_social || body.razaoSocial);

    // IE indicator (3 opções)
    const ie_indicator = normalizeIeIndicator(body.ie_indicator || body.ieIndicator);

    // IE number (se contribuinte)
    const ie = asText(body.ie || body.ie_number || body.ieNumber) || null;

    // CPF-only
    const birth_date = asText(body.birth_date || body.birthDate) || null;
    let gender = normalizeGender(body.gender);

    // Endereço (aceita nomes diferentes)
    const cep = onlyDigits(body.cep || body.zip);
    const uf = normalizeUF(body.uf || body.state);
    const city_name = asText(body.city_name || body.city);
    const neighborhood = asText(body.neighborhood || body.district);
    const street = asText(body.street || body.address);
    const street_number = asText(body.street_number || body.number);
    const complement = asText(body.complement) || null;

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

      // Salvamos Razão Social no campo full_name (sem mexer em estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;

      // Indicador de IE é obrigatório no CNPJ
      if (ie_indicator !== "CONTRIBUINTE" && ie_indicator !== "ISENTO" && ie_indicator !== "NAO_CONTRIBUINTE") {
        return res.status(400).json({ error: "ie_indicator_required_for_cnpj" });
      }

      // Se contribuinte, IE é obrigatório
      if (ie_indicator === "CONTRIBUINTE") {
        if (!ie) {
          return res.status(400).json({ error: "ie_required_when_contribuinte" });
        }
      }
    }

    // =========================
    // Payload final
    // =========================
    const payload = {
      user_id: userId,
      person_type,
      doc_number,

      full_name, // CPF = Nome completo | CNPJ = Razão Social

      // novo campo (coluna criada no B1)
      ie_indicator: person_type === "CNPJ" ? ie_indicator : null,

      // mantém compatibilidade antiga:
      // - se CNPJ: se isento/não contribuinte => ie null
      // - se CNPJ: se contribuinte => ie preenchido
      ie_isento: person_type === "CNPJ" ? (ie_indicator !== "CONTRIBUINTE") : true,
      ie: person_type === "CNPJ" ? (ie_indicator === "CONTRIBUINTE" ? ie : null) : null,

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
