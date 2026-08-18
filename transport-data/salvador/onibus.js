// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: ÔNIBUS, BRT E METROPOLITANOS
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["bus"] = {

  kicker: "Salvador · rede rodoviária",

  title: "Ônibus e BRT",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de escolher um ônibus
          </h4>

          <p class="panel-intro">
            Em Salvador, é importante diferenciar
            ônibus municipal, BRT e ônibus metropolitano.
            Cada rede possui funções e canais próprios.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">
              <span>🚌</span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Circula dentro de Salvador
                e complementa metrô,
                BRT e terminais.
              </p>
            </article>


            <article class="bus-system-card">
              <span>🚍</span>

              <strong>
                BRT Salvador
              </strong>

              <p>
                Sistema de ônibus
                de maior capacidade,
                com estações e corredores próprios.
              </p>
            </article>


            <article class="bus-system-card">
              <span>🌆</span>

              <strong>
                Ônibus metropolitano
              </strong>

              <p>
                Liga Salvador a municípios
                da Região Metropolitana,
                como Lauro de Freitas,
                Camaçari e Simões Filho.
              </p>
            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO IDENTIFICAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como identificar o ônibus certo
          </h4>

          <div class="bus-identification-grid">

            <article class="bus-identification-card">

              <span class="bus-identification-number">
                1
              </span>

              <strong>
                Confira o número da linha
              </strong>

              <p>
                É a referência mais segura
                para confirmar o serviço
                indicado pelo planejador.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                2
              </span>

              <strong>
                Leia o destino
              </strong>

              <p>
                O letreiro ajuda a confirmar
                o sentido correto da viagem.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                3
              </span>

              <strong>
                Confirme o ponto
              </strong>

              <p>
                Nem todas as linhas
                que passam pela mesma avenida
                param nos mesmos locais.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PLANEJADOR OFICIAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use o planejador oficial
          </h4>

          <p class="panel-intro">
            A Prefeitura de Salvador possui
            um planejador oficial integrado
            ao aplicativo KIM.
          </p>

          <div class="answer-block">

            <strong>
              Informe origem e destino
            </strong>

            <p>
              O planejador apresenta opções
              de linhas de ônibus
              e combinações com metrô,
              BRT e caminhada.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Compare o tempo total
            </strong>

            <p>
              A ferramenta informa
              alternativas de deslocamento
              e o tempo estimado da viagem.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Para visitantes:
            </strong>

            vale consultar o planejador
            antes de sair,
            principalmente quando o destino
            não está diretamente
            junto a uma estação de metrô.

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
            O BRT opera em vias prioritárias
            e possui embarque em estações próprias.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                📍
              </span>

              <strong>
                1. Localize a estação
              </strong>

              <p>
                O embarque acontece
                em estações do sistema,
                não em qualquer ponto comum.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                🔢
              </span>

              <strong>
                2. Confira a linha
              </strong>

              <p>
                O sistema possui serviços
                B1, B2, B3, B4 e B5.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                ↔️
              </span>

              <strong>
                3. Veja o sentido
              </strong>

              <p>
                Confira a estação
                ou terminal indicado
                como destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                💳
              </span>

              <strong>
                4. Valide o cartão
              </strong>

              <p>
                Use um meio compatível
                com a rede municipal
                e com eventual integração.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             LINHAS BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas do BRT
          </h4>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#235a95",
              "B1",
              "Rodoviária ↔ Pituba",
              "BRT",
              "Via Cidadela",
              "BRT Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B2",
              "Rodoviária ↔ Rio Vermelho",
              "BRT",
              "Via Pituba e Amaralina",
              "BRT Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B3",
              "Rodoviária ↔ Pituba",
              "BRT",
              "Via Paulo VI",
              "BRT Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B4",
              "Pituba ↔ Lapa",
              "BRT",
              "Atende o trecho central do sistema",
              "BRT Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B5",
              "Rodoviária ↔ Lapa",
              "BRT",
              "Ligação entre dois grandes polos de conexão",
              "BRT Salvador"
            )}

          </div>

        </section>


        <!-- ==================================================
             TERMINAIS IMPORTANTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminais importantes
          </h4>

          <p class="panel-intro">
            Muitos trajetos ficam mais simples
            quando você entende
            onde as linhas se conectam.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Um dos maiores pontos
                de conexão do transporte
                urbano de Salvador.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Integra ônibus
                e Linha 1 do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Importante terminal
                para linhas metropolitanas
                e conexão com a Linha 2.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Mussurunga
              </strong>

              <p>
                Terminal urbano
                e metropolitano
                conectado à Linha 2.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Integra metrô,
                ônibus e a nova
                Rodoviária da Bahia.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Shopping da Bahia
              </strong>

              <p>
                Mantém linhas urbanas
                da região da antiga Rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NOVA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atenção à Rodoviária
          </h4>

          <div class="visitor-alert">

            <strong>
              A Rodoviária principal mudou para Águas Claras em 2026.
            </strong>

            O novo Terminal Salvador
            começou a operar em janeiro de 2026
            e possui conexão direta
            com a estação de metrô
            de Águas Claras.

          </div>


          <div class="answer-block">

            <strong>
              Não confunda com o antigo terminal
            </strong>

            <p>
              Algumas referências antigas
              ainda podem mencionar
              a região do Shopping da Bahia
              como “Rodoviária”.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Algumas linhas foram renomeadas
            </strong>

            <p>
              Linhas urbanas que utilizavam
              “Rodoviária” no nome
              passaram a usar
              “Terminal Shopping da Bahia”.
            </p>

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus metropolitanos
          </h4>

          <p class="panel-intro">
            Essas linhas atravessam
            os limites de Salvador
            e atendem outros municípios
            da Região Metropolitana.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Rede atual
              </strong>

              <p>
                A AGERBA informa
                67 linhas metropolitanas
                operadas por quatro concessionárias.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Terminais de integração
              </strong>

              <p>
                Águas Claras, Aeroporto,
                Mussurunga e Pirajá
                concentram diversas
                conexões metropolitanas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Destinos frequentes
              </strong>

              <p>
                Lauro de Freitas,
                Camaçari, Simões Filho,
                Dias d'Ávila, Mata de São João
                e outras cidades da RMS.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tarifa própria
              </strong>

              <p>
                O valor depende
                da linha e do percurso.
                Não existe uma única tarifa
                metropolitana para todos os trajetos.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS DE LINHAS METROPOLITANAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos de conexões metropolitanas
          </h4>

          <p class="panel-intro">
            Alguns exemplos ajudam a entender
            como os terminais de Salvador
            funcionam como portas de entrada da RMS.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Lauro de Freitas
              </span>

              <strong>
                Terminal Aeroporto
              </strong>

              <p>
                Diversas linhas metropolitanas
                chegam ao Terminal Aeroporto.
              </p>

              <span class="fare-scenario-result">
                Conexão com metrô
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Camaçari
              </span>

              <strong>
                Águas Claras ou Mussurunga
              </strong>

              <p>
                Há linhas metropolitanas
                conectando Camaçari
                a terminais da capital.
              </p>

              <span class="fare-scenario-result">
                Consulte a linha
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Praia do Forte
              </span>

              <strong>
                Terminal Aeroporto
              </strong>

              <p>
                A rede metropolitana inclui
                serviço ligando Praia do Forte
                ao Terminal Aeroporto.
              </p>

              <span class="fare-scenario-result">
                Linha metropolitana
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento e integração
          </h4>

          <div class="answer-block">

            <strong>
              Ônibus municipal e BRT
            </strong>

            <p>
              Use SalvadorCARD
              ou outro meio aceito
              pela rede municipal.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Bilhete Avulso
            </strong>

            <p>
              Para quem está visitando,
              o Bilhete Avulso SalvadorCARD
              é uma opção prática:
              não exige cadastro
              e participa da integração tarifária.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ônibus metropolitano
            </strong>

            <p>
              Confirme o cartão aceito
              e a tarifa específica
              antes de embarcar.
            </p>

          </div>

        </section>


        <!-- ==================================================
             DICAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Dicas que evitam erro
          </h4>

          <div class="bus-tip-list">

            <article class="bus-tip">

              <span class="bus-tip-icon">
                🔢
              </span>

              <div>

                <strong>
                  Salve o número da linha
                </strong>

                <p>
                  Número e destino juntos
                  são mais seguros
                  do que apenas o nome do bairro.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                📱
              </span>

              <div>

                <strong>
                  Consulte o planejador oficial
                </strong>

                <p>
                  Ele já considera
                  integração com metrô,
                  BRT e caminhada.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🧳
              </span>

              <div>

                <strong>
                  Confira qual Rodoviária
                </strong>

                <p>
                  Desde 2026,
                  a principal Rodoviária
                  está em Águas Claras.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🌆
              </span>

              <div>

                <strong>
                  Município diferente?
                </strong>

                <p>
                  Confirme se a linha
                  é metropolitana
                  e consulte a AGERBA.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

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
            href="https://www.salvadorcard.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SalvadorCARD
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERBA
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
