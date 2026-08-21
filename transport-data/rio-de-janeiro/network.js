// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: REDE METROPOLITANA
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


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


function createRioLegendItem(
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

          <strong>
            ${name}
          </strong>

          <small style="display:block;">
            BRT
          </small>

        </div>

      </div>

      <p>
        ${description}
      </p>

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

  if (
    document.getElementById(
      "rioNetworkMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "rioNetworkMapLightbox";


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
          "closeRioNetworkMap"
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

  kicker:
    "Rio de Janeiro · visão completa",

  title:
    "Rede Metropolitana",

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
            Uma visão integrada
            dos principais sistemas
            de transporte
            do Rio de Janeiro
            e da Região Metropolitana.
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
              Fonte do mapa · Governo do RJ
            </a>

          </div>


          <div class="visitor-alert">

            <strong>
              O mapa pode apresentar
              a marca SuperVia.
            </strong>

            A operação ferroviária
            passou para a TrensRJ
            em 30 de maio de 2026.

            Portanto,
            ao encontrar “SuperVia”
            em mapas produzidos
            antes da transição,
            leia essa parte da rede
            atualmente como TrensRJ.

          </div>

        </section>


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede
          </h4>

          <p class="panel-intro">
            O Rio não possui
            um único sistema
            nem um único operador.

            Diferentes redes
            se encontram
            em estações,
            terminais
            e áreas de conexão.
          </p>

          <div class="legend-grid">

            ${createRioLegendItem(
              "M",
              "Metrô",
              "Rede urbana sobre trilhos operada pelo MetrôRio."
            )}

            ${createRioLegendItem(
              "T",
              "Trens",
              "Rede ferroviária metropolitana atualmente operada pela TrensRJ."
            )}

            ${createRioLegendItem(
              "BRT",
              "BRT",
              "Rede municipal de ônibus de alta capacidade administrada pela MOBI-Rio."
            )}

            ${createRioLegendItem(
              "VLT",
              "VLT Carioca",
              "Rede municipal sobre trilhos no Centro e na Região Portuária."
            )}

            ${createRioLegendItem(
              "🚌",
              "Ônibus",
              "Redes municipais e intermunicipais ampliam a cobertura terrestre."
            )}

            ${createRioLegendItem(
              "⛴",
              "Barcas",
              "Rede hidroviária que conecta a capital a Niterói, Paquetá, Ilha do Governador e outros destinos."
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

            ${createRioSystemCard(
              "🚇",
              "MetrôRio",
              "Atende importantes eixos do Centro, Zona Sul, Tijuca, Zona Norte e Barra.",
              "Linhas 1, 2 e 4"
            )}

            ${createRioSystemCard(
              "🚆",
              "TrensRJ",
              "Rede ferroviária de grande alcance na capital e Região Metropolitana.",
              "5 ramais + 3 extensões"
            )}

            ${createRioSystemCard(
              "🚍",
              "BRT · MOBI-Rio",
              "Rede municipal estruturada em corredores e estações próprias.",
              "Transoeste · Transcarioca · Transolímpica · Transbrasil"
            )}

            ${createRioSystemCard(
              "🚋",
              "VLT Carioca",
              "Conecta pontos estratégicos do Centro e da Região Portuária.",
              "4 linhas · 30 paradas e estações"
            )}

            ${createRioSystemCard(
              "🚌",
              "Ônibus",
              "Redes municipal e intermunicipal completam a cobertura.",
              "Jaé no municipal · rede estadual no intermunicipal"
            )}

            ${createRioSystemCard(
              "⛴",
              "Barcas Rio",
              "Sistema hidroviário com diferentes ligações.",
              "Praça XV é o principal terminal na capital"
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
            O sistema possui
            três linhas identificadas
            como 1,
            2
            e 4.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#e47d2a",
              "1",
              "Linha 1",
              "Metrô",
              "Uruguai/Tijuca ↔ General Osório/Ipanema",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#61a744",
              "2",
              "Linha 2",
              "Metrô",
              "Pavuna ↔ Botafogo",
              "MetrôRio"
            )}

            ${createLineMiniCard(
              "#f3c323",
              "4",
              "Linha 4",
              "Metrô",
              "General Osório/Ipanema ↔ Jardim Oceânico/Barra",
              "MetrôRio"
            )}

          </div>


          <div class="fare-note">

            <strong>
              Para o passageiro,
              a operação regular também aparece
              como Linha 1/4.
            </strong>

            Os trens permitem
            o deslocamento
            Uruguai/Tijuca
            ↔ Jardim Oceânico/Barra da Tijuca,
            unindo operacionalmente
            os eixos das Linhas 1 e 4.

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIAS METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões importantes do metrô
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Linha 1/4 ↔ Linha 2
              </strong>

              <p>
                A transferência
                pode ser feita
                no trecho compartilhado
                entre Central do Brasil
                e Botafogo.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚆</span>

              <strong>
                Metrô ↔ Trem
              </strong>

              <p>
                Há conexões
                em Central do Brasil,
                São Cristóvão,
                Maracanã,
                Triagem
                e Pavuna.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Metrô ↔ BRT
              </strong>

              <p>
                Vicente de Carvalho
                e Jardim Oceânico
                são as referências
                de integração.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚋</span>

              <strong>
                Metrô ↔ VLT
              </strong>

              <p>
                Central do Brasil,
                Carioca
                e Cinelândia
                aparecem entre as conexões
                publicadas atualmente.
              </p>

            </article>

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
            A TrensRJ conecta
            diferentes regiões da capital
            e municípios
            da Região Metropolitana.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Deodoro
              </strong>

              <p>
                Um dos cinco
                ramais principais.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Santa Cruz
              </strong>

              <p>
                Estrutura o deslocamento
                ferroviário
                pela Zona Oeste.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Japeri
              </strong>

              <p>
                Conecta a capital
                à Baixada Fluminense
                e a Japeri.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Belford Roxo
              </strong>

              <p>
                Atende o eixo
                em direção
                a Belford Roxo.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Saracuruna
              </strong>

              <p>
                Atende o eixo
                da Baixada
                e Duque de Caxias.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXTENSÕES FERROVIÁRIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Extensões da rede ferroviária
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Paracambi
              </strong>

              <p>
                Extensão
                associada ao eixo
                ferroviário de Japeri.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vila Inhomirim
              </strong>

              <p>
                Extensão
                da rede ferroviária
                metropolitana.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Guapimirim
              </strong>

              <p>
                Extensão
                atendida
                dentro da estrutura
                operacional da TrensRJ.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Nos trens,
              operação do dia merece atenção.
            </strong>

            Obras,
            manutenção
            e programação especial
            podem alterar
            trechos,
            paradas
            e necessidade de troca
            de composição.

          </div>

        </section>


        <!-- ==================================================
             CENTRAL DO BRASIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Central do Brasil
          </h4>

          <div class="answer-block">

            <strong>
              É a principal referência
              ferroviária da capital.
            </strong>

            <p>
              A estação atende
              os ramais Deodoro,
              Santa Cruz,
              Japeri,
              Belford Roxo
              e Saracuruna.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                Há conexão
                com a Estação
                Central do Brasil/Centro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                VLT
              </strong>

              <p>
                A região também
                é atendida
                pelo VLT Carioca.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Linhas municipais
                complementam
                a distribuição
                pela área central.
              </p>

            </article>

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
            O sistema está estruturado
            em quatro grandes corredores.
          </p>

          <div class="lines-grid">

            ${createRioCorridorCard(
              "T",
              "Transoeste",
              "Estrutura deslocamentos entre Barra da Tijuca, Recreio, Santa Cruz, Campo Grande e outras áreas da Zona Oeste.",
              "#dc5a32"
            )}

            ${createRioCorridorCard(
              "C",
              "Transcarioca",
              "Conecta Barra, Madureira, diferentes áreas da Zona Norte e serviços relacionados ao Galeão.",
              "#397ec0"
            )}

            ${createRioCorridorCard(
              "O",
              "Transolímpica",
              "Conecta diferentes áreas da Zona Oeste e importantes terminais.",
              "#80ae43"
            )}

            ${createRioCorridorCard(
              "B",
              "Transbrasil",
              "Estrutura o eixo da Avenida Brasil e chega ao Terminal Gentileza.",
              "#dfa824"
            )}

          </div>


          <div class="fare-note">

            <strong>
              Corredor não é o mesmo que linha.
            </strong>

            Dentro dos corredores
            existem serviços
            paradores,
            expressos,
            semidiretos
            e diretos.

          </div>

        </section>


        <!-- ==================================================
             GALEÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Galeão e a rede BRT
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transcarioca
              </span>

              <strong>
                Linha 42
              </strong>

              <p>
                Madureira
                ↔ Galeão Tom Jobim.
              </p>

              <span class="fare-scenario-result">
                Serviço parador
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Terminal Gentileza
              </span>

              <strong>
                Gentileza ↔ Galeão
              </strong>

              <p>
                Serviço BRT
                direto
                para o aeroporto.
              </p>

              <span class="fare-scenario-result">
                Direto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT Carioca
          </h4>

          <p class="panel-intro">
            O VLT opera
            quatro linhas
            no Centro
            e na Região Portuária.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#2476aa",
              "1",
              "Linha 1",
              "VLT",
              "Santos Dumont ↔ Terminal Gentileza",
              "Azul"
            )}

            ${createLineMiniCard(
              "#579b58",
              "2",
              "Linha 2",
              "VLT",
              "Praça XV ↔ Praia Formosa",
              "Verde"
            )}

            ${createLineMiniCard(
              "#d8af2d",
              "3",
              "Linha 3",
              "VLT",
              "Santos Dumont ↔ Central",
              "Amarela"
            )}

            ${createLineMiniCard(
              "#e58432",
              "4",
              "Linha 4",
              "VLT",
              "Praça XV ↔ Terminal Gentileza",
              "Laranja"
            )}

          </div>


          <div class="comparison-grid"
               style="margin-top:14px;">

            <article class="comparison-card">

              <strong>
                30
              </strong>

              <p>
                Paradas
                e estações
                em operação.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                5h às 23h
              </strong>

              <p>
                Horário geral
                de funcionamento,
                todos os dias.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TERMINAL GENTILEZA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminal Intermodal Gentileza
          </h4>

          <p class="panel-intro">
            É um dos pontos
            mais importantes
            de integração
            da rede municipal.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Serviços da Transbrasil
                utilizam o terminal.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚋</span>

              <strong>
                VLT
              </strong>

              <p>
                Linhas 1
                e 4
                chegam ao Gentileza.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Ônibus
              </strong>

              <p>
                Linhas municipais
                completam
                as conexões locais.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Galeão
              </strong>

              <p>
                Existe serviço BRT
                direto
                entre Gentileza
                e o aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PEDRO FERNANDES + BUM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminal BRT Metropolitano Pedro Fernandes
          </h4>

          <p class="panel-intro">
            O terminal integra
            parte da chegada
            da rede intermunicipal
            à estrutura municipal
            do Rio.
          </p>

          <div class="answer-block">

            <strong>
              Bilhete Único
              de Integração Margaridas · BUM
            </strong>

            <p>
              O benefício foi criado
              em 2026
              para passageiros
              que chegam
              de ônibus intermunicipal
              pelo Terminal Pedro Fernandes
              e continuam a viagem
              na rede municipal participante.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Parte municipal
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Integração
                com os transportes
                municipais participantes.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Janela
              </span>

              <strong>
                Até 20 horas
              </strong>

              <p>
                Até quatro
                deslocamentos municipais
                dentro das regras
                do benefício.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A tarifa
            do ônibus intermunicipal
            é paga separadamente.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipais e intermunicipais
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro da capital
              </span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Amplia a cobertura
                entre bairros
                e conecta áreas
                fora dos grandes eixos
                sobre trilhos.
              </p>

              <span class="route-compare-result">
                Jaé
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Entre municípios
              </span>

              <strong>
                Intermunicipal
              </strong>

              <p>
                Linhas estaduais
                conectam a capital
                a outros municípios.
              </p>

              <span class="route-compare-result">
                DETRO/RJ
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Barcas
          </h4>

          <p class="panel-intro">
            A Praça XV
            é o principal terminal
            hidroviário
            para quem parte
            do Centro do Rio.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Niterói
              </span>

              <strong>
                Praça Arariboia
              </strong>

              <p>
                Ligação direta
                entre os centros
                do Rio
                e de Niterói.
              </p>

              <span class="route-compare-result">
                Até 22 min
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Niterói
              </span>

              <strong>
                Charitas
              </strong>

              <p>
                Outra ligação
                hidroviária
                com Niterói.
              </p>

              <span class="route-compare-result">
                Até 28 min
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ilha do Governador
              </span>

              <strong>
                Cocotá
              </strong>

              <p>
                Ligação
                entre Praça XV
                e Cocotá.
              </p>

              <span class="route-compare-result">
                Até 61 min
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Paquetá
              </span>

              <strong>
                Ilha de Paquetá
              </strong>

              <p>
                Ligação
                entre Praça XV
                e Paquetá.
              </p>

              <span class="route-compare-result">
                Até 81 min
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Barcas funcionam
              por horários de partida.
            </strong>

            Para uma viagem específica,
            confira a grade
            da ligação escolhida.

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

              <span>🚆</span>

              <strong>
                Central do Brasil
              </strong>

              <p>
                Trem,
                metrô,
                VLT
                e ônibus
                se encontram
                na região.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Jardim Oceânico
              </strong>

              <p>
                Conexão importante
                entre metrô
                e BRT
                na Barra.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔄</span>

              <strong>
                Vicente de Carvalho
              </strong>

              <p>
                Outra referência
                para integração
                entre metrô
                e BRT.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚋</span>

              <strong>
                Terminal Gentileza
              </strong>

              <p>
                BRT,
                VLT
                e ônibus municipais
                convergem no terminal.
              </p>

            </article>


            <article class="bus-system-card">

              <span>⛴️</span>

              <strong>
                Praça XV
              </strong>

              <p>
                Barcas,
                VLT
                e conexões
                com o Centro.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌼</span>

              <strong>
                Pedro Fernandes
              </strong>

              <p>
                Integra a chegada
                de ônibus intermunicipais
                à rede municipal
                pelo BUM.
              </p>

            </article>

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
                Centro, Zona Sul ou Tijuca
              </strong>

              <p>
                Comece verificando
                o metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Zona Norte, Zona Oeste ou Baixada
              </strong>

              <p>
                Os trens podem
                concentrar grande parte
                do deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Barra, Recreio e Zona Oeste
              </strong>

              <p>
                BRT e metrô
                podem ser combinados
                conforme o destino.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚋</span>

              <strong>
                Centro e Região Portuária
              </strong>

              <p>
                O VLT
                pode reduzir
                caminhada
                e conectar terminais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Niterói ou Paquetá
              </strong>

              <p>
                As barcas
                podem ser
                a conexão mais direta.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Outra cidade da Região Metropolitana
              </strong>

              <p>
                Compare
                trem,
                barca
                e ônibus intermunicipal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE MUDA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que realmente precisa ser confirmado no dia
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Trem
              </strong>

              <p>
                Horários,
                alterações
                e intervenções
                variam por ramal.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                BRT
              </strong>

              <p>
                O serviço
                e as paradas
                dependem da linha utilizada.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Barcas
              </strong>

              <p>
                Cada ligação
                possui sua própria
                grade de partidas.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus
              </strong>

              <p>
                Horário,
                ponto
                e desvios
                são informações operacionais.
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
            href="https://www.trensrj.com.br/pt/mapa-de-linhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapa ferroviário · TrensRJ
          </a>


          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BRT · MOBI-Rio
          </a>


          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/vltrio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VLT Carioca
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barcas Rio
          </a>


          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/integracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integrações · Prefeitura do Rio
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
// DISPONIBILIZA O LIGHTBOX
// ============================================================

window.openRioNetworkMap =
  openRioNetworkMap;
