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
              Escolha pelo tipo de viagem
            </span>

            <h4>
              Para uma viagem simples,
              você não precisa necessariamente
              comprar um cartão de transporte.
            </h4>

            <p>
              No metrô existem formas avulsas
              de acesso.

              Para ônibus municipais
              existe o Bilhete Avulso.

              Se a viagem envolver integração,
              utilize um cartão compatível
              com os sistemas envolvidos.
            </p>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para usar apenas o metrô
          </h4>

          <p class="panel-intro">
            Uma viagem exclusiva no metrô
            pode ser paga sem adquirir
            um cartão recarregável.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão por aproximação
              </strong>

              <span class="payment-status available">
                Metrô
              </span>

              <small>
                Crédito ou débito
                compatível com pagamento
                por aproximação.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Celular ou dispositivo NFC
              </strong>

              <span class="payment-status available">
                Metrô
              </span>

              <small>
                Celular,
                smartwatch,
                pulseira
                ou outro dispositivo compatível.
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
                utilizado diretamente
                no acesso ao sistema.
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
                Metrô + integração
              </span>

              <small>
                Cartão recarregável
                para viagens exclusivas
                ou integradas.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             APROXIMAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento por aproximação no metrô
          </h4>

          <div class="answer-block">

            <strong>
              Encoste o cartão ou dispositivo
              diretamente no leitor da catraca.
            </strong>

            <p>
              O sistema aceita
              cartão bancário compatível
              ou dispositivo NFC habilitado
              para o pagamento.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              É uma forma de pagar
              a viagem avulsa do metrô.
            </strong>

            Não trate automaticamente
            esse pagamento como equivalente
            a um cartão utilizado
            para integração tarifária
            com ônibus ou BRT.

          </div>

        </section>


        <!-- ==================================================
             QR CODE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete unitário e QR Code
          </h4>

          <div class="answer-block">

            <strong>
              Também existe acesso unitário.
            </strong>

            <p>
              O metrô aceita
              bilhete unitário
              e QR Code
              como formas de acesso.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O QR Code pode ser obtido
              nas máquinas das estações.
            </strong>

            <p>
              Depois,
              ele é utilizado
              no bloqueio de acesso
              ao metrô.
            </p>

          </div>


          <div class="fare-note">

            Para uma viagem
            que depende de integração,
            prefira um cartão compatível
            com os sistemas utilizados.

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
            É uma das opções mais simples
            para quem pretende combinar
            metrô com ônibus,
            BRT
            ou STEC.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Onde comprar
              </strong>

              <p>
                Nas bilheterias
                e nas máquinas
                de autoatendimento
                das estações do metrô.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Taxa de aquisição
              </strong>

              <p>
                R$ 7,00,
                além do valor
                colocado em créditos.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Onde usar
              </strong>

              <p>
                Metrô,
                ônibus,
                BRT
                e STEC,
                inclusive em viagens
                integradas compatíveis.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Durante a integração
              </strong>

              <p>
                Utilize o mesmo cartão
                nas diferentes etapas
                da viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RECARGA CARTÃO INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como recarregar o Cartão Integração
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>🏧</span>

              <strong>
                Máquinas nas estações
              </strong>

              <p>
                Disponíveis
                nas estações
                do metrô.
              </p>

            </article>


            <article class="purchase-card">

              <span>🏪</span>

              <strong>
                Rede credenciada
              </strong>

              <p>
                Há mais de
                2 mil estabelecimentos
                credenciados
                em Salvador
                e Região Metropolitana.
              </p>

            </article>


            <article class="purchase-card">

              <span>📱</span>

              <strong>
                Aplicativos
              </strong>

              <p>
                Banco do Brasil,
                Cittamobi,
                KIM+,
                PicPay
                e RecargaPay
                aparecem entre os canais
                publicados pela SEDUR.
              </p>

            </article>


            <article class="purchase-card">

              <span>💬</span>

              <strong>
                Zap do Metrô
              </strong>

              <p>
                Também aparece
                entre os canais
                disponibilizados
                para serviços relacionados
                ao cartão.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ATIVAÇÃO DA RECARGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Recarregou pelo celular?
          </h4>

          <div class="visitor-alert">

            <strong>
              A recarga precisa ser ativada.
            </strong>

            Depois de comprar créditos
            por aplicativo
            ou na rede credenciada,
            utilize um dos validadores
            disponíveis nas estações
            para ativar a recarga
            no cartão.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para usar ônibus municipal
          </h4>

          <p class="panel-intro">
            Salvador possui
            bilhetagem eletrônica própria
            para o transporte municipal.
          </p>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                🎫
              </span>

              <strong>
                Bilhete Avulso
              </strong>

              <span class="payment-status available">
                Sem cadastro
              </span>

              <small>
                Pode ser adquirido
                por qualquer pessoa
                e utilizado imediatamente
                após receber créditos.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                👤
              </span>

              <strong>
                Bilhete Identificado
              </strong>

              <span class="payment-status available">
                Com cadastro
              </span>

              <small>
                Modalidade vinculada
                ao usuário
                dentro do sistema
                SalvadorCARD.
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
                Rede integrada
              </span>

              <small>
                Pode ser utilizado
                nos ônibus
                e em integrações
                compatíveis com o metrô.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BILHETE AVULSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Avulso SalvadorCARD
          </h4>

          <div class="answer-block">

            <strong>
              Não exige cadastro.
            </strong>

            <p>
              É um cartão ao portador
              destinado ao pagamento eletrônico
              do transporte público
              de Salvador.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Participa da integração tarifária.
            </strong>

            <p>
              O SalvadorCARD informa
              que o Bilhete Avulso
              participa do Bilhete Único
              e também da integração
              com o sistema metroviário.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Por ser ao portador,
              cuide do cartão.
            </strong>

            Em caso de perda,
            roubo,
            furto
            ou extravio,
            não é possível bloquear
            o Bilhete Avulso
            nem recuperar os créditos.

          </div>

        </section>


        <!-- ==================================================
             ONDE COMPRAR BILHETE AVULSO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde comprar e recarregar
            o Bilhete Avulso
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>🏪</span>

              <strong>
                Rede credenciada
              </strong>

              <p>
                Compra
                e recarga
                estão disponíveis
                nos pontos credenciados
                do SalvadorCARD.
              </p>

            </article>


            <article class="purchase-card">

              <span>🏢</span>

              <strong>
                Postos SalvadorCARD
              </strong>

              <p>
                O Bilhete Avulso
                também pode ser adquirido
                e recarregado
                nos postos de atendimento.
              </p>

            </article>


            <article class="purchase-card">

              <span>🏧</span>

              <strong>
                Autoatendimento
              </strong>

              <p>
                Os terminais
                de autoatendimento
                permitem realizar
                recargas.
              </p>

            </article>


            <article class="purchase-card">

              <span>📱</span>

              <strong>
                KIM+
              </strong>

              <p>
                O aplicativo
                também permite
                efetuar recargas
                do Bilhete Avulso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SALVADORCARD — POSTOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Postos SalvadorCARD
          </h4>

          <p class="panel-intro">
            Entre os pontos de atendimento
            publicados pelo SalvadorCARD
            estão:
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Estação da Lapa
              </strong>

              <p>
                Posto localizado
                no piso
                da Praça de Alimentação.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Shopping da Gente
              </strong>

              <p>
                Atendimento
                na Avenida ACM,
                em frente ao DETRAN.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pirajá
              </strong>

              <p>
                Há posto
                na estação
                de transbordo.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Mussurunga
              </strong>

              <p>
                Também possui
                atendimento SalvadorCARD.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Acesso Norte
              </strong>

              <p>
                Há posto
                na estação
                de transbordo.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BILHETE IDENTIFICADO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Identificado
          </h4>

          <div class="answer-block">

            <strong>
              É vinculado ao usuário.
            </strong>

            <p>
              Diferentemente
              do Bilhete Avulso,
              exige cadastro
              para emissão.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Pode ser adquirido
              nos postos da Lapa
              e Shopping da Gente.
            </strong>

            <p>
              Depois da emissão,
              o usuário escolhe
              quanto deseja colocar
              em créditos.
            </p>

          </div>


          <div class="fare-note">

            Para um visitante
            que precisa apenas
            de uma solução simples
            de pagamento,
            o Bilhete Avulso
            tende a exigir menos etapas
            porque não necessita cadastro.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte metropolitano
          </h4>

          <div class="answer-block">

            <strong>
              Metropasse participa
              da integração com o metrô.
            </strong>

            <p>
              O Governo da Bahia
              informa que cartões Metropasse
              são aceitos
              no sistema metroviário
              e em integrações metropolitanas
              compatíveis.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O Cartão Integração
              também possui interoperabilidade.
            </strong>

            <p>
              O sistema estadual
              permite integração
              entre determinadas linhas
              metropolitanas
              e o metrô.
            </p>

          </div>


          <div class="fare-note">

            Como a tarifa metropolitana
            depende da linha,
            o valor final
            pode incluir diferença tarifária.

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
              Possui bilhetagem própria.
            </strong>

            <p>
              A travessia
              Salvador ↔ Itaparica
              não utiliza
              o Cartão Integração
              do metrô
              nem o SalvadorCARD
              como regra da rede urbana.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não apresentamos
              um meio eletrônico específico
              como regra geral de pagamento.
            </strong>

            As fontes oficiais atuais
            confirmam tarifas
            e categorias do Ferry-Boat,
            mas não documentam
            de forma suficientemente clara
            todos os meios comerciais
            aceitos nos terminais.

          </div>

        </section>


        <!-- ==================================================
             QUAL ESCOLHER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Qual opção faz mais sentido?
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Só vou usar o metrô
              </strong>

              <p>
                Aproximação
                ou QR Code
                podem evitar
                a compra de um cartão.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Metrô + ônibus/BRT
              </strong>

              <p>
                Utilize
                o Cartão Integração
                ou outro cartão
                compatível
                com a integração.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus municipal
              </strong>

              <p>
                O Bilhete Avulso
                é uma alternativa
                sem necessidade
                de cadastro.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vou usar transporte várias vezes
              </strong>

              <p>
                Um cartão recarregável
                tende a ser mais prático
                do que comprar
                acessos unitários
                repetidamente.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Viagem metropolitana
              </strong>

              <p>
                A bilhetagem
                e a integração
                dependem da linha
                e dos sistemas utilizados.
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

              <span>💳</span>

              <strong>
                Metrô avulso
              </strong>

              <p>
                Aproximação
                ou bilhete unitário/QR Code.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integração urbana
              </strong>

              <p>
                Cartão Integração
                ou cartão compatível.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎫</span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Bilhete Avulso
                disponível
                sem cadastro.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📱</span>

              <strong>
                Recarga digital
              </strong>

              <p>
                Existem canais digitais
                para Cartão Integração
                e SalvadorCARD.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                Metropasse
                e integração metroviária
                conforme a linha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⛴️</span>

              <strong>
                Ferry-Boat
              </strong>

              <p>
                Bilhetagem própria
                do sistema hidroviário.
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
            Bilhetes e cartões · SEDUR
          </a>


          <a
            class="official-link"
            href="https://www.salvadorcard.com.br/produtos/bilhete-avulso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhete Avulso · SalvadorCARD
          </a>


          <a
            class="official-link"
            href="https://www.salvadorcard.com.br/produtos/bilhete-identificado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhete Identificado · SalvadorCARD
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
