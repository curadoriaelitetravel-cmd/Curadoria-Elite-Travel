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
             COMO PENSAR O DESLOCAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar o deslocamento
          </h4>

          <p class="panel-intro">
            No Distrito Federal,
            a escolha entre metrô,
            BRT e ônibus depende
            principalmente do eixo
            em que estão a origem e o destino.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Eixo oeste
              </strong>

              <p>
                Metrô ganha importância
                em trajetos envolvendo
                Guará,
                Águas Claras,
                Taguatinga,
                Ceilândia
                e Samambaia.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Eixo sul
              </strong>

              <p>
                BRT é especialmente
                relevante para viagens
                envolvendo Gama
                e Santa Maria.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Demais regiões
              </strong>

              <p>
                Ônibus fazem
                a cobertura mais ampla
                entre as diferentes
                Regiões Administrativas.
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
                Ônibus e metrô
                podem ser combinados
                conforme a localização
                do destino.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o metrô tende a fazer mais sentido
          </h4>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🏛️</span>

              <strong>
                Região Central
              </strong>

              <p>
                A Estação Central
                se conecta diretamente
                à Rodoviária
                do Plano Piloto.
              </p>

            </article>


            <article class="hours-card">

              <span>🏘️</span>

              <strong>
                Guará
              </strong>

              <p>
                Está no trecho
                compartilhado
                da rede.
              </p>

            </article>


            <article class="hours-card">

              <span>🏙️</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                É o ponto
                em que os dois eixos
                metroviários se separam.
              </p>

            </article>


            <article class="hours-card">

              <span>🌆</span>

              <strong>
                Taguatinga e Ceilândia
              </strong>

              <p>
                São atendidas
                pelo eixo
                que segue para Ceilândia.
              </p>

            </article>


            <article class="hours-card">

              <span>🌇</span>

              <strong>
                Samambaia
              </strong>

              <p>
                É atendida
                pelo outro ramo
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
            Quando o BRT tende a fazer mais sentido
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Gama
              </strong>

              <p>
                Possui terminal
                integrado ao corredor BRT.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Santa Maria
              </strong>

              <p>
                Também possui
                terminal de integração
                do sistema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Alimentadora + troncal
              </strong>

              <p>
                Muitas viagens
                podem combinar
                uma linha local
                com o serviço principal
                do corredor.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Eixo sul → Plano Piloto
              </strong>

              <p>
                O BRT pode funcionar
                como parte principal
                desse deslocamento.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o ônibus tende a fazer mais sentido
          </h4>

          <div class="answer-block">

            <strong>
              Destino fora do eixo do metrô
            </strong>

            <p>
              A rede de ônibus
              amplia a cobertura
              para regiões que não possuem
              estação metroviária.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ligação entre regiões administrativas
            </strong>

            <p>
              Muitas viagens
              dependem diretamente
              de linhas rodoviárias
              para conectar
              diferentes áreas do DF.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Última etapa da viagem
            </strong>

            <p>
              Mesmo quando metrô
              ou BRT cobrem a maior parte
              do trajeto,
              um ônibus pode completar
              a origem ou o destino.
            </p>

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Uma viagem pode combinar sistemas
          </h4>

          <p class="panel-intro">
            O transporte do Distrito Federal
            foi estruturado para permitir
            integração entre diferentes
            meios coletivos.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Exemplo
              </span>

              <strong>
                Ônibus + metrô
              </strong>

              <p>
                Um ônibus pode levar
                até uma estação
                e o metrô completar
                a parte principal da viagem.
              </p>

              <span class="route-compare-result">
                Viagem combinada
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Exemplo
              </span>

              <strong>
                Alimentadora + BRT
              </strong>

              <p>
                Uma linha local
                pode levar ao terminal
                e o BRT seguir
                pelo corredor principal.
              </p>

              <span class="route-compare-result">
                Eixo sul
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Exemplo
              </span>

              <strong>
                Ônibus + ônibus
              </strong>

              <p>
                Alguns deslocamentos
                exigem troca
                entre linhas rodoviárias.
              </p>

              <span class="route-compare-result">
                Até 3 embarques
              </span>

            </article>

          </div>


          <div class="fare-note">

            Com Cartão Mobilidade
            ou Vale-Transporte,
            a integração pode envolver
            até três embarques
            em até três horas,
            pagando no máximo R$ 5,50,
            quando atendidas
            as regras tarifárias.

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
              É um dos principais
              pontos de distribuição
              da rede urbana.
            </strong>

            <p>
              Reúne várias linhas
              de ônibus
              e conexão direta
              com a Estação Central
              do Metrô-DF.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não confunda com
              a Rodoviária Interestadual.
            </strong>

            São terminais diferentes
            e cumprem funções diferentes
            no deslocamento.

          </div>

        </section>


        <!-- ==================================================
             DISTÂNCIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Brasília exige atenção às distâncias
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Uma parada ou estação
                aparentemente próxima
                pode exigir
                caminhada considerável.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Trocas
              </strong>

              <p>
                Avalie se uma rota
                com várias integrações
                realmente compensa
                o ganho de tempo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🧳</span>

              <strong>
                Bagagem
              </strong>

              <p>
                Menos trocas
                podem ser mais confortáveis
                quando há malas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌡️</span>

              <strong>
                Clima
              </strong>

              <p>
                Sol forte ou chuva
                podem tornar uma caminhada
                curta menos conveniente.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Espera
              </strong>

              <p>
                O tempo total
                inclui também
                a espera entre veículos.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O meio de pagamento pode mudar o custo
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Cartão Mobilidade
              </span>

              <strong>
                Integração tarifária
              </strong>

              <p>
                É relevante
                quando o trajeto
                exige mais de um embarque.
              </p>

              <span class="route-compare-result">
                Até R$ 5,50
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Cartão bancário
              </span>

              <strong>
                Cada embarque é cobrado
              </strong>

              <p>
                O pagamento por aproximação
                é simples,
                mas não aplica
                integração tarifária.
              </p>

              <span class="route-compare-result">
                Sem integração
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DOMINGOS E FERIADOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingo ou feriado
          </h4>

          <div class="visitor-alert">

            <strong>
              O custo deixa de ser
              um critério de escolha.
            </strong>

            Pelo Vai de Graça,
            ônibus,
            BRT,
            micro-ônibus,
            Zebrinha,
            linhas urbanas e rurais
            e metrô são gratuitos.

          </div>


          <div class="fare-note">

            Não há limite
            de viagens
            durante o período
            de gratuidade.

          </div>

        </section>


        <!-- ==================================================
             PONTO FACULTATIVO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ponto facultativo
          </h4>

          <div class="visitor-alert">

            <strong>
              Não significa transporte gratuito.
            </strong>

            O Vai de Graça
            é aplicado aos domingos
            e feriados.
            Em ponto facultativo,
            a tarifa pode ser cobrada normalmente.

          </div>


          <div class="fare-note">

            O GDF pode adotar
            programação especial
            de horários nesses dias.

          </div>

        </section>


        <!-- ==================================================
             TEMPO REAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que precisa ser consultado no dia
          </h4>

          <p class="panel-intro">
            Algumas informações
            não são estáticas
            e podem mudar
            ao longo do dia.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Qual linha atende
                sua origem e destino
              </strong>

              <p>
                O DF no Ponto
                calcula opções
                a partir dos locais informados.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Horário
              </strong>

              <p>
                As tabelas
                e previsões de passagem
                dependem da linha
                e do momento da viagem.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ponto de embarque
              </strong>

              <p>
                A ferramenta mostra
                os pontos relacionados
                à rota escolhida.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Posição do veículo
              </strong>

              <p>
                Quando disponível,
                os ônibus podem ser
                acompanhados no mapa.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Alertas operacionais
              </strong>

              <p>
                Atrasos,
                mudanças e interrupções
                podem alterar
                a melhor rota naquele momento.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO USAR O DF NO PONTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para a rota específica da sua viagem
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Origem
              </strong>

              <p>
                Informe o local
                onde você está.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Destino
              </strong>

              <p>
                Informe o endereço
                ou ponto de referência
                para onde deseja ir.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Compare
              </strong>

              <p>
                Veja as opções
                de linhas,
                paradas
                e conexões disponíveis.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Confirme no momento
              </strong>

              <p>
                Horários,
                posição dos veículos
                e alertas podem mudar.
              </p>

            </article>

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

              <span>🚇</span>

              <strong>
                Oeste
              </strong>

              <p>
                Compare primeiro
                o metrô.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Sul
              </strong>

              <p>
                BRT ganha importância
                em Gama
                e Santa Maria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Cobertura ampla
              </strong>

              <p>
                Ônibus conectam
                as diferentes regiões
                do Distrito Federal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integração
              </strong>

              <p>
                Uma única viagem
                pode combinar
                vários modais.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📱</span>

              <strong>
                No dia
              </strong>

              <p>
                Rota específica,
                horário,
                ponto,
                veículo e alertas
                ficam no DF no Ponto.
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
            Rede do DF · SEMOB-DF
          </a>


          <a
            class="official-link"
            href="https://dfnoponto.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rota e tempo real · DF no Ponto
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
            Governo do Distrito Federal
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
