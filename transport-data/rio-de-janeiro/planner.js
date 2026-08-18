// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


window.RIO_TRANSPORT_MODULES["planner"] = {

  kicker: "Rio de Janeiro · planejamento de viagem",

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
            No Rio, a melhor rota nem sempre usa um único sistema.
            Compare metrô, trem, BRT, VLT, ônibus e barcas
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
                Use um planejador de mapas para comparar
                tempo total, caminhada, baldeações
                e combinações entre diferentes modais.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Vou usar principalmente metrô
              </strong>

              <p>
                Consulte diretamente o MetrôRio
                para estações, tempo estimado
                e número de transferências.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚆
              </span>

              <strong>
                Vou usar trem
              </strong>

              <p>
                Confira o ramal, a estação de destino
                e a operação do sistema ferroviário
                antes de sair.
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
                Confirme corredor, serviço,
                estação de embarque
                e terminal indicado no letreiro.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                ⛴
              </span>

              <strong>
                Vou usar barca
              </strong>

              <p>
                Consulte a grade do dia.
                As partidas não funcionam
                como uma linha de metrô contínua.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Vou para outro município
              </strong>

              <p>
                Consulte o DETRO/RJ para identificar
                linha intermunicipal,
                itinerário e tarifa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO ESCOLHER
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
                Inclua espera, caminhada,
                transferência e tempo
                até o ponto de embarque.
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
                Uma rota alguns minutos mais longa
                pode ser mais simples
                se eliminar baldeações.
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
                Considere calor, chuva,
                bagagem e inclinação
                antes de aceitar uma rota a pé.
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
                Veja se a rota combina
                sistemas municipais
                e metropolitanos.
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
                Alguns sistemas reduzem
                frequência ou encerram
                mais cedo à noite.
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
                Eventos, obras e feriados
                podem alterar horários
                e serviços.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo MetrôRio
          </h4>

          <p class="panel-intro">
            Para deslocamentos pelo Centro,
            Zona Sul, Tijuca e Barra,
            vale começar pelo metrô.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>
                📅
              </span>

              <strong>
                Segunda a sábado
              </strong>

              <p>
                Operação geral
                das 5h à meia-noite.
              </p>

            </article>


            <article class="hours-card">

              <span>
                ☀️
              </span>

              <strong>
                Domingos e feriados
              </strong>

              <p>
                Operação geral
                das 7h às 23h.
              </p>

            </article>


            <article class="hours-card">

              <span>
                🔄
              </span>

              <strong>
                Transferência
              </strong>

              <p>
                Para garantir a troca entre linhas,
                esteja na plataforma da estação
                de transferência antes
                do encerramento da operação.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Horários podem mudar em operações especiais.
            </strong>

            Jogos, Carnaval, Réveillon
            e grandes eventos podem alterar
            a grade habitual.

          </div>

        </section>


        <!-- ==================================================
             COMO LER UMA ROTA DE METRÔ
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
                      Confira a linha
                    </strong>

                    <small>
                      Veja o número, cor e sentido
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
                      Siga as placas dentro da estação
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🚪
                  </span>

                  <div>

                    <strong>
                      Escolha a saída correta
                    </strong>

                    <small>
                      Confira rua ou ponto de referência
                    </small>

                  </div>

                </div>

              </div>

            </div>


            <div class="route-explanation">

              <article class="route-explanation-card">

                <strong>
                  Linha 1/4
                </strong>

                <p>
                  Os trens circulam entre
                  Uruguai/Tijuca e
                  Jardim Oceânico/Barra da Tijuca.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Linha 2
                </strong>

                <p>
                  Opera entre Pavuna
                  e Botafogo
                  na configuração regular indicada
                  pelo MetrôRio.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Veja o sentido
                </strong>

                <p>
                  O nome exibido
                  na plataforma indica
                  a direção do trem.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Não ignore a saída
                </strong>

                <p>
                  Estações centrais
                  podem ter múltiplos acessos
                  e saídas distantes entre si.
                </p>

              </article>

            </div>

          </div>

        </section>


        <!-- ==================================================
             TRENS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelos trens
          </h4>

          <p class="panel-intro">
            O trem é especialmente relevante
            para deslocamentos pela Zona Norte,
            Zona Oeste e municípios
            da Região Metropolitana.
          </p>

          <div class="answer-block">

            <strong>
              Primeiro identifique o ramal.
            </strong>

            <p>
              O nome da estação sozinho
              não basta para entender
              toda a viagem.
              Confira também qual ramal
              atende aquele destino.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Central do Brasil
              é um ponto importante de conexão.
            </strong>

            <p>
              Ela concentra diferentes ramais
              e permite conexão
              com metrô, ônibus e VLT
              na área central.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Consulte a operação no dia.
            </strong>

            <p>
              A programação ferroviária
              pode funcionar com horários fixos
              em domingos, feriados
              e situações especiais.
            </p>

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
            No BRT, não basta saber
            qual corredor atende a região.
            É necessário conferir o serviço exato.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                1
              </span>

              <strong>
                Identifique o corredor
              </strong>

              <p>
                Transoeste,
                Transcarioca,
                Transolímpica
                ou Transbrasil.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                2
              </span>

              <strong>
                Confira o serviço
              </strong>

              <p>
                Linhas paradoras
                e expressas podem ter
                paradas diferentes.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                3
              </span>

              <strong>
                Veja o terminal final
              </strong>

              <p>
                O destino indicado
                ajuda a confirmar
                o sentido correto.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                4
              </span>

              <strong>
                Confirme a conexão
              </strong>

              <p>
                Algumas viagens exigem
                troca de serviço
                em terminal intermediário.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando considerar o VLT
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Região Portuária
              </strong>

              <p>
                É especialmente útil
                entre Praça Mauá,
                Centro e Zona Portuária.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Rodoviária do Rio
              </strong>

              <p>
                Pode facilitar
                a ligação entre a rodoviária
                e áreas centrais.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Terminal Gentileza
              </strong>

              <p>
                Funciona como importante ponto
                de conexão com BRT
                e outros serviços.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Santos Dumont
              </strong>

              <p>
                O VLT pode participar
                de trajetos pela região
                do aeroporto.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelas barcas
          </h4>

          <p class="panel-intro">
            Diferentemente do metrô,
            as barcas trabalham com
            partidas programadas por linha.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Rio ↔ Niterói
              </span>

              <strong>
                Praça XV ↔ Praça Arariboia
              </strong>

              <p>
                Travessia de até aproximadamente
                22 minutos.
              </p>

              <span class="route-compare-result">
                Consulte a grade antes de sair
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Rio ↔ Charitas
              </span>

              <strong>
                Praça XV ↔ Charitas
              </strong>

              <p>
                Travessia de até aproximadamente
                28 minutos.
              </p>

              <span class="route-compare-result">
                Horários específicos
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ilha de Paquetá
              </span>

              <strong>
                Praça XV ↔ Paquetá
              </strong>

              <p>
                Travessia mais longa
                e dependente de horários
                definidos.
              </p>

              <span class="route-compare-result">
                Planeje ida e volta
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não chegue à estação
              contando com partida imediata.
            </strong>

            Consulte antes
            o horário da linha desejada,
            principalmente para Paquetá,
            Cocotá e Charitas.

          </div>

        </section>


        <!-- ==================================================
             INTERMUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus intermunicipais
          </h4>

          <p class="panel-intro">
            Se o destino está fora
            do município do Rio,
            confira se uma linha
            intermunicipal atende diretamente.
          </p>

          <div class="answer-block">

            <strong>
              Use a consulta do DETRO/RJ.
            </strong>

            <p>
              O sistema oficial permite
              verificar linhas,
              itinerários e tarifas
              dos serviços regulares.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não presuma uma tarifa única.
            </strong>

            <p>
              O valor varia conforme
              linha, município,
              distância e serviço.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Compare com trem ou barca.
            </strong>

            <p>
              Para alguns deslocamentos metropolitanos,
              uma combinação sobre trilhos
              ou hidroviária pode ser
              mais simples do que o ônibus direto.
            </p>

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
                45 minutos com duas trocas
              </strong>

              <p>
                Pode ser a opção mais rápida,
                mas exige mais atenção
                nas transferências.
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
                55 minutos com uma troca
              </strong>

              <p>
                Dez minutos adicionais
                podem valer a pena
                para uma viagem mais simples.
              </p>

              <span class="route-compare-result">
                Melhor para reduzir atrito
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção C
              </span>

              <strong>
                Menos tempo, muita caminhada
              </strong>

              <p>
                Avalie clima,
                bagagem,
                horário e segurança
                antes de escolher.
              </p>

              <span class="route-compare-result">
                Contexto muda a melhor rota
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÚLTIMO EMBARQUE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            À noite, planeje com mais margem
          </h4>

          <div class="planner-tip-list">

            <article class="planner-tip">

              <span class="planner-tip-icon">
                🕒
              </span>

              <div>

                <strong>
                  Confira o último embarque
                </strong>

                <p>
                  Não use apenas
                  o horário geral
                  de encerramento do sistema.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🔄
              </span>

              <div>

                <strong>
                  Considere a transferência
                </strong>

                <p>
                  Você precisa chegar
                  ao ponto de troca
                  antes do encerramento
                  daquela conexão.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                ⛴
              </span>

              <div>

                <strong>
                  Barcas exigem atenção especial
                </strong>

                <p>
                  A grade varia por linha,
                  dia da semana
                  e operação especial.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                📱
              </span>

              <div>

                <strong>
                  Consulte novamente antes de sair
                </strong>

                <p>
                  Eventos e alterações operacionais
                  podem mudar uma rota
                  que estava correta pela manhã.
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
            href="https://www.metrorio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planejar no MetrôRio
          </a>


          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar MOBI-Rio
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/linhas-horarios-e-tarifas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários das Barcas
          </a>


          <a
            class="official-link"
            href="https://www.detro.rj.gov.br/regulares-tarifas-itinerario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itinerários intermunicipais
          </a>


          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secretaria Municipal de Transportes
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
