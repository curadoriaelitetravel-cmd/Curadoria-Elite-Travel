// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


window.BRASILIA_TRANSPORT_MODULES["fares"] = {

  kicker:
    "Brasília · tarifas vigentes",

  title:
    "Tarifas e integração",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             TARIFAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quanto custa o transporte
          </h4>

          <p class="panel-intro">
            O sistema do Distrito Federal
            possui três valores principais
            para ônibus e uma tarifa única
            para o metrô.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Ônibus · U-1 e U-3
              </span>

              <strong>
                R$ 2,70
              </strong>

              <p>
                Tarifa das linhas classificadas
                oficialmente como
                Urbana 1 e Urbana 3.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ônibus · U-2, M-1 e M-3
              </span>

              <strong>
                R$ 3,80
              </strong>

              <p>
                Tarifa das linhas
                Urbana 2,
                Metropolitana 1
                e Metropolitana 3.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Ônibus · M-2
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                Tarifa das linhas classificadas
                como Metropolitana 2.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrô
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                Tarifa única
                do sistema metroviário
                do Distrito Federal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE SIGNIFICAM AS CATEGORIAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Por que existem três tarifas de ônibus?
          </h4>

          <div class="answer-block">

            <strong>
              As linhas são classificadas
              pelo sistema de transporte.
            </strong>

            <p>
              O Serviço Básico do Distrito Federal
              divide as linhas rodoviárias
              nas categorias Urbana 1,
              Urbana 2, Urbana 3,
              Metropolitana 1,
              Metropolitana 2
              e Metropolitana 3.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Cada categoria possui
              uma tarifa definida.
            </strong>

            <p>
              U-1 e U-3 custam R$ 2,70;
              U-2, M-1 e M-3 custam R$ 3,80;
              e M-2 custa R$ 5,50.
            </p>

          </div>


          <div class="fare-note">

            O valor não é escolhido
            pelo passageiro no momento do embarque:
            ele já está associado
            à classificação da linha utilizada.

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração tarifária
          </h4>

          <p class="panel-intro">
            Quando uma viagem exige
            mais de um transporte,
            a integração pode evitar
            a soma integral das tarifas.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Embarques
              </span>

              <strong>
                Até 3
              </strong>

              <p>
                É possível fazer
                o primeiro embarque
                e até dois transbordos.
              </p>

              <span class="fare-scenario-result">
                3 acessos
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Período
              </span>

              <strong>
                Até 3 horas
              </strong>

              <p>
                Os embarques integrados
                precisam ocorrer
                dentro dessa janela.
              </p>

              <span class="fare-scenario-result">
                Janela de integração
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Total
              </span>

              <strong>
                Até R$ 5,50
              </strong>

              <p>
                Mesmo combinando
                transportes diferentes,
                o valor máximo da viagem
                integrada é R$ 5,50.
              </p>

              <span class="fare-scenario-result">
                Teto da integração
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLO REAL DE INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que isso muda na prática?
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Sem integração
              </span>

              <strong>
                R$ 12,00
              </strong>

              <p>
                Uma viagem combinando
                uma tarifa de R$ 2,70,
                outra de R$ 5,50
                e outra de R$ 3,80
                somaria R$ 12,00.
              </p>

              <span class="route-compare-result">
                Tarifas somadas
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Com integração
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                A mesma combinação,
                quando enquadrada
                nas regras de integração,
                custa no máximo R$ 5,50.
              </p>

              <span class="route-compare-result">
                Tarifa integrada
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE PODE SER INTEGRADO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quais transportes podem ser combinados?
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Ônibus + ônibus
              </strong>

              <p>
                A troca entre linhas
                pode participar
                da integração.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus + metrô
              </strong>

              <p>
                O sistema permite
                integrar os modos
                rodoviário e metroviário.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Micro-ônibus
              </strong>

              <p>
                Também participa
                do sistema
                de integração tarifária.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Até três acessos
              </strong>

              <p>
                A combinação pode envolver
                até três embarques
                na mesma viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SENTIDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A integração precisa seguir o mesmo sentido
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Ida
              </strong>

              <p>
                Os embarques seguintes
                precisam continuar
                o deslocamento iniciado.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Volta
              </strong>

              <p>
                Uma nova viagem
                no sentido contrário
                não faz parte
                da mesma integração.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não serve para fazer
              ida e volta pagando uma tarifa.
            </strong>

            A integração é destinada
            aos diferentes embarques necessários
            para completar um deslocamento
            no mesmo sentido.

          </div>

        </section>


        <!-- ==================================================
             CARTÃO NECESSÁRIO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para receber a integração
          </h4>

          <div class="answer-block">

            <strong>
              Use Cartão Mobilidade
              ou Vale-Transporte.
            </strong>

            <p>
              São os meios de pagamento
              que registram os embarques
              e aplicam o benefício
              da integração tarifária.
            </p>

          </div>

        </section>


        <!-- ==================================================
             CARTÃO BANCÁRIO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão bancário por aproximação
          </h4>

          <div class="answer-block">

            <strong>
              Pode pagar a passagem diretamente.
            </strong>

            <p>
              Cartões de crédito
              e débito por aproximação
              podem ser utilizados
              nos validadores compatíveis.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não oferece integração tarifária.
            </strong>

            Se você fizer três embarques
            pagando diretamente
            com cartão bancário,
            cada tarifa será cobrada
            separadamente.

          </div>

        </section>


        <!-- ==================================================
             QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Avulso QR Code
          </h4>

          <div class="answer-block">

            <strong>
              É uma opção para ônibus e BRT.
            </strong>

            <p>
              O valor do bilhete
              corresponde à tarifa
              do serviço utilizado:
              R$ 2,70,
              R$ 3,80
              ou R$ 5,50.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Também não oferece integração.
            </strong>

            Cada Bilhete Avulso QR Code
            corresponde a uma viagem
            e não aplica o benefício
            de até três embarques
            por R$ 5,50.

          </div>

        </section>


        <!-- ==================================================
             VAI DE GRAÇA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingos e feriados
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Vai de Graça
              </span>

              <strong>
                R$ 0,00
              </strong>

              <p>
                O transporte público coletivo
                do Distrito Federal
                é gratuito aos domingos
                e feriados.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              A gratuidade vale
              em todo o Distrito Federal.
            </strong>

            <p>
              Abrange ônibus,
              BRT,
              micro-ônibus,
              Zebrinha,
              linhas urbanas e rurais
              e metrô.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não há limite de viagens.
            </strong>

            <p>
              O passageiro pode utilizar
              o transporte quantas vezes
              precisar durante o período
              abrangido pela gratuidade.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não exige cadastro prévio.
            </strong>

            <p>
              O benefício é válido
              para todos os passageiros.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO EMBARCAR NO VAI DE GRAÇA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como embarcar no Vai de Graça
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Com cartão
              </strong>

              <p>
                Aproxime normalmente
                o Cartão Mobilidade,
                Vale-Transporte
                ou cartão bancário
                para liberar a catraca.
                Nenhum valor é cobrado.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem cartão
              </strong>

              <p>
                O passageiro também
                tem direito à gratuidade.
                A entrada é liberada
                conforme o procedimento
                operacional do sistema.
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

              <span>R$</span>

              <strong>
                Ônibus
              </strong>

              <p>
                R$ 2,70,
                R$ 3,80
                ou R$ 5,50,
                conforme a classificação
                oficial da linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metrô
              </strong>

              <p>
                R$ 5,50
                por viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integração
              </strong>

              <p>
                Até três embarques
                em até três horas,
                por no máximo R$ 5,50.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Cartão bancário
              </strong>

              <p>
                Aceito por aproximação,
                mas sem integração tarifária.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📅</span>

              <strong>
                Domingo e feriado
              </strong>

              <p>
                R$ 0,00
                pelo Vai de Graça.
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
            href="https://dflegis.df.gov.br/ato.php?p=decreto-40381-de-09-de-janeiro-de-2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas oficiais · GDF
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
            href="https://brbnovo.brb.com.br/mobilidade/cartao-mobilidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integração · BRB Mobilidade
          </a>


          <a
            class="official-link"
            href="https://agenciabrasilia.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vai de Graça · GDF
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
