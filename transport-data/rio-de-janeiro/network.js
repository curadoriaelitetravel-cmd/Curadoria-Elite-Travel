// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: REDE METROPOLITANA
// ============================================================

window.RIO_TRANSPORT_MODULES = window.RIO_TRANSPORT_MODULES || {};

const RIO_MAP_URL =
  "/images/mapa-transporte-rio-de-janeiro.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createRioSystemCard(
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
          margin-bottom:12px;
          font-size:18px;
        "
      >
        ${icon}
      </span>

      <strong>${title}</strong>

      <p>${description}</p>

      ${
        details
          ? `
            <small
              style="
                display:block;
                margin-top:8px;
                color:var(--muted);
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


function createRioLegendItem(
  symbol,
  title,
  description
) {
  return `
    <article class="legend-card">

      <span
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          min-width:38px;
          width:38px;
          height:38px;
          border-radius:50%;
          border:1px solid rgba(212,175,55,.35);
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


function createRioCorridorCard(
  letter,
  name,
  description,
  color
) {
  return `
    <article class="line-mini-card">

      <div class="line-mini-head">

        <span
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            min-width:38px;
            height:38px;
            padding:0 10px;
            border-radius:50%;
            background:${color};
            color:#fff;
            font-weight:800;
          "
        >
          ${letter}
        </span>

        <div>
          <strong>${name}</strong>
          <small style="display:block;">BRT</small>
        </div>

      </div>

      <p>${description}</p>

      <span class="line-operator">
        MOBI-Rio
      </span>

    </article>
  `;
}


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openRioNetworkMap() {

  if (document.getElementById("rioNetworkMapLightbox")) {
    return;
  }

  const lightbox = document.createElement("div");

  lightbox.id = "rioNetworkMapLightbox";

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
      id="closeRioNetworkMap"
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
      src="${RIO_MAP_URL}"
      alt="Mapa ampliado da rede metropolitana de transportes do Rio de Janeiro"
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
        event.target.id === "closeRioNetworkMap"
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

window.RIO_TRANSPORT_MODULES["network"] = {

  kicker: "Rio de Janeiro · visão completa",

  title: "Rede Metropolitana",

  body() {

    return `

      <div class="network-layout">

        <!-- ==================================================
             MAPA GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mapa metropolitano
          </h4>

          <p class="panel-intro">
            Uma visão integrada dos principais sistemas
            de transporte da Região Metropolitana do Rio de Janeiro.
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
              src="${RIO_MAP_URL}"
              alt="Mapa Metropolitano de Transportes do Rio de Janeiro"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openRioNetworkMap()"
            />

          </div>

          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openRioNetworkMap()"
            >
              Ampliar mapa
            </button>

            <a
              class="official-link"
              href="https://www.rj.gov.br/transporte/node/797"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar fonte oficial
            </a>

          </div>

          <div class="fare-note">
            <strong>Atenção à identificação dos trens:</strong>
            o mapa salvo pode ainda apresentar a marca SuperVia.
            Desde 30 de maio de 2026, a operação ferroviária
            passou para a Trens RJ, sob responsabilidade
            do consórcio Nova Via Mobilidade.
          </div>

        </section>


        <!-- ==================================================
             COMO ENTENDER A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda este mapa
          </h4>

          <p class="panel-intro">
            O Rio não possui uma única rede com um único operador.
            Diferentes sistemas se encontram em estações,
            terminais e áreas de conexão.
          </p>

          <div class="legend-grid">

            ${createRioLegendItem(
              "M",
              "Metrô",
              "Rede urbana sobre trilhos operada pelo MetrôRio."
            )}

            ${createRioLegendItem(
              "T",
              "Trens metropolitanos",
              "Ligam o Centro e outras regiões da capital a municípios da Região Metropolitana."
            )}

            ${createRioLegendItem(
              "BRT",
              "BRT",
              "Rede de ônibus de alta capacidade em corredores segregados."
            )}

            ${createRioLegendItem(
              "VLT",
              "VLT Carioca",
              "Sistema de veículo leve sobre trilhos no Centro e Região Portuária."
            )}

            ${createRioLegendItem(
              "⛴",
              "Barcas",
              "Ligações hidroviárias entre o Rio, Niterói, Ilha do Governador e outros destinos."
            )}

            ${createRioLegendItem(
              "↔",
              "Conexão",
              "Ponto onde é possível trocar de sistema ou continuar a viagem em outro modal."
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
            Identifique primeiro qual sistema atende sua região.
            Depois consulte a linha, o sentido e o meio de pagamento.
          </p>

          <div class="operator-grid">

            ${createRioSystemCard(
              "🚇",
              "MetrôRio",
              "Atende principalmente Centro, Zona Sul, Tijuca, Zona Norte e Barra da Tijuca.",
              "Linhas 1, 2 e 4."
            )}

            ${createRioSystemCard(
              "🚆",
              "Trens RJ",
              "Rede ferroviária metropolitana de grande alcance.",
              "Desde maio de 2026, substitui a antiga operação da SuperVia."
            )}

            ${createRioSystemCard(
              "🚌",
              "BRT · MOBI-Rio",
              "Rede expressa de ônibus com corredores segregados e estações.",
              "Transoeste, Transcarioca, Transolímpica e Transbrasil."
            )}

            ${createRioSystemCard(
              "🚊",
              "VLT Carioca",
              "Circula principalmente pelo Centro e Região Portuária.",
              "Útil para conexões com terminais, metrô, rodoviária e aeroportos."
            )}

            ${createRioSystemCard(
              "⛴",
              "Barcas Rio",
              "Sistema hidroviário estadual.",
              "Praça XV funciona como o principal ponto de conexão no Centro."
            )}

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MetrôRio
          </h4>

          <p class="panel-intro">
            O sistema possui três linhas principais.
            Em alguns trechos, linhas diferentes compartilham estações.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#e47d2a",
              "1",
              "Laranja",
              "Metrô",
              "Uruguai ↔ General Osório",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#61a744",
              "2",
              "Verde",
              "Metrô",
              "Pavuna ↔ Botafogo",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#f3c323",
              "4",
              "Amarela",
              "Metrô",
              "Jardim Oceânico ↔ General Osório",
              "MetrôRio"
            )}

          </div>

          <div class="official-map-actions">

            <a
              class="official-link"
              href="https://www.metrorio.com.br/VadeMetro/MapaInterativo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa interativo do MetrôRio
            </a>

          </div>

        </section>


        <!-- ==================================================
             TRENS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Trens metropolitanos
          </h4>

          <p class="panel-intro">
            A ferrovia atende trajetos longos pela capital
            e por municípios da Região Metropolitana.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>Operação atual</strong>

              <p>
                Desde 30 de maio de 2026,
                a Trens RJ passou a operar o sistema ferroviário,
                substituindo a SuperVia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>Estrutura da rede</strong>

              <p>
                O sistema possui cinco ramais,
                três extensões e mais de cem estações,
                cobrindo grande parte da Região Metropolitana.
              </p>

            </article>

          </div>

          <div class="fare-note">
            Em mapas, placas ou conteúdos produzidos antes da transição,
            você ainda pode encontrar a marca SuperVia.
          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT · MOBI-Rio
          </h4>

          <p class="panel-intro">
            Os corredores BRT funcionam como grandes eixos
            de deslocamento por ônibus articulados.
          </p>

          <div class="lines-grid">

            ${createRioCorridorCard(
              "T",
              "Transoeste",
              "Principal eixo entre Barra da Tijuca, Recreio e Zona Oeste.",
              "#dc5a32"
            )}

            ${createRioCorridorCard(
              "C",
              "Transcarioca",
              "Liga a Barra e a Zona Norte, com conexão ao Aeroporto Internacional do Galeão.",
              "#397ec0"
            )}

            ${createRioCorridorCard(
              "O",
              "Transolímpica",
              "Conecta áreas da Zona Oeste e importantes terminais do sistema.",
              "#80ae43"
            )}

            ${createRioCorridorCard(
              "B",
              "Transbrasil",
              "Opera pelo eixo da Avenida Brasil e chega ao Terminal Gentileza.",
              "#dfa824"
            )}

          </div>

        </section>


        <!-- ==================================================
             VLT + BARCAS
        =================================================== -->

        <div class="network-row">

          <section class="panel-box">

            <h4 class="panel-title">
              VLT Carioca
            </h4>

            <p class="panel-intro">
              Uma opção prática para deslocamentos
              no Centro e na Região Portuária.
            </p>

            <div class="answer-block">

              <strong>Onde ele é mais útil</strong>

              <p>
                Conexões entre Centro, Praça Mauá,
                Rodoviária do Rio, Terminal Gentileza,
                Aeroporto Santos Dumont
                e outros pontos centrais.
              </p>

            </div>

            <div class="answer-block">

              <strong>Atenção</strong>

              <p>
                O VLT possui regras próprias de validação.
                Não embarque sem confirmar o pagamento.
              </p>

            </div>

          </section>


          <section class="panel-box">

            <h4 class="panel-title">
              Barcas
            </h4>

            <p class="panel-intro">
              A Praça XV é o principal ponto hidroviário
              para quem está no Centro do Rio.
            </p>

            <div class="answer-block">

              <strong>Praça XV ↔ Praça Arariboia</strong>

              <p>
                Ligação direta entre o Centro do Rio
                e o Centro de Niterói.
              </p>

            </div>

            <div class="answer-block">

              <strong>Outras ligações</strong>

              <p>
                A rede também possui serviços para
                Charitas, Cocotá e Paquetá,
                além de travessias para Ilha Grande
                a partir de Angra dos Reis e Mangaratiba.
              </p>

            </div>

          </section>

        </div>


        <!-- ==================================================
             COMO ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema procurar primeiro?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">
              <span>🚇</span>
              <strong>Centro, Zona Sul ou Tijuca</strong>
              <p>
                Comece verificando o MetrôRio.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🚆</span>
              <strong>Baixada e regiões mais afastadas</strong>
              <p>
                Confira primeiro os trens metropolitanos.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🚌</span>
              <strong>Barra, Recreio e Zona Oeste</strong>
              <p>
                Compare BRT com metrô e ônibus.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🚊</span>
              <strong>Centro e Região Portuária</strong>
              <p>
                O VLT pode reduzir bastante a caminhada.
              </p>
            </article>

            <article class="planner-check-card">
              <span>⛴</span>
              <strong>Niterói e trajetos hidroviários</strong>
              <p>
                Consulte as Barcas antes de comparar alternativas terrestres.
              </p>
            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.rj.gov.br/transporte/node/797"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa Metropolitano · Governo do RJ
          </a>

          <a
            class="official-link"
            href="https://www.metrorio.com.br/VadeMetro/MapaInterativo"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetrôRio
          </a>

          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MOBI-Rio
          </a>

          <a
            class="official-link"
            href="https://barcasrio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barcas Rio
          </a>

        </div>

        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;
  }
};


// ============================================================
// Disponibiliza o lightbox para o HTML gerado pelo módulo.
// ============================================================

window.openRioNetworkMap =
  openRioNetworkMap;
