// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SÃO PAULO
// MÓDULO: REDE METROPOLITANA
// ============================================================

window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

// Imagem salva no próprio projeto.
// Local no GitHub:
// /images/mapa-transporte-sao-paulo-2026.jpg
const MAP_URL = "/images/mapa-transporte-sao-paulo-2026.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createLegendLine(color, title, description) {
  return `
    <article class="legend-card">
      <span
        class="legend-line"
        style="
          display:block;
          width:42px;
          height:5px;
          border-radius:999px;
          background:${color};
          margin-bottom:12px;
        "
      ></span>

      <strong>${title}</strong>
      <p>${description}</p>
    </article>
  `;
}


function createLegendSymbol(symbol, title, description) {
  return `
    <article class="legend-card">
      <span
        class="legend-symbol"
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:38px;
          height:38px;
          border:1px solid rgba(212,175,55,.35);
          border-radius:50%;
          margin-bottom:10px;
          font-weight:700;
        "
      >
        ${symbol}
      </span>

      <strong>${title}</strong>
      <p>${description}</p>
    </article>
  `;
}


function createOperatorCard(color, name, lines) {
  return `
    <article class="operator-card">
      <span
        class="operator-dot"
        style="
          display:inline-block;
          width:12px;
          height:12px;
          border-radius:50%;
          background:${color};
          margin-right:8px;
        "
      ></span>

      <strong>${name}</strong>
      <p>${lines}</p>
    </article>
  `;
}


