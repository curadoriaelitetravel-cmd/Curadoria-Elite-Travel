const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "../documentos.html");
const outputPath = path.join(__dirname, "../data/documentos-extracted.json");

function extractBalancedBlock(text, startIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = startIndex; i < text.length; i++) {
    const char = text[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "'" || char === '"' || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") depth++;
    if (char === "}") depth--;

    if (depth === 0) {
      return text.slice(startIndex, i + 1);
    }
  }

  return "";
}

function findObjectByName(html, name) {
  const regex = new RegExp(`const\\s+${name}\\s*=\\s*\\{`);
  const match = html.match(regex);

  if (!match) return "";

  const start = match.index + match[0].lastIndexOf("{");
  return extractBalancedBlock(html, start);
}

function readStringValue(block, key) {
  const regex = new RegExp(`${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`);
  const match = block.match(regex);
  return match ? match[1].trim() : "";
}

function readArrayStrings(block, key) {
  const regex = new RegExp(`${key}\\s*:\\s*\\[([\\s\\S]*?)\\]`);
  const match = block.match(regex);

  if (!match) return [];

  return [...match[1].matchAll(/['"`]([^'"`]+)['"`]/g)]
    .map(item => item[1].trim())
    .filter(Boolean);
}

function readSummary(block) {
  const summaryMatch = block.match(/summary\s*:\s*\{([\s\S]*?)\}\s*,\s*cities/);

  if (!summaryMatch) {
    return {
      entry: "",
      health: "",
      support: ""
    };
  }

  const summaryText = summaryMatch[1];

  return {
    entry: readStringValue(summaryText, "entry"),
    health: readStringValue(summaryText, "health"),
    support: readStringValue(summaryText, "support")
  };
}

function readSources(block) {
  const sourcesMatch = block.match(/sources\s*:\s*\[([\s\S]*?)\]\s*,\s*summary/);

  if (!sourcesMatch) return [];

  const sourceText = sourcesMatch[1];

  const sources = [];
  const sourceRegex = /\{\s*label\s*:\s*['"`]([^'"`]+)['"`]\s*,\s*url\s*:\s*['"`]([^'"`]+)['"`]\s*\}/g;

  let match;

  while ((match = sourceRegex.exec(sourceText)) !== null) {
    sources.push({
      label: match[1].trim(),
      url: match[2].trim()
    });
  }

  return sources;
}

function readCities(block) {
  const citiesIndex = block.search(/cities\s*:\s*\{/);

  if (citiesIndex === -1) return [];

  const start = block.indexOf("{", citiesIndex);
  const citiesBlock = extractBalancedBlock(block, start);
  const citiesContent = citiesBlock.slice(1, -1);

  const cities = [];
  const cityRegex = /['"`]([^'"`]+)['"`]\s*:\s*\[/g;

  let match;

  while ((match = cityRegex.exec(citiesContent)) !== null) {
    cities.push(match[1].trim());
  }

  return [...new Set(cities)].sort((a, b) =>
    a.localeCompare(b, "pt-BR", { sensitivity: "base" })
  );
}

function splitTopLevelCountries(countriesObject) {
  const content = countriesObject.slice(1, -1);
  const entries = [];

  let i = 0;

  while (i < content.length) {
    while (i < content.length && /[\s,]/.test(content[i])) i++;

    if (content[i] !== "'" && content[i] !== '"' && content[i] !== "`") {
      i++;
      continue;
    }

    const quote = content[i];
    const keyStart = i + 1;
    const keyEnd = content.indexOf(quote, keyStart);

    if (keyEnd === -1) break;

    const key = content.slice(keyStart, keyEnd);

    i = keyEnd + 1;

    while (i < content.length && /[\s:]/.test(content[i])) i++;

    if (content[i] !== "{") {
      continue;
    }

    const valueStart = i;
    const value = extractBalancedBlock(content, valueStart);

    if (!value) break;

    entries.push({
      key,
      block: value
    });

    i = valueStart + value.length;
  }

  return entries;
}

function extractCountries(html) {
  const countriesObject = findObjectByName(html, "countries");

  if (!countriesObject) return [];

  const entries = splitTopLevelCountries(countriesObject);

  return entries.map(({ key, block }) => {
    const name = readStringValue(block, "name");
    const aliases = readArrayStrings(block, "aliases");
    const summary = readSummary(block);
    const sources = readSources(block);
    const cities = readCities(block);

    return {
      id: key,
      country: name || key,
      aliases,
      summary,
      cities,
      totalCities: cities.length,
      sources
    };
  });
}

function extractCityRedirects(html) {
  const redirectsObject = findObjectByName(html, "cityRedirects");

  if (!redirectsObject) return [];

  const redirects = [];
  const regex = /['"`]([^'"`]+)['"`]\s*:\s*\{\s*countryKey\s*:\s*['"`]([^'"`]+)['"`]\s*,\s*cityKey\s*:\s*['"`]([^'"`]+)['"`]\s*,\s*displayName\s*:\s*['"`]([^'"`]+)['"`]/g;

  let match;

  while ((match = regex.exec(redirectsObject)) !== null) {
    redirects.push({
      alias: match[1].trim(),
      countryKey: match[2].trim(),
      cityKey: match[3].trim(),
      displayName: match[4].trim()
    });
  }

  return redirects;
}

function extractInteractiveDetails(html) {
  const matches = [
    ...html.matchAll(/const\s+([A-Z_]+)_INTERACTIVE_DETAILS\s*=\s*\{/g)
  ];

  return matches.map(match => match[1]);
}

function extractValidUrls(html) {
  const urls = [
    ...new Set(
      (html.match(/https?:\/\/[^\s"'<>`]+/g) || [])
        .map(url => url.replace(/[),.;]+$/g, ""))
        .filter(url => url.includes("."))
        .filter(url => url.length > 12)
    )
  ];

  return urls.sort();
}

function buildStructure(html) {
  const countries = extractCountries(html);
  const redirects = extractCityRedirects(html);
  const interactiveDetails = extractInteractiveDetails(html);
  const sources = extractValidUrls(html);

  return {
    extractedAt: new Date().toISOString(),
    totalCountriesDetected: countries.length,
    totalCityRedirectsDetected: redirects.length,
    totalInteractiveDetailBlocksDetected: interactiveDetails.length,
    totalSourcesDetected: sources.length,
    countries,
    cityRedirects: redirects,
    interactiveDetails,
    sources
  };
}

function main() {
  console.log("\n🚀 Extraindo estrutura avançada do documentos.html...\n");

  if (!fs.existsSync(htmlPath)) {
    throw new Error("documentos.html não encontrado.");
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const structure = buildStructure(html);

  fs.writeFileSync(
    outputPath,
    JSON.stringify(structure, null, 2),
    "utf8"
  );

  console.log("✅ Extração avançada concluída.");
  console.log(`📄 Arquivo criado: ${outputPath}`);
  console.log(`🌍 Países detectados: ${structure.totalCountriesDetected}`);
  console.log(`🏙️ Redirecionamentos de cidades detectados: ${structure.totalCityRedirectsDetected}`);
  console.log(`🧩 Blocos interativos detectados: ${structure.totalInteractiveDetailBlocksDetected}`);
  console.log(`🔗 Fontes detectadas: ${structure.totalSourcesDetected}\n`);
}

main();
