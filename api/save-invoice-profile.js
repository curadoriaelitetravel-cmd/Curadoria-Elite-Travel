// api/save-invoice-profile.js
// Salva/atualiza o registro do usuário em public.invoice_profiles (1 por usuário)
// - Usa SUPABASE_SERVICE_ROLE_KEY (server-side)
// - Identifica o usuário via Bearer token (não aceita user_id vindo do front)
// - Faz upsert por user_id

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
  // Aceita YYYY-MM-DD (o suficiente pro nosso caso)
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
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");

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

    // Body
    const body = req.body || {};

    const person_type = asText(body.person_type); // "CPF" | "CNPJ"
    const doc_number = onlyDigits(body.doc_number);

    // CPF vem como full_name
    const full_name_in = asText(body.full_name);

    // CNPJ vem como corporate_name (no seu formulário)
    const corporate_name_in = asText(body.corporate_name);

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

    // ✅ gender: CPF obrigatório / CNPJ null
    let gender = normalizeGender(body.gender);

    // Validações mínimas
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

    // ✅ Nome: CPF usa full_name, CNPJ usa corporate_name
    let full_name = "";
    if (person_type === "CPF") {
      full_name = full_name_in;
      if (!full_name) {
        return res.status(400).json({ error: "full_name_required" });
      }
    } else {
      full_name = corporate_name_in || full_name_in; // tolerância extra
      if (!full_name) {
        return res.status(400).json({ error: "corporate_name_required" });
      }
    }

    // CPF exige birth_date e gender
    let birth_date_final = null;
    if (person_type === "CPF") {
      if (!birth_date || !isIsoDate(birth_date)) {
        return res.status(400).json({ error: "birth_date_required_for_cpf" });
      }
      birth_date_final = birth_date;

      if (!gender) {
        return res.status(400).json({ error: "gender_required_for_cpf" });
      }
    } else {
      // CNPJ: birth_date e gender precisam ser null
      birth_date_final = null;
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

      // ✅ sempre salva em full_name (CPF = nome, CNPJ = razão social)
      full_name,

      ie_isento,
      ie: ie_isento ? null : ie,

      birth_date: birth_date_final,
      gender, // CPF: Mulher/Homem/Outro | CNPJ: null

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