function createLineMiniCard(
  color,
  number,
  name,
  type,
  route,
  operator
) {
  return `
    <article class="line-mini-card">

      <div class="line-mini-head">
        <span
          class="line-number"
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            min-width:34px;
            height:34px;
            padding:0 8px;
            border-radius:50%;
            background:${color};
            color:#fff;
            font-weight:700;
          "
        >
          ${number}
        </span>

        <div>
          <strong>Linha ${number} — ${name}</strong>
          <small style="display:block;">${type}</small>
        </div>
      </div>

      <p>${route}</p>
      <span class="line-operator">${operator}</span>

    </article>
  `;
}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openSPNetworkMap() {

  // Evita abrir dois lightboxes ao mesmo tempo.
  if (document.getElementById("spNetworkMapLightbox")) {
    return;
  }

  const lightbox = document.createElement("div");

  lightbox.id = "spNetworkMapLightbox";

  lightbox.style.cssText = `
    position:fixed;
    inset:0;
    z-index:99999;
    background:rgba(0,0,0,.92);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:24px;
    box-sizing:border-box;
    cursor:zoom-out;
  `;

  lightbox.innerHTML = `
    <button
      type="button"
      id="closeSPNetworkMap"
      aria-label="Fechar mapa ampliado"
      style="
        position:fixed;
        top:22px;
        right:28px;
        z-index:100001;
        width:46px;
        height:46px;
        border-radius:50%;
        border:1px solid rgba(212,175,55,.55);
        background:#090909;
        color:#d4af37;
        font-size:28px;
        line-height:1;
        cursor:pointer;
      "
    >
      ×
    </button>

    <img
      src="${MAP_URL}"
      alt="Mapa ampliado da rede metropolitana de São Paulo"
      style="
        display:block;
        max-width:96vw;
        max-height:94vh;
        width:auto;
        height:auto;
        object-fit:contain;
        background:#fff;
        box-shadow:0 18px 60px rgba(0,0,0,.65);
        cursor:default;
      "
    />
  `;

  document.body.appendChild(lightbox);

  const closeLightbox = () => {
    lightbox.remove();
    document.removeEventListener("keydown", escapeHandler);
  };

  const escapeHandler = (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  };

  lightbox.addEventListener("click", (event) => {
    if (
      event.target === lightbox ||
      event.target.id === "closeSPNetworkMap"
    ) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", escapeHandler);
}


// ============================================================
// MÓDULO
// ============================================================

window.SP_TRANSPORT_MODULES["network"] = {

  kicker: "São Paulo · visão completa",

  title: "Rede Metropolitana",

  body() {
    return `

      <div class="network-layout">

        <!-- ==================================================
             MAPA + LEGENDA
        =================================================== -->

        <div class="network-row">

          <section class="panel-box">

            <h4 class="panel-title">
              Mapa da rede
            </h4>

            <p class="panel-intro">
              Metrô, trens metropolitanos e monotrilho reunidos
              em uma única visualização.
            </p>

            <div
              class="official-map-wrap"
              style="
                overflow:hidden;
                border-radius:16px;
                background:#fff;
              "
            >

              <img
                class="official-map-image"
                src="${MAP_URL}"
                alt="Mapa da rede metropolitana de São Paulo em 2026"
                loading="lazy"
                style="
                  display:block;
                  width:100%;
                  height:auto;
                  cursor:zoom-in;
                "
                onclick="openSPNetworkMap()"
              />

            </div>

            <div class="official-map-actions">

              <button
                class="map-zoom-button"
                type="button"
                onclick="openSPNetworkMap()"
              >
                Ampliar mapa
              </button>

              <a
                class="official-link"
                href="https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar fonte oficial
              </a>

            </div>

          </section>


          <section class="panel-box">

            <h4 class="panel-title">
              Entenda este mapa
            </h4>

            <p class="panel-intro">
              Cores identificam linhas. Símbolos mostram conexões,
              serviços e pontos importantes.
            </p>

            <div class="legend-grid">

              ${createLegendLine(
                "#6f1935",
                "Linha escura",
                "É a Linha 7 — Rubi, um trem metropolitano operado pela TIC Trens."
              )}

              ${createLegendSymbol(
                "↔",
                "Integração gratuita",
                "Troca de linha sem pagamento adicional dentro da área indicada."
              )}

              ${createLegendSymbol(
                "R$",
                "Integração tarifada",
                "Existe conexão, mas com regra própria de cobrança."
              )}

              ${createLegendSymbol(
                "🚶",
                "Conexão a pé",
                "É necessário sair e caminhar entre as estações."
              )}

              ${createLegendSymbol(
                "✈",
                "Aeroporto",
                "Indica ligação com aeroporto ou serviço de acesso aeroportuário."
              )}

              ${createLegendSymbol(
                "B",
                "Terminal rodoviário",
                "Indica conexão com terminal de ônibus intermunicipal ou interestadual."
              )}

              ${createLegendSymbol(
                "E",
                "Serviço expresso",
                "Serviço que pode parar em menos estações."
              )}

              ${createLegendSymbol(
                "A",
                "Acesso livre",
                "Trecho ou estação indicada com acesso sem bloqueio tarifário."
              )}

            </div>

          </section>

        </div>


        <!-- ==================================================
             METRÔ X TREM + OPERADORES
        =================================================== -->

        <div class="network-row">

          <section class="panel-box">

            <h4 class="panel-title">
              Diferença entre metrô e trem
            </h4>

            <p class="panel-intro">
              Ambos fazem parte da rede, mas atendem escalas
              e trajetos diferentes.
            </p>

            <div class="comparison-grid">

              <article class="comparison-card">

                <strong>Metrô</strong>

                <p>
                  Opera principalmente dentro da cidade,
                  com estações mais próximas e alta frequência
                  em áreas urbanas.
                </p>

              </article>


              <article class="comparison-card">

                <strong>Trem metropolitano</strong>

                <p>
                  Liga a capital a bairros mais afastados
                  e municípios da Região Metropolitana.
                </p>

              </article>

            </div>

          </section>


          <section class="panel-box">

            <h4 class="panel-title">
              Operadores presentes no mapa
            </h4>

            <p class="panel-intro">
              Cada operador administra linhas específicas da rede.
            </p>

            <div class="operator-grid">

              ${createOperatorCard(
                "#224d93",
                "Metrô SP",
                "Linhas 1, 2, 3 e 15"
              )}

              ${createOperatorCard(
                "#d33a35",
                "CPTM",
                "Linhas 10, 11, 12 e 13"
              )}

              ${createOperatorCard(
                "#d7b11e",
                "ViaQuatro",
                "Linha 4"
              )}

              ${createOperatorCard(
                "#20a39c",
                "ViaMobilidade",
                "Linhas 5, 8 e 9"
              )}

              ${createOperatorCard(
                "#7c2f87",
                "TIC Trens",
                "Linha 7"
              )}

            </div>

          </section>

        </div>


        <!-- ==================================================
             LINHAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas da rede
          </h4>

          <p class="panel-intro">
            As linhas aparecem organizadas para facilitar
            a consulta durante a viagem.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#1f6fc2",
              "1",
              "Azul",
              "Metrô",
              "Jabaquara ↔ Tucuruvi",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#31945a",
              "2",
              "Verde",
              "Metrô",
              "Vila Prudente ↔ Vila Madalena",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#c94239",
              "3",
              "Vermelha",
              "Metrô",
              "Corinthians-Itaquera ↔ Palmeiras-Barra Funda",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#d4b11c",
              "4",
              "Amarela",
              "Metrô",
              "Luz ↔ Vila Sônia",
              "ViaQuatro"
            )}

            ${createLineMiniCard(
              "#8b4ba5",
              "5",
              "Lilás",
              "Metrô",
              "Capão Redondo ↔ Chácara Klabin",
              "ViaMobilidade"
            )}

            ${createLineMiniCard(
              "#6f1935",
              "7",
              "Rubi",
              "Trem metropolitano",
              "Luz ↔ Jundiaí",
              "TIC Trens"
            )}

            ${createLineMiniCard(
              "#8a8a8a",
              "8",
              "Diamante",
              "Trem metropolitano",
              "Júlio Prestes ↔ Itapevi",
              "ViaMobilidade"
            )}

            ${createLineMiniCard(
              "#49a8c4",
              "9",
              "Esmeralda",
              "Trem metropolitano",
              "Osasco ↔ Varginha",
              "ViaMobilidade"
            )}

            ${createLineMiniCard(
              "#24a184",
              "10",
              "Turquesa",
              "Trem metropolitano",
              "Brás ↔ Rio Grande da Serra",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#df7f32",
              "11",
              "Coral",
              "Trem metropolitano",
              "Luz ↔ Estudantes",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#223e89",
              "12",
              "Safira",
              "Trem metropolitano",
              "Brás ↔ Calmon Viana",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#37a17b",
              "13",
              "Jade",
              "Trem metropolitano",
              "Eng. Goulart ↔ Aeroporto-Guarulhos",
              "CPTM"
            )}

            ${createLineMiniCard(
              "#b3b3b3",
              "15",
              "Prata",
              "Monotrilho",
              "Vila Prudente ↔ Jardim Colonial",
              "Metrô SP"
            )}

            ${createLineMiniCard(
              "#b58735",
              "17",
              "Ouro",
              "Monotrilho",
              "Em implantação",
              "Metrô SP"
            )}

          </div>

        </section>

      </div>

    `;
  }
};


// ============================================================
// Torna a função disponível para os elementos HTML do módulo.
// ============================================================

window.openSPNetworkMap = openSPNetworkMap;
