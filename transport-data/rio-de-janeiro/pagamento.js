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
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Primeiro identifique o transporte
            </span>

            <h4>
              O Rio utiliza dois grandes
              sistemas de bilhetagem.
            </h4>

            <p>
              Jaé é a referência
              para os transportes municipais.

              Riocard Mais continua importante
              para metrô,
              trem,
              barcas
              e transportes intermunicipais.
            </p>

          </div>

        </section>


        <!-- ==================================================
             RESUMO DOS MODAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual meio pertence a cada transporte?
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
                Jaé
              </span>

              <small>
                Cartão,
                aplicativo
                e pagamentos avulsos
                diretamente no validador.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚍
              </span>

              <strong>
                BRT
              </strong>

              <span class="payment-status available">
                Jaé
              </span>

              <small>
                Faz parte
                da bilhetagem municipal.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚋
              </span>

              <strong>
                VLT
              </strong>

              <span class="payment-status available">
                Jaé
              </span>

              <small>
                Também integra
                o sistema municipal
                de bilhetagem.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚇
              </span>

              <strong>
                MetrôRio
              </strong>

              <span class="payment-status available">
                Várias opções
              </span>

              <small>
                Aproximação,
                Giro,
                cartão unitário,
                QR Code,
                Jaé
                ou Riocard.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🚆
              </span>

              <strong>
                Trem
              </strong>

              <span class="payment-status available">
                Riocard + avulsos
              </span>

              <small>
                Riocard,
                Pix,
                aproximação
                em estações específicas
                e dinheiro em bilheterias.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ⛴️
              </span>

              <strong>
                Barcas
              </strong>

              <span class="payment-status available">
                Riocard
              </span>

              <small>
                Inclui pagamento
                com QR Code
                pelo aplicativo Riocard Mais.
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
            É o sistema de bilhetagem
            dos transportes municipais
            da cidade do Rio de Janeiro.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde usar
              </strong>

              <p>
                Ônibus municipais,
                BRT,
                VLT,
                vans municipais
                e serviços municipais
                participantes.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cartão físico
              </strong>

              <p>
                Pode ser utilizado
                nos validadores Jaé
                da rede municipal.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Aplicativo
              </strong>

              <p>
                Também permite
                pagamento
                e gerenciamento
                da conta Jaé.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Integração
              </strong>

              <p>
                O benefício tarifário
                depende do tipo
                de Jaé utilizado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             JAE PRETO X VERDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão preto ou cartão verde?
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Jaé preto
              </span>

              <strong>
                Vinculado ao CPF
              </strong>

              <p>
                Permite utilizar
                as integrações tarifárias
                do Bilhete Único Carioca,
                conforme as regras vigentes.
              </p>

              <span class="route-compare-result">
                Com integração
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Aplicativo Jaé
              </span>

              <strong>
                Conta vinculada
              </strong>

              <p>
                Também permite
                utilizar
                os benefícios tarifários
                municipais elegíveis.
              </p>

              <span class="route-compare-result">
                Com integração
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Jaé verde
              </span>

              <strong>
                Cartão unitário
              </strong>

              <p>
                Pode ser recarregado
                e reutilizado,
                mas não oferece
                integração tarifária
                do BUC.
              </p>

              <span class="route-compare-result">
                Sem integração
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             JAE VERDE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão verde Jaé
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Valor inicial
              </span>

              <strong>
                R$ 10,00
              </strong>

              <p>
                R$ 5,00
                pelo cartão
                + R$ 5,00
                de tarifa.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Pode ser recarregado.
            </strong>

            <p>
              Apesar de ser vendido
              inicialmente para uma viagem,
              o cartão pode receber
              novas recargas.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O valor do casco
              pode ser devolvido.
            </strong>

            <p>
              O passageiro pode solicitar
              a devolução
              dos R$ 5,00
              referentes ao cartão,
              conforme as regras do sistema.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não use o cartão verde
              esperando integração tarifária.
            </strong>

            Desde 30 de maio de 2026,
            o BUC é reconhecido
            apenas no cartão preto
            vinculado ao CPF
            ou no aplicativo Jaé.

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO DIRETO NO ÔNIBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento direto no ônibus municipal
          </h4>

          <p class="panel-intro">
            A Prefeitura modernizou
            os validadores do Jaé
            em 2026.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                📲
              </span>

              <strong>
                Pix
              </strong>

              <span class="payment-status available">
                No validador
              </span>

              <small>
                Implantado
                diretamente
                nos ônibus municipais.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Débito
              </strong>

              <span class="payment-status available">
                No validador
              </span>

              <small>
                Pagamento eletrônico
                diretamente
                no ônibus.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Crédito
              </strong>

              <span class="payment-status available">
                No validador
              </span>

              <small>
                Também integrado
                aos validadores
                da rede municipal.
              </small>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Dinheiro não é mais aceito
              dentro dos ônibus municipais.
            </strong>

            A mudança entrou em vigor
            em 30 de maio de 2026.

          </div>

        </section>


        <!-- ==================================================
             DINHEIRO NO JAE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ainda posso usar dinheiro?
          </h4>

          <div class="answer-block">

            <strong>
              Sim, para comprar
              ou recarregar Jaé.
            </strong>

            <p>
              Dinheiro continua aceito
              em pontos físicos
              de venda e recarga,
              mesmo não sendo mais
              recebido dentro
              dos ônibus municipais.
            </p>

          </div>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Bilheterias BRT
              </strong>

              <p>
                Continuam entre
                os canais físicos
                de atendimento.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Máquinas de autoatendimento
              </strong>

              <p>
                Estão instaladas
                em diferentes pontos
                da rede.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pontos credenciados
              </strong>

              <p>
                Estabelecimentos comerciais
                também realizam
                venda ou recarga.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Bancas de jornal
              </strong>

              <p>
                O cartão verde
                passou a ser vendido
                gradualmente
                em centenas de bancas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BILHETE ÚNICO CARIOCA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para aproveitar o Bilhete Único Carioca
          </h4>

          <div class="answer-block">

            <strong>
              Use cartão preto
              ou aplicativo Jaé.
            </strong>

            <p>
              Esses são os meios
              que permitem
              ao sistema reconhecer
              as integrações tarifárias
              municipais.
            </p>

          </div>


          <div class="fare-note">

            O cartão verde
            e pagamentos avulsos
            não devem ser utilizados
            esperando o benefício
            do BUC.

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar o MetrôRio
          </h4>

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
                Crédito,
                débito
                ou dispositivo NFC
                compatível.
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
                Cartão MetrôRio
              </span>

              <small>
                Pré-pago próprio
                do sistema.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🎫
              </span>

              <strong>
                Cartão Unitário
              </strong>

              <span class="payment-status available">
                Uma viagem
              </span>

              <small>
                Cartão próprio
                para embarque unitário.
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
                Bilhete unitário
              </span>

              <small>
                Disponível
                pelos canais digitais
                indicados pelo MetrôRio.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🟨
              </span>

              <strong>
                Jaé
              </strong>

              <span class="payment-status available">
                Aceito no metrô
              </span>

              <small>
                Todos os cartões Jaé
                são aceitos
                nas estações MetrôRio.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🟦
              </span>

              <strong>
                Riocard
              </strong>

              <span class="payment-status available">
                Aceito no metrô
              </span>

              <small>
                Todos os cartões Riocard
                são aceitos
                nas estações.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             GIRO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Giro
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Valor inicial
              </strong>

              <p>
                R$ 11,90:
                R$ 4,00
                de caução reembolsável
                + R$ 7,90
                de crédito inicial.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Onde comprar
              </strong>

              <p>
                Bilheterias
                e máquinas de cartões
                das estações MetrôRio.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Recarga presencial
              </strong>

              <p>
                Mínimo de R$ 5,00
                em bilheterias
                ou máquinas.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Recarga digital
              </strong>

              <p>
                Pelo app MetrôRio
                ou site Giro,
                sem valor mínimo.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A recarga digital
            é validada
            quando o Giro
            é aproximado da catraca
            no embarque.

          </div>

        </section>


        <!-- ==================================================
             APROXIMAÇÃO METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aproximação no metrô
          </h4>

          <div class="answer-block">

            <strong>
              Visa,
              Mastercard
              e Elo
            </strong>

            <p>
              Cartões compatíveis
              podem ser aproximados
              diretamente
              na catraca.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Celular ou relógio
            </strong>

            <p>
              Dispositivos móveis
              com NFC
              e carteira compatível
              também podem ser usados.
            </p>

          </div>


          <div class="fare-note">

            Para uma viagem
            que depende de integração tarifária,
            utilize o cartão exigido
            pela integração correspondente.

          </div>

        </section>


        <!-- ==================================================
             QR CODE METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            QR Code do MetrôRio
          </h4>

          <div class="answer-block">

            <strong>
              Bilhete unitário digital
            </strong>

            <p>
              Pode ser comprado
              no aplicativo RecargaPay
              e em pontos
              de venda credenciados.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TREM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar os trens da TrensRJ
          </h4>

          <p class="panel-intro">
            A rede ferroviária
            oferece mais de uma forma
            de pagamento,
            mas nem todas estão disponíveis
            em todas as estações.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                🟦
              </span>

              <strong>
                Riocard
              </strong>

              <span class="payment-status available">
                Rede ferroviária
              </span>

              <small>
                Aceito nos validadores
                e bilheterias.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📲
              </span>

              <strong>
                Pix
              </strong>

              <span class="payment-status partial">
                Estações selecionadas
              </span>

              <small>
                Disponível
                em diversas estações
                dos cinco ramais.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Aproximação
              </strong>

              <span class="payment-status partial">
                Estações selecionadas
              </span>

              <small>
                NFC disponível
                em Central,
                Maracanã,
                Engenho de Dentro,
                Madureira,
                Deodoro
                e Nova Iguaçu.
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
                Bilheterias
              </span>

              <small>
                Continua aceito
                para compra
                da passagem ferroviária.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PIX NO TREM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pix nos trens
          </h4>

          <div class="answer-block">

            <strong>
              Está disponível
              em diversas estações.
            </strong>

            <p>
              A TrensRJ publica
              pontos com pagamento Pix
              nos ramais Deodoro,
              Santa Cruz,
              Japeri,
              Saracuruna
              e Belford Roxo.
            </p>

          </div>


          <div class="fare-note">

            Na Central do Brasil,
            o pagamento por Pix
            gera um QR Code
            para liberação da catraca.

            Esse QR Code
            não pode ser utilizado
            para embarcar
            em outra estação.

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pagar as Barcas
          </h4>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                🟦
              </span>

              <strong>
                Riocard Mais
              </strong>

              <span class="payment-status available">
                Barcas
              </span>

              <small>
                Meio eletrônico
                utilizado
                no sistema hidroviário.
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
                App Riocard Mais
              </span>

              <small>
                Abra o Cartão Digital
                e escolha
                “Pagar com QR Code”.
              </small>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              O QR Code já é uma opção oficial
              para as Barcas.
            </strong>

            <p>
              O próprio sistema Barcas Rio
              orienta o passageiro
              a utilizar
              o aplicativo Riocard Mais.
            </p>

          </div>

        </section>


        <!-- ==================================================
             QR CODE RIOCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde o QR Code do Riocard funciona?
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                MetrôRio
              </strong>

              <p>
                Disponível.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Barcas
              </strong>

              <p>
                Disponível.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                TrensRJ
              </strong>

              <p>
                Disponível
                apenas em algumas estações.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Transportes municipais
              </strong>

              <p>
                Não utilizam
                o Cartão Digital Riocard
                desde agosto de 2025.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BUI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Único Intermunicipal
          </h4>

          <div class="answer-block">

            <strong>
              O benefício fica
              em um Riocard elegível.
            </strong>

            <p>
              Cadastro,
              CPF,
              critérios de renda
              e habilitação
              são necessários
              para acessar o BUI.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Jaé não substitui o BUI.
            </strong>

            <p>
              Para integrações estaduais
              com trem,
              barcas,
              metrô
              e ônibus intermunicipais,
              utilize Riocard
              habilitado no benefício.
            </p>

          </div>


          <div class="fare-note">

            Para uma visita curta,
            normalmente é mais simples
            pagar as tarifas comuns
            de cada sistema
            do que aderir
            ao benefício estadual.

          </div>

        </section>


        <!-- ==================================================
             PARA O VISITANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para quem está visitando o Rio
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Só vou usar metrô
              </strong>

              <p>
                Pagamento por aproximação
                é uma das opções
                mais simples.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar ônibus poucas vezes
              </strong>

              <p>
                Pagamento direto
                por Pix,
                débito
                ou crédito
                pode evitar
                a compra de um cartão,
                quando disponível no veículo.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar bastante
                ônibus, BRT e VLT
              </strong>

              <p>
                O Jaé
                tende a ser
                a referência mais prática.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Quero integração municipal
              </strong>

              <p>
                Use cartão preto Jaé
                vinculado ao CPF
                ou o aplicativo Jaé.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar trem ou barca
              </strong>

              <p>
                Riocard Mais
                continua sendo
                uma opção importante,
                embora existam
                meios avulsos adicionais.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou integrar sistemas estaduais
              </strong>

              <p>
                O benefício tarifário
                depende de Riocard
                habilitado no BUI.
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
                Ônibus municipal
              </strong>

              <p>
                Jaé,
                Pix,
                débito
                ou crédito.
                Sem dinheiro a bordo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integração municipal
              </strong>

              <p>
                Cartão preto Jaé
                ou aplicativo Jaé.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metrô
              </strong>

              <p>
                Aproximação,
                Giro,
                unitário,
                QR Code,
                Jaé
                ou Riocard.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚆</span>

              <strong>
                Trem
              </strong>

              <p>
                Riocard,
                dinheiro
                e meios digitais
                conforme a estação.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Barcas
              </strong>

              <p>
                Riocard
                ou QR Code
                pelo aplicativo.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                BUI
              </strong>

              <p>
                Riocard elegível
                e benefício habilitado.
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
            href="https://transportes.prefeitura.rio/noticias/prefeitura-detalha-funcionamento-do-pagamento-por-pix-e-cartoes-no-sistema-municipal-de-onibus-do-rio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagamentos nos ônibus · Prefeitura do Rio
          </a>


          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/integracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jaé e integrações · Prefeitura do Rio
          </a>


          <a
            class="official-link"
            href="https://www.metrorio.com.br/como-pagar/meios-e-tarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meios de pagamento · MetrôRio
          </a>


          <a
            class="official-link"
            href="https://trensrj.com.br/pt/tarifas-e-formas-de-pagamento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagamento nos trens · TrensRJ
          </a>


          <a
            class="official-link"
            href="https://www.riocardmais.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riocard Mais
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagamento nas Barcas
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
