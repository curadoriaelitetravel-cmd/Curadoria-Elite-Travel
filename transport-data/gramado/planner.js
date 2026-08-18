// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — GRAMADO
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.GRAMADO_TRANSPORT_MODULES =
  window.GRAMADO_TRANSPORT_MODULES || {};


window.GRAMADO_TRANSPORT_MODULES["planner"] = {

  kicker: "Gramado · planejamento de viagem",

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
            Em Gramado, a melhor escolha depende
            muito mais da distância, do clima
            e do horário do que de uma grande rede
            de transporte integrada.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚶
              </span>

              <strong>
                Destino no Centro
              </strong>

              <p>
                Compare primeiro a caminhada.
                Muitas atrações centrais
                estão relativamente próximas.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Bairro de Gramado
              </strong>

              <p>
                Consulte a nova rede municipal
                e veja se existe linha
                no horário necessário.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🏘️
              </span>

              <strong>
                Quero ir a Canela
              </strong>

              <p>
                Comece pela circular 6152
                e compare com aplicativo
                conforme o número de passageiros.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚗
              </span>

              <strong>
                Atração afastada
              </strong>

              <p>
                Compare ônibus, aplicativo,
                táxi e carro antes de decidir.
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
                Considere espera,
                caminhada e deslocamento
                até o ponto de embarque.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🌧️
              </span>

              <strong>
                Clima
              </strong>

              <p>
                Chuva, frio
                e neblina mudam bastante
                a conveniência da caminhada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                👥
              </span>

              <strong>
                Número de pessoas
              </strong>

              <p>
                Para grupos,
                aplicativo pode competir
                com a soma das passagens.
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
                Nem todas as linhas municipais
                operam com a mesma frequência.
              </p>

            </article>


            <article class="planner-check-card">

              <span>
                🧳
              </span>

              <strong>
                Bagagem
              </strong>

              <p>
                Na chegada e saída,
                considere conforto
                e praticidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CAMINHANDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando caminhar faz sentido
          </h4>

          <p class="panel-intro">
            Para quem está hospedado
            na região central,
            caminhar pode ser a forma
            mais simples de circular.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Distâncias curtas
              </strong>

              <p>
                Compare a caminhada
                com o tempo de espera
                do transporte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Centro turístico
              </strong>

              <p>
                Muitas atrações,
                restaurantes e lojas
                ficam concentrados
                em áreas próximas.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Chuva ou frio intenso
              </strong>

              <p>
                Uma distância confortável
                em dia seco pode não ser
                a melhor escolha
                em condições ruins.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ladeiras
              </strong>

              <p>
                Considere o relevo
                antes de decidir
                apenas pela distância
                mostrada no mapa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo ônibus municipal
          </h4>

          <p class="panel-intro">
            O novo sistema de Gramado
            possui 26 linhas,
            mas frequência e horários
            variam conforme o trajeto.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                1
              </span>

              <strong>
                Identifique o bairro
              </strong>

              <p>
                Primeiro confirme
                a região exata
                do seu destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                2
              </span>

              <strong>
                Consulte a linha
              </strong>

              <p>
                Veja qual das linhas
                atende aquela região.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                3
              </span>

              <strong>
                Confira o horário
              </strong>

              <p>
                A frequência
                não é igual
                em toda a rede.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                4
              </span>

              <strong>
                Confirme o ponto
              </strong>

              <p>
                Veja onde embarcar
                e em qual sentido
                o ônibus seguirá.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIOS MUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários municipais
          </h4>

          <div class="answer-block">

            <strong>
              A nova rede ampliou horários.
            </strong>

            <p>
              Parte das linhas passou
              a ter operação também
              no período noturno.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Isso não significa operação contínua.
            </strong>

            <p>
              Cada linha possui
              sua própria programação.
              Consulte sempre
              o horário específico.
            </p>

          </div>

        </section>


        <!-- ==================================================
             GRAMADO X CANELA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando Gramado ↔ Canela
          </h4>

          <p class="panel-intro">
            A circular 6152 é uma das referências
            mais práticas para uma viagem simples
            entre as duas cidades.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ônibus
              </span>

              <strong>
                Circular 6152
              </strong>

              <p>
                A Citral publica
                diversos horários
                ao longo do dia.
              </p>

              <span class="route-compare-result">
                Cerca de 15 min
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Aplicativo
              </span>

              <strong>
                Porta a porta
              </strong>

              <p>
                Pode ser conveniente
                principalmente para duas
                ou mais pessoas.
              </p>

              <span class="route-compare-result">
                Compare o preço
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Carro
              </span>

              <strong>
                Mais flexibilidade
              </strong>

              <p>
                Pode facilitar
                quando Canela faz parte
                de um dia com várias atrações.
              </p>

              <span class="route-compare-result">
                Considere estacionamento
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER O HORÁRIO DA CITRAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como ler uma opção da Citral
          </h4>

          <div class="route-example">

            <div class="route-phone">

              <span class="route-phone-title">
                Exemplo
              </span>

              <div class="route-step-list">

                <div class="route-step">

                  <span class="route-step-icon">
                    🚌
                  </span>

                  <div>

                    <strong>
                      Linha 6152
                    </strong>

                    <small>
                      Tipo Circular
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    📍
                  </span>

                  <div>

                    <strong>
                      Origem: Gramado
                    </strong>

                    <small>
                      Confirme o ponto de embarque
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🏘️
                  </span>

                  <div>

                    <strong>
                      Destino: Canela
                    </strong>

                    <small>
                      Confira o sentido
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🕒
                  </span>

                  <div>

                    <strong>
                      Horário
                    </strong>

                    <small>
                      Consulte a grade do dia
                    </small>

                  </div>

                </div>

              </div>

            </div>


            <div class="route-explanation">

              <article class="route-explanation-card">

                <strong>
                  Circular
                </strong>

                <p>
                  É diferente
                  de serviços comuns,
                  semi-diretos ou executivos.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Tempo estimado
                </strong>

                <p>
                  O horário publicado
                  é uma referência
                  e pode sofrer alterações.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Feriados
                </strong>

                <p>
                  A própria Citral informa
                  que a grade pode mudar.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Compra
                </strong>

                <p>
                  Quando disponível,
                  a passagem pode ser
                  comprada online.
                </p>

              </article>

            </div>

          </div>

        </section>


        <!-- ==================================================
             ATRAÇÕES AFASTADAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atrações afastadas do Centro
          </h4>

          <p class="panel-intro">
            Aqui é onde a decisão
            precisa ser mais prática.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ônibus
              </span>

              <strong>
                Menor custo
              </strong>

              <p>
                Pode funcionar bem
                se existir linha conveniente
                e horário compatível.
              </p>

              <span class="route-compare-result">
                Consulte antes
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Aplicativo
              </span>

              <strong>
                Menos espera
              </strong>

              <p>
                Pode reduzir bastante
                o tempo de deslocamento
                em viagens pontuais.
              </p>

              <span class="route-compare-result">
                Bom para grupos
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Carro
              </span>

              <strong>
                Mais liberdade
              </strong>

              <p>
                Pode ser útil
                quando o dia reúne
                várias atrações dispersas.
              </p>

              <span class="route-compare-result">
                Veja estacionamento
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PORTO ALEGRE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Gramado ↔ Porto Alegre
          </h4>

          <div class="answer-block">

            <strong>
              Existem serviços rodoviários
              entre Gramado e Porto Alegre.
            </strong>

            <p>
              Consulte a Citral
              para horários,
              modalidade e disponibilidade
              no dia da viagem.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Aeroporto Salgado Filho
            </strong>

            <p>
              A Citral também lista
              o Aeroporto de Porto Alegre
              entre os destinos
              atendidos a partir de Gramado.
            </p>

          </div>

        </section>


        <!-- ==================================================
             VOO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Se você tem um voo
          </h4>

          <div class="visitor-alert">

            <strong>
              Não trabalhe com margem apertada.
            </strong>

            O tempo de estrada
            entre Gramado e Porto Alegre
            pode ser afetado
            por trânsito, clima,
            obras ou outras ocorrências.

            Escolha um serviço
            que deixe margem confortável
            para chegar ao aeroporto
            antes do horário necessário.

          </div>

        </section>


        <!-- ==================================================
             OUTRAS CIDADES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Outros destinos regionais
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Nova Petrópolis
              </strong>

              <p>
                Consulte linhas regionais
                partindo de Gramado.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Três Coroas
              </strong>

              <p>
                Existem conexões
                pela malha regional.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Taquara
              </strong>

              <p>
                Também aparece
                entre os destinos
                atendidos pela Citral.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Caxias do Sul
              </strong>

              <p>
                Consulte a disponibilidade
                de serviços regionais
                antes da viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMPARAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como comparar duas opções
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Opção A
              </span>

              <strong>
                Mais barata, com espera
              </strong>

              <p>
                O ônibus pode custar menos,
                mas considere o tempo
                até a próxima saída.
              </p>

              <span class="route-compare-result">
                Melhor se custo for prioridade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção B
              </span>

              <strong>
                Mais cara, porta a porta
              </strong>

              <p>
                Aplicativo pode compensar
                quando há mais passageiros
                ou pouco tempo disponível.
              </p>

              <span class="route-compare-result">
                Melhor para conveniência
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Opção C
              </span>

              <strong>
                Caminhada
              </strong>

              <p>
                Para trajetos centrais,
                pode ser mais rápida
                do que esperar transporte.
              </p>

              <span class="route-compare-result">
                Confira clima e relevo
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
                  Confira o horário novamente
                </strong>

                <p>
                  A programação
                  pode sofrer alterações.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🌧️
              </span>

              <div>

                <strong>
                  Veja a previsão do tempo
                </strong>

                <p>
                  O clima pode mudar
                  sua escolha entre caminhar
                  e usar transporte.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                💰
              </span>

              <div>

                <strong>
                  Compare o custo do grupo
                </strong>

                <p>
                  Quatro passagens
                  podem se aproximar
                  do valor de um aplicativo.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                📍
              </span>

              <div>

                <strong>
                  Confirme o ponto de embarque
                </strong>

                <p>
                  Rodoviária,
                  Centro e Várzea Grande
                  não são o mesmo local.
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
            href="https://www.gramado.rs.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte municipal · Gramado
          </a>


          <a
            class="official-link"
            href="https://www.citral.tur.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários e passagens · Citral
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
