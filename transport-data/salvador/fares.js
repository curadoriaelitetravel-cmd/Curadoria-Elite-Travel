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
            Salvador combina sistemas municipais
            e estaduais.
            O valor da viagem depende
            do modal utilizado
            e de eventual integração.
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
                Tarifa pública
                para uma viagem realizada
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
                Tarifa do transporte
                coletivo urbano
                de Salvador.
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
                Utiliza
                a tarifa municipal
                vigente.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrô + ônibus/BRT/STEC
              </span>

              <strong>
                R$ 5,90
              </strong>

              <p>
                Tarifa integrada
                entre o metrô
                e os sistemas urbanos
                participantes.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrô + metropolitano
              </span>

              <strong>
                A partir de R$ 5,60
              </strong>

              <p>
                Pode haver cobrança
                da diferença correspondente
                à tarifa metropolitana.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ferry-Boat · pedestre
              </span>

              <strong>
                R$ 7,20 / R$ 9,50
              </strong>

              <p>
                Passageiro normal.
                Dias úteis / sábados,
                domingos e feriados.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metrô sozinho ou integrado?
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Só metrô
              </strong>

              <p>
                R$ 4,10
                para viagem realizada
                exclusivamente
                no sistema metroviário.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrô + ônibus/BRT/STEC
              </strong>

              <p>
                R$ 5,90
                quando a integração
                é reconhecida
                pelo sistema.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              A integração não significa
              somar duas tarifas completas.
            </strong>

            Quando a viagem atende
            às regras de integração,
            aplica-se a tarifa integrada.

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO URBANA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração urbana
          </h4>

          <p class="panel-intro">
            O metrô possui integração tarifária
            com ônibus urbanos,
            STEC
            e BRT.
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
                Com a integração
                reconhecida pelo sistema.
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
                A integração também
                pode ocorrer
                no sentido inverso.
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
                da integração tarifária
                com o metrô.
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
                Metrô + STEC
              </strong>

              <p>
                O sistema complementar
                também participa
                da integração publicada.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CARTÃO INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Integração
          </h4>

          <div class="answer-block">

            <strong>
              É um cartão recarregável
              utilizado na rede integrada.
            </strong>

            <p>
              Pode ser utilizado
              em viagens exclusivas
              no metrô,
              ônibus,
              BRT
              ou STEC
              e também em viagens integradas
              entre esses sistemas.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Aquisição
              </span>

              <strong>
                R$ 7,00
              </strong>

              <p>
                Taxa de aquisição
                do Cartão Integração,
                além do valor
                colocado em créditos.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Os meios de pagamento,
            aquisição
            e recarga
            serão detalhados
            na seção “Como pagar”.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração com ônibus metropolitanos
          </h4>

          <p class="panel-intro">
            As linhas metropolitanas
            possuem tarifas próprias.
          </p>

          <div class="answer-block">

            <strong>
              A integração metroviária
              começa em R$ 5,60.
            </strong>

            <p>
              Se a tarifa da linha metropolitana
              for superior ao valor-base,
              pode ser cobrada
              a diferença correspondente.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não existe um preço único
              para toda a Região Metropolitana.
            </strong>

            <p>
              O valor final depende
              da linha metropolitana
              utilizada.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT — PASSAGEIROS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat · passageiro a pé
          </h4>

          <p class="panel-intro">
            As tarifas vigentes
            do sistema Salvador ↔ Itaparica
            foram reajustadas
            em 6 de março de 2026.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Passageiro normal
                · dia útil
              </span>

              <strong>
                R$ 7,20
              </strong>

              <p>
                Tarifa por passageiro
                em dias úteis.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Passageiro normal
                · sábado, domingo ou feriado
              </span>

              <strong>
                R$ 9,50
              </strong>

              <p>
                Tarifa por passageiro
                nesses dias.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Estudante
                · dia útil
              </span>

              <strong>
                R$ 3,60
              </strong>

              <p>
                Tarifa estudantil
                nas condições
                regulamentadas.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Estudante
                · sábado
              </span>

              <strong>
                R$ 4,80
              </strong>

              <p>
                A tarifa estudantil
                é válida apenas
                no período letivo
                e nos dias previstos
                pela regulamentação.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT — VEÍCULOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat · veículos
          </h4>

          <p class="panel-intro">
            Para veículos,
            a tarifa depende
            da categoria
            e do dia da travessia.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Automóvel pequeno
                · dia útil
              </span>

              <strong>
                R$ 64,70
              </strong>

              <p>
                Tarifa vigente
                desde março de 2026.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Automóvel pequeno
                · sábado, domingo ou feriado
              </span>

              <strong>
                R$ 91,70
              </strong>

              <p>
                Tarifa para a mesma categoria
                nesses dias.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Motocicleta
                · dia útil
              </span>

              <strong>
                R$ 27,00
              </strong>

              <p>
                Tarifa vigente
                para motocicleta
                ou lambreta.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Motocicleta
                · sábado, domingo ou feriado
              </span>

              <strong>
                R$ 37,80
              </strong>

              <p>
                Tarifa para a mesma categoria
                nesses dias.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Bicicleta
                · dia útil
              </span>

              <strong>
                R$ 10,60
              </strong>

              <p>
                Valor da categoria
                bicicleta.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Bicicleta
                · sábado, domingo ou feriado
              </span>

              <strong>
                R$ 14,90
              </strong>

              <p>
                Tarifa para a mesma categoria
                nesses dias.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Automóveis grandes,
            utilitários,
            micro-ônibus,
            ônibus,
            caminhões,
            reboques
            e outras categorias
            possuem valores próprios
            na tabela da AGERBA.

          </div>

        </section>


        <!-- ==================================================
             TARIFA SOCIAL FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifa Social do Ferry-Boat
          </h4>

          <div class="answer-block">

            <strong>
              O benefício possui
              uma regra diferente
              da tarifa convencional.
            </strong>

            <p>
              O usuário elegível
              pode realizar
              uma viagem completa
              de ida e volta
              pagando apenas uma passagem
              no Terminal de Bom Despacho,
              conforme as regras
              da Tarifa Social.
            </p>

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Dias úteis
              </strong>

              <p>
                R$ 7,20.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sábado
              </strong>

              <p>
                R$ 9,50.
              </p>

            </article>

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
              O primeiro trecho está
              em operação assistida.
            </strong>

            <p>
              O embarque de passageiros
              começou em 29 de junho de 2026
              no trecho inicial
              entre Calçada e Lobato.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Ainda não apresentamos
              uma tarifa comercial regular.
            </strong>

            A etapa atual
            é de operação assistida
            e as fontes públicas consultadas
            não consolidam uma tarifa regular
            para o sistema
            como ocorre com metrô
            e ônibus.

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
                1 passageiro
              </span>

              <strong>
                Só metrô
              </strong>

              <p>
                Uma viagem exclusivamente
                no sistema metroviário.
              </p>

              <span class="fare-scenario-result">
                R$ 4,10
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                1 passageiro
              </span>

              <strong>
                Metrô + ônibus municipal
              </strong>

              <p>
                Com integração
                reconhecida pelo sistema.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                1 passageiro
              </span>

              <strong>
                Metrô + BRT
              </strong>

              <p>
                Com integração
                reconhecida pelo sistema.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Ferry · dia útil
              </span>

              <strong>
                Passageiro a pé
              </strong>

              <p>
                Travessia convencional
                como passageiro normal.
              </p>

              <span class="fare-scenario-result">
                R$ 7,20
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Ferry · fim de semana
              </span>

              <strong>
                Passageiro a pé
              </strong>

              <p>
                Sábado,
                domingo
                ou feriado.
              </p>

              <span class="fare-scenario-result">
                R$ 9,50
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Ferry · dia útil
              </span>

              <strong>
                Automóvel pequeno
              </strong>

              <p>
                Tarifa correspondente
                ao veículo.
              </p>

              <span class="fare-scenario-result">
                R$ 64,70
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
                Só metrô
              </strong>

              <p>
                R$ 4,10.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Ônibus ou BRT
              </strong>

              <p>
                R$ 5,90.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Metrô + urbano
              </strong>

              <p>
                R$ 5,90
                com integração válida.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                O valor depende
                da linha utilizada.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Ferry a pé
              </strong>

              <p>
                R$ 7,20 em dia útil
                ou R$ 9,50
                em sábado,
                domingo e feriado.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚊</span>

              <strong>
                VLT
              </strong>

              <p>
                Operação assistida;
                sem tarifa comercial regular
                consolidada nas fontes públicas
                consultadas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.ba.gov.br/sedur/mobilidade-urbana/metro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas e integração · SEDUR
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
            href="https://www.ba.gov.br/agerba/noticias/2026-03/8351/reajuste-de-tarifas-do-sistema-ferry-boat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas 2026 do Ferry-Boat · AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/noticias/2026-06/1068/inicio-da-operacao-assistida-do-vlt-marca-nova-fase-da-mobilidade-em-salvador"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operação assistida do VLT · CTB
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
