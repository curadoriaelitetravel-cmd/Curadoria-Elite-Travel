const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/documentos-data.json');

function loadData() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(
    dataPath,
    JSON.stringify(data, null, 2),
    'utf8'
  );
}

function getBrazilTimestamp() {
  return new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });
}

function simulateOfficialVerification(country) {
  /*
    FUTURA AUTOMAÇÃO REAL:
    Aqui entraremos com:
    - leitura de fontes oficiais;
    - comparação automática;
    - atualização inteligente;
    - IA para adaptação textual.

    Neste momento:
    estamos criando a estrutura segura.
  */

  return {
    changed: false,
    entry: country.entry.summary,
    health: country.health.summary,
    diplomaticSupport: country.diplomaticSupport.summary
  };
}

function updateCountry(country) {
  console.log(`\n🌍 Verificando ${country.country}...`);

  const verification = simulateOfficialVerification(country);

  if (verification.changed) {
    console.log(`⚠️ Mudanças detectadas em ${country.country}`);

    country.entry.summary = verification.entry;
    country.health.summary = verification.health;
    country.diplomaticSupport.summary = verification.diplomaticSupport;

    country.lastAutomaticUpdate = getBrazilTimestamp();
  } else {
    console.log(`✅ Nenhuma mudança encontrada em ${country.country}`);
  }

  country.lastChecked = getBrazilTimestamp();

  return country;
}

function main() {
  console.log('\n🚀 Iniciando monitoramento automático...\n');

  const data = loadData();

  if (!data.countries || !Array.isArray(data.countries)) {
    throw new Error('Estrutura de países inválida.');
  }

  data.updatedAt = getBrazilTimestamp();

  data.countries = data.countries.map(updateCountry);

  saveData(data);

  console.log('\n✅ Monitoramento concluído.');
  console.log(`🕒 Última execução: ${data.updatedAt}\n`);
}

main();
