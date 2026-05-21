const fs = require("fs");
const path = require("path");

const extractedPath = path.join(__dirname, "../data/documentos-extracted.json");
const customPath = path.join(__dirname, "../data/documentos-custom.json");
const outputPath = path.join(__dirname, "../data/documentos-data.json");

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

function normalizeCountry(country) {
  return {
    id: country.id,
    country: country.country,
    aliases: country.aliases || [],
    cities: country.cities || [],
    cityRedirects: country.cityRedirects || [],

    entry: {
      title: country.entry?.title || "Visto e entrada no país",
      summary: country.entry?.summary || country.summary?.entry || ""
    },

    health: {
      title: country.health?.title || "Informações de saúde",
      summary: country.health?.summary || country.summary?.health || ""
    },

    diplomaticSupport: {
      title: country.diplomaticSupport?.title || "Apoio diplomático",
      summary: country.diplomaticSupport?.summary || country.summary?.support || ""
    },

    blocks: country.blocks || null,
    interactiveDetails: country.interactiveDetails || null,

    sources: country.sources || [],

    lastChecked: country.lastChecked || null,
    lastAutomaticUpdate: country.lastAutomaticUpdate || null,

    origin: country.origin || "extracted"
  };
}

function attachCityRedirects(countries, redirects) {
  const countryMap = new Map();

  countries.forEach(country => {
    countryMap.set(country.id, country);
  });

  redirects.forEach(redirect => {
    const country = countryMap.get(redirect.countryKey);

    if (!country) return;

    const exists = country.cityRedirects.some(item =>
      item.alias === redirect.alias &&
      item.cityKey === redirect.cityKey
    );

    if (exists) return;

    country.cityRedirects.push({
      alias: redirect.alias,
      cityKey: redirect.cityKey,
      displayName: redirect.displayName
    });
  });

  return countries;
}

function mergeCountries(extractedCountries, customCountries) {
  const map = new Map();

  extractedCountries.forEach(country => {
    map.set(country.id, normalizeCountry({
      ...country,
      origin: "extracted"
    }));
  });

  customCountries.forEach(country => {
    map.set(country.id, normalizeCountry({
      ...country,
      origin: "custom"
    }));
  });

  return Array.from(map.values()).sort((a, b) =>
    a.country.localeCompare(b.country, "pt-BR", { sensitivity: "base" })
  );
}

function main() {
  console.log("\n🚀 Construindo documentos-data.json...\n");

  if (!fs.existsSync(extractedPath)) {
    throw new Error("Arquivo data/documentos-extracted.json não encontrado.");
  }

  const extracted = readJson(extractedPath);

  const extractedCountries = Array.isArray(extracted.countries)
    ? extracted.countries
    : [];

  let customCountries = [];

  if (fs.existsSync(customPath)) {
    const custom = readJson(customPath);

    customCountries = Array.isArray(custom.countries)
      ? custom.countries
      : [];
  }

  let countries = mergeCountries(
    extractedCountries,
    customCountries
  );

  countries = attachCityRedirects(
    countries,
    extracted.cityRedirects || []
  );

  const output = {
    updatedAt: getBrazilTimestamp(),

    monitoring: {
      enabled: true,
      frequency: "daily",
      timezone: "America/Sao_Paulo",
      message: "Monitoramento ativo • Informações revisadas regularmente"
    },

    countries
  };

  writeJson(outputPath, output);

  console.log("✅ documentos-data.json atualizado com sucesso.");
  console.log(`🌍 Países extraídos: ${extractedCountries.length}`);
  console.log(`➕ Países customizados: ${customCountries.length}`);
  console.log(`📦 Total final: ${output.countries.length}`);
  console.log(`📄 Arquivo atualizado: ${outputPath}\n`);
}

main();
