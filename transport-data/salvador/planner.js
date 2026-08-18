// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["planner"] = {

  kicker: "Salvador · planejamento de viagem",

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
            Em Salvador, vale comparar metrô,
            BRT, ônibus, VLT e transporte hidroviário
            antes de decidir.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🗺️
              </span>

              <strong>
                Quero comparar o trajeto inteiro
              </strong>

              <p>
                Consulte os canais públicos
                da Mobilidade Salvador
                para linhas, alterações
                e informações operacionais.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Vou usar metrô
              </strong>

              <p>
                Confira a estação,
                a linha, o sentido
                e se o percurso exige integração.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Vou usar BRT
              </strong>

              <p>
                Confirme a linha
                e a estação que atende
                melhor seu destino.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚊
              </span>

              <strong>
                Quero usar o VLT
              </strong>

              <p>
                Consulte a operação assistida
                antes de depender do sistema
                em um trajeto essencial.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                ⛴
              </span>

              <strong>
                Vou para Itaparica
              </strong>

              <p>
                Consulte a AGERBA
                para informações públicas
                sobre o Ferry-Boat.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Vou para outra cidade da RMS
              </strong>

              <p>
                Compare metrô
                e transporte metropolitano
                e consulte a AGERBA.
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
                Inclua espera,
                caminhada
                e integrações.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Quantidade de trocas
              </strong>

              <p>
                Menos integrações
                podem simplificar
                bastante a viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Considere calor,
                chuva, ladeiras
                e bagagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Meio de pagamento
              </strong>

              <p>
                Integrações podem depender
                de cartão compatível.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                Cada sistema
                possui operação própria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Operação no dia
              </strong>

              <p>
                Eventos e operações especiais
                podem alterar linhas
                e horários.
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
            As Linhas 1 e 2
            conectam diferentes regiões
            e podem ser combinadas
            com ônibus e BRT.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🔄</span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                É o principal ponto
                de transferência
                entre as Linhas 1 e 2.
              </p>

            </article>


            <article class="hours-card">

              <span>✈️</span>

              <strong>
                Aeroporto
              </strong>

              <p>
                A Linha 2 atende
                o eixo da Estação Aeroporto.
              </p>

            </article>


            <article class="hours-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                A Linha 1 atende
                a região da nova Rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER A ROTA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como interpretar uma rota de metrô
          </h4>

          <div class="route-example">

            <div class="route-phone">

              <span class="route-phone-title">
                Exemplo de trajeto
              </span>

              <div class="route-step-list">

                <div class="route-step">

                  <span class="route-step-icon">
                    🚶
                  </span>

                  <div>
                    <strong>
                      Caminhe até a estação
                    </strong>

                    <small>
                      Confira o acesso mais conveniente
                    </small>
                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🚇
                  </span>

                  <div>
                    <strong>
                      Identifique a linha
                    </strong>

                    <small>
                      Linha 1 ou Linha 2
                    </small>
                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    ↔️
                  </span>

                  <div>
                    <strong>
                      Confira o sentido
                    </strong>

                    <small>
                      Veja o terminal indicado
                    </small>
                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🔄
                  </span>

                  <div>
                    <strong>
                      Faça a transferência
                    </strong>

                    <small>
                      Use Acesso Norte quando necessário
                    </small>
                  </div>

                </div>

              </div>

            </div>


            <div class="route-explanation">

              <article class="route-explanation-card">

                <strong>
                  Linha 1
                </strong>

                <p>
                  Liga Lapa
                  ao eixo de Pirajá
                  e Águas Claras.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Linha 2
                </strong>

                <p>
                  Liga Acesso Norte
                  ao eixo do Aeroporto.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Acesso Norte
                </strong>

                <p>
                  É o ponto
                  de transferência
                  entre as duas linhas.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Considere a integração
                </strong>

                <p>
                  Ônibus e BRT
                  podem completar
                  o percurso.
                </p>

              </article>

            </div>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo BRT
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Identifique a linha
              </strong>

              <p>
                Veja qual serviço
                atende seu destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Localize a estação
              </strong>

              <p>
                O embarque acontece
                nas estações do sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Confira o sentido
              </strong>

              <p>
                Verifique o destino
                indicado antes de embarcar.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Veja a integração
              </strong>

              <p>
                Confirme se o percurso
                continua por metrô
                ou ônibus.
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
              Consulte a Mobilidade Salvador.
            </strong>

            <p>
              A Prefeitura publica
              informações sobre linhas,
              terminais, mudanças
              e operações especiais.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Salve o número da linha.
            </strong>

            <p>
              Número e destino
              são referências importantes
              para confirmar o embarque.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Confira o terminal.
            </strong>

            <p>
              Lapa, Pirajá,
              Mussurunga, Aeroporto
              e Águas Claras
              concentram diferentes conexões.
            </p>

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo VLT
          </h4>

          <p class="panel-intro">
            O VLT ainda está
            em operação assistida.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>📅</span>

              <strong>
                Dias úteis
              </strong>

              <p>
                Segunda a sexta-feira,
                exceto feriados.
              </p>

            </article>


            <article class="hours-card">

              <span>🕗</span>

              <strong>
                Horário atual
              </strong>

              <p>
                Das 8h às 16h
                nesta etapa assistida.
              </p>

            </article>


            <article class="hours-card">

              <span>🚊</span>

              <strong>
                Trecho atual
              </strong>

              <p>
                Calçada ↔ Lobato,
                em percurso
                de aproximadamente 4 km.
              </p>

            </article>


            <article class="hours-card">

              <span>🏗️</span>

              <strong>
                Expansão
              </strong>

              <p>
                Outros trechos
                permanecem
                em implantação.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Confirme a operação
              antes de sair.
            </strong>

            Como se trata
            de uma etapa assistida,
            a programação pode ser alterada.

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo Ferry-Boat
          </h4>

          <p class="panel-intro">
            O sistema liga
            São Joaquim, em Salvador,
            a Bom Despacho,
            na Ilha de Itaparica.
          </p>

          <div class="answer-block">

            <strong>
              Consulte a AGERBA
              antes da travessia.
            </strong>

            <p>
              Horários,
              tarifas e operações especiais
              podem mudar conforme
              período e demanda.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Passageiro ou veículo?
            </strong>

            <p>
              O tipo de embarque
              interfere na tarifa
              e na organização
              da travessia.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não apresentamos
              horários permanentes
              vindos da operadora.
            </strong>

            Para a programação vigente,
            utilize as publicações
            da AGERBA.

          </div>

        </section>


        <!-- ==================================================
             RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nova Rodoviária em Águas Claras
          </h4>

          <div class="answer-block">

            <strong>
              O Terminal Salvador
              opera em Águas Claras.
            </strong>

            <p>
              A nova Rodoviária
              entrou em operação
              em 20 de janeiro de 2026.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Há integração direta
              com o metrô.
            </strong>

            <p>
              Uma passarela conecta
              o terminal rodoviário
              ao sistema metroviário.
            </p>

          </div>


          <div class="fare-note">

            Referências antigas
            podem ainda apontar
            para a antiga Rodoviária
            na região do Shopping da Bahia.

          </div>

        </section>


        <!-- ==================================================
             REGIÃO METROPOLITANA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Destinos na Região Metropolitana
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Lauro de Freitas
              </strong>

              <p>
                Compare metrô
                e transporte metropolitano.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Camaçari
              </strong>

              <p>
                Consulte linhas
                metropolitanas
                e terminais de conexão.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Simões Filho
              </strong>

              <p>
                Verifique
                o serviço metropolitano
                adequado ao trajeto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Praia do Forte
              </strong>

              <p>
                A AGERBA registra
                serviço metropolitano
                ligado ao Terminal Aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO COMPARAR ROTAS
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
                Menos tempo,
                mais integrações
              </strong>

              <p>
                Pode ser mais rápida,
                mas exige mais atenção
                nas trocas.
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
                Mais tempo,
                menos trocas
              </strong>

              <p>
                Pode reduzir
                o atrito durante
                o deslocamento.
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
                Mais caminhada
              </strong>

              <p>
                Calor, chuva,
                ladeiras e bagagem
                podem alterar a escolha.
              </p>

              <span class="route-compare-result">
                Considere o contexto
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
                  Alterações operacionais
                  podem mudar
                  o melhor caminho.
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
                  Integrações
                  podem depender
                  de meio compatível.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🧭
              </span>

              <div>

                <strong>
                  Confirme o terminal
                </strong>

                <p>
                  Uma mesma região
                  pode ter diferentes
                  pontos de conexão.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                ⚠️
              </span>

              <div>

                <strong>
                  Veja operações especiais
                </strong>

                <p>
                  Eventos,
                  feriados e alta demanda
                  podem mudar a operação.
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
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTB · Governo da Bahia
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
            href="https://www.ba.gov.br/agerba/noticias/2026-06/8384/novo-terminal-rodoviario-de-salvador-amplia-servicos-e-fortalece-logistica-de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Rodoviária · AGERBA
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
