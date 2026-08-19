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
             ESTRUTURA OFICIAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como a rede do Distrito Federal é organizada
          </h4>

          <p class="panel-intro">
            O Sistema de Transporte Público Coletivo
            do Distrito Federal é dividido
            oficialmente em dois modais:
            rodoviário e metroviário.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Modal rodoviário
              </strong>

              <p>
                Reúne ônibus,
                BRT e os serviços
                Básico e Complementar
                do Distrito Federal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Modal metroviário
              </strong>

              <p>
                É formado pelo Metrô-DF,
                que atende o Plano Piloto
                e parte do eixo oeste
                do Distrito Federal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS COMPONENTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que você encontra na rede
          </h4>

          <div class="legend-grid">

            ${createBrasiliaLegendItem(
              "M",
              "Metrô",
              "Rede metroviária que liga a região central a áreas como Guará, Águas Claras, Taguatinga, Ceilândia e Samambaia."
            )}

            ${createBrasiliaLegendItem(
              "BRT",
              "BRT",
              "Sistema de ônibus de alta capacidade que estrutura principalmente o eixo sul do Distrito Federal."
            )}

            ${createBrasiliaLegendItem(
              "🚌",
              "Ônibus",
              "Rede rodoviária que cobre o Plano Piloto e as diferentes Regiões Administrativas."
            )}

            ${createBrasiliaLegendItem(
              "🚐",
              "Serviços locais",
              "Incluem micro-ônibus e serviços de vizinhança utilizados em trajetos locais."
            )}

            ${createBrasiliaLegendItem(
              "🌾",
              "Serviço Complementar",
              "Abrange serviços complementares ao sistema básico, inclusive atendimento rural e executivo."
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
            A rede parte da região central
            e se divide em dois eixos
            depois de Águas Claras:
            Ceilândia e Samambaia.
          </p>


          <div
            style="
              margin:24px 0 28px;
              padding:16px;
              border:1px solid rgba(212,175,55,.20);
              border-radius:18px;
              background:#fff;
              overflow:hidden;
            "
          >

            <img
              src="images/Mapa_MetroDF.png"
              alt="Mapa da rede do Metrô-DF com os ramais Ceilândia e Samambaia"
              style="
                display:block;
                width:100%;
                height:auto;
                border-radius:10px;
              "
            >

          </div>


          <div class="fare-note">

            No mapa,
            os círculos identificam estações em operação
            e os pontos pretos indicam estações em construção.
            Os ramais de Ceilândia e Samambaia
            compartilham parte do percurso.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Trecho compartilhado
              </strong>

              <p>
                Os trens utilizam
                o mesmo eixo entre
                a região central
                e Águas Claras.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo Ceilândia
              </strong>

              <p>
                Depois da bifurcação,
                um dos serviços
                segue em direção
                a Taguatinga e Ceilândia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo Samambaia
              </strong>

              <p>
                O outro serviço
                segue de Águas Claras
                em direção a Samambaia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Estação Central
              </strong>

              <p>
                A região central
                possui conexão direta
                com a Rodoviária
                do Plano Piloto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGIÕES NO EIXO DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais regiões atendidas pelo metrô
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
                da Rodoviária
                do Plano Piloto.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏘️</span>

              <strong>
                Guará
              </strong>

              <p>
                Está no trecho
                comum da rede
                metroviária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                É o principal ponto
                de separação
                entre os dois eixos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Taguatinga
              </strong>

              <p>
                É atendida
                pelo eixo que segue
                em direção a Ceilândia.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ceilândia
              </strong>

              <p>
                Forma um dos extremos
                da rede metroviária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌇</span>

              <strong>
                Samambaia
              </strong>

              <p>
                Forma o outro
                grande eixo terminal
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
            O BRT estrutura principalmente
            os deslocamentos do eixo sul
            do Distrito Federal.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Gama
              </strong>

              <p>
                Possui terminal
                de integração
                do sistema BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Santa Maria
              </strong>

              <p>
                Também possui
                terminal de integração
                ligado ao corredor.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linhas alimentadoras
              </strong>

              <p>
                Fazem a ligação
                entre bairros
                e os terminais
                de integração.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Serviços troncais
              </strong>

              <p>
                Realizam os deslocamentos
                de maior capacidade
                pelo corredor estruturado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como a rede de ônibus é dividida
          </h4>

          <p class="panel-intro">
            O Serviço Básico
            é organizado territorialmente
            em cinco bacias operacionais.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Bacia 1
              </strong>

              <p>
                Brasília,
                Cruzeiro,
                Lago Norte,
                Varjão,
                Sobradinho
                e Planaltina.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 2
              </strong>

              <p>
                Paranoá,
                Itapoã,
                São Sebastião,
                Jardim Botânico,
                Gama,
                Santa Maria,
                Park Way pela Epia
                e Candangolândia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 3
              </strong>

              <p>
                Núcleo Bandeirante,
                Riacho Fundo I e II,
                Recanto das Emas
                e Samambaia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 4
              </strong>

              <p>
                Guará,
                Park Way pela região
                de Arniqueiras,
                Águas Claras,
                parte de Taguatinga
                e Ceilândia.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bacia 5
              </strong>

              <p>
                SAI,
                SAAN,
                SOF Norte,
                Estrutural,
                Vicente Pires,
                parte de Taguatinga,
                Ceilândia Norte
                e Brazlândia.
              </p>

            </article>

          </div>


          <div class="fare-note">

            As bacias são uma forma
            de organizar a operação.
            Para o passageiro,
            diferentes bacias podem
            participar de uma mesma viagem
            conforme origem e destino.

          </div>

        </section>


        <!-- ==================================================
             TCB
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            TCB dentro da rede
          </h4>

          <div class="answer-block">

            <strong>
              A TCB é uma empresa pública
              integrante do sistema.
            </strong>

            <p>
              Atua no Plano Piloto,
              em algumas linhas rurais
              e no serviço executivo.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Serviço Complementar
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Rural
              </strong>

              <p>
                Atende áreas rurais
                que fazem parte
                do território
                do Distrito Federal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Executivo
              </strong>

              <p>
                Também faz parte
                da categoria oficial
                de Serviço Complementar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES IMPORTANTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos importantes de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏛️</span>

              <strong>
                Rodoviária do Plano Piloto
              </strong>

              <p>
                Grande ponto
                de distribuição de ônibus
                e conexão com o metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Estação Central
              </strong>

              <p>
                Principal acesso
                metroviário
                à região central.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Terminal BRT Gama
              </strong>

              <p>
                Integra serviços locais
                e o corredor BRT.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Terminal BRT Santa Maria
              </strong>

              <p>
                Referência de integração
                para o eixo sul.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER A REDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar a rede
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Eixo oeste
              </strong>

              <p>
                Metrô ganha importância
                em Guará,
                Águas Claras,
                Taguatinga,
                Ceilândia
                e Samambaia.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Eixo sul
              </strong>

              <p>
                BRT tem papel central
                em Gama
                e Santa Maria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Cobertura territorial
              </strong>

              <p>
                Ônibus completam
                a cobertura das diferentes
                Regiões Administrativas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integrações
              </strong>

              <p>
                Uma viagem pode combinar
                ônibus,
                BRT
                e metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌾</span>

              <strong>
                Áreas rurais
              </strong>

              <p>
                O sistema também
                possui atendimento
                complementar rural.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VAI DE GRAÇA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingos e feriados
          </h4>

          <div class="fare-note">

            Pelo programa Vai de Graça,
            ônibus, BRT, micro-ônibus,
            serviços urbanos e rurais
            e metrô são gratuitos
            aos domingos e feriados.

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.semob.df.gov.br/dados-do-sistema-de-transporte-publico-do-df"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estrutura do STPC/DF · SEMOB-DF
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
            href="https://www.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://tcb.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TCB · Governo do DF
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
