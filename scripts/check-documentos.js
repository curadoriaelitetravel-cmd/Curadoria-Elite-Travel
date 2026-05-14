const fs = require("fs");
const path = require("path");

const statusPath = path.join(__dirname, "../data/documentos-status.json");
const documentosPath = path.join(__dirname, "../documentos.html");

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`✅ ${message}`);
}

if (!fs.existsSync(statusPath)) {
  fail("Arquivo data/documentos-status.json não encontrado.");
} else {
  ok("Arquivo de status encontrado.");
}

if (!fs.existsSync(documentosPath)) {
  fail("Arquivo documentos.html não encontrado.");
} else {
  ok("Arquivo documentos.html encontrado.");
}

const statusRaw = fs.readFileSync(statusPath, "utf8");
let status;

try {
  status = JSON.parse(statusRaw);
  ok("JSON de monitoramento válido.");
} catch (error) {
  fail("JSON de monitoramento inválido.");
}

if (!status.monitoring || status.monitoring.status !== "active") {
  fail("Monitoramento não está marcado como ativo.");
} else {
  ok("Monitoramento marcado como ativo.");
}

if (
  !status.monitoring ||
  status.monitoring.message !==
    "Monitoramento ativo • Informações revisadas regularmente"
) {
  fail("Mensagem de monitoramento está diferente do padrão aprovado.");
} else {
  ok("Mensagem de monitoramento preservada.");
}

const documentosHtml = fs.readFileSync(documentosPath, "utf8");

if (documentosHtml.includes("Monitoramento ativo • Informações revisadas regularmente")) {
  ok("Mensagem pública de monitoramento encontrada no documentos.html.");
} else {
  fail("Mensagem pública de monitoramento não encontrada no documentos.html.");
}

if (/Atualizado em|Última atualização|Revisado em/i.test(documentosHtml)) {
  fail("Possível data estática manual encontrada no documentos.html.");
} else {
  ok("Nenhuma data estática manual encontrada.");
}

if (documentosHtml.includes("<title>") && documentosHtml.includes("meta name=\"description\"")) {
  ok("SEO básico encontrado.");
} else {
  fail("SEO básico pode estar ausente.");
}

console.log("\nVerificação concluída.");
