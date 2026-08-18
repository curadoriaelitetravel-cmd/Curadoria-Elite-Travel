// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: COMO PAGAR
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


window.RIO_TRANSPORT_MODULES["card"] = {

  kicker: "Rio de Janeiro · bilhetagem",

  title: "Como pagar o transporte",

  body() {

    return `

      <div class="network-layout">

        <!-- ==================================================
             RESUMO PARA QUEM ESTÁ VISITANDO
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Antes de escolher um cartão
            </span>

            <h4>
              No Rio, o meio de pagamento depende
              do transporte que você vai usar.
            </h4>

            <p>
              Ônibus municipais, BRT e VLT usam o sistema Jaé.
              Metrô, trem, barcas e ônibus intermunicipais
              possuem outras formas de pagamento.
            </p>

          </div>

        </section>


        <!-- ==================================================
             QUAL USAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual opção devo procurar?
          </h4>

          <p class="panel-intro">
            Esta é a diferença mais importante
            para não chegar ao embarque com o cartão errado.
          </p>

          <div class="payment-method-grid">


            <article class="payment-method">

              <span class="payment-method-icon">
                🟨
              </span>

              <strong>
                Jaé
              </strong>

              <span class="payment-status available">
                Rede municipal
              </span>

              <small>
                Ônibus municipais, BRT, VLT,
                vans municipais e cabritinhos.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🟦
              </span>

              <strong>
                Riocard Mais
              </strong>

              <span class="payment-status available">
                Rede estadual
              </span>

              <small>
                Metrô, trem, barcas,
                ônibus e vans intermunicipais.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚇
              </span>

              <strong>
                Giro
              </strong>

              <span class="payment-status available">
                MetrôRio
              </span>

              <small>
                Cartão pré-pago próprio
                para uso no sistema MetrôRio.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Aproximação
              </strong>

              <span class="payment-status available">
                MetrôRio
              </span>

              <small>
                Cartão ou dispositivo NFC
                compatível com Visa, Mastercard ou Elo.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ▣
              </span>

              <strong>
                QR Code
              </strong>

              <span class="payment-status partial">
                Conforme o sistema
              </span>

              <small>
                Há opções digitais para MetrôRio
                e para alguns modos que usam Riocard.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💵
              </span>

              <strong>
                Dinheiro
              </strong>

              <span class="payment-status partial">
                Não conte como padrão
              </span>

              <small>
                A bilhetagem eletrônica é a referência.
                Confirme antes de depender de espécie.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             JAE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Jaé
          </h4>

          <p class="panel-intro">
            É o sistema de bilhetagem da Prefeitura
            para os transportes municipais da cidade do Rio.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde usar
              </strong>

              <p>
                Ônibus municipais, BRT,
                VLT, vans municipais
                e serviços municipais participantes.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cartão físico
              </strong>

              <p>
                Pode ser utilizado normalmente
                nos validadores identificados
                com a marca Jaé.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Aplicativo
              </strong>

              <p>
                O sistema também possui
                solução digital para pagamento
                e gerenciamento do usuário.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Integrações municipais
              </strong>

              <p>
                Para aproveitar os benefícios
                do Bilhete Único Carioca,
                utilize o mesmo Jaé
                durante o percurso.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              O Jaé também pode ser utilizado
              em integrações específicas com o MetrôRio.
            </strong>

            Isso não significa que ele substitua
            o Riocard em trem, barcas
            ou ônibus intermunicipais.

          </div>

        </section>


        <!-- ==================================================
             RIOCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Riocard Mais
          </h4>

          <p class="panel-intro">
            Continua sendo a principal referência
            para os transportes estaduais
            e metropolitanos.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Metrô
              </strong>

              <p>
                O Riocard Mais continua aceito
                nas estações do MetrôRio.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Trens metropolitanos
              </strong>

              <p>
                Pode ser utilizado
                no sistema ferroviário metropolitano.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Barcas
              </strong>

              <p>
                É um dos meios de pagamento
                utilizados nas linhas hidroviárias.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus intermunicipais
              </strong>

              <p>
                É a referência para linhas
                que atravessam municípios
                da Região Metropolitana.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Atenção:
            </strong>

            um Riocard comum não deve ser confundido
            com o benefício do Bilhete Único Intermunicipal.

            O BUI depende de cadastro,
            CPF, elegibilidade e habilitação
            específica no cartão.

          </div>

        </section>


        <!-- ==================================================
             JAE X RIOCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Jaé ou Riocard?
          </h4>

          <p class="panel-intro">
            Pense primeiro no tipo de transporte.
          </p>

          <div class="table-scroll">

            <table class="info-table">

              <thead>

                <tr>
                  <th>Transporte</th>
                  <th>Opção principal</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>
                    <strong>
                      Ônibus municipal
                    </strong>
                  </td>

                  <td>
                    Jaé
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      BRT
                    </strong>
                  </td>

                  <td>
                    Jaé
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      VLT
                    </strong>
                  </td>

                  <td>
                    Jaé
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      MetrôRio
                    </strong>
                  </td>

                  <td>
                    Aproximação, Giro,
                    Riocard, Jaé em situações compatíveis
                    ou bilhete unitário
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Trem metropolitano
                    </strong>
                  </td>

                  <td>
                    Riocard Mais
                    ou meios aceitos pelo operador
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Barcas
                    </strong>
                  </td>

                  <td>
                    Riocard Mais
                    ou meios aceitos pelo operador
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Ônibus intermunicipal
                    </strong>
                  </td>

                  <td>
                    Riocard Mais
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>


        <!-- ==================================================
             GIRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Giro · MetrôRio
          </h4>

          <p class="panel-intro">
            É um cartão pré-pago próprio
            do MetrôRio.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde comprar
              </strong>

              <p>
                Bilheterias e máquinas de cartões
                das estações MetrôRio.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Valor inicial
              </strong>

              <p>
                R$ 11,90:
                R$ 4,00 de caução reembolsável
                mais R$ 7,90 de carga inicial.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Onde utilizar
              </strong>

              <p>
                Em todas as estações
                do sistema MetrôRio.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Recarga
              </strong>

              <p>
                Pode ser realizada nas estações
                e pelos canais digitais
                disponibilizados para o Giro.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              Para uma visita curta:
            </strong>

            se você pretende usar apenas o metrô
            poucas vezes, pagamento por aproximação
            pode ser mais simples do que adquirir
            outro cartão físico.

          </div>

        </section>


        <!-- ==================================================
             APROXIMAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento por aproximação no MetrôRio
          </h4>

          <p class="panel-intro">
            Uma das opções mais simples
            para quem está visitando a cidade
            e pretende utilizar principalmente o metrô.
          </p>


          <div class="answer-block">

            <strong>
              Cartões aceitos
            </strong>

            <p>
              Cartões de crédito ou débito
              Visa, Mastercard e Elo
              com tecnologia de aproximação.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Celular, relógio ou outro dispositivo
            </strong>

            <p>
              Dispositivos móveis com NFC
              e carteira compatível também podem
              ser aproximados diretamente
              no validador.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Um meio por passageiro
            </strong>

            <p>
              Para evitar problemas no reconhecimento
              da viagem, use sempre o mesmo cartão
              ou dispositivo durante aquele percurso.
            </p>

          </div>

        </section>


        <!-- ==================================================
             QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhetes por QR Code
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                MetrôRio
              </strong>

              <p>
                O bilhete unitário por QR Code
                pode ser adquirido pelos canais
                digitais indicados pelo MetrôRio.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Riocard digital
              </strong>

              <p>
                O QR Code do sistema Riocard
                não está disponível em todos
                os meios de transporte.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Atualmente, o Riocard informa
            disponibilidade do QR Code
            no MetrôRio, nas barcas
            e em algumas estações
            do sistema ferroviário.

          </div>

        </section>


        <!-- ==================================================
             BUI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Único Intermunicipal
          </h4>

          <p class="panel-intro">
            O BUI é um benefício tarifário estadual,
            não um cartão destinado especificamente
            a turistas.
          </p>


          <div class="answer-block">

            <strong>
              O benefício fica no Riocard.
            </strong>

            <p>
              É necessário possuir um Riocard Mais
              elegível e estar habilitado
              no programa.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O Jaé não substitui o BUI.
            </strong>

            <p>
              Para integrações estaduais
              que utilizam o benefício,
              o Riocard continua sendo necessário.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Visitantes ocasionais
            </strong>

            <p>
              Para uma estadia curta,
              normalmente é mais simples
              utilizar os meios de pagamento
              comuns de cada sistema
              do que tentar aderir
              a um benefício tarifário
              que exige cadastro.
            </p>

          </div>

        </section>


        <!-- ==================================================
             CENÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual eu escolheria em cada situação?
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Vou usar basicamente metrô
              </strong>

              <p>
                Comece pelo pagamento
                por aproximação.
                É a alternativa mais direta
                para viagens ocasionais.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar muito ônibus, BRT e VLT
              </strong>

              <p>
                Use Jaé.
                Ele é a referência
                para a rede municipal.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou pegar trem ou barca
              </strong>

              <p>
                Confira os meios aceitos
                pelo operador.
                O Riocard Mais continua
                sendo uma referência importante.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou para outro município
              </strong>

              <p>
                Para ônibus intermunicipais,
                o Riocard é a referência.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou combinar metrô e BRT
              </strong>

              <p>
                Use Jaé se quiser acessar
                a integração tarifária prevista
                entre esses sistemas.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou combinar metrô e trem
              </strong>

              <p>
                A integração tarifária estadual
                depende de Riocard
                habilitado no BUI.
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
              Primeiro descubra os transportes
              que você realmente vai utilizar.
            </strong>

            <p>
              Comprar ou carregar vários cartões
              sem necessidade pode deixar saldo parado.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não presuma que um cartão
              funciona em toda a rede.
            </strong>

            <p>
              O Rio possui sistemas municipal
              e estadual com regras diferentes
              de bilhetagem.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Integração exige o meio correto.
            </strong>

            <p>
              Pagar duas viagens separadamente
              com meios diferentes pode impedir
              o reconhecimento do benefício tarifário.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/integracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jaé e integrações municipais
          </a>


          <a
            class="official-link"
            href="https://www.metrorio.com.br/como-pagar/meios-e-tarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meios de pagamento MetrôRio
          </a>


          <a
            class="official-link"
            href="https://www.metrorio.com.br/como-pagar/pagamento-por-aproximacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aproximação no Metrô
          </a>


          <a
            class="official-link"
            href="https://www.riocardmais.com.br/modaisetarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riocard Mais
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
