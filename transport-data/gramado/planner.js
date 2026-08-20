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
            Em Gramado,
            a primeira decisão é entender
            se o destino fica na região central,
            em outra parte do município
            ou fora da cidade.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚶
              </span>

              <strong>
                Região central
              </strong>

              <p>
                Caminhar pode ser
                a alternativa mais simples
                quando origem e destino
                estão próximos.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Bairro ou interior de Gramado
              </strong>

              <p>
                A rede municipal
                possui 26 linhas
                e atende áreas urbanas
                e localidades do interior.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🛣️
              </span>

              <strong>
                Outra cidade
              </strong>

              <p>
                O deslocamento passa
                a pertencer ao sistema
                rodoviário intermunicipal.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚗
              </span>

              <strong>
                Várias paradas
              </strong>

              <p>
                Carro, táxi
                ou transporte por aplicativo
                podem ganhar praticidade
                quando o dia envolve
                vários destinos afastados.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CENTRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando caminhar faz sentido
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Trajeto curto
              </strong>

              <p>
                Em deslocamentos pequenos,
                caminhar pode evitar
                espera por transporte
                e etapas desnecessárias.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Região central
              </strong>

              <p>
                A concentração
                de atrações,
                restaurantes
                e comércio
                favorece deslocamentos a pé.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Chuva e frio
              </strong>

              <p>
                Uma caminhada simples
                pode se tornar menos conveniente
                em condições climáticas ruins.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Relevo
              </strong>

              <p>
                A distância no mapa
                não mostra sozinha
                o esforço necessário.
                Considere inclinações
                no percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REDE MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando usar o ônibus municipal
          </h4>

          <p class="panel-intro">
            A nova rede municipal
            entrou em operação
            em 1º de agosto de 2026
            e possui 26 linhas.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🏘️</span>

              <strong>
                Bairros
              </strong>

              <p>
                A rede amplia
                os deslocamentos
                além da região
                turística central.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌄</span>

              <strong>
                Interior
              </strong>

              <p>
                Localidades do interior
                também fazem parte
                da cobertura municipal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌙</span>

              <strong>
                Período noturno
              </strong>

              <p>
                A nova operação
                ampliou a oferta noturna
                em parte da rede.
              </p>

            </article>


            <article class="planner-check-card">

              <span>R$</span>

              <strong>
                Tarifa
              </strong>

              <p>
                A passagem municipal
                custa R$ 4,00.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO PLANEJAR PELO ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como planejar pelo ônibus municipal
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                1
              </span>

              <strong>
                Localize o destino
              </strong>

              <p>
                Veja em qual bairro
                ou localidade de Gramado
                ele está.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                2
              </span>

              <strong>
                Identifique a linha
              </strong>

              <p>
                A rede é organizada
                em rotas específicas
                para diferentes regiões
                do município.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                3
              </span>

              <strong>
                Veja a programação
              </strong>

              <p>
                Cada linha possui
                seus próprios horários
                e frequência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                4
              </span>

              <strong>
                Confirme o embarque
              </strong>

              <p>
                Antes de sair,
                confira o ponto,
                o sentido
                e o horário da partida.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A frequência depende da linha
          </h4>

          <div class="answer-block">

            <strong>
              As 26 linhas não seguem
              uma frequência única.
            </strong>

            <p>
              Horários variam
              conforme o serviço,
              a região atendida
              e o período do dia.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Há atendimento noturno
              em parte da rede.
            </strong>

            <p>
              A nova operação
              ampliou horários noturnos,
              mas isso não significa
              que todas as linhas
              circulem até tarde.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Horário é informação operacional.
            </strong>

            Para a viagem escolhida,
            confirme a partida
            antes de sair.

          </div>

        </section>


        <!-- ==================================================
             MUNICÍPIO X OUTRA CIDADE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Primeiro confirme em qual cidade fica o destino
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Destino em Gramado
              </span>

              <strong>
                Rede municipal
              </strong>

              <p>
                Inclui Centro,
                bairros
                e localidades do interior
                do município.
              </p>

              <span class="route-compare-result">
                Tarifa R$ 4,00
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Destino fora de Gramado
              </span>

              <strong>
                Intermunicipal
              </strong>

              <p>
                A viagem passa
                para o sistema rodoviário
                estadual.
              </p>

              <span class="route-compare-result">
                Tarifa por serviço
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CANELA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Gramado ↔ Canela
          </h4>

          <div class="visitor-alert">

            <strong>
              Apesar da proximidade,
              é um deslocamento intermunicipal.
            </strong>

            Canela é outro município.

            Portanto,
            uma viagem entre Gramado e Canela
            não pertence à rede municipal
            de Gramado
            e não utiliza a tarifa municipal
            de R$ 4,00 como referência.

          </div>

        </section>


        <!-- ==================================================
             INTERMUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando uma viagem intermunicipal
          </h4>

          <p class="panel-intro">
            O transporte rodoviário
            intermunicipal regular
            é operado por empresas
            autorizadas pelo DAER-RS.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Destino
              </strong>

              <p>
                Identifique primeiro
                a cidade para onde
                você pretende viajar.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Serviço
              </strong>

              <p>
                A linha utilizada
                determina itinerário,
                pontos de embarque
                e operação.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                A programação
                depende do serviço
                escolhido.
              </p>

            </article>


            <article class="planner-check-card">

              <span>R$</span>

              <strong>
                Tarifa
              </strong>

              <p>
                O valor varia
                conforme a linha
                e o serviço.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estação Rodoviária de Gramado
          </h4>

          <div class="answer-block">

            <strong>
              É uma referência
              para viagens rodoviárias.
            </strong>

            <p>
              Serviços intermunicipais
              e interestaduais
              podem utilizar
              a estrutura rodoviária
              da cidade.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Confirme o embarque
              da viagem escolhida.
            </strong>

            Local,
            horário
            e plataforma
            dependem do serviço.

          </div>

        </section>


        <!-- ==================================================
             VÁRZEA GRANDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminal Rodoviário da Várzea Grande
          </h4>

          <div class="answer-block">

            <strong>
              É uma referência diferente
              da Rodoviária central.
            </strong>

            <p>
              O Terminal Rodoviário
              da Várzea Grande
              aparece na estrutura
              do novo transporte municipal
              e foi utilizado
              para cadastramento dos usuários.
            </p>

          </div>


          <div class="fare-note">

            Não confunda
            o Terminal Rodoviário
            da Várzea Grande
            com a Estação Rodoviária
            da área central de Gramado.

          </div>

        </section>


        <!-- ==================================================
             ATRAÇÕES AFASTADAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para destinos afastados
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ônibus municipal
              </span>

              <strong>
                R$ 4,00 por viagem
              </strong>

              <p>
                Pode ser a alternativa
                de menor custo
                quando a rede atende
                bem o destino
                e o horário funciona
                para o seu dia.
              </p>

              <span class="route-compare-result">
                Prioridade: custo
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Táxi ou aplicativo
              </span>

              <strong>
                Porta a porta
              </strong>

              <p>
                Pode reduzir
                caminhada,
                espera
                e etapas intermediárias.
              </p>

              <span class="route-compare-result">
                Prioridade: conveniência
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Carro
              </span>

              <strong>
                Mais autonomia
              </strong>

              <p>
                Pode ganhar vantagem
                quando o dia reúne
                vários destinos afastados.
              </p>

              <span class="route-compare-result">
                Prioridade: flexibilidade
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             GRUPOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Viajando em grupo
          </h4>

          <div class="answer-block">

            <strong>
              Compare o custo total,
              não apenas o preço individual.
            </strong>

            <p>
              No ônibus municipal,
              cada passageiro paga
              sua própria tarifa.

              Em um grupo,
              o valor combinado
              pode se aproximar
              de alternativas porta a porta
              em determinados deslocamentos.
            </p>

          </div>


          <div class="fare-note">

            O preço de táxi
            ou transporte por aplicativo
            varia conforme distância,
            horário
            e disponibilidade.

          </div>

        </section>


        <!-- ==================================================
             CLIMA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O clima pode mudar a melhor escolha
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Tempo firme
              </strong>

              <p>
                Caminhadas curtas
                na região central
                podem ser simples
                e agradáveis.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Chuva
              </strong>

              <p>
                Mesmo trajetos pequenos
                podem favorecer
                uma alternativa
                com menos exposição.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Frio intenso
              </strong>

              <p>
                Tempo de espera
                e distância até o ponto
                passam a pesar mais
                na decisão.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Neblina
              </strong>

              <p>
                Em deslocamentos rodoviários,
                condições meteorológicas
                podem afetar
                o tempo de viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             APLICATIVO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aplicativo “Nosso Transporte Público”
          </h4>

          <div class="answer-block">

            <strong>
              Lançamento anunciado
              para setembro de 2026.
            </strong>

            <p>
              O aplicativo foi anunciado
              para permitir
              o acompanhamento
              da localização dos ônibus
              em tempo real.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Em agosto de 2026,
              ainda não deve ser tratado
              como ferramenta disponível.
            </strong>

            O lançamento
            precisa ocorrer oficialmente
            antes de incorporarmos
            o aplicativo
            ao planejamento normal
            das viagens.

          </div>

        </section>


        <!-- ==================================================
             DECISÃO RÁPIDA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Decisão rápida
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Perto no Centro
              </strong>

              <p>
                Comece comparando
                a caminhada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Bairro ou interior
              </strong>

              <p>
                Veja se uma das
                26 linhas municipais
                atende o deslocamento.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🏘️</span>

              <strong>
                Canela
              </strong>

              <p>
                Trate como
                viagem intermunicipal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚗</span>

              <strong>
                Vários destinos afastados
              </strong>

              <p>
                Compare carro,
                táxi
                ou aplicativo
                com o transporte coletivo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Vai de ônibus
              </strong>

              <p>
                Confirme apenas
                o dado operacional:
                linha,
                ponto
                e horário.
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
            href="https://gramado.atende.net/subportal/transito-e-mobilidade-urbana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte e Mobilidade · Prefeitura de Gramado
          </a>


          <a
            class="official-link"
            href="https://gramado.atende.net/cidadao/noticia/novo-sistema-do-transporte-publico-de-gramado-inicia-operacao-em-agosto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Novo sistema municipal · Prefeitura de Gramado
          </a>


          <a
            class="official-link"
            href="https://www.daer.rs.gov.br/transporte-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte intermunicipal · DAER-RS
          </a>


          <a
            class="official-link"
            href="https://agergs.rs.gov.br/transporte-rodoviario-de-passageiros"
            target="_blank"
            rel="noopener noreferrer"
          >
            Regulação · AGERGS
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
