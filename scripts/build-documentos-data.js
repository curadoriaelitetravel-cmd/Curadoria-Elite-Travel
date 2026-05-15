const fs = require("fs");
const path = require("path");

const extractedPath = path.join(__dirname, "../data/documentos-extracted.json");
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

function buildCountry(country) {
  return {
    id: country.id,
    country: country.country,
    aliases: country.aliases || [],
    cities: country.cities || [],
    cityRedirects: [],

    entry: {
      title: "Visto e entrada no país",
      summary: country.summary?.entry || ""
    },

    health: {
      title: "Informações de saúde",
      summary: country.summary?.health || ""
    },

    diplomaticSupport: {
      title: "Apoio diplomático",
      summary: country.summary?.support || ""
    },

    sources: country.sources || [],

    lastChecked: null,
    lastAutomaticUpdate: null
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

    country.cityRedirects.push({
      alias: redirect.alias,
      cityKey: redirect.cityKey,
      displayName: redirect.displayName
    });
  });

  return countries;
}

function main() {
  console.log("\n🚀 Construindo documentos-data.json a partir do arquivo extraído...\n");

  if (!fs.existsSync(extractedPath)) {
    throw new Error("Arquivo data/documentos-extracted.json não encontrado.");
  }

  const extracted = readJson(extractedPath);

  if (!Array.isArray(extracted.countries)) {
    throw new Error("Estrutura inválida: countries não encontrado.");
  }

  const countries = extracted.countries.map(buildCountry);

  const countriesWithRedirects = attachCityRedirects(
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

    countries: countriesWithRedirects
  };

  writeJson(outputPath, output);

  console.log("✅ documentos-data.json atualizado com sucesso.");
  console.log(`🌍 Países incluídos: ${output.countries.length}`);
  console.log(`📄 Arquivo atualizado: ${outputPath}\n`);
}

main();
