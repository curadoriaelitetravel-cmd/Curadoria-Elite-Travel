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
            Em Salvador, vale comparar metrô, BRT,
            ônibus, VLT e Ferry-Boat antes de decidir.
            A melhor rota pode combinar mais de um sistema.
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
                Use o Planejador de Viagens oficial
                da Prefeitura, integrado ao KIM,
                para comparar ônibus, metrô,
                BRT e caminhada.
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
                Confira a estação mais próxima,
                a linha, o sentido e se será
                necessário fazer integração.
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
                Confirme a linha B1, B2, B3,
                B4 ou B5 e verifique
                qual estação atende seu destino.
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
                Consulte a operação do dia.
                O sistema ainda funciona
                em etapa assistida e limitada.
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
                Consulte o Ferry-Boat
                e planeje a travessia
                entre São Joaquim e Bom Despacho.
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
                e ônibus metropolitanos
                antes de escolher.
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

              <span>
                ⏱️
              </span>

              <strong>
                Tempo total
              </strong>

              <p>
                Inclua espera,
                caminhada e integração.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🔄
              </span>

              <strong>
                Quantidade de trocas
              </strong>

              <p>
                Menos integrações
                podem tornar a viagem
                mais simples.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🚶
              </span>

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

              <span>
                💳
              </span>

              <strong>
                Meio de pagamento
              </strong>

              <p>
                Integrações podem depender
                de cartão específico.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🕒
              </span>

              <strong>
                Horário
              </strong>

              <p>
                VLT e Ferry-Boat
                têm operação própria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                ⚠️
              </span>

              <strong>
                Operação no dia
              </strong>

              <p>
                Eventos podem alterar
                linhas e horários.
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
            O metrô é uma das melhores referências
            para deslocamentos longos
            entre regiões da cidade.
          </p>

          <div class="hours-grid">


            <article class="hours-card">

              <span>
                🕔
              </span>

              <strong>
                Início
              </strong>

              <p>
                Operação regular
                a partir das 5h.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🌙
              </span>

              <strong>
                Encerramento
              </strong>

              <p>
                Operação regular
                até a meia-noite.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🔄
              </span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                É a principal estação
                de conexão entre
                as Linhas 1 e 2.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🧳
              </span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Integra a Linha 1
                com a nova Rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER A ROTA DO METRÔ
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
                      Veja a estação terminal indicada
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
                  Liga Lapa ao eixo
                  de Pirajá e Águas Claras.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Linha 2
                </strong>

                <p>
                  Liga Acesso Norte
                  à região do Aeroporto.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Acesso Norte
                </strong>

                <p>
                  É a estação de transferência
                  entre as duas linhas.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Não ignore a integração
                </strong>

                <p>
                  Ônibus e BRT
                  podem completar
                  o percurso final.
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

          <p class="panel-intro">
            O BRT pode ser especialmente útil
            em trechos entre Rodoviária,
            Pituba, Rio Vermelho e Lapa.
          </p>

          <div class="bus-use-flow">


            <article class="bus-use-step">

              <span>
                1
              </span>

              <strong>
                Identifique a linha
              </strong>

              <p>
                Confira se é B1,
                B2, B3, B4 ou B5.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                2
              </span>

              <strong>
                Veja a estação
              </strong>

              <p>
                O embarque acontece
                em estações do sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                3
              </span>

              <strong>
                Confira o sentido
              </strong>

              <p>
                Compare o destino
                indicado no serviço.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                4
              </span>

              <strong>
                Veja a integração
              </strong>

              <p>
                Confirme se a viagem
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
              Use o Planejador de Viagens oficial.
            </strong>

            <p>
              O serviço da Prefeitura
              cruza ônibus, metrô,
              BRT e caminhada
              para sugerir opções.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Salve o número da linha.
            </strong>

            <p>
              Número e destino
              são as referências
              mais seguras no ponto.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Confira o terminal.
            </strong>

            <p>
              Muitas linhas utilizam
              Lapa, Pirajá,
              Mussurunga, Aeroporto
              ou Águas Claras
              como pontos de conexão.
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
            O VLT ainda está em operação assistida
            e deve ser tratado como uma opção
            complementar, não como uma rede
            totalmente consolidada.
          </p>

          <div class="hours-grid">


            <article class="hours-card">

              <span>
                📅
              </span>

              <strong>
                Segunda a sexta
              </strong>

              <p>
                Operação assistida
                em dias úteis.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🕗
              </span>

              <strong>
                Horário
              </strong>

              <p>
                Das 8h às 16h
                nesta etapa.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🚫
              </span>

              <strong>
                Feriados
              </strong>

              <p>
                A operação assistida
                não ocorre nos feriados.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🚊
              </span>

              <strong>
                Trecho atual
              </strong>

              <p>
                Calçada ↔ Lobato,
                com atendimento
                até Marisqueiras.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não monte um trajeto essencial
              dependendo exclusivamente do VLT
              sem confirmar a operação do dia.
            </strong>

            O sistema está sendo implantado
            gradualmente e a programação
            pode mudar.

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo Ferry-Boat
          </h4>

          <p class="panel-intro">
            A travessia liga São Joaquim,
            em Salvador, a Bom Despacho,
            na Ilha de Itaparica.
          </p>

          <div class="route-compare-grid">


            <article class="route-compare-card">

              <span>
                Segunda a sábado
              </span>

              <strong>
                5h às 23h30
              </strong>

              <p>
                Faixa geral de funcionamento
                informada pela operadora.
              </p>

              <span class="route-compare-result">
                Consulte a grade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Domingos e feriados
              </span>

              <strong>
                6h às 23h30
              </strong>

              <p>
                O início da operação
                acontece uma hora mais tarde.
              </p>

              <span class="route-compare-result">
                Planeje com antecedência
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Veículos
              </span>

              <strong>
                Considere o tempo de fila
              </strong>

              <p>
                Para quem embarca com carro,
                movimento e espera
                podem alterar o tempo total.
              </p>

              <span class="route-compare-result">
                Consulte o filômetro
              </span>

            </article>

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
              A principal Rodoviária de Salvador
              está agora em Águas Claras.
            </strong>

            <p>
              O terminal possui conexão
              com a Linha 1 do metrô,
              o que facilita bastante
              o deslocamento para outras áreas
              da cidade.
            </p>

          </div>


          <div class="fare-note">

            Ao pesquisar endereços antigos,
            você ainda pode encontrar
            referências à antiga Rodoviária
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
                até Aeroporto
                com ônibus metropolitanos.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Camaçari
              </strong>

              <p>
                Consulte linhas metropolitanas
                e conexões por terminais.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Praia do Forte
              </strong>

              <p>
                Há serviço metropolitano
                com conexão ao Terminal Aeroporto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ilha de Itaparica
              </strong>

              <p>
                Compare Ferry-Boat
                com outras alternativas
                conforme seu destino final.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS DE DECISÃO
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
                Menos tempo, mais integrações
              </strong>

              <p>
                Pode ser mais rápida,
                mas exige mais atenção
                nas trocas.
              </p>

              <span class="route-compare-result">
                Melhor se tempo for prioridade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção B
              </span>

              <strong>
                Mais tempo, menos trocas
              </strong>

              <p>
                Pode ser melhor
                para quem quer reduzir
                atrito durante a viagem.
              </p>

              <span class="route-compare-result">
                Melhor para simplificar
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
                Em Salvador,
                ladeiras, calor e chuva
                podem mudar bastante
                a conveniência da rota.
              </p>

              <span class="route-compare-result">
                Considere o contexto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DICAS FINAIS
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
                  Consulte a rota novamente
                </strong>

                <p>
                  Alterações operacionais
                  podem mudar o melhor caminho.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🔋
              </span>

              <div>

                <strong>
                  Saia com bateria suficiente
                </strong>

                <p>
                  O celular será útil
                  para rota e recarga.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                💳
              </span>

              <div>

                <strong>
                  Confira o meio de pagamento
                </strong>

                <p>
                  A integração pode depender
                  de cartão compatível.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🧭
              </span>

              <div>

                <strong>
                  Confirme o destino final
                </strong>

                <p>
                  Em terminais grandes,
                  uma mesma região
                  pode ter mais de uma opção.
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
            Planejador oficial · Salvador
          </a>


          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/metrobahia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô Bahia
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VLT · Governo da Bahia
          </a>


          <a
            class="official-link"
            href="https://www.internacionaltravessias.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ferry-Boat
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · AGERBA
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
