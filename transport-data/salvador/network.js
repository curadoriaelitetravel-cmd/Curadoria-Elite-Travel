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

      <strong>
        ${title}
      </strong>

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

        <strong>
          ${title}
        </strong>

        <p>
          ${description}
        </p>

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

      <p
        style="
          margin:8px 0 0;
          font-size:11px;
          line-height:1.5;
          color:var(--muted);
        "
      >
        ${description}
      </p>

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
            As Linhas 1 e 2
            formam a rede metroviária
            de Salvador
            e do eixo de Lauro de Freitas.
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
            A mobilidade combina
            metrô,
            BRT,
            VLT,
            ônibus urbanos,
            ônibus metropolitanos
            e transporte hidroviário.
          </p>

          <div class="legend-grid">

            ${createSalvadorLegendItem(
              "M",
              "Metrô",
              "Duas linhas em operação conectam diferentes regiões de Salvador, Águas Claras e o eixo do Aeroporto."
            )}

            ${createSalvadorLegendItem(
              "BRT",
              "BRT Salvador",
              "Sistema municipal de alta capacidade com cinco linhas e estações próprias."
            )}

            ${createSalvadorLegendItem(
              "VLT",
              "VLT",
              "Novo sistema sobre trilhos, atualmente em operação assistida no primeiro trecho."
            )}

            ${createSalvadorLegendItem(
              "🚌",
              "Ônibus urbanos",
              "Ampliam a cobertura municipal e conectam bairros, terminais, metrô e BRT."
            )}

            ${createSalvadorLegendItem(
              "🌆",
              "Ônibus metropolitanos",
              "Conectam Salvador aos demais municípios da Região Metropolitana."
            )}

            ${createSalvadorLegendItem(
              "⛴",
              "Ferry-Boat",
              "Faz a travessia entre São Joaquim, em Salvador, e Bom Despacho, na Ilha de Itaparica."
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

          <div class="operator-grid">

            ${createSalvadorSystemCard(
              "🚇",
              "Metrô",
              "Principal sistema sobre trilhos em operação regular.",
              "2 linhas · 39 km · 21 estações"
            )}

            ${createSalvadorSystemCard(
              "🚍",
              "BRT Salvador",
              "Sistema municipal em corredores estruturados.",
              "B1 · B2 · B3 · B4 · B5"
            )}

            ${createSalvadorSystemCard(
              "🚊",
              "VLT",
              "Novo sistema sobre trilhos em implantação.",
              "Operação assistida no trecho inicial"
            )}

            ${createSalvadorSystemCard(
              "🚌",
              "Ônibus",
              "Redes municipal e metropolitana completam a cobertura.",
              "Conexões com metrô, BRT e terminais"
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
            O sistema possui
            duas linhas integradas,
            totalizando 39 km
            e 21 estações.
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
                Principal ponto
                de transferência
                entre as Linhas 1 e 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Lapa
              </strong>

              <p>
                Terminal da Linha 1
                na região central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Aeroporto
              </strong>

              <p>
                Terminal da Linha 2
                no eixo de acesso
                ao aeroporto.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Águas Claras
              </strong>

              <p>
                Terminal da Linha 1
                e referência metroviária
                para a Nova Rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NOVA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nova Rodoviária da Bahia
          </h4>

          <div class="visitor-alert">

            <strong>
              A rodoviária intermunicipal
              de Salvador agora fica
              em Águas Claras.
            </strong>

            O Terminal Salvador
            iniciou oficialmente
            suas operações
            em 20 de janeiro de 2026.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                A rodoviária possui
                conexão direta
                com a Estação Águas Claras.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus urbanos
              </strong>

              <p>
                O Terminal Águas Claras
                reúne conexões
                da rede municipal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropolitanos
              </strong>

              <p>
                Linhas metropolitanas
                também utilizam
                Águas Claras.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rodoviários
              </strong>

              <p>
                Serviços intermunicipais
                e interestaduais
                utilizam a nova estrutura.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ALERTA SOBRE RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Três referências que não devem ser confundidas
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Nova Rodoviária da Bahia
              </strong>

              <p>
                Terminal rodoviário
                intermunicipal e interestadual
                em Águas Claras.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Estação BRT Rodoviária
              </strong>

              <p>
                Estação do BRT
                no eixo da região
                do Shopping da Bahia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Terminal Shopping da Bahia
              </strong>

              <p>
                Terminal urbano
                que continua atendendo
                linhas municipais
                na região
                da antiga rodoviária.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              “Rodoviária” no nome de uma linha do BRT
              não significa que ela vá
              para a Nova Rodoviária de Águas Claras.
            </strong>

            Essa diferença é especialmente importante
            para quem está chegando
            ou saindo de Salvador
            por ônibus rodoviário.

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
            O sistema possui
            cinco linhas em operação.
          </p>

          <div class="lines-grid">

            ${createSalvadorBrtCard(
              "B1",
              "Estação BRT Rodoviária ↔ Estação BRT Pituba",
              "Via Cidadela"
            )}

            ${createSalvadorBrtCard(
              "B2",
              "Estação BRT Rodoviária ↔ Rio Vermelho",
              "Via Pituba e Amaralina"
            )}

            ${createSalvadorBrtCard(
              "B3",
              "Estação BRT Rodoviária ↔ Pituba",
              "Via Paulo VI"
            )}

            ${createSalvadorBrtCard(
              "B4",
              "Estação Pituba ↔ Estação Lapa",
              "Atende o eixo Pituba–Rio Vermelho–Lapa"
            )}

            ${createSalvadorBrtCard(
              "B5",
              "Estação BRT Rodoviária ↔ Estação Lapa",
              "Conecta a região da Estação BRT Rodoviária ao Centro"
            )}

          </div>

        </section>


        <!-- ==================================================
             BRT TRECHO CENTRAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT entre Pituba e Lapa
          </h4>

          <p class="panel-intro">
            O trecho mais recente
            ampliou a presença do BRT
            em direção à região central.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                B4
              </strong>

              <p>
                Pituba ↔ Lapa,
                passando por estações
                como Rio Vermelho,
                HGE,
                Vasco da Gama
                e Barris.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                B5
              </strong>

              <p>
                Estação BRT Rodoviária
                ↔ Lapa.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Integração
              </strong>

              <p>
                O BRT pode ser combinado
                com ônibus
                e metrô,
                conforme a viagem.
              </p>

            </article>

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
            O novo sistema
            está sendo implantado
            em etapas.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Operação assistida
              </strong>

              <p>
                O transporte
                de passageiros começou
                em 29 de junho de 2026.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Trecho atual
              </strong>

              <p>
                Calçada ↔ Lobato,
                em aproximadamente
                quatro quilômetros.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Dias
              </strong>

              <p>
                Segunda a sexta-feira,
                exceto feriados.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Horário
              </strong>

              <p>
                Das 8h às 16h
                nesta etapa assistida.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              A rede completa do VLT
              ainda não está disponível.
            </strong>

            O projeto possui
            aproximadamente 43,71 km
            e será implantado
            em diferentes trechos.

            Para uma viagem atual,
            considere apenas
            a operação assistida
            efetivamente disponível.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus urbanos e metropolitanos
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro de Salvador
              </span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Amplia a cobertura
                para bairros
                e regiões
                fora dos principais
                eixos do metrô e BRT.
              </p>

              <span class="route-compare-result">
                Rede municipal
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Outra cidade da RMS
              </span>

              <strong>
                Ônibus metropolitano
              </strong>

              <p>
                Liga Salvador
                a municípios
                da Região Metropolitana.
              </p>

              <span class="route-compare-result">
                Rede estadual
              </span>

            </article>

          </div>


          <div class="fare-note">

            As linhas metropolitanas
            possuem tarifas próprias
            e algumas participam
            de integração
            com o metrô.

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS CONEXÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos importantes de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Metrô,
                ônibus urbanos
                e BRT
                se encontram
                na região.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                Principal transferência
                entre as Linhas 1 e 2
                do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Integra metrô
                e diversas linhas
                de ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Mussurunga
              </strong>

              <p>
                Concentra conexões
                urbanas
                e metropolitanas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Conecta a Linha 2
                a serviços de ônibus
                e linhas metropolitanas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Metrô,
                ônibus
                e Nova Rodoviária
                convergem nesta região.
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
            O sistema hidroviário
            realiza a travessia
            entre Salvador
            e a Ilha de Itaparica.
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
                Terminal de embarque
                do sistema
                na capital.
              </p>

              <span class="route-compare-result">
                São Joaquim
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
                Terminal do sistema
                na Ilha de Itaparica.
              </p>

              <span class="route-compare-result">
                Bom Despacho
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Embarque
              </span>

              <strong>
                Passageiros e veículos
              </strong>

              <p>
                A travessia transporta
                passageiros
                e diferentes categorias
                de veículos.
              </p>

              <span class="route-compare-result">
                Sistema hidroviário
              </span>

            </article>

          </div>


          <div class="fare-note">

            Horário,
            número de embarcações
            e operações especiais
            são informações operacionais
            e podem mudar
            conforme o período.

          </div>

        </section>


        <!-- ==================================================
             QUAL SISTEMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende a fazer sentido?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Eixo do metrô
              </strong>

              <p>
                Comece verificando
                as Linhas 1 e 2.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Pituba, Rio Vermelho e Lapa
              </strong>

              <p>
                O BRT pode participar
                do deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Fora dos eixos principais
              </strong>

              <p>
                A rede municipal
                amplia a cobertura.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚊</span>

              <strong>
                Calçada e Lobato
              </strong>

              <p>
                Existe operação assistida
                do VLT
                no trecho inicial.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Outra cidade da RMS
              </strong>

              <p>
                Entre no sistema
                metropolitano estadual.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴</span>

              <strong>
                Ilha de Itaparica
              </strong>

              <p>
                O Ferry-Boat
                faz a travessia
                São Joaquim ↔ Bom Despacho.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE MUDA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que precisa ser confirmado no dia
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Horário
              </strong>

              <p>
                Ônibus,
                BRT,
                VLT,
                Ferry
                e metropolitanos
                possuem programação própria.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Linha específica
              </strong>

              <p>
                A escolha depende
                da origem
                e do destino.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Plataforma ou ponto
              </strong>

              <p>
                O local de embarque
                pode mudar
                conforme o serviço.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Operação especial
              </strong>

              <p>
                Eventos,
                feriados
                e alta demanda
                podem alterar
                temporariamente a rede.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
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
            href="https://www.ba.gov.br/trilhos/837/metro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede do Metrô · CTB
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
            href="https://www.ba.gov.br/trilhos/noticias/2026-06/1068/inicio-da-operacao-assistida-do-vlt-marca-nova-fase-da-mobilidade-em-salvador"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operação assistida do VLT · CTB
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/noticias/2026-06/8384/novo-terminal-rodoviario-de-salvador-amplia-servicos-e-fortalece-logistica-de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Rodoviária · AGERBA
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
