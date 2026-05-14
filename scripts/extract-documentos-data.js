const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../documentos.html');
const outputPath = path.join(__dirname, '../data/documentos-extracted.json');

function extractCountryBlocks(html) {
  const countryMatches = [
    ...html.matchAll(/const\s+([A-Z_]+)_INTERACTIVE_DETAILS\s*=\s*\{/g)
  ];

  return countryMatches.map(match => ({
    variable: match[1],
    country: formatCountryName(match[1])
  }));
}

function formatCountryName(variableName) {
  return variableName
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function extractSources(html) {
  const urls = [
    ...new Set(
      (html.match(/https:\/\/[^"'\\s<>]+/g) || [])
    )
  ];

  return urls.sort();
}

function extractAliases(html) {
  const aliases = [];

  const aliasMatches = html.match(/placeholder="Digite um país ou cidade, como([^"]+)"/);

  if (aliasMatches && aliasMatches[1]) {
    aliasMatches[1]
      .split(',')
      .map(item => item.trim())
      .forEach(item => {
        if (item) aliases.push(item);
      });
  }

  return [...new Set(aliases)];
}

function buildStructure(html) {
  const countries = extractCountryBlocks(html);
  const sources = extractSources(html);
  const aliases = extractAliases(html);

  return {
    extractedAt: new Date().toISOString(),
    totalCountriesDetected: countries.length,
    totalSourcesDetected: sources.length,

    countries,

    aliases,

    sources
  };
}

function main() {
  console.log('\n🚀 Extraindo estrutura do documentos.html...\n');

  if (!fs.existsSync(htmlPath)) {
    throw new Error('documentos.html não encontrado.');
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  const structure = buildStructure(html);

  fs.writeFileSync(
    outputPath,
    JSON.stringify(structure, null, 2),
    'utf8'
  );

  console.log('✅ Estrutura extraída com sucesso.');
  console.log(`📄 Arquivo criado: ${outputPath}`);
  console.log(`🌍 Países detectados: ${structure.totalCountriesDetected}`);
  console.log(`🔗 Fontes detectadas: ${structure.totalSourcesDetected}\n`);
}

main();
