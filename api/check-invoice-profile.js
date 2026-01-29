// api/check-invoice-profile.js
// Checa se o usuário (auth.uid()) já tem dados mínimos para NF preenchidos
// Requer que o request venha com o JWT do usuário (supabase auth) no header Authorization: Bearer <token>

const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const SUPABASE_URL = getEnv("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

    if (!token) {
      return res.status(401).json({ error: "Missing Authorization Bearer token" });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    // Descobrir o user_id a partir do token do usuário
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user?.id) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user_id = userData.user.id;

    // Buscar perfil
    const { data, error } = await supabase
      .from("invoice_profiles")
      .select("person_type, doc_number, full_name, corporate_name, birth_date, ie_isento, ie, cep, uf, city_name, neighborhood, street, street_number")
      .eq("user_id", user_id)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Regra mínima para considerar "completo":
    // - person_type, doc_number, cep, uf, city_name, neighborhood, street, street_number obrigatórios
    // - Se CPF: full_name + birth_date obrigatórios
    // - Se CNPJ: corporate_name obrigatório; IE obrigatório se ie_isento = false
    const baseOk =
      data &&
      data.person_type &&
      data.doc_number &&
      data.cep &&
      data.uf &&
      data.city_name &&
      data.neighborhood &&
      data.street &&
      data.street_number;

    let typeOk = false;

    if (data?.person_type === "CPF") {
      typeOk = !!(data.full_name && data.birth_date);
    } else if (data?.person_type === "CNPJ") {
      const ieOk = data.ie_isento === true ? true : !!(data.ie && String(data.ie).trim());
      typeOk = !!(data.corporate_name && ieOk);
    }

    const complete = !!(baseOk && typeOk);

    return res.status(200).json({
      ok: true,
      user_id,
      exists: !!data,
      complete,
      person_type: data?.person_type || null,
    });
  } catch (err) {
    return res.status(500).json({
      error: "check failed",
      details: err?.message || String(err),
    });
  }
};
