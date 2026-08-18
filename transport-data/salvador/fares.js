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
            Salvador possui tarifas diferentes
            conforme o sistema utilizado.
            A integração pode alterar
            o valor final da viagem.
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
                para viagem realizada
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
                coletivo urbano de Salvador.
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
                O BRT utiliza
                a tarifa municipal vigente.
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
                Valor da integração
                com ônibus urbanos,
                STEC ou BRT,
                dentro das regras vigentes.
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
                da diferença da tarifa
                metropolitana.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ferry-Boat
              </span>

              <strong>
                Consulte a tabela
              </strong>

              <p>
                As tarifas são reguladas
                pela AGERBA
                e variam conforme
                passageiro, veículo e dia.
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
                A tarifa pública
                exclusiva do metrô
                é de R$ 4,10.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metrô + ônibus urbano/BRT
              </strong>

              <p>
                A tarifa integrada
                publicada pela SEDUR
                é de R$ 5,90.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Não são duas tarifas somadas.
            </strong>

            Quando o sistema reconhece
            uma integração válida,
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
            A SEDUR informa integração
            do metrô com ônibus urbanos,
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
                Quando reconhecida
                dentro das regras do sistema,
                aplica-se a tarifa integrada.
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
                pode ocorrer no sentido inverso,
                conforme as regras vigentes.
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
                com o sistema metroviário.
              </p>

              <span class="fare-scenario-result">
                R$ 5,90
              </span>

            </article>

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
              A integração começa
              em R$ 5,60.
            </strong>

            <p>
              A SEDUR informa
              que pode haver cobrança
              da diferença correspondente
              à tarifa da linha metropolitana.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não existe um único preço
              para toda a Região Metropolitana.
            </strong>

            <p>
              O valor depende
              da linha e do percurso utilizado.
            </p>

          </div>


          <div class="fare-note">

            Para viagens metropolitanas,
            consulte também
            as tabelas e informações
            publicadas pela AGERBA.

          </div>

        </section>


        <!-- ==================================================
             CARTÃO / INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para a integração funcionar
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Use meio compatível
              </strong>

              <p>
                A integração depende
                de um meio de pagamento
                reconhecido pelo sistema.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Use o mesmo cartão
              </strong>

              <p>
                Durante uma viagem integrada,
                trocar o meio de pagamento
                pode impedir o reconhecimento
                da integração.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Confira as regras atuais
              </strong>

              <p>
                Cartões e condições
                de integração podem mudar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>

          <p class="panel-intro">
            As tarifas do sistema
            Salvador ↔ Itaparica
            são reguladas pela AGERBA.
          </p>

          <div class="answer-block">

            <strong>
              Houve reajuste em março de 2026.
            </strong>

            <p>
              A AGERBA publicou
              novo reajuste tarifário
              para o Sistema Ferry-Boat
              a partir de 6 de março de 2026.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Passageiros e veículos
              possuem categorias diferentes.
            </strong>

            <p>
              O valor depende
              do tipo de embarque
              e da tabela vigente.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Consulte a tabela pública da AGERBA
              antes da travessia.
            </strong>

            Não apresentamos aqui
            um valor convencional único
            porque a publicação pública atual
            organiza as tarifas por categoria
            e período.

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
              O sistema permanece
              em operação assistida.
            </strong>

            <p>
              As fontes públicas consultadas
              não apresentam ainda
              uma tarifa regular consolidada
              para esta etapa.
            </p>

          </div>


          <div class="fare-note">

            Por isso, a Curadoria
            não apresenta um valor
            de tarifa para o VLT
            neste momento.

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
                Só metrô
              </strong>

              <p>
                Viagem realizada
                exclusivamente
                dentro do sistema metroviário.
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
                Com integração reconhecida
                pelo sistema.
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
                Também participa
                da integração urbana.
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
                Metrô + ônibus metropolitano
              </strong>

              <p>
                O valor começa
                na tarifa-base publicada
                e pode receber diferença
                da linha metropolitana.
              </p>

              <span class="fare-scenario-result">
                A partir de R$ 5,60
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
              Tarifas podem ser reajustadas.
            </strong>

            <p>
              Confirme valores
              nos canais públicos
              antes da viagem.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Metropolitana não tem preço único.
            </strong>

            <p>
              A linha utilizada
              interfere no valor final.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ferry-Boat possui tabela própria.
            </strong>

            <p>
              Passageiros e veículos
              seguem categorias tarifárias
              distintas.
            </p>

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
            href="https://www.ba.gov.br/agerba/publicacoes/Tarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas · AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/noticias/2026-03/8351/reajuste-de-tarifas-do-sistema-ferry-boat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reajuste Ferry-Boat · AGERBA
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
