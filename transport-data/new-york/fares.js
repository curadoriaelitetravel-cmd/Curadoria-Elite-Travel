// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — NOVA YORK
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.NEW_YORK_TRANSPORT_MODULES =
  window.NEW_YORK_TRANSPORT_MODULES || {};


window.NEW_YORK_TRANSPORT_MODULES["fares"] = {

  kicker: "Nova York · tarifas vigentes",

  title: "Tarifas e integração",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VALORES PRINCIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Valores principais
          </h4>

          <p class="panel-intro">
            Nova York combina
            diferentes sistemas
            e operadores.

            Nem todos utilizam
            a mesma tarifa
            ou a mesma bilhetagem.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Subway
              </span>

              <strong>
                US$ 3,00
              </strong>

              <p>
                Tarifa básica
                da MTA.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ônibus local / Limited / SBS
              </span>

              <strong>
                US$ 3,00
              </strong>

              <p>
                Mesma tarifa
                do subway.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Express Bus
              </span>

              <strong>
                US$ 7,25
              </strong>

              <p>
                Tarifa própria
                dos ônibus expressos.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                PATH
              </span>

              <strong>
                US$ 3,25
              </strong>

              <p>
                Tarifa por viagem
                entre Nova York
                e Nova Jersey.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                NYC Ferry
              </span>

              <strong>
                US$ 4,50
              </strong>

              <p>
                Tarifa comum
                por viagem.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                AirTrain JFK
              </span>

              <strong>
                US$ 8,75
              </strong>

              <p>
                Cobrado nas estações
                Jamaica
                e Howard Beach.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             MTA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Subway e ônibus da MTA
          </h4>

          <p class="panel-intro">
            Subway,
            ônibus locais,
            Limited
            e Select Bus Service
            compartilham
            a tarifa básica.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Subway
              </strong>

              <p>
                US$ 3,00.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Local Bus
              </strong>

              <p>
                US$ 3,00.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Limited
              </strong>

              <p>
                US$ 3,00.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Select Bus Service
              </strong>

              <p>
                US$ 3,00.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRANSFERÊNCIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transferência gratuita
          </h4>

          <div class="answer-block">

            <strong>
              Use o mesmo cartão
              ou dispositivo.
            </strong>

            <p>
              O OMNY reconhece
              a transferência gratuita
              quando o mesmo meio
              é utilizado
              nas duas etapas.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Janela
              </span>

              <strong>
                2 horas
              </strong>

              <p>
                Contadas
                a partir
                do primeiro pagamento.
              </p>

            </article>

          </div>


          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transferência
              </span>

              <strong>
                Subway → ônibus
              </strong>

              <p>
                Com o mesmo
                meio de pagamento.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transferência
              </span>

              <strong>
                Ônibus → subway
              </strong>

              <p>
                Dentro da janela
                permitida.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transferência
              </span>

              <strong>
                Ônibus → ônibus
              </strong>

              <p>
                Quando a viagem
                atende às regras
                de transferência.
              </p>

              <span class="fare-scenario-result">
                Sem nova tarifa
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FARE CAP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Fare Cap de 7 dias
          </h4>

          <p class="panel-intro">
            Com OMNY,
            não é necessário comprar
            um passe semanal
            antecipadamente.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Limite padrão
              </span>

              <strong>
                US$ 35
              </strong>

              <p>
                Valor máximo
                cobrado em sete dias
                nas viagens elegíveis.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Equivalência
              </span>

              <strong>
                12 viagens
              </strong>

              <p>
                Depois das viagens
                pagas equivalentes
                ao limite,
                as demais viagens elegíveis
                ficam gratuitas.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Período
              </span>

              <strong>
                7 dias
              </strong>

              <p>
                A contagem começa
                no primeiro tap,
                não necessariamente
                na segunda-feira.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Use sempre o mesmo
              cartão ou dispositivo.
            </strong>

            Um cartão físico
            e a versão desse cartão
            dentro da carteira digital
            são tratados
            como meios diferentes.

          </div>

        </section>


        <!-- ==================================================
             O QUE CONTA NO FARE CAP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde o fare cap padrão funciona
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Subway
              </strong>

              <p>
                Conta para
                o limite semanal.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Local e SBS
              </strong>

              <p>
                Também contam
                para o fare cap.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Staten Island Railway
              </strong>

              <p>
                Participa
                do fare cap.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚡</span>

              <strong>
                Roosevelt Island Tram
              </strong>

              <p>
                Utiliza
                a mesma estrutura tarifária
                da MTA.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                NICE / Bee-Line
              </strong>

              <p>
                Também aparecem
                entre os serviços
                elegíveis ao OMNY fare cap.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXPRESS BUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Express Bus
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                US$ 7,25
              </strong>

              <p>
                Mais alta
                que a tarifa
                de ônibus local.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Fare cap próprio
              </span>

              <strong>
                US$ 67
              </strong>

              <p>
                Limite de sete dias
                para viagens elegíveis
                em express bus,
                subway
                e ônibus locais.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Express buses
            não entram
            no fare cap padrão
            de US$ 35.

            Desde janeiro de 2026,
            existe um limite semanal
            específico de US$ 67.

          </div>

        </section>


        <!-- ==================================================
             ROOSEVELT ISLAND TRAM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Roosevelt Island Tram
          </h4>

          <div class="answer-block">

            <strong>
              Utiliza a tarifa padrão da MTA.
            </strong>

            <p>
              OMNY é aceito
              e a estrutura tarifária
              acompanha subway
              e ônibus locais.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                US$ 3,00
              </strong>

              <p>
                Uma viagem
                em um sentido.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Ida e volta são duas viagens.
            </strong>

            O passageiro precisa sair
            ao chegar ao outro terminal
            e pagar novamente
            para retornar.

          </div>

        </section>


        <!-- ==================================================
             AIRTRAIN JFK
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            AirTrain JFK
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                US$ 8,75
              </strong>

              <p>
                Cobrança nas estações
                Jamaica
                e Howard Beach.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              AirTrain não participa
              da transferência gratuita
              da MTA.
            </strong>

            Se você combinar
            AirTrain
            com subway,
            ônibus
            ou LIRR,
            a tarifa do AirTrain
            é cobrada separadamente.

          </div>

        </section>


        <!-- ==================================================
             PATH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            PATH · Nova York ↔ Nova Jersey
          </h4>

          <p class="panel-intro">
            O PATH
            não pertence à MTA.

            Ele é operado
            pela Port Authority
            of New York and New Jersey.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Viagem
              </span>

              <strong>
                US$ 3,25
              </strong>

              <p>
                Tarifa vigente
                desde maio de 2026.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não existe transferência gratuita
              entre PATH e subway.
            </strong>

            Ao sair do PATH
            e entrar no sistema da MTA,
            uma nova tarifa
            é cobrada.

          </div>

        </section>


        <!-- ==================================================
             PATH TRANSIÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            PATH está mudando de bilhetagem
          </h4>

          <div class="answer-block">

            <strong>
              TAPP é o novo sistema.
            </strong>

            <p>
              A Port Authority
              está encerrando
              o uso de SmartLink
              e MetroCard
              no PATH.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Data importante:
              31 de agosto de 2026.
            </strong>

            Esse é o último dia
            em que SmartLink
            e MetroCard
            serão aceitos no PATH.

            A partir de
            1º de setembro de 2026,
            o sistema passa
            a utilizar TAPP
            como referência.

          </div>

        </section>


        <!-- ==================================================
             LIRR / METRO-NORTH
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            LIRR e Metro-North
          </h4>

          <p class="panel-intro">
            Os trens suburbanos
            não possuem
            uma tarifa única.

            O preço depende
            das zonas,
            do destino,
            do horário
            e do tipo de bilhete.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                CityTicket · off-peak
              </span>

              <strong>
                US$ 5,25
              </strong>

              <p>
                Para viagens elegíveis
                dentro dos limites
                da cidade de Nova York.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                CityTicket · peak
              </span>

              <strong>
                US$ 7,25
              </strong>

              <p>
                Para viagens elegíveis
                dentro da cidade
                em horário de pico.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Para viagens
            além das zonas
            do CityTicket,
            o valor varia.

            O preço correto
            deve ser determinado
            pela origem,
            destino
            e horário da viagem.

          </div>

        </section>


        <!-- ==================================================
             NYC FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            NYC Ferry
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Uma viagem
              </span>

              <strong>
                US$ 4,50
              </strong>

              <p>
                Tarifa comum
                de adulto.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                10 viagens
              </span>

              <strong>
                US$ 29
              </strong>

              <p>
                Passe disponível
                para usuários
                mais frequentes.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Passe de 2 dias
              </span>

              <strong>
                US$ 15
              </strong>

              <p>
                Uso ilimitado
                por 48 horas
                em todas as rotas.

                Disponível
                apenas no aplicativo.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NYC FERRY TRANSFER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transferências no NYC Ferry
          </h4>

          <div class="answer-block">

            <strong>
              Transferências entre rotas
              são gratuitas.
            </strong>

            <p>
              A passagem pode ser utilizada
              para mudar para outra rota
              dentro de 120 minutos
              após o início da viagem.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não vale como ida e volta.
            </strong>

            O mesmo bilhete
            não pode ser usado
            para retornar
            pela mesma rota.

          </div>

        </section>


        <!-- ==================================================
             STATEN ISLAND FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Staten Island Ferry
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                Grátis
              </strong>

              <p>
                Não há cobrança
                para a travessia.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Whitehall ↔ St. George
            </strong>

            <p>
              A travessia
              liga Lower Manhattan
              a Staten Island
              em aproximadamente
              25 minutos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             O QUE NÃO É INTEGRADO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Sistemas que não compartilham
            automaticamente a mesma tarifa
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                MTA
              </span>

              <strong>
                Subway + ônibus
              </strong>

              <p>
                Integração gratuita
                dentro das regras
                do OMNY.
              </p>

              <span class="route-compare-result">
                Integrado
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                PATH
              </span>

              <strong>
                PATH + subway
              </strong>

              <p>
                São sistemas
                diferentes.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                AirTrain JFK
              </span>

              <strong>
                AirTrain + subway
              </strong>

              <p>
                O AirTrain
                é cobrado
                separadamente.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                NYC Ferry
              </span>

              <strong>
                Ferry + subway
              </strong>

              <p>
                Não existe
                transferência tarifária
                entre os dois sistemas.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                LIRR / Metro-North
              </span>

              <strong>
                Trem + subway
              </strong>

              <p>
                Cada sistema
                possui sua própria
                cobrança.
              </p>

              <span class="route-compare-result">
                Duas tarifas
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos práticos
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Manhattan
              </span>

              <strong>
                Subway
              </strong>

              <p>
                Uma viagem simples.
              </p>

              <span class="fare-scenario-result">
                US$ 3,00
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transferência
              </span>

              <strong>
                Subway → ônibus
              </strong>

              <p>
                Mesmo cartão
                ou dispositivo,
                dentro de duas horas.
              </p>

              <span class="fare-scenario-result">
                US$ 3,00 total
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                JFK
              </span>

              <strong>
                AirTrain + subway
              </strong>

              <p>
                Os dois sistemas
                são cobrados separadamente.
              </p>

              <span class="fare-scenario-result">
                US$ 11,75
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Nova Jersey
              </span>

              <strong>
                PATH + subway
              </strong>

              <p>
                Uma tarifa
                para cada sistema.
              </p>

              <span class="fare-scenario-result">
                US$ 6,25
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Roosevelt Island
              </span>

              <strong>
                Tram
              </strong>

              <p>
                Uma viagem
                em um sentido.
              </p>

              <span class="fare-scenario-result">
                US$ 3,00
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Staten Island
              </span>

              <strong>
                Staten Island Ferry
              </strong>

              <p>
                Whitehall
                ↔ St. George.
              </p>

              <span class="fare-scenario-result">
                Grátis
              </span>

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
                Subway / ônibus
              </strong>

              <p>
                US$ 3,00.
              </p>

            </article>


            <article class="planner-check-card">

              <span>♾️</span>

              <strong>
                Fare cap
              </strong>

              <p>
                US$ 35
                em sete dias.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚍</span>

              <strong>
                Express Bus
              </strong>

              <p>
                US$ 7,25.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                PATH
              </strong>

              <p>
                US$ 3,25.
              </p>

            </article>


            <article class="planner-check-card">

              <span>✈️</span>

              <strong>
                AirTrain JFK
              </strong>

              <p>
                US$ 8,75.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                NYC Ferry
              </strong>

              <p>
                US$ 4,50.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Staten Island Ferry
              </strong>

              <p>
                Gratuito.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                LIRR / Metro-North
              </strong>

              <p>
                Tarifa por zona,
                com CityTicket
                dentro de NYC.
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
            href="https://omny.info/fares"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas e fare cap · OMNY
          </a>


          <a
            class="official-link"
            href="https://www.mta.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MTA
          </a>


          <a
            class="official-link"
            href="https://www.panynj.gov/path/en/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PATH · Port Authority
          </a>


          <a
            class="official-link"
            href="https://www.ferry.nyc/ticketing-info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · NYC Ferry
          </a>


          <a
            class="official-link"
            href="https://www.nyc.gov/html/dot/html/ferrybus/staten-island-ferry.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Staten Island Ferry · NYC DOT
          </a>


          <a
            class="official-link"
            href="https://www.jfkairport.com/to-from-airport/air-train"
            target="_blank"
            rel="noopener noreferrer"
          >
            AirTrain JFK
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
