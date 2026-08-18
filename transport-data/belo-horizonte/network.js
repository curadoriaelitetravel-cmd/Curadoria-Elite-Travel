// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


const BH_METRO_MAP_URL =
  "/images/Mapa_MetroBH.jpg";


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createBhSystemCard(
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


function createBhLegendItem(
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


// ============================================================
// LIGHTBOX DO MAPA
// ============================================================

function openBhMetroMap() {

  if (
    document.getElementById(
      "bhMetroMapLightbox"
    )
  ) {
    return;
  }


  const lightbox =
    document.createElement("div");


  lightbox.id =
    "bhMetroMapLightbox";


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
      id="closeBhMetroMap"
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
      src="${BH_METRO_MAP_URL}"
      alt="Mapa ampliado do Metrô de Belo Horizonte"
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
          "closeBhMetroMap"
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

window.BELO_HORIZONTE_TRANSPORT_MODULES["network"] = {

  kicker:
    "Belo Horizonte · visão completa",

  title:
    "Rede de Transporte",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             ENTENDA A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Entenda a rede de Belo Horizonte
          </h4>

          <p class="panel-intro">
            A mobilidade da capital combina
            metrô, MOVE, ônibus convencionais,
            linhas suplementares
            e transporte metropolitano.
          </p>

          <div class="legend-grid">

            ${createBhLegendItem(
              "M",
              "Metrô",
              "A Linha 1 conecta Belo Horizonte e Contagem e atende importantes pontos de integração da rede."
            )}

            ${createBhLegendItem(
              "MOVE",
              "MOVE",
              "Sistema BRT de Belo Horizonte, com linhas troncais, alimentadoras, estações de integração e estações de transferência."
            )}

            ${createBhLegendItem(
              "🚌",
              "Ônibus convencionais",
              "Formam uma ampla rede municipal e complementam os principais corredores estruturais."
            )}

            ${createBhLegendItem(
              "S",
              "Sistema Suplementar",
              "Rede complementar de transporte coletivo municipal que atende diferentes regiões da cidade."
            )}

            ${createBhLegendItem(
              "🌆",
              "Ônibus metropolitanos",
              "Conectam Belo Horizonte aos demais municípios da Região Metropolitana."
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
            Identifique primeiro
            qual sistema atende melhor
            a região do seu destino.
          </p>

          <div class="operator-grid">

            ${createBhSystemCard(
              "🚇",
              "Metrô",
              "Sistema metroviário da Região Metropolitana de Belo Horizonte.",
              "Linha 1 em operação"
            )}

            ${createBhSystemCard(
              "🚍",
              "MOVE",
              "Sistema municipal de ônibus de alta capacidade.",
              "Corredores, estações e linhas troncais"
            )}

            ${createBhSystemCard(
              "🚌",
              "Ônibus convencional",
              "Rede municipal que atende bairros e diferentes regiões da capital.",
              "Sistema gerenciado pela SUMOB"
            )}

            ${createBhSystemCard(
              "S",
              "Suplementar",
              "Serviço complementar ao sistema convencional.",
              "Rede municipal"
            )}

            ${createBhSystemCard(
              "🌆",
              "Metropolitano",
              "Rede que conecta Belo Horizonte a outros municípios da RMBH.",
              "Sistema estadual"
            )}

          </div>

        </section>


        <!-- ==================================================
             MAPA DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Mapa do Metrô
          </h4>

          <p class="panel-intro">
            O mapa diferencia
            a linha atualmente em operação
            da expansão planejada
            da rede metroviária.
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
              src="${BH_METRO_MAP_URL}"
              alt="Mapa do Metrô de Belo Horizonte"
              loading="lazy"
              style="
                display:block;
                width:100%;
                height:auto;
                cursor:zoom-in;
              "
              onclick="openBhMetroMap()"
            />

          </div>


          <div class="official-map-actions">

            <button
              class="map-zoom-button"
              type="button"
              onclick="openBhMetroMap()"
            >
              Ampliar mapa
            </button>

          </div>


          <div class="fare-note">

            <strong>
              Atenção:
            </strong>

            a Linha 1 está em operação.
            A Linha 2 aparece no mapa
            como expansão planejada
            e ainda não deve ser considerada
            disponível para a viagem.

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
            Atualmente,
            a Linha 1 é a linha
            em operação comercial.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#e87924",
              "1",
              "Linha 1",
              "Metrô",
              "Novo Eldorado ↔ Vilarinho",
              "20 estações"
            )}

          </div>


          <div
            class="comparison-grid"
            style="margin-top:14px;"
          >

            <article class="comparison-card">

              <strong>
                Novo Eldorado
              </strong>

              <p>
                Nova estação terminal
                da Linha 1,
                inaugurada em fevereiro de 2026
                em Contagem.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Central
              </strong>

              <p>
                Estação localizada
                na área central
                de Belo Horizonte.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante ponto
                de conexão entre metrô,
                MOVE e ônibus.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vilarinho
              </strong>

              <p>
                Terminal da Linha 1
                no vetor norte
                da capital.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LINHA 2
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 2 do Metrô
          </h4>

          <div class="visitor-alert">

            <strong>
              A Linha 2 ainda não está
              em operação comercial.
            </strong>

            Ela permanece em implantação
            e não deve ser considerada
            como opção disponível
            para uma viagem atual.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Extensão prevista
              </strong>

              <p>
                Aproximadamente
                10,5 quilômetros.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sete estações
              </strong>

              <p>
                Nova Suíça,
                Amazonas,
                Nova Gameleira,
                Nova Cintra,
                Vista Alegre,
                Ferrugem e Barreiro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Barreiro
              </strong>

              <p>
                A nova linha
                ampliará a rede
                até essa região da cidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Em implantação
              </strong>

              <p>
                As obras continuam
                em andamento em 2026.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            MOVE
          </h4>

          <p class="panel-intro">
            O MOVE é o sistema BRT
            de Belo Horizonte
            e combina linhas troncais,
            alimentadoras e estações.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Linhas troncais
              </strong>

              <p>
                Circulam pelos principais
                corredores estruturais
                do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linhas alimentadoras
              </strong>

              <p>
                Ligam bairros
                às estações de integração.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estações de integração
              </strong>

              <p>
                Permitem conexão
                entre linhas alimentadoras
                e serviços do MOVE.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estações de transferência
              </strong>

              <p>
                Permitem trocar
                de linha dentro
                do espaço da estação.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações de integração do MOVE
          </h4>

          <p class="panel-intro">
            Belo Horizonte possui
            quatro estações de integração
            identificadas pela Prefeitura
            como parte do MOVE.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Venda Nova
              </strong>

              <p>
                Integra linhas
                alimentadoras
                e serviços do MOVE.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Integra MOVE
                e Linha 1 do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante conexão
                entre MOVE,
                ônibus e metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Atende linhas
                da região da Pampulha
                e conexões do MOVE.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A Prefeitura também informa
            37 estações de transferência
            distribuídas pelos corredores
            e pela Área Central.

          </div>

        </section>


        <!-- ==================================================
             CORREDORES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde estão as estações de transferência
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Avenida Antônio Carlos
              </strong>

              <p>
                Principal corredor
                do MOVE no eixo
                Centro–Pampulha.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Avenida Cristiano Machado
              </strong>

              <p>
                Corredor importante
                no vetor Nordeste
                da cidade.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Avenida Pedro I
              </strong>

              <p>
                Atende o vetor Norte
                e conecta-se
                à região de Vilarinho.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Avenida Vilarinho
              </strong>

              <p>
                Concentra estações
                na região de Venda Nova.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Área Central
              </strong>

              <p>
                Há estações
                de transferência
                também no Centro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipais
          </h4>

          <p class="panel-intro">
            O transporte coletivo municipal
            não se resume ao MOVE.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Sistema Convencional
              </strong>

              <p>
                Linhas circulam
                por bairros, avenidas
                e diferentes regiões
                da capital.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                MOVE
              </strong>

              <p>
                Opera nos principais
                corredores estruturados
                e estações.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sistema Suplementar
              </strong>

              <p>
                Complementa
                a cobertura municipal
                em diferentes regiões.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A própria Prefeitura
            define a rede municipal
            como a integração
            entre Sistema Convencional,
            MOVE e Sistema Suplementar.

          </div>

        </section>


        <!-- ==================================================
             BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Outras estações de integração
          </h4>

          <p class="panel-intro">
            Além das estações MOVE,
            a rede municipal possui
            estações de integração
            do Sistema BHBUS.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Barreiro
              </strong>

              <p>
                Importante estação
                de integração
                da região do Barreiro.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Diamante
              </strong>

              <p>
                Estação de integração
                do Sistema BHBUS
                na região do Barreiro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte metropolitano
          </h4>

          <p class="panel-intro">
            Para deslocamentos entre
            Belo Horizonte e outros municípios
            da Região Metropolitana,
            existe uma rede estadual própria.
          </p>

          <div class="answer-block">

            <strong>
              Não confunda municipal
              com metropolitano.
            </strong>

            <p>
              Uma linha que atravessa
              limites municipais
              pode pertencer ao sistema
              metropolitano e seguir
              regras tarifárias próprias.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Consulte pelo número da linha.
            </strong>

            <p>
              O Governo de Minas
              disponibiliza consulta pública
              de linhas, itinerários,
              horários e tarifas
              do transporte metropolitano.
            </p>

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
                Destino próximo à Linha 1
              </strong>

              <p>
                Comece verificando
                o metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Pampulha ou vetor Norte
              </strong>

              <p>
                Compare MOVE,
                ônibus e metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Bairro fora dos eixos principais
              </strong>

              <p>
                Consulte
                a rede municipal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Outra cidade da RMBH
              </strong>

              <p>
                Consulte
                o transporte metropolitano.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏗️</span>

              <strong>
                Barreiro pelo metrô
              </strong>

              <p>
                Não considere
                a Linha 2 ainda:
                ela permanece em implantação.
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
            href="https://prefeitura.pbh.gov.br/sumob"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUMOB · Prefeitura de Belo Horizonte
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/estacoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estações · Prefeitura de Belo Horizonte
          </a>


          <a
            class="official-link"
            href="https://www.mg.gov.br/servico/obter-informacoes-sobre-o-transporte-coletivo-da-regiao-metropolitana-de-belo-horizonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · Governo de Minas
          </a>


          <a
            class="official-link"
            href="https://www.agenciaminas.mg.gov.br/noticia/governo-de-minas-inaugura-estacao-novo-eldorado-do-metro-da-rmbh-129002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linha 1 · Governo de Minas
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

window.openBhMetroMap =
  openBhMetroMap;
