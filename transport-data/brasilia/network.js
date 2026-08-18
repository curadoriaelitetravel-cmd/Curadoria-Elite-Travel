// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: REDE DE TRANSPORTE
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function createBrasiliaSystemCard(
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


function createBrasiliaLegendItem(
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
// MÓDULO
// ============================================================

window.BRASILIA_TRANSPORT_MODULES["network"] = {

  kicker:
    "Brasília · visão completa",

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
            Entenda a rede do Distrito Federal
          </h4>

          <p class="panel-intro">
            O transporte público coletivo
            do Distrito Federal combina
            metrô, ônibus, BRT
            e serviços complementares.
          </p>

          <div class="legend-grid">

            ${createBrasiliaLegendItem(
              "M",
              "Metrô",
              "Rede metroviária que atende o Plano Piloto e regiões como Guará, Águas Claras, Taguatinga, Ceilândia e Samambaia."
            )}

            ${createBrasiliaLegendItem(
              "BRT",
              "BRT",
              "Sistema rodoviário de alta capacidade com corredores e terminais de integração."
            )}

            ${createBrasiliaLegendItem(
              "🚌",
              "Ônibus",
              "Principal rede rodoviária do Distrito Federal, distribuída entre diferentes áreas e regiões administrativas."
            )}

            ${createBrasiliaLegendItem(
              "Z",
              "Zebrinha",
              "Micro-ônibus utilizados em serviços locais e de vizinhança dentro da rede do Distrito Federal."
            )}

            ${createBrasiliaLegendItem(
              "🌾",
              "Serviço complementar",
              "Inclui serviços complementares, inclusive atendimento rural."
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
            Brasília não funciona
            como uma única rede concentrada
            no Plano Piloto.
          </p>

          <div class="operator-grid">

            ${createBrasiliaSystemCard(
              "🚇",
              "Metrô",
              "Sistema metroviário do Distrito Federal.",
              "Eixos Ceilândia e Samambaia"
            )}

            ${createBrasiliaSystemCard(
              "🚍",
              "BRT",
              "Corredor estruturado de ônibus de alta capacidade.",
              "Conexões com Gama e Santa Maria"
            )}

            ${createBrasiliaSystemCard(
              "🚌",
              "Ônibus",
              "Rede básica de transporte coletivo do Distrito Federal.",
              "Cinco bacias operacionais"
            )}

            ${createBrasiliaSystemCard(
              "🚐",
              "Zebrinha",
              "Serviço de vizinhança com veículos menores.",
              "Trajetos locais"
            )}

            ${createBrasiliaSystemCard(
              "🌾",
              "Complementar",
              "Serviços complementares ao sistema básico.",
              "Inclui atendimento rural"
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
            O metrô parte da região central
            e se divide em dois eixos
            depois de Águas Claras.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Eixo Ceilândia
              </strong>

              <p>
                Atende regiões
                como Guará,
                Águas Claras,
                Taguatinga e Ceilândia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo Samambaia
              </strong>

              <p>
                Após Águas Claras,
                a rede segue em direção
                a Samambaia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tronco compartilhado
              </strong>

              <p>
                Os dois serviços
                utilizam o mesmo trecho
                na região central
                antes da bifurcação.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Integração
              </strong>

              <p>
                Algumas estações
                funcionam como pontos
                importantes de conexão
                com ônibus.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGIÕES ATENDIDAS PELO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Regiões importantes no eixo do metrô
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏛️</span>

              <strong>
                Plano Piloto
              </strong>

              <p>
                A Estação Central
                atende a área
                da Rodoviária do Plano Piloto.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏘️</span>

              <strong>
                Guará
              </strong>

              <p>
                Possui estações
                no trecho comum
                da rede.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Região estratégica
                onde a rede segue
                para os dois eixos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Taguatinga
              </strong>

              <p>
                É atendida
                por diferentes estações
                do sistema.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ceilândia
              </strong>

              <p>
                É um dos eixos
                finais da rede metroviária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌇</span>

              <strong>
                Samambaia
              </strong>

              <p>
                É atendida
                pelo outro ramo
                da rede.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT
          </h4>

          <p class="panel-intro">
            O BRT é especialmente importante
            para os deslocamentos
            no eixo sul do Distrito Federal.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Gama
              </strong>

              <p>
                Possui terminal
                de integração
                conectado ao sistema BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Santa Maria
              </strong>

              <p>
                Também possui
                terminal de integração
                do BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Plano Piloto
              </strong>

              <p>
                Existem serviços
                que conectam os terminais
                do BRT à área central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linhas alimentadoras
              </strong>

              <p>
                Serviços locais
                levam passageiros
                até os terminais
                e estações do sistema.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Rede de ônibus
          </h4>

          <p class="panel-intro">
            A rede básica de ônibus
            é organizada em cinco
            grandes bacias operacionais.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Bacia 1
              </strong>

              <p>
                Atende áreas como
                Brasília, Cruzeiro,
                Lago Norte, Varjão,
                Sobradinho e Planaltina.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 2
              </strong>

              <p>
                Atende Paranoá,
                Itapoã, São Sebastião,
                Gama, Santa Maria
                e outras regiões.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 3
              </strong>

              <p>
                Atende Núcleo Bandeirante,
                Riacho Fundo,
                Recanto das Emas
                e Samambaia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 4
              </strong>

              <p>
                Atende Guará,
                Águas Claras,
                Taguatinga
                e Ceilândia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 5
              </strong>

              <p>
                Atende áreas como
                Estrutural,
                Vicente Pires,
                Taguatinga Norte,
                Ceilândia Norte
                e Brazlândia.
              </p>

            </article>

          </div>


          <div class="fare-note">

            As bacias ajudam
            a organizar a operação,
            mas para o passageiro
            o mais importante é consultar
            a linha específica necessária.

          </div>

        </section>


        <!-- ==================================================
             TCB
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            TCB
          </h4>

          <div class="answer-block">

            <strong>
              O Distrito Federal também possui
              uma empresa pública de transporte.
            </strong>

            <p>
              A Sociedade de Transportes
              Coletivos de Brasília
              opera serviços no Plano Piloto,
              além de algumas linhas rurais
              e serviço executivo.
            </p>

          </div>

        </section>


        <!-- ==================================================
             ZEBRINHA E COMPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Zebrinha e serviços complementares
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Zebrinha
              </strong>

              <p>
                Micro-ônibus utilizados
                em trajetos locais
                e serviços de vizinhança.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rural
              </strong>

              <p>
                O sistema complementar
                inclui atendimento
                a áreas rurais
                do Distrito Federal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DF NO PONTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Consulte a linha antes de sair
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              DF no Ponto
            </span>

            <h4>
              Rotas, horários, pontos
              e localização dos ônibus.
            </h4>

            <p>
              O DF no Ponto
              é a ferramenta oficial
              do Governo do Distrito Federal
              para pesquisar transporte público
              e acompanhar informações
              das linhas.
            </p>

          </div>

        </section>


        <!-- ==================================================
             VAI DE GRAÇA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingos e feriados
          </h4>

          <div class="visitor-alert">

            <strong>
              O transporte público
              é gratuito pelo Vai de Graça.
            </strong>

            A gratuidade abrange
            ônibus, BRT, micro-ônibus,
            Zebrinha e metrô
            em todo o Distrito Federal.

          </div>


          <div class="fare-note">

            A gratuidade vale
            aos domingos e feriados.
            Ponto facultativo,
            por si só,
            não significa transporte gratuito.

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
                Ceilândia, Samambaia,
                Taguatinga ou Águas Claras
              </strong>

              <p>
                Verifique primeiro
                o metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Gama ou Santa Maria
              </strong>

              <p>
                Compare BRT
                e ônibus.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Outras regiões administrativas
              </strong>

              <p>
                Consulte as linhas
                de ônibus no DF no Ponto.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏛️</span>

              <strong>
                Plano Piloto
              </strong>

              <p>
                Compare metrô,
                ônibus e serviços locais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📅</span>

              <strong>
                Domingo ou feriado
              </strong>

              <p>
                Considere o Vai de Graça
                antes de calcular
                o custo do trajeto.
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
            href="https://www.semob.df.gov.br/dados-do-sistema-de-transporte-publico-do-df"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede de transporte · SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://metro.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô-DF
          </a>


          <a
            class="official-link"
            href="https://dfnoponto.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DF no Ponto
          </a>


          <a
            class="official-link"
            href="https://www.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEMOB-DF
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
