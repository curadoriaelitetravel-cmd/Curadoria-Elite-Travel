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
            ônibus municipal, BRT e transporte metropolitano.
            Cada sistema possui função e regras próprias.
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
                Sistema municipal
                com estações
                e corredores próprios.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ônibus metropolitano
              </strong>

              <p>
                Liga Salvador
                a outros municípios
                da Região Metropolitana.
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
                Confira o número
              </strong>

              <p>
                Use o número da linha
                como principal referência.
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
                O letreiro ajuda
                a confirmar o sentido
                correto da viagem.
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
                Linhas que passam
                pela mesma avenida
                podem utilizar pontos diferentes.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PLANEJAMENTO MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Consulte a Mobilidade Salvador
          </h4>

          <p class="panel-intro">
            A Secretaria Municipal de Mobilidade
            publica informações sobre linhas,
            alterações operacionais,
            terminais e BRT.
          </p>

          <div class="answer-block">

            <strong>
              Confirme a linha antes de sair
            </strong>

            <p>
              Alterações de itinerário,
              eventos e operações especiais
              podem modificar o serviço.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Compare com metrô e BRT
            </strong>

            <p>
              Em vários trajetos,
              combinar sistemas
              pode ser mais simples
              do que depender
              de uma única linha.
            </p>

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
            O BRT opera
            em estações próprias
            e integra a rede municipal.
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
                nas estações do sistema.
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
                Verifique qual serviço
                atende seu destino.
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
                Confirme o destino
                indicado antes do embarque.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                💳
              </span>

              <strong>
                4. Confira o meio de pagamento
              </strong>

              <p>
                Se houver integração,
                use meio compatível
                com a regra vigente.
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
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B2",
              "Rodoviária ↔ Rio Vermelho",
              "BRT",
              "Via Pituba e Amaralina",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B3",
              "Rodoviária ↔ Pituba",
              "BRT",
              "Via Paulo VI",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B4",
              "Pituba ↔ Lapa",
              "BRT",
              "Ligação entre Pituba e Centro",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B5",
              "Rodoviária ↔ Lapa",
              "BRT",
              "Ligação entre dois polos de conexão",
              "Prefeitura de Salvador"
            )}

          </div>

        </section>


        <!-- ==================================================
             TERMINAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminais importantes
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Importante terminal
                do transporte urbano
                de Salvador.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Ponto de conexão
                entre ônibus
                e Linha 1 do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                Recebe diversas
                linhas metropolitanas
                e conecta-se ao eixo da Linha 2.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Mussurunga
              </strong>

              <p>
                Importante ponto
                de integração urbana
                e metropolitana.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Integra transporte
                rodoviário, ônibus
                e metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Terminal Shopping da Bahia
              </strong>

              <p>
                Continua atendendo
                linhas urbanas
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
            Nova Rodoviária de Salvador
          </h4>

          <div class="visitor-alert">

            <strong>
              A principal Rodoviária está
              em Águas Claras.
            </strong>

            O Terminal Salvador
            entrou em operação
            em 20 de janeiro de 2026
            e possui conexão direta
            com o sistema metroviário.

          </div>


          <div class="answer-block">

            <strong>
              A antiga referência mudou
            </strong>

            <p>
              Linhas municipais
              que utilizavam “Rodoviária”
              no nome passaram
              a utilizar “Terminal Shopping da Bahia”.
            </p>

          </div>


          <div class="fare-note">

            Se encontrar uma indicação
            antiga para “Rodoviária”
            na região do Shopping da Bahia,
            confirme se ela se refere
            ao terminal urbano
            ou à nova Rodoviária
            em Águas Claras.

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
            A rede estadual conecta
            Salvador a diversos municípios
            da Região Metropolitana.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                67 linhas
              </strong>

              <p>
                É o total informado
                pela AGERBA
                em junho de 2026.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Quatro concessionárias
              </strong>

              <p>
                A operação é distribuída
                entre quatro empresas
                dentro do sistema regulado
                pela AGERBA.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Terminais principais
              </strong>

              <p>
                Águas Claras,
                Aeroporto,
                Mussurunga e Pirajá
                concentram diversas conexões.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tarifa variável
              </strong>

              <p>
                O valor depende
                da linha e do percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS METROPOLITANOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos de conexões metropolitanas
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Lauro de Freitas
              </span>

              <strong>
                Terminal Aeroporto
              </strong>

              <p>
                Diversas linhas
                da região chegam
                ao Terminal Aeroporto.
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
                Águas Claras / Mussurunga
              </strong>

              <p>
                A AGERBA registra
                linhas ligando Camaçari
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
                A linha 138
                liga Praia do Forte
                ao Terminal Aeroporto.
              </p>

              <span class="fare-scenario-result">
                Rede metropolitana
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIOS METROPOLITANOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários metropolitanos
          </h4>

          <div class="answer-block">

            <strong>
              A AGERBA publica quadros de horários.
            </strong>

            <p>
              Algumas linhas
              possuem horários disponíveis
              diretamente no portal
              da Agência.
            </p>

          </div>


          <div class="fare-note">

            Para uma viagem metropolitana,
            consulte o número exato da linha
            e o quadro correspondente
            antes de sair.

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
              Consulte os meios
              atualmente aceitos
              pela rede municipal
              e as regras de integração.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ônibus metropolitano
            </strong>

            <p>
              A tarifa depende
              da linha utilizada.
              Quando houver integração
              com o metrô,
              siga a regra tarifária vigente.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não colocamos aqui
              regras comerciais do SalvadorCARD.
            </strong>

            Os cartões aceitos
            e as formas de pagamento
            são tratados no módulo
            “Como pagar” apenas quando
            confirmados por fonte pública.

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
                  ajudam a evitar
                  embarque no sentido errado.
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
                  A nova Rodoviária
                  fica em Águas Claras.
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
                  Verifique se a linha
                  é metropolitana
                  e consulte a AGERBA.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                📅
              </span>

              <div>

                <strong>
                  Eventos podem alterar a operação
                </strong>

                <p>
                  Carnaval,
                  grandes festas
                  e outras operações especiais
                  podem mudar horários.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS
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
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/quadro-de-horarios-expresso-metropolitano"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários metropolitanos · AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/noticias/2026-01/8341/nova-rodoviaria-da-bahia-mais-moderna-integrada-e-segura"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Rodoviária · AGERBA
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
