// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};

const SALVADOR_MAP_URL =
  "/images/mapa-transporte-salvador.png";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createSalvadorSystemCard(
  icon,
  title,
  description,
  details
) {
  return `
    <article class="operator-card">

      <span
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:38px;
          height:38px;
          border-radius:50%;
          border:1px solid rgba(212,175,55,.32);
          margin:0 auto 12px;
          font-size:18px;
        "
      >
        ${icon}
      </span>

      <strong>${title}</strong>

      <p
        style="
          margin:0;
          color:var(--muted);
          font-size:11px;
          line-height:1.5;
        "
      >
        ${description}
      </p>

      ${
        details
          ? `
            <small
              style="
                display:block;
                margin-top:8px;
                color:var(--gold-soft);
                line-height:1.5;
              "
            >
              ${details}
            </small>
          `
          : ""
      }

    </article>
  `;
}


function createSalvadorLegendItem(
  symbol,
  title,
  description
) {
  return `
    <article class="legend-card">

      <span class="legend-symbol">
        ${symbol}
      </span>

      <div>
        <strong>${title}</strong>
        <p>${description}</p>
      </div>

    </article>
  `;
}


function createSalvadorBrtCard(
  number,
  route,
  description
) {
  return `
    <article class="line-mini-card">

      <span
        class="line-mini-number"
        style="background:#235a95"
      >
        ${number}
      </span>

      <strong>
        Linha ${number}
      </strong>

      <span class="transport-type-pill">
        🚍 BRT
      </span>

      <span>
        ${route}
      </span>

      <small>
        Prefeitura de Salvador · SEMOB
      </small>

    </article>
  `;
}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openSalvadorNetworkMap() {

  if (
    document.getElementById(
      "salvadorNetworkMapLightbox"
    )
  ) {
    return;
  }

  const lightbox =
    document.createElement("div");

  lightbox.id =
    "salvadorNetworkMapLightbox";

  lightbox.style.cssText = `
    position:fixed;
    inset:0;
    z-index:99999;
    background:rgba(0,0,0,.93);
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
      id="closeSalvadorNetworkMap"
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
      src="${SALVADOR_MAP_URL}"
      alt="Mapa ampliado das Linhas 1 e 2 do Metrô de Salvador"
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

  document.body.appendChild(
    lightbox
  );

  const closeLightbox = () => {

    lightbox.remove();

    document.removeEventListener(
      "keydown",
      escapeHandler
    );

  };

  const escapeHandler = (event) => {

    if (event.key === "Escape") {
      closeLightbox();
    }

  };

  lightbox.addEventListener(
    "click",
    (event) => {

      if (
        event.target === lightbox ||
        event.target.id ===
          "closeSalvadorNetworkMap"
      ) {
        closeLightbox();
      }

    }
  );

  document.addEventListener(
    "keydown",
    escapeHandler
  );

}


// ============================================================
// MÓDULO
// ============================================================

window.SALVADOR_TRANSPORT_MODULES["network"] = {

  kicker:
    "Salvador · visão completa",

  title:
    "Rede de Transporte",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             MAPA DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mapa do Metrô
          </h4>

          <p class="panel-intro">
            As Linhas 1 e 2 formam
            a rede metroviária
            de Salvador e Lauro de Freitas.
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
              src="${SALVADOR_MAP_URL}"
              alt="Mapa das Linhas 1 e 2 do Metrô de Salvador"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openSalvadorNetworkMap()"
            />

          </div>

          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openSalvadorNetworkMap()"
            >
              Ampliar mapa
            </button>


            <a
              class="official-link"
              href="https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa oficial · Governo da Bahia
            </a>

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede de Salvador
          </h4>

          <p class="panel-intro">
            A mobilidade da cidade combina
            diferentes sistemas que se conectam
            em estações e terminais.
          </p>

          <div class="legend-grid">

            ${createSalvadorLegendItem(
              "M",
              "Metrô",
              "As Linhas 1 e 2 conectam diferentes regiões de Salvador e chegam ao eixo do Aeroporto."
            )}

            ${createSalvadorLegendItem(
              "BRT",
              "BRT Salvador",
              "Sistema municipal de ônibus de alta capacidade com corredores e estações próprias."
            )}

            ${createSalvadorLegendItem(
              "VLT",
              "VLT",
              "Sistema sobre trilhos em implantação, atualmente em operação assistida em trecho do Subúrbio Ferroviário."
            )}

            ${createSalvadorLegendItem(
              "🚌",
              "Ônibus urbanos",
              "Complementam a cobertura municipal e fazem conexões com metrô, BRT e terminais."
            )}

            ${createSalvadorLegendItem(
              "🌆",
              "Ônibus metropolitanos",
              "Conectam Salvador a outros municípios da Região Metropolitana."
            )}

            ${createSalvadorLegendItem(
              "⛴",
              "Ferry-Boat",
              "Sistema hidroviário que realiza a travessia entre Salvador e a Ilha de Itaparica."
            )}

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS SISTEMAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais sistemas
          </h4>

          <p class="panel-intro">
            Identifique primeiro qual sistema
            atende melhor a região do seu destino.
          </p>

          <div class="operator-grid">

            ${createSalvadorSystemCard(
              "🚇",
              "Metrô",
              "Principal sistema sobre trilhos em operação regular.",
              "Linhas 1 e 2"
            )}

            ${createSalvadorSystemCard(
              "🚍",
              "BRT Salvador",
              "Rede municipal de ônibus em corredores estruturados.",
              "B1, B2, B3, B4 e B5"
            )}

            ${createSalvadorSystemCard(
              "🚊",
              "VLT",
              "Novo sistema sobre trilhos em implantação.",
              "Operação assistida em trecho limitado"
            )}

            ${createSalvadorSystemCard(
              "🚌",
              "Ônibus",
              "Redes municipal e metropolitana.",
              "Conexões com terminais e metrô"
            )}

            ${createSalvadorSystemCard(
              "⛴",
              "Ferry-Boat",
              "Sistema hidroviário para passageiros e veículos.",
              "São Joaquim ↔ Bom Despacho"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô
          </h4>

          <p class="panel-intro">
            O sistema metroviário
            possui duas linhas integradas.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#a83220",
              "1",
              "Linha 1",
              "Metrô",
              "Lapa ↔ Águas Claras",
              "Sistema Metroviário Salvador e Lauro de Freitas"
            )}

            ${createLineMiniCard(
              "#173d75",
              "2",
              "Linha 2",
              "Metrô",
              "Acesso Norte ↔ Aeroporto",
              "Sistema Metroviário Salvador e Lauro de Freitas"
            )}

          </div>


          <div
            class="comparison-grid"
            style="margin-top:14px;"
          >

            <article class="comparison-card">

              <strong>
                Acesso Norte
              </strong>

              <p>
                É o principal ponto
                de conexão entre
                as Linhas 1 e 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Aeroporto
              </strong>

              <p>
                A Linha 2 chega
                à Estação Aeroporto,
                no eixo de acesso
                ao terminal aéreo.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Águas Claras
              </strong>

              <p>
                A Linha 1 atende
                Águas Claras,
                região da nova Rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT Salvador
          </h4>

          <p class="panel-intro">
            A Prefeitura informa atualmente
            cinco linhas em operação no sistema.
          </p>

          <div class="lines-grid">

            ${createSalvadorBrtCard(
              "B1",
              "Estação Rodoviária ↔ Estação Pituba",
              "Via Cidadela"
            )}

            ${createSalvadorBrtCard(
              "B2",
              "Estação Rodoviária ↔ Rio Vermelho",
              "Via Pituba e Amaralina"
            )}

            ${createSalvadorBrtCard(
              "B3",
              "Estação Rodoviária ↔ Pituba",
              "Via Paulo VI"
            )}

            ${createSalvadorBrtCard(
              "B4",
              "Estação Pituba ↔ Estação Lapa",
              "Atende o trecho 2 do BRT"
            )}

            ${createSalvadorBrtCard(
              "B5",
              "Estação Rodoviária ↔ Estação Lapa",
              "Conecta os dois eixos do sistema"
            )}

          </div>


          <div class="fare-note">

            As linhas e a operação
            podem passar por ajustes.
            Consulte a Secretaria Municipal
            de Mobilidade antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT de Salvador
          </h4>

          <p class="panel-intro">
            O VLT está sendo implantado
            gradualmente pelo Governo da Bahia.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Situação atual
              </strong>

              <p>
                A operação assistida
                de passageiros começou
                em 29 de junho de 2026.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trecho assistido
              </strong>

              <p>
                A etapa atual ocorre
                entre Calçada e Lobato,
                em percurso de aproximadamente
                quatro quilômetros.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Horário atual
              </strong>

              <p>
                Segunda a sexta-feira,
                exceto feriados,
                das 8h às 16h.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sistema em expansão
              </strong>

              <p>
                Outros trechos
                permanecem em implantação.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Para quem está viajando:
            </strong>

            como se trata de operação assistida,
            confirme a programação pública
            antes de depender do VLT
            em um deslocamento essencial.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus urbanos e metropolitanos
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Ônibus urbanos
              </strong>

              <p>
                Atendem bairros
                e regiões fora dos principais
                eixos do metrô e BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus metropolitanos
              </strong>

              <p>
                Ligam Salvador
                a outros municípios
                da Região Metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Integração
              </strong>

              <p>
                Terminais e estações
                permitem combinar
                diferentes sistemas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>

          <p class="panel-intro">
            O transporte hidroviário
            intermunicipal é regulado
            e fiscalizado pela AGERBA.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Salvador
              </span>

              <strong>
                Terminal São Joaquim
              </strong>

              <p>
                É o terminal
                de embarque do sistema
                na capital.
              </p>

              <span class="route-compare-result">
                Salvador
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ilha de Itaparica
              </span>

              <strong>
                Terminal Bom Despacho
              </strong>

              <p>
                É o terminal
                localizado na Ilha
                de Itaparica.
              </p>

              <span class="route-compare-result">
                Itaparica
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Sistema
              </span>

              <strong>
                Passageiros e veículos
              </strong>

              <p>
                A travessia atende
                passageiros e diferentes
                categorias de veículos.
              </p>

              <span class="route-compare-result">
                Consulte a AGERBA
              </span>

            </article>

          </div>


          <div class="fare-note">

            Horários e condições
            de operação podem sofrer alterações.
            Consulte a AGERBA antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             QUAL SISTEMA PROCURAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema procurar primeiro?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Aeroporto ou eixo metroviário
              </strong>

              <p>
                Comece verificando
                as Linhas 1 e 2.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Pituba, Rio Vermelho ou Lapa
              </strong>

              <p>
                Compare BRT,
                metrô e ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Bairro fora dos eixos principais
              </strong>

              <p>
                Consulte a rede
                municipal de ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Região Metropolitana
              </strong>

              <p>
                Consulte metrô
                e transporte metropolitano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴</span>

              <strong>
                Ilha de Itaparica
              </strong>

              <p>
                Consulte o sistema
                Ferry-Boat pela AGERBA.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa do Metrô · CTB
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTB · Governo da Bahia
          </a>


          <a
            class="official-link"
            href="https://mobilidade.salvador.ba.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/transporte-hidroviario"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte hidroviário · AGERBA
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};


// ============================================================
// DISPONIBILIZA O LIGHTBOX
// ============================================================

window.openSalvadorNetworkMap =
  openSalvadorNetworkMap;
