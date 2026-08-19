// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// MÓDULO: COMO PAGAR
// ============================================================

window.BRASILIA_TRANSPORT_MODULES =
  window.BRASILIA_TRANSPORT_MODULES || {};


window.BRASILIA_TRANSPORT_MODULES["card"] = {

  kicker:
    "Brasília · bilhetagem",

  title:
    "Como pagar",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             RESUMO
        =================================================== -->

        <section class="panel-box network-full">

          <div class="payment-recommendation">

            <span class="payment-eyebrow">
              Escolha conforme o tipo de viagem
            </span>

            <h4>
              Cartão Mobilidade,
              cartão bancário
              ou bilhete avulso?
            </h4>

            <p>
              Todos permitem embarcar,
              mas não oferecem
              os mesmos benefícios.
              A principal diferença
              está na integração tarifária.
            </p>

          </div>

        </section>


        <!-- ==================================================
             PRINCIPAIS MEIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais meios de pagamento
          </h4>

          <div class="payment-method-grid">

            <article class="payment-method">

              <span class="payment-method-icon">
                💳
              </span>

              <strong>
                Cartão Mobilidade
              </strong>

              <span class="payment-status available">
                Com integração
              </span>

              <small>
                Cartão pessoal
                do sistema de bilhetagem
                do Distrito Federal.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📡
              </span>

              <strong>
                Cartão bancário
              </strong>

              <span class="payment-status available">
                Aproximação
              </span>

              <small>
                Crédito ou débito
                em ônibus,
                BRT e metrô.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                📱
              </span>

              <strong>
                Celular ou smartwatch
              </strong>

              <span class="payment-status available">
                NFC
              </span>

              <small>
                Cartões virtuais
                também podem ser usados
                por aproximação.
              </small>

            </article>


            <article class="payment-method">

              <span class="payment-method-icon">
                ▣
              </span>

              <strong>
                Bilhete Avulso QR Code
              </strong>

              <span class="payment-status partial">
                Ônibus e BRT
              </span>

              <small>
                Alternativa para
                viagens ocasionais,
                sem integração.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CARTÃO MOBILIDADE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão Mobilidade
          </h4>

          <div class="answer-block">

            <strong>
              É pessoal.
            </strong>

            <p>
              O cartão é vinculado
              ao titular cadastrado
              no sistema de bilhetagem.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Dá acesso à integração tarifária.
            </strong>

            <p>
              Permite combinar
              até três embarques
              dentro de três horas,
              pagando no máximo R$ 5,50,
              quando a viagem atende
              às regras de integração.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO OBTER
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como obter o Cartão Mobilidade
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Faça o cadastro
              </strong>

              <p>
                O pré-cadastro
                pode ser iniciado
                pela plataforma digital
                do BRB Mobilidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Informe seus dados
              </strong>

              <p>
                O cadastro utiliza
                dados pessoais
                e identificação
                do usuário.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Retire o cartão
              </strong>

              <p>
                A retirada acontece
                em um posto habilitado
                para emissão.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Coloque créditos
              </strong>

              <p>
                Depois da emissão,
                faça a primeira recarga
                para começar a utilizar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             RECARGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como recarregar
          </h4>

          <div class="purchase-grid">

            <article class="purchase-card">

              <span>📲</span>

              <strong>
                Pix
              </strong>

              <p>
                Disponível
                no aplicativo
                BRB Mobilidade
                e em postos compatíveis.
              </p>

            </article>


            <article class="purchase-card">

              <span>🧾</span>

              <strong>
                Boleto
              </strong>

              <p>
                Disponível
                na recarga digital
                pelo aplicativo.
              </p>

            </article>


            <article class="purchase-card">

              <span>💵</span>

              <strong>
                Dinheiro
              </strong>

              <p>
                Aceito
                nos postos físicos
                e em pontos de recarga
                compatíveis.
              </p>

            </article>


            <article class="purchase-card">

              <span>💳</span>

              <strong>
                Débito
              </strong>

              <p>
                Aceito
                nos postos BRB Mobilidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PRAZO DA RECARGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o crédito fica disponível?
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Pix
              </strong>

              <p>
                O crédito pode
                ficar disponível
                em até 10 minutos
                após o pagamento.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Boleto
              </strong>

              <p>
                Pode levar
                até dois dias úteis
                após o pagamento.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Depois de disponibilizado,
            o crédito precisa ser efetivado
            no cartão em um validador atualizado
            de ônibus, BRT ou metrô.

          </div>

        </section>


        <!-- ==================================================
             LIMITES DE RECARGA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Valores de recarga
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Canais digitais
              </strong>

              <p>
                Valor mínimo
                de R$ 5,00.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Pontos físicos
              </strong>

              <p>
                Valor mínimo
                de R$ 2,70.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Limite máximo
              </strong>

              <p>
                Até R$ 1.000,00
                em créditos.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             APP
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aplicativo BRB Mobilidade
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Recarga
              </strong>

              <p>
                Permite comprar créditos
                por Pix ou boleto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Saldo
              </strong>

              <p>
                Permite consultar
                o saldo do cartão.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Extrato
              </strong>

              <p>
                Permite acompanhar
                movimentações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Recarga para outra pessoa
              </strong>

              <p>
                Também é possível
                carregar outro Cartão Mobilidade
                informando o cartão
                e o CPF do titular.
              </p>

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

          <p class="panel-intro">
            Para uma viagem ocasional,
            não é obrigatório possuir
            Cartão Mobilidade.
          </p>

          <div class="answer-block">

            <strong>
              Ônibus, BRT e metrô
            </strong>

            <p>
              Aceitam cartões bancários
              compatíveis com pagamento
              por aproximação.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Visa, Mastercard e Elo
            </strong>

            <p>
              São as bandeiras
              oficialmente publicadas
              como compatíveis.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Crédito ou débito
            </strong>

            <p>
              A função utilizada
              no pagamento é determinada
              pela prioridade definida
              pelo banco emissor.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Celular, smartwatch e acessórios
            </strong>

            <p>
              Cartões virtuais
              também podem ser utilizados
              quando o dispositivo possui
              tecnologia de aproximação.
            </p>

          </div>

        </section>


        <!-- ==================================================
             APROXIMAÇÃO X INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cartão bancário ou Cartão Mobilidade?
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Cartão Mobilidade
              </span>

              <strong>
                Integração tarifária
              </strong>

              <p>
                É a opção
                mais adequada
                quando a viagem exige
                mais de um embarque.
              </p>

              <span class="route-compare-result">
                Até 3 embarques
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Cartão bancário
              </span>

              <strong>
                Uso imediato
              </strong>

              <p>
                Não exige cadastro,
                recarga ou retirada
                de cartão de transporte.
              </p>

              <span class="route-compare-result">
                Mais simples
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Diferença principal
              </span>

              <strong>
                Sem integração no bancário
              </strong>

              <p>
                Cada embarque
                pago por cartão bancário
                é cobrado separadamente.
              </p>

              <span class="route-compare-result">
                Cada acesso é cobrado
              </span>

            </article>

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
              Serve para ônibus e BRT.
            </strong>

            <p>
              Pode ser utilizado
              por quem não possui
              Cartão Mobilidade
              ou prefere comprar
              uma viagem avulsa.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não exige cadastro.
            </strong>

            <p>
              O bilhete pode ser
              comprado diretamente
              nos pontos de venda habilitados.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Compra presencial
            </strong>

            <p>
              O pagamento pode ser feito
              em dinheiro
              ou cartão de débito.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Até quatro bilhetes por compra
            </strong>

            <p>
              Cada unidade
              corresponde a uma viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             TARIFAS DO QR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quanto custa o Bilhete Avulso?
          </h4>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Faixa 1
              </span>

              <strong>
                R$ 2,70
              </strong>

              <p>
                Para linhas
                dessa faixa tarifária.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Faixa 2
              </span>

              <strong>
                R$ 3,80
              </strong>

              <p>
                Para linhas
                dessa faixa tarifária.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Faixa 3
              </span>

              <strong>
                R$ 5,50
              </strong>

              <p>
                Para linhas
                dessa faixa tarifária.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Um bilhete de valor maior
            pode ser usado em uma linha
            de tarifa menor,
            mas a diferença
            não é devolvida.

          </div>

        </section>


        <!-- ==================================================
             VALIDADE DO QR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Validade do Bilhete Avulso
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                48 horas
              </strong>

              <p>
                O bilhete deve ser usado
                em até 48 horas
                após a compra.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Uma viagem
              </strong>

              <p>
                Cada QR Code
                vale para um único embarque.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem integração
              </strong>

              <p>
                Não oferece
                o benefício tarifário
                do Cartão Mobilidade.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             QR E METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O QR Code do ônibus funciona no metrô?
          </h4>

          <div class="visitor-alert">

            <strong>
              Não.
            </strong>

            O Bilhete Avulso QR Code
            de ônibus e BRT
            não funciona
            nas catracas do Metrô-DF.

          </div>


          <div class="fare-note">

            Para uma viagem avulsa
            de metrô,
            utilize um meio de pagamento
            aceito pelo sistema metroviário.

          </div>

        </section>


        <!-- ==================================================
             POSTOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Onde emitir ou retirar cartões
          </h4>

          <p class="panel-intro">
            O BRB Mobilidade mantém
            postos de atendimento
            em várias regiões do Distrito Federal.
          </p>

          <div class="answer-block">

            <strong>
              No Plano Piloto
            </strong>

            <p>
              Há postos na
              Rodoviária do Plano Piloto
              e na Estação Galeria.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Fora do Plano Piloto
            </strong>

            <p>
              Também existem postos
              em regiões como Gama,
              Santa Maria,
              Planaltina,
              Brazlândia,
              Sobradinho
              e Taguatinga.
            </p>

          </div>


          <div class="fare-note">

            Endereços e horários
            podem mudar.
            O botão oficial abaixo
            abre a lista atualizada
            de postos de atendimento.

          </div>

        </section>


        <!-- ==================================================
             PARA VISITANTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Para quem está visitando Brasília
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Uma ou poucas viagens
              </strong>

              <p>
                Cartão bancário
                por aproximação
                tende a ser
                a opção mais direta.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vários embarques
              </strong>

              <p>
                O Cartão Mobilidade
                passa a ser relevante
                por causa
                da integração tarifária.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Sem cartão bancário compatível
              </strong>

              <p>
                O Bilhete Avulso QR Code
                resolve viagens
                de ônibus e BRT.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Domingo ou feriado
              </strong>

              <p>
                O Vai de Graça
                torna o transporte público
                gratuito nos dias abrangidos
                pelo programa.
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
            href="https://brbnovo.brb.com.br/mobilidade/cartao-mobilidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cartão Mobilidade · BRB
          </a>


          <a
            class="official-link"
            href="https://brbnovo.brb.com.br/mobilidade/cartao-emv-credito-e-debito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aproximação · BRB
          </a>


          <a
            class="official-link"
            href="https://brbnovo.brb.com.br/mobilidade/bilhete-avulso-qr-code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilhete Avulso QR Code · BRB
          </a>


          <a
            class="official-link"
            href="https://brbnovo.brb.com.br/mobilidade/postos-de-atendimento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Postos atualizados · BRB
          </a>


          <a
            class="official-link"
            href="https://www.semob.df.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEMOB-DF
          </a>

        </div>


        <div class="payment-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
