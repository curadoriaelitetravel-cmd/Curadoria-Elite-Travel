// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id
//
// ✅ Ajustes:
// 1) Normaliza city_name e encontra cidade mesmo sem acentos (ex: SAO PAULO -> SÃO PAULO)
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

function removeDiacritics(str) {
  return asText(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeCityName(v) {
  // Mantém MAIÚSCULO e espaços
  return asText(v)
    .toUpperCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCityNameLoose(v) {
  // Comparação "solta": sem acentos
  return removeDiacritics(normalizeCityName(v));
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
      return res.status(405).json({ error: "Method not allowed", message: "Método não permitido." });
    }

    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ error: "missing_token", message: "Faça login novamente." });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    // Descobre user_id pelo token
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(401).json({ error: "invalid_token", message: "Sessão inválida. Faça login novamente." });
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
      return res.status(400).json({ error: "invalid_person_type", message: "Selecione CPF ou CNPJ." });
    }

    if (!doc_number) {
      return res.status(400).json({ error: "doc_number_required", message: "Preencha CPF/CNPJ." });
    }

    if (!cep) {
      return res.status(400).json({ error: "cep_required", message: "Preencha o CEP." });
    }

    if (!uf || uf.length !== 2) {
      return res.status(400).json({ error: "uf_required", message: "Preencha o Estado (UF)." });
    }

    if (!city_name) {
      return res.status(400).json({ error: "city_name_required", message: "Preencha a Cidade." });
    }

    if (!neighborhood) {
      return res.status(400).json({ error: "neighborhood_required", message: "Preencha o Bairro." });
    }

    if (!street) {
      return res.status(400).json({ error: "street_required", message: "Preencha o Endereço." });
    }

    if (!street_number) {
      return res.status(400).json({ error: "street_number_required", message: "Preencha o Número." });
    }

    // =========================
    // 🔒 FK uf+city_name → br_cities(uf, city_name)
    // Agora fazemos busca robusta mesmo sem acentos.
    // =========================

    // 1) tenta exato
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
        message: "Não foi possível validar a cidade. Tente novamente.",
        details: cityErr.message,
      });
    }

    let canonicalCity = cityExact?.city_name || null;

    // 2) se não achou exato, busca todas as cidades da UF e compara sem acentos
    if (!canonicalCity) {
      const { data: list, error: listErr } = await supabase
        .from("br_cities")
        .select("city_name")
        .eq("uf", uf)
        .limit(2000);

      if (listErr) {
        return res.status(400).json({
          error: "city_lookup_failed",
          message: "Não foi possível validar a cidade. Tente novamente.",
          details: listErr.message,
        });
      }

      const target = normalizeCityNameLoose(city_name);
      const found = (list || []).find((r) => normalizeCityNameLoose(r.city_name) === target);

      canonicalCity = found ? found.city_name : null;
    }

    if (!canonicalCity) {
      return res.status(400).json({
        error: "city_not_found_for_uf",
        message: "Cidade não encontrada para a UF informada. Confira a escrita (ex.: São Paulo / SP).",
        details: `Cidade=${city_name} | UF=${uf}`,
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
        return res.status(400).json({ error: "full_name_required_for_cpf", message: "Preencha o Nome completo." });
      }
      full_name = full_name_input;

      if (!birth_date || !isIsoDate(birth_date)) {
        return res.status(400).json({ error: "birth_date_required_for_cpf", message: "Preencha a Data de nascimento." });
      }

      if (!gender) {
        return res.status(400).json({ error: "gender_required_for_cpf", message: "Selecione o Gênero." });
      }
    }

    if (person_type === "CNPJ") {
      if (!corporate_name) {
        return res.status(400).json({ error: "corporate_name_required_for_cnpj", message: "Preencha a Razão Social." });
      }

      // Salvamos Razão Social no campo full_name (sem mexer em estrutura do banco)
      full_name = corporate_name;

      // CNPJ não usa esses campos:
      gender = null;

      // IE Indicator obrigatório no CNPJ
      if (!ie_indicator) {
        return res.status(400).json({
          error: "ie_indicator_required_for_cnpj",
          message: "Selecione o Indicador de IE (Contribuinte, Isento ou Não Contribuinte).",
        });
      }

      // Se CONTRIBUINTE → IE obrigatório
      if (ie_indicator === "CONTRIBUINTE" && !ie) {
        return res.status(400).json({ error: "ie_required_when_contribuinte", message: "Preencha a IE (se Contribuinte)." });
      }
    }

    // Compatibilidade com coluna antiga ie_isento (boolean)
    const ie_isento = person_type === "CNPJ" ? (ie_indicator === "ISENTO") : true;

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
        message: "Não foi possível salvar seus dados. Confira os campos e tente novamente.",
        details: error.message,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({
      error: "failed",
      message: "Erro inesperado ao salvar seus dados. Tente novamente.",
      details: err?.message || String(err),
    });
  }
};
