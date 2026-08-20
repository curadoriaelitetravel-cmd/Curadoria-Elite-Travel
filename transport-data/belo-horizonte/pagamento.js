// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: COMO PAGAR
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


window.BELO_HORIZONTE_TRANSPORT_MODULES["card"] = {

  kicker: "Belo Horizonte · bilhetagem",

  title: "Como pagar o transporte",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Primeiro identifique o sistema
            </span>

            <h4>
              Ônibus municipal, metrô
              e ônibus metropolitano
              não usam exatamente
              a mesma bilhetagem.
            </h4>

            <p>
              Nos ônibus municipais,
              a principal referência é o BHBUS.
              O metrô possui meios próprios
              de pagamento digital.
              Já o transporte metropolitano
              utiliza o Cartão ÓTIMO.
            </p>

          </div>

        </section>


        <!-- ==================================================
             RESUMO DOS SISTEMAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual meio pertence a cada sistema
          </h4>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                🚌
              </span>

              <strong>
                Ônibus municipal
              </strong>

              <span class="payment-status available">
                BHBUS
              </span>

              <small>
                Cartão BHBUS,
                QR Code pelo BHBUS+
                ou dinheiro.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚇
              </span>

              <strong>
                Metrô
              </strong>

              <span class="payment-status available">
                Bilhetagem digital
              </span>

              <small>
                Aproximação,
                QR Code,
                terminais de autoatendimento
                e cartões de integração.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🌆
              </span>

              <strong>
                Metropolitano
              </strong>

              <span class="payment-status available">
                Cartão ÓTIMO
              </span>

              <small>
                Sistema próprio
                de bilhetagem eletrônica
                da Região Metropolitana.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar o ônibus municipal
          </h4>

          <p class="panel-intro">
            Na rede municipal de Belo Horizonte,
            o passageiro pode utilizar
            diferentes formas de pagamento.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão BHBUS
              </strong>

              <span class="payment-status available">
                Disponível
              </span>

              <small>
                É a opção importante
                para quem pretende utilizar
                as integrações tarifárias
                da rede municipal.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                QR Code
              </strong>

              <span class="payment-status available">
                BHBUS+
              </span>

              <small>
                O aplicativo BHBUS+
                permite gerar passagem digital
                para embarcar sem cartão físico.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💵
              </span>

              <strong>
                Dinheiro
              </strong>

              <span class="payment-status available">
                Disponível
              </span>

              <small>
                Também é utilizado
                para pagamento
                das viagens municipais.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CARTÃO BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão BHBUS
          </h4>

          <p class="panel-intro">
            O BHBUS é o cartão
            do sistema de bilhetagem eletrônica
            do transporte coletivo municipal
            de Belo Horizonte.
          </p>

          <div class="answer-block">

            <strong>
              Qualquer usuário pode ter BHBUS.
            </strong>

            <p>
              Entre as modalidades disponíveis,
              existe cartão destinado
              ao usuário comum
              do transporte coletivo.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ele é especialmente útil
              para integrações.
            </strong>

            <p>
              O BHBUS permite
              integração física e tarifária
              entre linhas municipais
              e integração tarifária
              com o metrô,
              conforme as regras vigentes.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO ADQUIRIR BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como adquirir o BHBUS
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                1
              </span>

              <strong>
                Escolha o cartão
              </strong>

              <p>
                Existem modalidades diferentes
                conforme o perfil
                do passageiro.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                2
              </span>

              <strong>
                Vá a um ponto autorizado
              </strong>

              <p>
                O cartão é comercializado
                em estações de integração,
                terminais
                e pontos credenciados
                do Transfácil.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                3
              </span>

              <strong>
                Faça a primeira recarga
              </strong>

              <p>
                É possível colocar créditos
                no cartão
                no momento da aquisição.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                4
              </span>

              <strong>
                Mantenha o mesmo cartão
              </strong>

              <p>
                Isso permite que o sistema
                reconheça as viagens
                quando houver
                integração tarifária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RECARGA BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como recarregar o BHBUS
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>
                💵
              </span>

              <strong>
                Dinheiro
              </strong>

              <p>
                Disponível
                nos pontos físicos
                que oferecem essa modalidade.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                💳
              </span>

              <strong>
                Cartão
              </strong>

              <p>
                Pode ser utilizado
                nos canais de recarga
                que oferecem
                pagamento por cartão.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                📲
              </span>

              <strong>
                Pix
              </strong>

              <p>
                Disponível
                entre as formas
                oficiais de recarga.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🧾
              </span>

              <strong>
                Boleto
              </strong>

              <p>
                Também está disponível
                em determinadas
                modalidades de recarga.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Pelo aplicativo BHBUS+,
            as recargas online podem ser feitas
            com cartão de crédito,
            boleto ou Pix.
            A Prefeitura informa
            cobrança de taxa de 1%
            nessas recargas.

          </div>

        </section>


        <!-- ==================================================
             BHBUS+
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aplicativo BHBUS+
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Passagem por QR Code
              </strong>

              <p>
                Permite gerar
                a passagem digital
                no celular.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Recarga
              </strong>

              <p>
                Permite comprar
                créditos online.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Saldo e extrato
              </strong>

              <p>
                Permite acompanhar
                informações relacionadas
                ao cartão.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus
              </strong>

              <p>
                Também oferece
                previsão de chegada
                e permite salvar
                linhas favoritas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o BHBUS faz diferença
          </h4>

          <div class="answer-block">

            <strong>
              Ônibus + ônibus
            </strong>

            <p>
              A integração tarifária
              entre linhas municipais
              pode ocorrer dentro
              de uma janela de 90 minutos,
              conforme a combinação utilizada.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Ônibus + metrô
            </strong>

            <p>
              Todas as linhas municipais
              podem integrar com o metrô
              utilizando o Cartão BHBUS,
              conforme as regras tarifárias.
            </p>

          </div>


          <div class="fare-note">

            O valor final
            depende da combinação.
            Os valores estão explicados
            no módulo
            “Tarifas e integração”.

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar o metrô
          </h4>

          <p class="panel-intro">
            O Metrô BH possui
            bilhetagem digital própria
            e oferece várias formas
            de comprar a passagem unitária.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Aproximação
              </strong>

              <span class="payment-status available">
                Direto na catraca
              </span>

              <small>
                Cartões de crédito
                ou débito por aproximação
                podem ser validados
                diretamente nos bloqueios.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Carteira digital
              </strong>

              <span class="payment-status available">
                Direto na catraca
              </span>

              <small>
                Celular,
                smartwatch
                ou outro dispositivo compatível
                pode ser utilizado
                nos validadores.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ▦
              </span>

              <strong>
                QR Code
              </strong>

              <span class="payment-status available">
                Bipay
              </span>

              <small>
                O aplicativo Bipay
                gera um QR Code
                para validação
                na catraca.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AUTOATENDIMENTO DO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminais de autoatendimento do metrô
          </h4>

          <p class="panel-intro">
            Todas as estações possuem
            terminais de autoatendimento
            para compra
            de passagens unitárias.
          </p>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>
                📲
              </span>

              <strong>
                Pix
              </strong>

              <p>
                Aceito
                nos terminais
                de autoatendimento.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                💳
              </span>

              <strong>
                Crédito
              </strong>

              <p>
                Aceito
                para compra
                de passagem.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                💳
              </span>

              <strong>
                Débito
              </strong>

              <p>
                Também aceito
                nos equipamentos.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                💵
              </span>

              <strong>
                Dinheiro
              </strong>

              <p>
                Os terminais aceitam
                cédulas e moedas.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Os terminais permitem comprar
            até quatro passagens unitárias
            por operação.
            As passagens adquiridas
            têm validade de 10 dias.

          </div>

        </section>


        <!-- ==================================================
             BIPAY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aplicativo Bipay
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Pix
              </strong>

              <p>
                Pode ser utilizado
                para carregar
                a carteira digital.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Crédito
              </strong>

              <p>
                Também pode ser utilizado
                para adquirir
                saldo no aplicativo.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                QR Code
              </strong>

              <p>
                O aplicativo gera
                o código digital
                utilizado no bloqueio.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ + INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Vai usar ônibus e metrô?
          </h4>

          <div class="visitor-alert">

            <strong>
              Não use a passagem digital
              do metrô se você depende
              da integração tarifária
              com o ônibus.
            </strong>

            Pagamento por aproximação
            e QR Code da bilhetagem própria
            do metrô não realizam
            a integração tarifária
            com os ônibus.

          </div>


          <div class="answer-block">

            <strong>
              Para integração municipal + metrô
            </strong>

            <p>
              Utilize o Cartão BHBUS
              para que o sistema aplique
              a regra de integração
              correspondente.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Para integração metropolitana + metrô
            </strong>

            <p>
              O Cartão ÓTIMO
              é aceito no metrô
              e permite as integrações
              metropolitanas previstas
              para esse sistema.
            </p>

          </div>

        </section>


        <!-- ==================================================
             RECARGA DE CARTÕES NO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Recarga de BHBUS e ÓTIMO no metrô
          </h4>

          <p class="panel-intro">
            Algumas estações mantêm
            recarga dos cartões
            de integração BHBUS e ÓTIMO
            nas bilheterias.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">
              <strong>Eldorado</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Gameleira</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Carlos Prates</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Lagoinha</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Central</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Santa Efigênia</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

            <article class="payment-choice">
              <strong>Minas Shopping</strong>
              <p>Recarga de cartões de integração.</p>
            </article>

          </div>


          <div class="fare-note">

            Segundo o Metrô BH,
            esse atendimento ocorre
            de segunda a sexta-feira,
            exceto feriados,
            das 5h15 às 23h.

          </div>

        </section>


        <!-- ==================================================
             SUPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Sistema Suplementar
          </h4>

          <div class="answer-block">

            <strong>
              O BHBUS pode ser utilizado.
            </strong>

            <p>
              O Sistema Suplementar
              também utiliza
              a bilhetagem BHBUS.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Mas não há integração tarifária.
            </strong>

            O Sistema Suplementar
            não integra tarifariamente
            com o Sistema Convencional
            ou MOVE.

          </div>

        </section>


        <!-- ==================================================
             CATRACA LIVRE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BHBUS no Catraca Livre
          </h4>

          <div class="answer-block">

            <strong>
              Se você possui BHBUS,
              pode encostá-lo normalmente.
            </strong>

            <p>
              Aos domingos e feriados,
              o cartão apenas registra
              o embarque.
              Nenhum crédito é descontado.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Se você não possui BHBUS,
              também pode embarcar.
            </strong>

            <p>
              A catraca é liberada
              manualmente pelo motorista
              ou pela equipe da estação.
            </p>

          </div>


          <div class="fare-note">

            O Catraca Livre
            vale para ônibus municipais
            convencionais e suplementares.
            O metrô não participa
            dessa gratuidade.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte metropolitano
          </h4>

          <p class="panel-intro">
            Os ônibus metropolitanos
            da Região Metropolitana
            de Belo Horizonte utilizam
            o sistema de bilhetagem ÓTIMO.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão ÓTIMO
              </strong>

              <span class="payment-status available">
                Rede metropolitana
              </span>

              <small>
                Armazena créditos eletrônicos
                para pagamento das viagens
                no transporte coletivo
                metropolitano.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚍
              </span>

              <strong>
                MOVE Metropolitano
              </strong>

              <span class="payment-status available">
                ÓTIMO
              </span>

              <small>
                O cartão também é utilizado
                no MOVE Metropolitano.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚇
              </span>

              <strong>
                Metrô
              </strong>

              <span class="payment-status available">
                Integração
              </span>

              <small>
                O Cartão ÓTIMO
                também é aceito no metrô
                nas integrações metropolitanas
                previstas.
              </small>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              BHBUS e ÓTIMO
              não são o mesmo sistema.
            </strong>

            O BHBUS pertence
            à bilhetagem municipal de BH.
            O ÓTIMO pertence
            à bilhetagem metropolitana.

          </div>

        </section>


        <!-- ==================================================
             PARA QUEM ESTÁ VISITANDO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para quem está visitando BH
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Só vai usar metrô
              </strong>

              <p>
                Não é necessário
                adquirir BHBUS.
                Você pode pagar por aproximação,
                autoatendimento
                ou Bipay.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus municipal
                sem integração
              </strong>

              <p>
                BHBUS,
                QR Code do BHBUS+
                ou dinheiro
                podem atender a viagem.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vai integrar ônibus
                e metrô
              </strong>

              <p>
                Use o BHBUS
                para ter acesso
                à integração tarifária
                municipal.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vai usar ônibus
                metropolitano
              </strong>

              <p>
                O sistema correspondente
                é o Cartão ÓTIMO,
                não o BHBUS.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Domingo ou feriado
              </strong>

              <p>
                Ônibus municipais
                convencionais e suplementares
                são gratuitos
                pelo Catraca Livre.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RESUMO FINAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Em resumo
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Municipal
              </strong>

              <p>
                BHBUS,
                BHBUS+ por QR Code
                ou dinheiro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metrô avulso
              </strong>

              <p>
                Aproximação,
                autoatendimento
                ou Bipay.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Municipal + metrô
              </strong>

              <p>
                Use BHBUS
                para integração tarifária.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                O sistema de bilhetagem
                é o Cartão ÓTIMO.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/cartao-bhbus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cartão BHBUS · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/tipos-de-linha-e-servicos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhetagem municipal · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/catraca-livre"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catraca Livre · PBH
          </a>


          <a
            class="official-link"
            href="https://www.metrobh.com.br/va-de-metro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagamento no metrô · Metrô BH
          </a>


          <a
            class="official-link"
            href="https://www.otimoonline.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cartão ÓTIMO
          </a>


          <a
            class="official-link"
            href="https://www.der.mg.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · DER-MG
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
