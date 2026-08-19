// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: ÔNIBUS E BRT
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


window.BRASILIA_TRANSPORT_MODULES["bus"] = {

  kicker:
    "Brasília · ônibus e conexões",

  title:
    "Ônibus e BRT",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como funciona a rede rodoviária
          </h4>

          <p class="panel-intro">
            O transporte rodoviário
            do Distrito Federal combina
            ônibus do Serviço Básico,
            BRT e serviços complementares.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Serviço Básico
              </strong>

              <p>
                É a principal rede
                regular de ônibus
                do Distrito Federal.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Estrutura principalmente
                os deslocamentos
                do eixo sul.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚐</span>

              <strong>
                Serviços locais
              </strong>

              <p>
                Incluem micro-ônibus
                e linhas de vizinhança
                em trajetos específicos.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌾</span>

              <strong>
                Complementar
              </strong>

              <p>
                Inclui serviços
                rurais e executivos.
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
            O BRT tem papel central
            nos deslocamentos
            do eixo sul do Distrito Federal.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Gama
              </strong>

              <p>
                Possui terminal
                integrado ao sistema BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Santa Maria
              </strong>

              <p>
                Também possui
                terminal de integração
                do corredor.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linhas alimentadoras
              </strong>

              <p>
                Ligam bairros
                aos terminais
                e estações do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Serviços troncais
              </strong>

              <p>
                Realizam os deslocamentos
                estruturais
                pelo corredor BRT.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RODOVIÁRIA DO PLANO PILOTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Rodoviária do Plano Piloto
          </h4>

          <div class="answer-block">

            <strong>
              É um dos principais
              pontos de conexão urbana.
            </strong>

            <p>
              Concentra diversas
              linhas de ônibus
              e possui ligação direta
              com a Estação Central
              do Metrô-DF.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não confunda com
              a Rodoviária Interestadual.
            </strong>

            A Rodoviária do Plano Piloto
            é uma referência
            do transporte urbano
            e distrital.
          </div>

        </section>


        <!-- ==================================================
             PONTOS DE PARADA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos de ônibus
          </h4>

          <p class="panel-intro">
            O Distrito Federal
            possui milhares
            de pontos de parada
            distribuídos pelo território.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Com abrigo
              </strong>

              <p>
                Possuem infraestrutura
                como piso e cobertura.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Com placa
              </strong>

              <p>
                Alguns pontos possuem
                apenas sinalização,
                normalmente onde
                não há espaço para abrigo.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A SEMOB registrava
            6.429 pontos de parada,
            sendo 5.283 com abrigo,
            na atualização oficial
            publicada em janeiro de 2025.

          </div>

        </section>


        <!-- ==================================================
             SERVIÇOS LOCAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Micro-ônibus e Zebrinha
          </h4>

          <div class="answer-block">

            <strong>
              Atendem trajetos locais.
            </strong>

            <p>
              Esses veículos aparecem
              em serviços de vizinhança
              e deslocamentos específicos
              dentro da rede rodoviária.
            </p>

          </div>


          <div class="fare-note">

            Aos domingos e feriados,
            também participam
            da gratuidade
            do Vai de Graça.

          </div>

        </section>


        <!-- ==================================================
             SERVIÇO RURAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte rural
          </h4>

          <div class="answer-block">

            <strong>
              O Distrito Federal
              também possui linhas rurais.
            </strong>

            <p>
              Elas fazem parte
              do Serviço Complementar
              e atendem áreas
              fora dos principais
              núcleos urbanos.
            </p>

          </div>


          <div class="fare-note">

            Essas linhas podem
            ter frequência menor
            do que os serviços
            urbanos principais.

          </div>

        </section>


        <!-- ==================================================
             TCB
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            E a TCB?
          </h4>

          <div class="visitor-alert">

            <strong>
              A TCB não opera
              linhas tarifárias regulares
              desde dezembro de 2024.
            </strong>

            Por isso,
            listas antigas de linhas
            da empresa não devem ser usadas
            como referência para planejar
            uma viagem atual.

          </div>


          <div class="fare-note">

            A TCB continua existindo
            como empresa pública
            do Distrito Federal
            e mantém outras atividades
            e serviços institucionais.

          </div>

        </section>


        <!-- ==================================================
             COMO IDENTIFICAR A LINHA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Na hora de embarcar
          </h4>

          <div class="bus-identification-grid">

            <article class="bus-identification-card">

              <span class="bus-identification-number">
                1
              </span>

              <strong>
                Número da linha
              </strong>

              <p>
                É a principal
                referência para distinguir
                um serviço de outro.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                2
              </span>

              <strong>
                Destino
              </strong>

              <p>
                Confira o destino
                exibido no veículo
                para evitar embarcar
                no sentido errado.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                3
              </span>

              <strong>
                Ponto correto
              </strong>

              <p>
                Vias largas
                e sentidos diferentes
                podem ter pontos
                separados.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DF NO PONTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Informações que mudam durante o dia
          </h4>

          <p class="panel-intro">
            Horários,
            localização do veículo
            e alterações operacionais
            precisam ser consultados
            em tempo real.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Horário
              </strong>

              <p>
                O DF no Ponto
                mostra as tabelas
                da linha selecionada.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Veículo no mapa
              </strong>

              <p>
                Quando disponível,
                mostra a localização
                dos ônibus da linha.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pontos de parada
              </strong>

              <p>
                Permite visualizar
                os pontos associados
                ao deslocamento.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Alertas
              </strong>

              <p>
                A ferramenta informa
                ocorrências e alterações
                operacionais relevantes.
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

          <div class="visitor-alert">

            <strong>
              Ônibus e BRT são gratuitos.
            </strong>

            O Vai de Graça
            também cobre micro-ônibus,
            Zebrinha,
            linhas urbanas
            e rurais
            e o Metrô-DF.

          </div>


          <div class="fare-note">

            Não há limite
            de viagens
            durante o período
            de gratuidade.

          </div>

        </section>


        <!-- ==================================================
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Em resumo
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Rede principal
              </strong>

              <p>
                Ônibus do Serviço Básico
                cobrem as diferentes
                Regiões Administrativas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Eixo sul
              </strong>

              <p>
                BRT é especialmente
                importante em
                Gama e Santa Maria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏛️</span>

              <strong>
                Plano Piloto
              </strong>

              <p>
                A Rodoviária
                funciona como grande
                ponto de conexão.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌾</span>

              <strong>
                Rural
              </strong>

              <p>
                Também existe
                atendimento complementar
                para áreas rurais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📱</span>

              <strong>
                Tempo real
              </strong>

              <p>
                Horário e posição
                dos veículos ficam
                no DF no Ponto.
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
            href="https://www.semob.df.gov.br/dados-do-sistema-de-transporte-publico-do-df"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sistema rodoviário · SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://www.semob.df.gov.br/pontos-de-parada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pontos de parada · SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://dfnoponto.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tempo real · DF no Ponto
          </a>


          <a
            class="official-link"
            href="https://tcb.df.gov.br/perguntas-frequentes-da-tcb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Situação da TCB
          </a>


          <a
            class="official-link"
            href="https://agenciabrasilia.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Governo do Distrito Federal
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
