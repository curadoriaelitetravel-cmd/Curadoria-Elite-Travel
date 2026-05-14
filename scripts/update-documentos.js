const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "../data/documentos-data.json");
const SOURCES_PATH = path.join(__dirname, "../data/documentos-fontes.json");

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
      return "";
    }

    const text = await response.text();

    return text
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .slice(0, 10000)
      .toLowerCase();

  } catch (error) {
    return "";
  }
}

function detectEntryChanges(text) {
  if (
    text.includes("visa required") ||
    text.includes("visitor visa")
  ) {
    return "Brasileiros precisam de visto para turismo.";
  }

  if (
    text.includes("visa-free") ||
    text.includes("no visa required")
  ) {
    return "Brasileiros não precisam de visto para turismo de curta duração.";
  }

  return null;
}

function detectHealthChanges(text) {
  if (
    text.includes("vaccination required") ||
    text.includes("yellow fever")
  ) {
    return "Existe exigência sanitária ou vacinal para determinados viajantes.";
  }

  return "Sem exigência geral de vacina obrigatória na entrada direta.";
}

function detectDiplomaticChanges(country) {
  return `O apoio diplomático varia conforme a cidade e a região consultada em ${country}.`;
}

async function updateCountry(countryData, sourceConfig) {
  console.log(`\n🌍 Verificando ${countryData.country}...`);

  if (!sourceConfig) {
    console.log(`⚠️ Nenhuma fonte configurada.`);
    return countryData;
  }

  const urls = [
    ...(sourceConfig.entrySources || []),
    ...(sourceConfig.healthSources || []),
    ...(sourceConfig.diplomaticSources || [])
  ];

  let combinedText = "";

  for (const url of urls) {
    console.log(`🔎 Consultando: ${url}`);

    const sourceText = await fetchSource(url);

    combinedText += ` ${sourceText}`;
  }

  const detectedEntry = detectEntryChanges(combinedText);
  const detectedHealth = detectHealthChanges(combinedText);
  const detectedDiplomatic = detectDiplomaticChanges(countryData.country);

  let changed = false;

  if (
    detectedEntry &&
    detectedEntry !== countryData.entry.summary
  ) {
    countryData.entry.summary = detectedEntry;
    changed = true;
  }

  if (
    detectedHealth &&
    detectedHealth !== countryData.health.summary
  ) {
    countryData.health.summary = detectedHealth;
    changed = true;
  }

  if (
    detectedDiplomatic &&
    detectedDiplomatic !== countryData.diplomaticSupport.summary
  ) {
    countryData.diplomaticSupport.summary = detectedDiplomatic;
    changed = true;
  }

  countryData.lastChecked = getBrazilTimestamp();

  if (changed) {
    countryData.lastAutomaticUpdate = getBrazilTimestamp();

    console.log(`⚠️ Mudanças detectadas em ${countryData.country}`);
  } else {
    console.log(`✅ Nenhuma mudança relevante.`);
  }

  return countryData;
}

async function main() {
  console.log("\n🚀 Iniciando monitoramento automático...\n");

  const data = readJson(DATA_PATH);
  const sources = readJson(SOURCES_PATH);

  const sourceMap = new Map(
    sources.sources.map(item => [item.country, item])
  );

  const updatedCountries = [];

  for (const country of data.countries) {
    const sourceConfig = sourceMap.get(country.country);

    const updatedCountry = await updateCountry(
      country,
      sourceConfig
    );

    updatedCountries.push(updatedCountry);
  }

  data.updatedAt = getBrazilTimestamp();
  data.countries = updatedCountries;

  writeJson(DATA_PATH, data);

  console.log("\n✅ Monitoramento concluído.");
  console.log(`🕒 Última atualização: ${data.updatedAt}\n`);
}

main().catch(error => {
  console.error("❌ Erro:");
  console.error(error);
  process.exit(1);
});
