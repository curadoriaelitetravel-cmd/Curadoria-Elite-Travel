// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


window.BRASILIA_TRANSPORT_MODULES["planner"] = {

  kicker:
    "Brasília · planejamento de viagem",

  title:
    "Planeje o trajeto",

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
            No Distrito Federal,
            a melhor opção depende muito
            da região de origem e destino.
            Compare metrô, BRT e ônibus
            antes de decidir.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Ceilândia, Samambaia,
                Taguatinga ou Águas Claras
              </strong>

              <p>
                Verifique primeiro
                se o metrô atende
                uma parte importante
                do percurso.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Gama ou Santa Maria
              </strong>

              <p>
                Compare o BRT
                com as linhas de ônibus
                disponíveis para o trajeto.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Outra região administrativa
              </strong>

              <p>
                Consulte o DF no Ponto
                para identificar linhas,
                horários e paradas.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🏛️
              </span>

              <strong>
                Plano Piloto
              </strong>

              <p>
                Compare metrô,
                ônibus e serviços locais
                conforme a área
                do destino.
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
                Inclua caminhada,
                espera e integrações.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Quantidade de trocas
              </strong>

              <p>
                Uma rota com menos trocas
                pode ser mais simples,
                mesmo que leve um pouco mais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Brasília possui
                distâncias grandes
                entre alguns pontos.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Meio de pagamento
              </strong>

              <p>
                A integração tarifária
                depende do meio
                utilizado.
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

          </div>

        </section>


        <!-- ==================================================
             DF NO PONTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Use o DF no Ponto
          </h4>

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Planejamento oficial
            </span>

            <h4>
              Pesquise origem e destino
              antes de sair.
            </h4>

            <p>
              O DF no Ponto
              é a ferramenta oficial do GDF
              para consultar rotas,
              linhas, horários,
              pontos de parada
              e informações operacionais.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO PESQUISAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como planejar pelo DF no Ponto
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Informe a origem
              </strong>

              <p>
                Pesquise pelo local
                onde está
                ou de onde pretende sair.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Informe o destino
              </strong>

              <p>
                Use endereço,
                local ou ponto
                de referência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Compare as opções
              </strong>

              <p>
                Veja linhas,
                horários
                e pontos de parada.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confira novamente
              </strong>

              <p>
                Antes de sair,
                verifique a situação
                atual da viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TEMPO REAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de caminhar até o ponto
          </h4>

          <div class="answer-block">

            <strong>
              Consulte os horários em tempo real.
            </strong>

            <p>
              O DF no Ponto
              apresenta informações
              atualizadas sobre
              a operação das linhas.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Veja a localização dos ônibus.
            </strong>

            <p>
              Na pesquisa por linha,
              é possível acompanhar
              os veículos no mapa
              quando o dado está disponível.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Observe os alertas.
            </strong>

            <p>
              Mudanças,
              interrupções e ocorrências
              podem alterar
              a melhor opção.
            </p>

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
            O metrô pode ser especialmente útil
            para deslocamentos
            entre o Plano Piloto
            e o eixo oeste do Distrito Federal.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🏛️</span>

              <strong>
                Região Central
              </strong>

              <p>
                A Estação Central
                fica integrada
                à Rodoviária
                do Plano Piloto.
              </p>

            </article>


            <article class="hours-card">

              <span>🏙️</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                É uma referência importante
                no trecho onde a rede
                segue para os dois eixos.
              </p>

            </article>


            <article class="hours-card">

              <span>🌆</span>

              <strong>
                Ceilândia
              </strong>

              <p>
                Um dos principais
                eixos finais
                da rede.
              </p>

            </article>


            <article class="hours-card">

              <span>🌇</span>

              <strong>
                Samambaia
              </strong>

              <p>
                Atendida pelo outro
                ramo da rede
                metroviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ + ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô + ônibus
          </h4>

          <div class="answer-block">

            <strong>
              Compare a viagem completa.
            </strong>

            <p>
              Mesmo quando o metrô
              cobre boa parte do trajeto,
              pode ser necessário
              utilizar ônibus
              na origem ou no destino.
            </p>

          </div>


          <div class="fare-note">

            Se a viagem exigir integração,
            confira antes
            qual meio de pagamento
            oferece o benefício tarifário.

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
            O BRT é uma referência
            principalmente para viagens
            no eixo sul.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Consulte a linha local
              </strong>

              <p>
                Veja como chegar
                ao terminal ou estação
                do BRT.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Identifique o serviço
              </strong>

              <p>
                Confira qual linha
                segue na direção
                necessária.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Veja a integração
              </strong>

              <p>
                Algumas viagens
                combinam serviço alimentador
                e troncal.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confira a última etapa
              </strong>

              <p>
                Outro ônibus
                ou caminhada
                pode completar o percurso.
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
              Use número e destino juntos.
            </strong>

            <p>
              Essa combinação
              ajuda a confirmar
              a linha correta.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Confira a parada.
            </strong>

            <p>
              Algumas vias
              possuem vários pontos
              e sentidos diferentes.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Salve a linha.
            </strong>

            <p>
              Isso facilita
              uma nova consulta
              no DF no Ponto
              durante a viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             PLANO PILOTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Deslocamentos no Plano Piloto
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Metrô
              </span>

              <strong>
                Útil em parte do eixo central
              </strong>

              <p>
                Verifique se existe
                estação conveniente
                para o destino.
              </p>

              <span class="route-compare-result">
                Compare a estação
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ônibus
              </span>

              <strong>
                Cobertura mais ampla
              </strong>

              <p>
                Pode atender regiões
                que não possuem
                estação de metrô.
              </p>

              <span class="route-compare-result">
                Consulte a linha
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Caminhada
              </span>

              <strong>
                Distâncias podem enganar
              </strong>

              <p>
                Avalie a distância real
                entre o ponto de desembarque
                e o destino.
              </p>

              <span class="route-compare-result">
                Confira no mapa
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Rodoviária do Plano Piloto
          </h4>

          <div class="answer-block">

            <strong>
              É um grande ponto
              de conexão urbana.
            </strong>

            <p>
              Reúne diversas
              linhas de ônibus
              e acesso à Estação Central
              do metrô.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não confunda com
              a Rodoviária Interestadual.
            </strong>

            Ao pesquisar uma viagem,
            confirme qual terminal
            aparece como origem
            ou destino.

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
              Considere o Vai de Graça.
            </strong>

            Ônibus,
            BRT,
            micro-ônibus,
            Zebrinha,
            linhas urbanas e rurais
            e metrô são gratuitos
            durante o período
            abrangido pelo programa.

          </div>


          <div class="fare-note">

            Não existe limite
            de viagens por passageiro
            durante a gratuidade.

          </div>

        </section>


        <!-- ==================================================
             PONTO FACULTATIVO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ponto facultativo
          </h4>

          <div class="answer-block">

            <strong>
              Confira a programação.
            </strong>

            <p>
              Ponto facultativo
              não significa automaticamente
              gratuidade no transporte.
            </p>

          </div>


          <div class="fare-note">

            A SEMOB pode adotar
            programação especial
            de horários conforme
            a data e a demanda.

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
                Menos tempo,
                mais trocas
              </strong>

              <p>
                Pode ser mais rápida,
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
                Considere distância,
                clima, bagagem
                e condições de mobilidade.
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
                  Confira a linha,
                  o horário e os alertas
                  no DF no Ponto.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                📍
              </span>

              <div>

                <strong>
                  Confirme a parada
                </strong>

                <p>
                  Veja exatamente
                  onde acontece
                  o embarque.
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
                  Se houver integração,
                  utilize um meio
                  compatível com o benefício.
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
                  Uma rota pode combinar
                  ônibus, BRT
                  e metrô.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                📅
              </span>

              <div>

                <strong>
                  Veja o tipo de dia
                </strong>

                <p>
                  Domingo,
                  feriado e ponto facultativo
                  podem ter regras diferentes.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://dfnoponto.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planejar rota · DF no Ponto
          </a>


          <a
            class="official-link"
            href="https://dfnoponto.semob.df.gov.br/pesquisa-por-linhas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesquisar linha · DF no Ponto
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
            href="https://metro.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô-DF
          </a>


          <a
            class="official-link"
            href="https://agenciabrasilia.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agência Brasília · GDF
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
