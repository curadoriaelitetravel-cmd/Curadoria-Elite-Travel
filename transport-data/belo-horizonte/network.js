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
              "A Linha 1 conecta Contagem a Belo Horizonte e atende importantes pontos de integração da rede."
            )}

            ${createBhLegendItem(
              "MOVE",
              "MOVE",
              "Sistema BRT municipal com linhas troncais, alimentadoras, estações de integração e transferência."
            )}

            ${createBhLegendItem(
              "🚌",
              "Ônibus convencionais",
              "Ampla rede municipal que atende bairros, Centro e diferentes regiões da capital."
            )}

            ${createBhLegendItem(
              "S",
              "Sistema Suplementar",
              "Rede municipal complementar operada com veículos menores em trajetos específicos."
            )}

            ${createBhLegendItem(
              "🌆",
              "Ônibus metropolitanos",
              "Rede estadual que conecta Belo Horizonte aos demais municípios da Região Metropolitana."
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

            ${createBhSystemCard(
              "🚇",
              "Metrô",
              "Sistema metroviário da Região Metropolitana de Belo Horizonte.",
              "Linha 1 · Novo Eldorado ↔ Vilarinho"
            )}

            ${createBhSystemCard(
              "🚍",
              "MOVE",
              "Sistema municipal BRT de alta capacidade.",
              "4 estações de integração + 37 de transferência"
            )}

            ${createBhSystemCard(
              "🚌",
              "Ônibus convencional",
              "Rede municipal que atende bairros, Centro e diferentes regiões.",
              "Gestão municipal · SUMOB"
            )}

            ${createBhSystemCard(
              "S",
              "Suplementar",
              "Serviço municipal complementar em trajetos específicos.",
              "27 linhas"
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
            Use o mapa para visualizar
            a Linha 1 atualmente disponível
            e a expansão da rede
            que está em implantação.
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
              Para uma viagem atual:
            </strong>

            considere a Linha 1.
            A Linha 2 está em implantação
            e não deve ser tratada
            como uma linha totalmente disponível
            para o passageiro.

          </div>

        </section>


        <!-- ==================================================
             LINHA 1
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linha 1 do Metrô
          </h4>

          <p class="panel-intro">
            A Linha 1 liga
            Novo Eldorado,
            em Contagem,
            a Vilarinho,
            em Belo Horizonte.
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
                Estação terminal
                da Linha 1
                em Contagem
                e 20ª estação
                do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Central
              </strong>

              <p>
                Referência metroviária
                para a região central
                de Belo Horizonte.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante conexão
                entre metrô,
                MOVE
                e ônibus.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vilarinho
              </strong>

              <p>
                Terminal da Linha 1
                no vetor Norte
                e conexão com o MOVE.
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
              A Linha 2 está em construção.
            </strong>

            Ela ampliará a rede
            em direção ao Barreiro,
            mas não deve ser considerada
            uma linha totalmente disponível
            para uma viagem atual.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                10,5 km
              </strong>

              <p>
                Extensão prevista
                para a Linha 2.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                7 estações
              </strong>

              <p>
                Nova Suíça,
                Amazonas,
                Nova Gameleira,
                Nova Cintra,
                Vista Alegre,
                Ferrugem
                e Barreiro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Nova Suíça ↔ Barreiro
              </strong>

              <p>
                Esse será
                o eixo completo
                da nova linha.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Conclusão prevista
              </strong>

              <p>
                A previsão atual
                do Metrô BH
                é de conclusão completa
                em 2028.
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
            de Belo Horizonte.
            Sua estrutura combina
            linhas alimentadoras,
            linhas troncais
            e estações.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Alimentadoras
              </strong>

              <p>
                Ligam bairros
                às estações
                de integração.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Troncais
              </strong>

              <p>
                Percorrem
                os principais corredores
                estruturais do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                4 estações
                de integração
              </strong>

              <p>
                Venda Nova,
                Vilarinho,
                São Gabriel
                e Pampulha.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                37 estações
                de transferência
              </strong>

              <p>
                Distribuídas
                pelos corredores
                e pela Área Central.
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
                e Linha 1
                do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Conecta MOVE,
                ônibus
                e Linha 1
                do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Importante conexão
                para a região
                da Pampulha.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIAS MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde estão as 37 estações de transferência
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                14 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                9 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                6 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                4 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Área Central
              </strong>

              <p>
                Tamoios,
                Carijós,
                São Paulo
                e Rio de Janeiro.
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
            A rede municipal
            vai além do MOVE
            e atende áreas
            sem cobertura direta
            do metrô ou do BRT.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Convencional
              </strong>

              <p>
                Liga bairros,
                Centro
                e diferentes regiões
                de Belo Horizonte.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                MOVE
              </strong>

              <p>
                Estrutura os deslocamentos
                nos principais
                corredores BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Suplementar
              </strong>

              <p>
                Complementa a cobertura
                municipal
                em trajetos específicos.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vilas e Favelas
              </strong>

              <p>
                13 linhas municipais
                com tarifa zero
                atendem áreas
                de acesso mais difícil.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações BHBUS
          </h4>

          <p class="panel-intro">
            Além das quatro estações
            de integração do MOVE,
            existem duas estações
            de integração BHBUS.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Barreiro
              </strong>

              <p>
                Estação de integração
                da região
                do Barreiro.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Diamante
              </strong>

              <p>
                Estação de integração
                BHBUS
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
            A Região Metropolitana
            possui uma rede estadual
            diferente da rede municipal
            de Belo Horizonte.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro de Belo Horizonte
              </span>

              <strong>
                Rede municipal
              </strong>

              <p>
                Convencional,
                MOVE
                e Suplementar.
              </p>

              <span class="route-compare-result">
                SUMOB
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Entre municípios
              </span>

              <strong>
                Rede metropolitana
              </strong>

              <p>
                Linhas estaduais
                conectam Belo Horizonte
                a outros municípios
                da RMBH.
              </p>

              <span class="route-compare-result">
                Governo de Minas
              </span>

            </article>

          </div>


          <div class="fare-note">

            Na rede metropolitana,
            a tarifa varia
            conforme a linha utilizada
            e a bilhetagem de referência
            é o Cartão ÓTIMO.

          </div>

        </section>


        <!-- ==================================================
             QUAL SISTEMA FAZ SENTIDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual sistema tende a fazer sentido?
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Próximo à Linha 1
              </strong>

              <p>
                O metrô pode resolver
                a parte principal
                do deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Eixos do MOVE
              </strong>

              <p>
                Alimentadora
                e linha troncal
                podem formar
                a mesma viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Fora dos grandes eixos
              </strong>

              <p>
                A rede convencional
                amplia a cobertura
                pelos bairros.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Outra cidade da RMBH
              </strong>

              <p>
                O deslocamento pode exigir
                uma linha metropolitana
                estadual.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏗️</span>

              <strong>
                Barreiro pelo metrô
              </strong>

              <p>
                A Linha 2
                está em construção
                e ainda não representa
                a rede completa disponível.
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
            href="https://www.metrobh.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô BH
          </a>


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
