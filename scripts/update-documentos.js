const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "../data/documentos-data.json");
const SOURCES_PATH = path.join(__dirname, "../data/documentos-fontes.json");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function getBrazilTimestamp() {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  });
}

async function fetchSource(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "CuradoriaEliteTravel-Monitoring/1.0"
      }
    });

    if (!response.ok) {
      return `Fonte indisponível no momento: ${url}`;
    }

    const text = await response.text();

    return text
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .slice(0, 12000);
  } catch (error) {
    return `Erro ao consultar fonte: ${url}`;
  }
}

async function askOpenAI(country, currentData, sourceTexts) {
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY não encontrada nos GitHub Secrets.");
  }

  const prompt = `
Você é o motor de atualização da ferramenta Documentação e Informações de Saúde para Viagem da Curadoria Elite Travel.

País analisado: ${country}

Conteúdo atual exibido:
Entrada: ${currentData.entry.summary}
Saúde: ${currentData.health.summary}
Apoio diplomático: ${currentData.diplomaticSupport.summary}

Fontes oficiais consultadas:
${sourceTexts}

Tarefa:
1. Verifique se houve mudança relevante sobre visto, entrada, vacina, saúde ou apoio diplomático.
2. Se não houve mudança, mantenha exatamente os textos atuais.
3. Se houve mudança, reescreva em português do Brasil, com linguagem objetiva, elegante e compatível com a Curadoria Elite Travel.
4. Não invente informação.
5. Não use tom alarmista.
6. Responda SOMENTE em JSON válido.

Formato obrigatório:
{
  "changed": true ou false,
  "entrySummary": "...",
  "healthSummary": "...",
  "diplomaticSupportSummary": "...",
  "internalNote": "resumo curto do que foi verificado"
}
`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: prompt
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na OpenAI: ${errorText}`);
  }

  const result = await response.json();
  const output = result.output_text;

  return JSON.parse(output);
}

async function updateCountry(countryData, sourceConfig) {
  console.log(`\n🌍 Verificando ${countryData.country}...`);

  if (!sourceConfig) {
    console.log(`⚠️ Nenhuma fonte configurada para ${countryData.country}`);
    countryData.lastChecked = getBrazilTimestamp();
    return countryData;
  }

  const urls = [
    ...(sourceConfig.entrySources || []),
    ...(sourceConfig.healthSources || []),
    ...(sourceConfig.diplomaticSources || [])
  ];

  const sourceTexts = [];

  for (const url of urls) {
    console.log(`🔎 Consultando: ${url}`);
    const text = await fetchSource(url);
    sourceTexts.push(`\nFonte: ${url}\n${text}`);
  }

  const analysis = await askOpenAI(
    countryData.country,
    countryData,
    sourceTexts.join("\n\n")
  );

  countryData.entry.summary = analysis.entrySummary;
  countryData.health.summary = analysis.healthSummary;
  countryData.diplomaticSupport.summary = analysis.diplomaticSupportSummary;

  countryData.lastChecked = getBrazilTimestamp();
  countryData.lastInternalNote = analysis.internalNote || "";

  if (analysis.changed) {
    countryData.lastAutomaticUpdate = getBrazilTimestamp();
    console.log(`⚠️ Mudança detectada e aplicada em ${countryData.country}`);
  } else {
    console.log(`✅ Sem mudança relevante em ${countryData.country}`);
  }

  return countryData;
}

async function main() {
  console.log("\n🚀 Iniciando atualização inteligente de documentos...\n");

  const data = readJson(DATA_PATH);
  const sources = readJson(SOURCES_PATH);

  const sourceMap = new Map(
    sources.sources.map(item => [item.country, item])
  );

  data.updatedAt = getBrazilTimestamp();

  const updatedCountries = [];

  for (const country of data.countries) {
    const sourceConfig = sourceMap.get(country.country);
    const updated = await updateCountry(country, sourceConfig);
    updatedCountries.push(updated);
  }

  data.countries = updatedCountries;

  writeJson(DATA_PATH, data);

  console.log("\n✅ Atualização inteligente concluída.");
  console.log(`🕒 Última execução: ${data.updatedAt}\n`);
}

main().catch(error => {
  console.error("❌ Erro na atualização inteligente:");
  console.error(error);
  process.exit(1);
});
