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
             VALORES PRINCIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Valores principais
          </h4>

          <p class="panel-intro">
            No Distrito Federal,
            a tarifa depende
            da linha e do serviço utilizado.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                R$ 2,70
              </strong>

              <p>
                Aplicada a determinados
                serviços e viagens
                de menor valor tarifário.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                R$ 3,80
              </strong>

              <p>
                Utilizada em determinadas
                linhas do sistema
                rodoviário do DF.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Tarifa
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                Tarifa de referência
                dos serviços de maior valor
                e limite da integração tarifária.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Domingo e feriado
              </span>

              <strong>
                R$ 0,00
              </strong>

              <p>
                Gratuidade pelo
                programa Vai de Graça.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFA DA LINHA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como saber quanto custa sua linha
          </h4>

          <div class="answer-block">

            <strong>
              Consulte a linha específica.
            </strong>

            <p>
              Não existe uma única tarifa
              para todos os ônibus
              do Distrito Federal.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Use o DF no Ponto.
            </strong>

            <p>
              A ferramenta oficial
              permite pesquisar
              a linha e consultar
              suas informações operacionais.
            </p>

          </div>


          <div class="fare-note">

            Para viagens avulsas,
            os valores publicados
            no sistema de bilhetagem
            são R$ 2,70,
            R$ 3,80
            e R$ 5,50,
            conforme o serviço.

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
            O Cartão Mobilidade
            permite combinar diferentes
            embarques dentro das regras
            do sistema integrado.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Limite
              </span>

              <strong>
                Até 3 embarques
              </strong>

              <p>
                O passageiro pode realizar
                até dois transbordos
                após o primeiro embarque.
              </p>

              <span class="fare-scenario-result">
                3 acessos
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Tempo
              </span>

              <strong>
                Até 3 horas
              </strong>

              <p>
                O período é contado
                entre o primeiro
                e o último embarque.
              </p>

              <span class="fare-scenario-result">
                Janela de integração
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Valor máximo
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                Quando a integração
                é reconhecida corretamente,
                esse é o valor máximo pago.
              </p>

              <span class="fare-scenario-result">
                Integração
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SENTIDO DA VIAGEM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A integração tem regras
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Mesmo sentido
              </strong>

              <p>
                A viagem integrada
                deve continuar
                no mesmo sentido
                do deslocamento inicial.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Não vale para ida e volta
              </strong>

              <p>
                Retornar ao ponto
                de origem não caracteriza
                uma única viagem integrada.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A integração também depende
            do uso de meio de pagamento
            compatível com o benefício.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS + METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus + metrô
          </h4>

          <div class="answer-block">

            <strong>
              Os dois sistemas
              podem participar da integração.
            </strong>

            <p>
              O Cartão Mobilidade
              pode ser utilizado
              para combinar ônibus,
              BRT e metrô,
              conforme as regras vigentes.
            </p>

          </div>


          <div class="fare-note">

            Quando a integração
            é reconhecida corretamente,
            o valor máximo da viagem
            integrada é R$ 5,50.

          </div>

        </section>


        <!-- ==================================================
             CARTÃO BANCÁRIO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento por aproximação
          </h4>

          <div class="answer-block">

            <strong>
              Cartões bancários
              podem pagar a passagem.
            </strong>

            <p>
              Ônibus, BRT e metrô
              aceitam pagamento
              por aproximação
              com cartões compatíveis.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Mas não há integração tarifária.
            </strong>

            No pagamento por cartão
            de crédito ou débito,
            cada embarque é cobrado
            separadamente.
          </div>

        </section>


        <!-- ==================================================
             BILHETE AVULSO QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Avulso QR Code
          </h4>

          <div class="answer-block">

            <strong>
              Disponível para ônibus e BRT.
            </strong>

            <p>
              O bilhete avulso
              é uma alternativa
              para quem não possui
              Cartão Mobilidade.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O preço acompanha
              a tarifa da linha.
            </strong>

            <p>
              Pode corresponder
              a R$ 2,70,
              R$ 3,80
              ou R$ 5,50.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não inclui integração tarifária.
            </strong>

            Cada bilhete vale
            para uma única viagem.
          </div>

        </section>


        <!-- ==================================================
             VAI DE GRAÇA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Vai de Graça
          </h4>

          <div class="visitor-alert">

            <strong>
              Aos domingos e feriados,
              a tarifa é zero.
            </strong>

            A gratuidade vale
            para ônibus,
            BRT,
            micro-ônibus,
            Zebrinha,
            serviços urbanos e rurais
            e metrô em todo
            o Distrito Federal.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Sem limite de viagens
              </strong>

              <p>
                O passageiro pode realizar
                múltiplos embarques
                durante o período
                de gratuidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem cadastro específico
              </strong>

              <p>
                A gratuidade não exige
                inscrição prévia
                no programa.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Com cartão
              </strong>

              <p>
                Aproxime normalmente
                para liberar a catraca,
                sem geração de cobrança.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem cartão
              </strong>

              <p>
                A entrada também
                é garantida,
                com liberação da catraca
                pela equipe responsável.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PONTO FACULTATIVO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ponto facultativo não é feriado
          </h4>

          <div class="answer-block">

            <strong>
              Não presuma gratuidade.
            </strong>

            <p>
              O Vai de Graça
              é aplicado aos domingos
              e feriados.
              Em ponto facultativo,
              a tarifa pode ser cobrada normalmente.
            </p>

          </div>


          <div class="fare-note">

            O GDF pode anunciar
            gratuidade extraordinária
            em datas específicas.
            Consulte a programação oficial
            quando houver evento especial.

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
                Uma linha
              </span>

              <strong>
                Ônibus avulso
              </strong>

              <p>
                O valor depende
                da tarifa específica
                da linha.
              </p>

              <span class="fare-scenario-result">
                R$ 2,70 / 3,80 / 5,50
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus + metrô
              </strong>

              <p>
                Com Cartão Mobilidade
                e dentro das regras
                da integração.
              </p>

              <span class="fare-scenario-result">
                Até R$ 5,50
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Domingo
              </span>

              <strong>
                Transporte público
              </strong>

              <p>
                Viagem realizada
                durante o Vai de Graça.
              </p>

              <span class="fare-scenario-result">
                R$ 0,00
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ANTES DE EMBARCAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de embarcar
          </h4>

          <div class="answer-block">

            <strong>
              Confira a tarifa da linha.
            </strong>

            <p>
              Não presuma
              que todos os ônibus
              custam o mesmo valor.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Vai integrar?
            </strong>

            <p>
              Use Cartão Mobilidade
              ou outro cartão habilitado
              para o benefício.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Vai pagar por aproximação?
            </strong>

            <p>
              Lembre-se de que
              cada embarque será
              cobrado individualmente.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS / OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

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
            href="https://dfnoponto.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DF no Ponto
          </a>


          <a
            class="official-link"
            href="https://brbnovo.brb.com.br/mobilidade/cartao-mobilidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cartão Mobilidade · BRB
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


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
