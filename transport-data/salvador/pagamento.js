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
             RESUMO PARA VISITANTES
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Melhor opção depende do trajeto
            </span>

            <h4>
              Só metrô? Aproximação pode ser suficiente.
              Vai integrar com ônibus ou BRT? Use um cartão compatível.
            </h4>

            <p>
              O Metrô Bahia aceita pagamento direto na catraca
              por aproximação e QR Code. Já para aproveitar
              integrações tarifárias com ônibus urbanos,
              metropolitanos ou BRT, utilize cartões recarregáveis
              aceitos pelo sistema.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FORMAS DE PAGAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais formas de pagamento
          </h4>

          <p class="panel-intro">
            Nem todas as opções servem para os mesmos modais
            ou garantem integração tarifária.
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
                Cartões de crédito e débito,
                celulares NFC, smartwatches
                e pulseiras de pagamento.
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
                Pode ser adquirido
                pelo aplicativo RecargaPay
                e validado na catraca.
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
                do Metrô Bahia,
                válido também nas integrações previstas.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🟦
              </span>

              <strong>
                SalvadorCARD
              </strong>

              <span class="payment-status available">
                Ônibus + integração
              </span>

              <small>
                Usado na rede municipal
                e nas integrações compatíveis
                com metrô.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                🟩
              </span>

              <strong>
                Metropasse
              </strong>

              <span class="payment-status available">
                Metropolitana
              </span>

              <small>
                Cartão utilizado
                em transportes metropolitanos
                e integrações compatíveis.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO POR APROXIMAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento por aproximação no metrô
          </h4>

          <p class="panel-intro">
            É uma das formas mais práticas
            para quem está visitando Salvador
            e pretende usar apenas o metrô
            ou fazer poucas viagens.
          </p>


          <div class="answer-block">

            <strong>
              Cartão de crédito ou débito
            </strong>

            <p>
              Basta aproximar o cartão compatível
              diretamente no leitor da catraca.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Celular e outros dispositivos
            </strong>

            <p>
              Também são aceitos celulares com NFC,
              smartwatches e pulseiras
              de pagamento compatíveis.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Aguarde a luz verde
            </strong>

            <p>
              O acesso é liberado
              após a validação do pagamento
              no bloqueio.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Atenção:
            </strong>

            pagar o metrô diretamente
            por aproximação não significa
            que a integração tarifária
            com ônibus será reconhecida.

          </div>

        </section>


        <!-- ==================================================
             CARTÃO INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Integração do Metrô
          </h4>

          <p class="panel-intro">
            É o cartão recarregável
            do sistema metroviário
            e pode participar das integrações
            com outros transportes.
          </p>


          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde comprar
              </strong>

              <p>
                Em bilheterias
                e máquinas de autoatendimento
                do sistema metroviário.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Taxa do cartão
              </strong>

              <p>
                A emissão do cartão
                possui taxa própria,
                além do valor que será colocado
                como crédito.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Onde usar
              </strong>

              <p>
                No metrô e nas integrações
                tarifárias compatíveis
                com ônibus urbanos,
                metropolitanos e BRT.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Uso individual
              </strong>

              <p>
                Para a integração funcionar,
                utilize o mesmo cartão
                durante todas as etapas
                daquela viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RECARGA DO CARTÃO INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde recarregar o Cartão Integração
          </h4>

          <div class="purchase-grid">


            <article class="purchase-card">

              <span>
                📱
              </span>

              <strong>
                App da operadora
              </strong>

              <p>
                Recarga digital
                pelo aplicativo
                indicado pelo Metrô Bahia.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🧭
              </span>

              <strong>
                Moovit
              </strong>

              <p>
                Desde 2026,
                também permite comprar
                créditos do Cartão Integração.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                📲
              </span>

              <strong>
                KIM+
              </strong>

              <p>
                Carteira digital utilizada
                para recarga de cartões
                de transporte em Salvador.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                💬
              </span>

              <strong>
                PicPay e RecargaPay
              </strong>

              <p>
                Também aparecem
                entre os canais digitais
                informados para recarga.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🚌
              </span>

              <strong>
                Cittamobi
              </strong>

              <p>
                Canal digital disponível
                para aquisição de créditos.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🏪
              </span>

              <strong>
                Rede credenciada
              </strong>

              <p>
                Há milhares de pontos
                de venda e recarga
                espalhados pela cidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SALVADORCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            SalvadorCARD
          </h4>

          <p class="panel-intro">
            É uma das principais referências
            para o transporte municipal
            e para as integrações
            com o metrô.
          </p>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Bilhete Avulso
              </strong>

              <p>
                Pode ser adquirido
                por qualquer pessoa,
                sem necessidade de cadastro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bilhete Identificado
              </strong>

              <p>
                Exige cadastro,
                mas permite bloqueio
                e recuperação de saldo
                em determinadas situações.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Para turistas, o Bilhete Avulso
              é especialmente interessante.
            </strong>

            Ele não exige cadastro,
            tem uso imediato
            e participa do sistema
            de integração tarifária de Salvador.

          </div>

        </section>


        <!-- ==================================================
             BILHETE AVULSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Avulso SalvadorCARD
          </h4>

          <div class="payment-choice-grid">


            <article class="payment-choice">

              <strong>
                Sem cadastro
              </strong>

              <p>
                Qualquer pessoa
                pode adquirir o cartão
                e utilizá-lo imediatamente.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Integração tarifária
              </strong>

              <p>
                Pode participar
                da integração entre ônibus
                e metrô dentro das regras vigentes.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Créditos sem prazo
              </strong>

              <p>
                Os créditos colocados
                no cartão não possuem
                prazo de validade informado.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cartão ao portador
              </strong>

              <p>
                Em caso de perda,
                não é possível bloquear o cartão
                nem recuperar o saldo.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ONDE COMPRAR SALVADORCARD
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde comprar ou recarregar SalvadorCARD
          </h4>

          <div class="purchase-grid">


            <article class="purchase-card">

              <span>
                🏢
              </span>

              <strong>
                Postos SalvadorCARD
              </strong>

              <p>
                Atendimento em pontos
                como Lapa,
                Shopping da Gente
                e estações de transbordo.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🏪
              </span>

              <strong>
                Rede credenciada
              </strong>

              <p>
                Mais de uma centena
                de pontos de recarga
                estão distribuídos pela cidade.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                🏧
              </span>

              <strong>
                Autoatendimento
              </strong>

              <p>
                Terminais permitem
                inserir créditos
                diretamente no cartão.
              </p>

            </article>


            <article class="purchase-card">

              <span>
                📱
              </span>

              <strong>
                KIM+
              </strong>

              <p>
                Permite recarga online
                do SalvadorCARD.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METROPASSE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Metropasse
          </h4>

          <p class="panel-intro">
            É utilizado na rede metropolitana
            e pode participar das integrações
            entre ônibus metropolitanos
            e metrô.
          </p>


          <div class="answer-block">

            <strong>
              Quando considerar
            </strong>

            <p>
              Se seu deslocamento envolver
              municípios da Região Metropolitana,
              confirme se a linha utilizada
              aceita Metropasse
              e quais regras de integração
              se aplicam ao percurso.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Para uma estadia curta:
            </strong>

            não compre um cartão metropolitano
            sem antes confirmar
            se o seu trajeto realmente
            depende de ônibus intermunicipal.

          </div>

        </section>


        <!-- ==================================================
             QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            QR Code no metrô
          </h4>

          <div class="answer-block">

            <strong>
              Compra digital
            </strong>

            <p>
              O Metrô Bahia informa
              a possibilidade de adquirir
              QR Code pelo aplicativo RecargaPay.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Validação
            </strong>

            <p>
              Apresente o QR Code
              no leitor indicado
              da catraca para liberar
              o acesso.
            </p>

          </div>


          <div class="fare-note">

            O QR Code é útil
            para uma viagem avulsa,
            mas não deve ser presumido
            como equivalente ao cartão
            utilizado em integrações tarifárias.

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat
          </h4>

          <p class="panel-intro">
            A travessia São Joaquim ↔ Bom Despacho
            possui sistema próprio de venda
            e cobrança.
          </p>


          <div class="answer-block">

            <strong>
              Passageiros e veículos
              possuem tarifas diferentes.
            </strong>

            <p>
              Antes da viagem,
              consulte a tabela oficial
              correspondente ao tipo
              de embarque.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Compra antecipada pode existir
              em modalidades específicas.
            </strong>

            <p>
              Consulte os canais oficiais
              da Internacional Travessias
              para verificar venda,
              horários e regras vigentes.
            </p>

          </div>

        </section>


        <!-- ==================================================
             O QUE ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual opção eu escolheria?
          </h4>

          <div class="payment-choice-grid">


            <article class="payment-choice">

              <strong>
                Vou usar metrô poucas vezes
              </strong>

              <p>
                Comece pela aproximação
                ou QR Code.
                Evita comprar um cartão
                sem necessidade.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar ônibus + metrô
              </strong>

              <p>
                Considere Bilhete Avulso SalvadorCARD
                ou Cartão Integração,
                porque a viagem depende
                da integração tarifária.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar muito ônibus municipal
              </strong>

              <p>
                O Bilhete Avulso SalvadorCARD
                é uma opção prática
                para quem não quer cadastro.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou para outra cidade da RMS
              </strong>

              <p>
                Verifique antes
                a linha metropolitana
                e a necessidade de Metropasse.
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
              Descubra primeiro o seu trajeto.
            </strong>

            <p>
              Metrô, ônibus urbano,
              ônibus metropolitano
              e Ferry-Boat não dependem
              necessariamente do mesmo meio
              de pagamento.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Integração exige cartão compatível.
            </strong>

            <p>
              Pagamento por aproximação
              é prático no metrô,
              mas não substitui automaticamente
              os cartões usados
              para reconhecer integrações.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Use o mesmo cartão
              durante a integração.
            </strong>

            <p>
              Trocar de cartão
              durante a viagem
              pode impedir o benefício
              tarifário.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/metrobahia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô Bahia
          </a>


          <a
            class="official-link"
            href="https://www.salvadorcard.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SalvadorCARD
          </a>


          <a
            class="official-link"
            href="https://www.salvadorcard.com.br/produtos/bilhete-avulso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhete Avulso
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
            href="https://www.internacionaltravessias.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ferry-Boat
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
