// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


window.BELO_HORIZONTE_TRANSPORT_MODULES["planner"] = {

  kicker: "Belo Horizonte · planejamento de viagem",

  title: "Planeje o trajeto",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             POR ONDE COMEÇAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Por onde começar?
          </h4>

          <p class="panel-intro">
            Em Belo Horizonte,
            vale comparar metrô,
            MOVE e ônibus antes de decidir.
            Para outra cidade da Região Metropolitana,
            consulte também a rede estadual.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Destino próximo à Linha 1
              </strong>

              <p>
                Comece pelo metrô
                e veja se ônibus ou MOVE
                são necessários
                apenas para completar o percurso.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Destino próximo ao MOVE
              </strong>

              <p>
                Verifique se o trajeto
                combina linha alimentadora,
                estação e linha troncal.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Bairro fora dos eixos principais
              </strong>

              <p>
                Consulte as linhas
                convencionais e suplementares
                disponíveis na região.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Outra cidade da RMBH
              </strong>

              <p>
                Verifique se o trajeto
                pertence ao sistema
                metropolitano estadual.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE COMPARAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que comparar antes de escolher
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Tempo total
              </strong>

              <p>
                Considere espera,
                caminhada e integrações,
                não apenas o tempo
                dentro do veículo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Quantidade de trocas
              </strong>

              <p>
                Uma rota um pouco mais longa
                pode ser mais simples
                se exigir menos conexões.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Considere distância,
                relevo, bagagem
                e condições do dia.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Integração tarifária
              </strong>

              <p>
                O meio de pagamento
                pode alterar o custo
                de uma viagem integrada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                Consulte a programação
                da linha antes de sair.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Ponto de embarque
              </strong>

              <p>
                Confirme a parada,
                estação ou terminal
                correto para o sentido desejado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo metrô
          </h4>

          <p class="panel-intro">
            A Linha 1 é a linha
            atualmente disponível
            para o passageiro.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🚇</span>

              <strong>
                Linha 1
              </strong>

              <p>
                Novo Eldorado
                ↔ Vilarinho.
              </p>

            </article>


            <article class="hours-card">

              <span>🏙️</span>

              <strong>
                Central
              </strong>

              <p>
                Uma das referências
                para acessar
                a região central.
              </p>

            </article>


            <article class="hours-card">

              <span>🔄</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante conexão
                com ônibus
                e MOVE.
              </p>

            </article>


            <article class="hours-card">

              <span>🚍</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Integra metrô
                e serviços do MOVE
                no vetor Norte.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não planeje uma viagem
              contando com a Linha 2.
            </strong>

            Ela ainda está em implantação
            e não integra a rede disponível
            para o passageiro.

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo MOVE
          </h4>

          <p class="panel-intro">
            Uma viagem pelo MOVE
            pode envolver mais de uma linha,
            mesmo quando funciona
            como um único percurso integrado.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Localize a origem
              </strong>

              <p>
                Veja se existe
                linha alimentadora
                próxima ao ponto de partida.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique a estação
              </strong>

              <p>
                A alimentadora
                pode levar até
                uma estação de integração.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Confira a troncal
              </strong>

              <p>
                Veja qual linha
                segue pelo corredor
                adequado ao destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Veja a última etapa
              </strong>

              <p>
                Outra linha ou caminhada
                pode completar
                o percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Conexões importantes
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Venda Nova
              </strong>

              <p>
                Estação de integração
                do MOVE.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Conexão entre
                metrô e MOVE.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Conexão entre
                metrô, MOVE
                e ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Estação de integração
                importante para
                a região da Pampulha.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Barreiro
              </strong>

              <p>
                Estação de integração
                BHBUS.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Diamante
              </strong>

              <p>
                Estação de integração
                BHBUS na região
                do Barreiro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelos ônibus
          </h4>

          <div class="answer-block">

            <strong>
              Consulte horário e itinerário.
            </strong>

            <p>
              A Prefeitura mantém
              consulta pública
              para as linhas municipais.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Confira o número da linha.
            </strong>

            <p>
              Use número,
              destino e ponto de embarque
              em conjunto para confirmar
              a opção correta.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Veja o ônibus em tempo real.
            </strong>

            <p>
              A SUMOB disponibiliza
              posição dos veículos,
              itinerário e previsão
              de chegada nos pontos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TEMPO REAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de caminhar até o ponto
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Consulta em tempo real
            </span>

            <h4>
              Veja onde está o ônibus.
            </h4>

            <p>
              A ferramenta pública da SUMOB
              permite pesquisar a linha,
              visualizar os veículos no mapa
              e consultar a previsão
              de chegada em cada parada.
            </p>

          </div>

        </section>


        <!-- ==================================================
             MADRUGADA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Vai se deslocar de madrugada?
          </h4>

          <div class="answer-block">

            <strong>
              Consulte o Madrugão.
            </strong>

            <p>
              A rede municipal possui
              operação específica
              entre 0h e 3h59.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Existe também
              a Linha 10 Circular Noturno.
            </strong>

            <p>
              Ela atende pontos importantes
              da vida noturna
              e conexões com o MOVE.
            </p>

          </div>


          <div class="fare-note">

            Horários noturnos
            merecem confirmação
            no próprio dia da viagem.

          </div>

        </section>


        <!-- ==================================================
             DOMINGOS E FERIADOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingo ou feriado?
          </h4>

          <div class="visitor-alert">

            <strong>
              Verifique primeiro
              a rede municipal.
            </strong>

            O Catraca Livre
            torna gratuitas as viagens
            nas linhas convencionais
            e suplementares municipais
            nos períodos previstos
            pelo programa.

          </div>


          <div class="fare-note">

            Isso não significa
            que todos os transportes
            de Belo Horizonte sejam gratuitos.
            O metrô e a rede metropolitana
            seguem regras próprias.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Vai para outra cidade da RMBH?
          </h4>

          <p class="panel-intro">
            Primeiro confirme
            se o deslocamento pertence
            à rede municipal
            ou ao sistema metropolitano.
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
                Consulte SUMOB,
                MOVE e linhas municipais.
              </p>

              <span class="route-compare-result">
                Gestão municipal
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
                Consulte linha,
                horário, itinerário
                e tarifa no sistema estadual.
              </p>

              <span class="route-compare-result">
                Gestão estadual
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO COMPARAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como comparar duas rotas
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Opção A
              </span>

              <strong>
                Mais rápida,
                mais trocas
              </strong>

              <p>
                Pode reduzir o tempo,
                mas exige atenção
                nas integrações.
              </p>

              <span class="route-compare-result">
                Prioridade: tempo
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção B
              </span>

              <strong>
                Mais direta,
                menos trocas
              </strong>

              <p>
                Pode levar alguns minutos
                a mais e ainda assim
                ser mais simples.
              </p>

              <span class="route-compare-result">
                Prioridade: simplicidade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção C
              </span>

              <strong>
                Menos caminhada
              </strong>

              <p>
                Pode ser relevante
                com bagagem,
                chuva ou dificuldade
                de mobilidade.
              </p>

              <span class="route-compare-result">
                Prioridade: conforto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ANTES DE SAIR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de sair
          </h4>

          <div class="planner-tip-list">

            <article class="planner-tip">

              <span class="planner-tip-icon">
                📱
              </span>

              <div>

                <strong>
                  Consulte novamente
                </strong>

                <p>
                  Veja horário,
                  itinerário e posição
                  do ônibus antes de sair.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                💳
              </span>

              <div>

                <strong>
                  Confira o pagamento
                </strong>

                <p>
                  Integrações tarifárias
                  dependem das regras
                  do sistema utilizado.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🔄
              </span>

              <div>

                <strong>
                  Entenda as trocas
                </strong>

                <p>
                  Uma rota pelo MOVE
                  pode envolver mais
                  de um ônibus.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🌆
              </span>

              <div>

                <strong>
                  Confira o município
                </strong>

                <p>
                  Sair de Belo Horizonte
                  pode significar entrar
                  no sistema metropolitano.
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
            href="https://prefeitura.pbh.gov.br/sumob/onibus/horarios-e-itinerarios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários e itinerários · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus-em-tempo-real"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ônibus em tempo real · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/estacoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estações · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/tarifas-e-integracoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas e integrações · PBH
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
