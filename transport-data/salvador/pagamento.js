// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: COMO PAGAR
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["card"] = {

  kicker: "Salvador · bilhetagem",

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
              Primeiro identifique o trajeto
            </span>

            <h4>
              Metrô, ônibus municipal
              e transporte metropolitano
              não dependem necessariamente
              do mesmo meio de pagamento.
            </h4>

            <p>
              Para uma viagem exclusiva de metrô,
              existem opções avulsas.
              Quando o percurso envolve integração,
              é importante utilizar
              um cartão compatível
              com os sistemas envolvidos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FORMAS CONFIRMADAS NO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Formas confirmadas no metrô
          </h4>

          <p class="panel-intro">
            O Governo da Bahia publica
            diferentes formas de acesso
            ao Sistema Metroviário
            de Salvador e Lauro de Freitas.
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
                Metrô
              </span>

              <small>
                Cartão de crédito ou débito
                compatível com pagamento
                por aproximação.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Dispositivo NFC
              </strong>

              <span class="payment-status available">
                Metrô
              </span>

              <small>
                Celular, smartwatch
                ou pulseira compatível.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ▣
              </span>

              <strong>
                QR Code
              </strong>

              <span class="payment-status available">
                Metrô
              </span>

              <small>
                Bilhete unitário
                validado diretamente
                no bloqueio.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚇
              </span>

              <strong>
                Cartão Integração
              </strong>

              <span class="payment-status available">
                Integração
              </span>

              <small>
                Cartão recarregável
                utilizado no metrô
                e em integrações compatíveis.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚌
              </span>

              <strong>
                SalvadorCARD / Metropasse
              </strong>

              <span class="payment-status available">
                Conforme o trajeto
              </span>

              <small>
                Os dois aparecem
                entre os cartões aceitos
                nas integrações publicadas.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             APROXIMAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento por aproximação
          </h4>

          <div class="answer-block">

            <strong>
              Tarifa avulsa do metrô
            </strong>

            <p>
              O acesso pode ser pago
              diretamente na catraca
              com cartão de crédito,
              débito ou dispositivo
              com tecnologia NFC compatível.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Aguarde a validação
            </strong>

            <p>
              A liberação acontece
              após o sistema reconhecer
              o pagamento no bloqueio.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Atenção:
            </strong>

            pagamento avulso por aproximação
            não deve ser confundido
            com um cartão utilizado
            para integração tarifária.

          </div>

        </section>


        <!-- ==================================================
             QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            QR Code
          </h4>

          <div class="answer-block">

            <strong>
              Bilhete unitário
            </strong>

            <p>
              A CTB informa
              que o QR Code
              pode ser utilizado
              para acesso avulso ao metrô.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Máquinas de autoatendimento
            </strong>

            <p>
              O Governo da Bahia
              já publicou a emissão
              de QR Code unitário
              nas máquinas das estações.
            </p>

          </div>


          <div class="fare-note">

            Uma viagem unitária
            não deve ser presumida
            como equivalente
            a uma integração tarifária.

          </div>

        </section>


        <!-- ==================================================
             CARTÃO INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Integração
          </h4>

          <p class="panel-intro">
            É o cartão recarregável
            apresentado pela SEDUR
            para viagens exclusivas
            e integradas.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde adquirir
              </strong>

              <p>
                Em bilheterias
                e máquinas de autoatendimento
                das estações do metrô.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Taxa do cartão
              </strong>

              <p>
                A SEDUR publica
                taxa de emissão
                de R$ 7,00,
                separada do valor da recarga.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Onde utilizar
              </strong>

              <p>
                Pode ser usado
                no metrô e nas integrações
                compatíveis com ônibus,
                BRT e STEC.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Uso durante a integração
              </strong>

              <p>
                Utilize o mesmo cartão
                ao longo das etapas
                da viagem integrada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RECARGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Recarga do Cartão Integração
          </h4>

          <p class="panel-intro">
            Os canais abaixo aparecem
            em páginas públicas
            do Governo da Bahia.
          </p>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>🏧</span>

              <strong>
                Máquinas de autoatendimento
              </strong>

              <p>
                Estão disponíveis
                nas estações do sistema.
              </p>

            </article>


            <article class="purchase-card">

              <span>🏪</span>

              <strong>
                Rede credenciada
              </strong>

              <p>
                A SEDUR informa
                uma ampla rede
                de pontos de recarga.
              </p>

            </article>


            <article class="purchase-card">

              <span>📱</span>

              <strong>
                Canais digitais
              </strong>

              <p>
                A página pública da SEDUR
                lista aplicativos
                e carteiras digitais
                habilitados para recarga.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Como os parceiros digitais
            podem mudar,
            consulte a página pública
            da SEDUR para verificar
            a lista vigente.

          </div>

        </section>


        <!-- ==================================================
             SALVADORCARD E METROPASSE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SalvadorCARD e Metropasse
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                SalvadorCARD
              </strong>

              <p>
                A SEDUR lista cartões
                SalvadorCARD entre
                os meios aceitos
                em viagens e integrações
                compatíveis com o metrô.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropasse
              </strong>

              <p>
                Também aparece
                entre os cartões
                aceitos para determinados
                deslocamentos metropolitanos
                e integrações.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Não compre um cartão
              antes de entender o trajeto.
            </strong>

            Primeiro descubra
            se a viagem será apenas municipal,
            metroviária ou metropolitana.

          </div>

        </section>


        <!-- ==================================================
             BILHETE AVULSO MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Avulso municipal
          </h4>

          <div class="answer-block">

            <strong>
              Existe no sistema SalvadorCARD.
            </strong>

            <p>
              A Prefeitura de Salvador
              já publicou o Bilhete Avulso
              como modalidade destinada
              ao usuário do transporte coletivo.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Mas não vamos reproduzir
              regras comerciais antigas.
            </strong>

            As páginas públicas encontradas
            sobre distribuição, valores pré-carregados
            e pontos específicos são antigas.
            Consulte a Semob para confirmar
            as condições atuais antes da compra.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte metropolitano
          </h4>

          <div class="answer-block">

            <strong>
              Possui regras próprias
              de bilhetagem.
            </strong>

            <p>
              As linhas metropolitanas
              fazem parte do sistema
              regulado pela AGERBA
              e podem participar
              da integração com o metrô.
            </p>

          </div>


          <div class="fare-note">

            Antes de adquirir
            um cartão para uso metropolitano,
            confirme a linha necessária
            e a regra atual
            de integração.

          </div>

        </section>


        <!-- ==================================================
             FERRY-BOAT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>

          <div class="answer-block">

            <strong>
              Possui cobrança própria.
            </strong>

            <p>
              O sistema hidroviário
              segue tabela tarifária
              e categorias específicas
              reguladas pela AGERBA.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não apresentamos
              canais comerciais de venda aqui.
            </strong>

            Para valores,
            categorias e informações públicas
            sobre a travessia,
            consulte a AGERBA.

          </div>

        </section>


        <!-- ==================================================
             QUAL ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual opção procurar?
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Vou usar apenas metrô
              </strong>

              <p>
                Uma forma avulsa,
                como aproximação
                ou QR Code,
                pode ser suficiente.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou integrar metrô e ônibus/BRT
              </strong>

              <p>
                Utilize um cartão
                reconhecido pela integração
                vigente.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar ônibus municipal
              </strong>

              <p>
                Consulte a Semob
                para verificar os meios
                atualmente disponíveis.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou para outra cidade da RMS
              </strong>

              <p>
                Confirme as regras
                da linha metropolitana
                e da integração
                junto à AGERBA.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ALERTAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de colocar crédito
          </h4>

          <div class="answer-block">

            <strong>
              Descubra primeiro o trajeto.
            </strong>

            <p>
              Sistemas diferentes
              podem exigir meios
              de pagamento diferentes.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Integração depende
              de meio compatível.
            </strong>

            <p>
              Não presuma
              que qualquer pagamento avulso
              gere automaticamente
              o benefício tarifário.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Consulte fonte pública atual.
            </strong>

            <p>
              Aplicativos, parceiros
              e canais de recarga
              podem mudar com o tempo.
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
            Bilhetes e cartões · SEDUR
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTB · Governo da Bahia
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
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERBA
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
