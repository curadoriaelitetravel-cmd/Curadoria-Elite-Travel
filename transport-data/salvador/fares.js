// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["fares"] = {

  kicker: "Salvador · tarifas vigentes",

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
            Salvador possui tarifas diferentes conforme
            o sistema utilizado. A integração pode alterar
            bastante o valor final da viagem.
          </p>

          <div class="fare-highlight-grid">


            <article class="fare-highlight">

              <span>
                Metrô
              </span>

              <strong>
                R$ 4,10
              </strong>

              <p>
                Tarifa para uma viagem realizada
                exclusivamente no metrô.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ônibus municipal
              </span>

              <strong>
                R$ 5,90
              </strong>

              <p>
                Tarifa do transporte coletivo
                urbano de Salvador.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                BRT
              </span>

              <strong>
                R$ 5,90
              </strong>

              <p>
                O BRT utiliza a mesma tarifa
                municipal do ônibus convencional.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrô + ônibus/BRT
              </span>

              <strong>
                R$ 5,90
              </strong>

              <p>
                Tarifa integrada entre metrô
                e ônibus urbano, STEC ou BRT,
                quando respeitadas as regras
                de integração.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ônibus metropolitano + metrô
              </span>

              <strong>
                A partir de R$ 5,20
              </strong>

              <p>
                Pode haver cobrança da diferença
                conforme a tarifa da linha metropolitana.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ferry-Boat
              </span>

              <strong>
                R$ 7,20
              </strong>

              <p>
                Tarifa convencional para passageiro
                em dias úteis.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             UMA DIFERENÇA IMPORTANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô sozinho ou viagem integrada?
          </h4>

          <p class="panel-intro">
            Esta diferença ajuda a entender
            por que o metrô pode custar menos
            quando utilizado sozinho.
          </p>

          <div class="comparison-grid">


            <article class="comparison-card">

              <strong>
                Só metrô
              </strong>

              <p>
                Uma viagem exclusiva
                no sistema metroviário
                custa R$ 4,10.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrô + ônibus urbano/BRT
              </strong>

              <p>
                Na integração válida,
                o conjunto da viagem
                custa R$ 5,90.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Não são duas tarifas somadas.
            </strong>

            Quando a integração é reconhecida,
            aplica-se a regra tarifária integrada.

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração com ônibus urbano e BRT
          </h4>

          <p class="panel-intro">
            O metrô pode ser combinado
            com ônibus municipais,
            STEC e BRT.
          </p>

          <div class="fare-scenario-grid">


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus → Metrô
              </strong>

              <p>
                A viagem integrada pode ser realizada
                utilizando o mesmo cartão válido
                em todos os trechos.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Metrô → Ônibus
              </strong>

              <p>
                A integração funciona
                também no sentido inverso,
                dentro das regras do sistema.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Metrô + BRT
              </strong>

              <p>
                O BRT participa
                da mesma lógica tarifária
                da rede urbana integrada.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus → Metrô → Ônibus
              </strong>

              <p>
                É possível utilizar até três modais
                dentro das regras de integração
                previstas para a rede.
              </p>

              <span class="fare-scenario-result">
                Uma tarifa integrada
              </span>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Prazo:
            </strong>

            a integração do metrô com ônibus urbano,
            STEC e BRT é válida por até
            2 horas a partir da primeira utilização.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração com ônibus metropolitanos
          </h4>

          <p class="panel-intro">
            Linhas metropolitanas não possuem
            uma tarifa única para todos os trajetos.
          </p>


          <div class="answer-block">

            <strong>
              A integração começa em R$ 5,20.
            </strong>

            <p>
              Se a tarifa da linha metropolitana
              for maior, será cobrada
              a diferença correspondente.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Se a viagem começar no ônibus metropolitano
            </strong>

            <p>
              Quando a tarifa paga no ônibus
              for igual ou superior ao valor
              previsto para a integração,
              nada adicional é debitado
              ao entrar no metrô.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Se a viagem começar no metrô
            </strong>

            <p>
              A eventual diferença
              da tarifa metropolitana
              é debitada no ônibus.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Prazo:
            </strong>

            a integração entre metrô
            e ônibus metropolitano
            é válida por até 3 horas
            desde a primeira utilização.

          </div>

        </section>


        <!-- ==================================================
             MESMO CARTÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para a integração funcionar
          </h4>

          <div class="payment-choice-grid">


            <article class="payment-choice">

              <strong>
                Use o mesmo cartão
              </strong>

              <p>
                A integração depende
                do reconhecimento das etapas
                da mesma viagem.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Uso individual
              </strong>

              <p>
                O mesmo cartão deve ser utilizado
                individualmente durante
                todos os trechos integrados.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Respeite o prazo
              </strong>

              <p>
                Viagens realizadas fora
                da janela de integração
                podem gerar nova cobrança.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Não troque o meio de pagamento
              </strong>

              <p>
                Utilizar cartões diferentes
                durante o trajeto pode impedir
                que o sistema reconheça
                a integração.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat · São Joaquim ↔ Bom Despacho
          </h4>

          <p class="panel-intro">
            A tarifa de passageiro muda
            conforme o dia da semana.
          </p>

          <div class="comparison-grid">


            <article class="comparison-card">

              <strong>
                Segunda a sexta
              </strong>

              <p>
                Passageiro convencional:
                R$ 7,20 por travessia.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Finais de semana e feriados
              </strong>

              <p>
                Passageiro convencional:
                R$ 9,50 por travessia.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Veículos possuem tarifas próprias.
            </strong>

            Carros, motos, bicicletas,
            utilitários e outros veículos
            seguem tabela específica.
            Para quem viaja com carro,
            consulte o valor atualizado
            antes de chegar ao terminal.

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            E o VLT?
          </h4>

          <div class="answer-block">

            <strong>
              O sistema ainda está em operação assistida.
            </strong>

            <p>
              As fontes oficiais consultadas
              informam trecho, paradas
              e horários desta etapa,
              mas não apresentam uma tarifa regular
              consolidada para o serviço.
            </p>

          </div>


          <div class="fare-note">

            Por isso, a Curadoria não apresenta
            um valor de tarifa para o VLT
            enquanto a cobrança regular
            não estiver claramente publicada
            pelos canais oficiais.

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
                Exemplo 1
              </span>

              <strong>
                Aeroporto → destino atendido só por metrô
              </strong>

              <p>
                Se todo o percurso puder ser feito
                exclusivamente pelo metrô,
                vale a tarifa própria do sistema.
              </p>

              <span class="fare-scenario-result">
                R$ 4,10
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 2
              </span>

              <strong>
                Metrô + ônibus municipal
              </strong>

              <p>
                Com integração válida
                e o mesmo cartão,
                aplica-se a tarifa integrada.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 3
              </span>

              <strong>
                Metrô + BRT
              </strong>

              <p>
                O BRT participa
                da integração urbana
                com o metrô.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 4
              </span>

              <strong>
                Salvador → Itaparica
              </strong>

              <p>
                Passageiro a pé utilizando
                o Ferry-Boat em um dia útil.
              </p>

              <span class="fare-scenario-result">
                R$ 7,20
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AVISOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de embarcar
          </h4>


          <div class="answer-block">

            <strong>
              Integração depende do cartão correto.
            </strong>

            <p>
              Não presuma que qualquer forma
              de pagamento utilizada no metrô
              dará direito à integração tarifária.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ônibus metropolitanos variam de preço.
            </strong>

            <p>
              O valor depende da linha
              e do município atendido.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ferry-Boat varia conforme o dia.
            </strong>

            <p>
              Finais de semana e feriados
              possuem tarifa diferente
              dos dias úteis.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Tarifas podem mudar.
            </strong>

            <p>
              Confirme os valores vigentes
              nos canais oficiais
              antes da viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/metrobahia/guia-de-uso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · Metrô Bahia
          </a>


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
            href="https://www.ba.gov.br/agerba/publicacoes/Tarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas metropolitanas · AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.internacionaltravessias.com.br/tarifas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · Ferry-Boat
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
