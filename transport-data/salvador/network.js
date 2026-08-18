// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};

const SALVADOR_MAP_URL =
  "/images/mapa-transporte-salvador.jpg";


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
        ${description}
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
      alt="Mapa ampliado das linhas 1 e 2 do Metrô de Salvador"
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
            As Linhas 1 e 2 formam a principal
            rede sobre trilhos em operação regular
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
              Consultar fonte oficial
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
            A mobilidade da cidade não depende
            apenas do metrô. Diferentes sistemas
            se conectam em estações e terminais.
          </p>

          <div class="legend-grid">

            ${createSalvadorLegendItem(
              "M",
              "Metrô",
              "Linhas 1 e 2 conectam áreas centrais, rodoviária, bairros e Aeroporto."
            )}

            ${createSalvadorLegendItem(
              "BRT",
              "BRT Salvador",
              "Rede de ônibus de alta capacidade com corredores e estações próprias."
            )}

            ${createSalvadorLegendItem(
              "VLT",
              "VLT",
              "Novo sistema em operação assistida no Subúrbio Ferroviário."
            )}

            ${createSalvadorLegendItem(
              "🚌",
              "Ônibus urbanos",
              "Complementam a cobertura nos bairros e alimentam metrô e terminais."
            )}

            ${createSalvadorLegendItem(
              "🌆",
              "Ônibus metropolitanos",
              "Ligam Salvador aos municípios da Região Metropolitana."
            )}

            ${createSalvadorLegendItem(
              "⛴",
              "Ferry-Boat",
              "Travessia marítima entre Salvador e a Ilha de Itaparica."
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
              "Principal eixo sobre trilhos da cidade.",
              "Linhas 1 e 2"
            )}

            ${createSalvadorSystemCard(
              "🚍",
              "BRT Salvador",
              "Corredores de ônibus de alta capacidade.",
              "B1, B2, B3, B4 e B5"
            )}

            ${createSalvadorSystemCard(
              "🚊",
              "VLT",
              "Novo sistema ferroviário urbano.",
              "Operação assistida em trecho limitado"
            )}

            ${createSalvadorSystemCard(
              "🚌",
              "Ônibus",
              "Rede urbana e metropolitana.",
              "Integração com terminais e metrô"
            )}

            ${createSalvadorSystemCard(
              "⛴",
              "Ferry-Boat",
              "Travessia com passageiros e veículos.",
              "São Joaquim ↔ Bom Despacho"
            )}

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô de Salvador
          </h4>

          <p class="panel-intro">
            O sistema possui duas linhas
            integradas entre si.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#a83220",
              "1",
              "Linha 1",
              "Metrô",
              "Lapa ↔ Águas Claras / Cajazeiras",
              "CCR Metrô Bahia"
            )}

            ${createLineMiniCard(
              "#173d75",
              "2",
              "Linha 2",
              "Metrô",
              "Acesso Norte ↔ Aeroporto",
              "CCR Metrô Bahia"
            )}

          </div>


          <div class="comparison-grid"
               style="margin-top:14px;">

            <article class="comparison-card">

              <strong>
                Acesso Norte
              </strong>

              <p>
                Principal estação de conexão
                entre as Linhas 1 e 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rodoviária
              </strong>

              <p>
                A Linha 2 possui estação
                junto à região da Rodoviária
                e do Shopping da Bahia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Aeroporto
              </strong>

              <p>
                A Linha 2 chega à Estação Aeroporto,
                com ligação complementar
                ao terminal aéreo.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Águas Claras
              </strong>

              <p>
                A extensão da Linha 1
                conecta o metrô
                à nova Rodoviária da Bahia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIO DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Operação do metrô
          </h4>

          <div class="hours-grid">

            <article class="hours-card">

              <span>
                🕔
              </span>

              <strong>
                Início
              </strong>

              <p>
                Operação regular
                a partir das 5h.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🌙
              </span>

              <strong>
                Encerramento
              </strong>

              <p>
                Operação regular
                até a meia-noite.
              </p>

            </article>


            <article class="hours-card">

              <span>
                📅
              </span>

              <strong>
                Todos os dias
              </strong>

              <p>
                O sistema opera
                diariamente.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Operações especiais podem alterar horários.
            </strong>

            Carnaval, festas, jogos
            e grandes eventos podem gerar
            extensões ou mudanças temporárias.

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
            O BRT funciona em corredores próprios
            e complementa a rede de metrô
            e ônibus convencionais.
          </p>

          <div class="lines-grid">

            ${createSalvadorBrtCard(
              "B1",
              "Rodoviária ↔ Pituba",
              "Ligação entre a região da Rodoviária e Pituba."
            )}

            ${createSalvadorBrtCard(
              "B2",
              "Rodoviária ↔ Rio Vermelho",
              "Atende Pituba, Amaralina e Rio Vermelho."
            )}

            ${createSalvadorBrtCard(
              "B3",
              "Rodoviária ↔ Pituba",
              "Serviço via Paulo VI."
            )}

            ${createSalvadorBrtCard(
              "B4",
              "Pituba ↔ Lapa",
              "Conecta Pituba ao Centro."
            )}

            ${createSalvadorBrtCard(
              "B5",
              "Rodoviária ↔ Lapa",
              "Conecta dois importantes terminais."
            )}

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
            O novo VLT está sendo implantado
            gradualmente e ainda não deve ser tratado
            como uma rede totalmente concluída.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Situação atual
              </strong>

              <p>
                O sistema iniciou operação assistida
                de passageiros em junho de 2026.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trecho atual
              </strong>

              <p>
                Operação assistida
                entre Calçada e Lobato,
                com atendimento ao trecho
                do Subúrbio Ferroviário.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Serviço limitado
              </strong>

              <p>
                Horários e operação
                ainda são diferentes
                de um sistema plenamente implantado.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Expansão
              </strong>

              <p>
                Outros trechos do VLT
                permanecem em implantação.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Para quem está viajando:
            </strong>

            confirme a operação do VLT
            no dia do deslocamento
            antes de incluí-lo como parte essencial
            do seu trajeto.

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
                Atendem bairros,
                terminais e áreas
                fora dos principais eixos
                do metrô e BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus metropolitanos
              </strong>

              <p>
                Ligam Salvador
                a municípios como Lauro de Freitas,
                Camaçari, Simões Filho
                e outros destinos da RMS.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Terminais
              </strong>

              <p>
                Águas Claras, Aeroporto,
                Mussurunga e Pirajá
                são importantes pontos
                de conexão metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Integração
              </strong>

              <p>
                Ônibus podem alimentar
                metrô, BRT
                e terminais de conexão.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY BOAT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>

          <p class="panel-intro">
            É uma alternativa importante
            para quem cruza a Baía de Todos-os-Santos
            em direção à Ilha de Itaparica.
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
                Terminal localizado
                na Cidade Baixa.
              </p>

              <span class="route-compare-result">
                Embarque em Salvador
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ilha de Itaparica
              </span>

              <strong>
                Bom Despacho
              </strong>

              <p>
                Terminal localizado
                no município de Itaparica.
              </p>

              <span class="route-compare-result">
                Passageiros e veículos
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Travessia
              </span>

              <strong>
                São Joaquim ↔ Bom Despacho
              </strong>

              <p>
                O serviço opera
                em horários programados.
              </p>

              <span class="route-compare-result">
                Consulte antes de sair
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             QUAL PROCURAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema procurar primeiro?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>
                🚇
              </span>

              <strong>
                Aeroporto ou Rodoviária
              </strong>

              <p>
                Comece verificando o metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🚍
              </span>

              <strong>
                Pituba ou Rio Vermelho
              </strong>

              <p>
                Compare BRT,
                ônibus e metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🚌
              </span>

              <strong>
                Bairro fora dos eixos principais
              </strong>

              <p>
                Confira a rede
                de ônibus urbanos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🌆
              </span>

              <strong>
                Região Metropolitana
              </strong>

              <p>
                Compare metrô
                e ônibus metropolitanos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                ⛴
              </span>

              <strong>
                Ilha de Itaparica
              </strong>

              <p>
                Consulte o Ferry-Boat.
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
            href="https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa oficial do Metrô
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
            href="https://www.internacionaltravessias.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ferry-Boat
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
