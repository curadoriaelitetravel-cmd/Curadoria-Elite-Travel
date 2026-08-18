// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


window.BELO_HORIZONTE_TRANSPORT_MODULES["fares"] = {

  kicker: "Belo Horizonte · tarifas vigentes",

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
            Em Belo Horizonte,
            a tarifa varia conforme
            o tipo de linha e a combinação
            utilizada na viagem.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Tarifa municipal principal
              </span>

              <strong>
                R$ 6,25
              </strong>

              <p>
                Valor de referência
                das linhas troncais MOVE,
                troncais convencionais
                e estruturais.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Alimentadoras e circulares
              </span>

              <strong>
                R$ 6,00
              </strong>

              <p>
                Algumas categorias
                possuem tarifa inferior
                à tarifa principal.
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
                Linhas convencionais
                e suplementares municipais
                participam do Catraca Livre.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Transporte metropolitano
              </span>

              <strong>
                Variável
              </strong>

              <p>
                O preço depende
                da linha e do percurso
                dentro da RMBH.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFA MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifa municipal
          </h4>

          <p class="panel-intro">
            A Prefeitura diferencia
            os valores conforme
            o tipo de serviço.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                R$ 6,25
              </strong>

              <p>
                Troncais MOVE,
                troncais convencionais
                e linhas estruturais.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                R$ 6,00
              </strong>

              <p>
                Alimentadoras
                e linhas circulares.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                R$ 0,00
              </strong>

              <p>
                Linhas de Vilas e Favelas
                previstas como gratuitas
                na tabela municipal.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÃO MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração entre ônibus municipais
          </h4>

          <p class="panel-intro">
            A rede municipal possui
            integração tarifária
            entre diferentes tipos de linha.
          </p>

          <div class="answer-block">

            <strong>
              Dentro de estações de integração
            </strong>

            <p>
              Algumas trocas entre linhas
              podem ter complemento zero,
              conforme a combinação prevista
              na tabela oficial.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Fora das estações
            </strong>

            <p>
              Dependendo da combinação,
              pode existir cobrança
              parcial na segunda viagem.
            </p>

          </div>


          <div class="fare-note">

            A integração depende
            do tipo de linha,
            local da troca
            e meio de pagamento compatível.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS + METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração com o metrô
          </h4>

          <p class="panel-intro">
            Não existe um único valor
            de “ônibus + metrô”.
            A tarifa depende
            da categoria da linha municipal.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Alimentadora + metrô
              </span>

              <strong>
                Tarifa integrada
              </strong>

              <p>
                Integração entre
                linha alimentadora
                e metrô.
              </p>

              <span class="fare-scenario-result">
                R$ 9,35
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Estrutural + metrô
              </span>

              <strong>
                Fora da estação
              </strong>

              <p>
                A Prefeitura publica
                tarifa integrada específica
                para essa combinação.
              </p>

              <span class="fare-scenario-result">
                R$ 10,60
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Circular + metrô
              </span>

              <strong>
                Fora da estação
              </strong>

              <p>
                Também possui
                valor próprio
                na tabela municipal.
              </p>

              <span class="fare-scenario-result">
                R$ 10,05
              </span>

            </article>

          </div>


          <div class="fare-note">

            Para outras combinações,
            consulte a tabela oficial
            da SUMOB antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             CATRACA LIVRE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Catraca Livre
          </h4>

          <div class="visitor-alert">

            <strong>
              Aos domingos e feriados nacionais,
              os ônibus municipais são gratuitos.
            </strong>

            A gratuidade vale
            para todas as linhas convencionais
            e suplementares administradas
            pelo Município.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Horário
              </strong>

              <p>
                Viagens iniciadas
                entre 0h e 23h59
                participam da gratuidade.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Cartão BHBUS
              </strong>

              <p>
                Quem possui o cartão
                pode utilizá-lo
                para liberar a catraca,
                sem desconto de crédito.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem cartão
              </strong>

              <p>
                A Prefeitura informa
                liberação manual da catraca
                para quem não possui BHBUS.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              O metrô não participa
              da gratuidade.
            </strong>

            Nos dias do Catraca Livre,
            não há integração tarifária
            gratuita com o sistema metroviário.

          </div>

        </section>


        <!-- ==================================================
             SUPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte suplementar
          </h4>

          <p class="panel-intro">
            O sistema suplementar
            possui tarifas específicas
            conforme a linha.
          </p>

          <div class="answer-block">

            <strong>
              Os valores não são todos iguais.
            </strong>

            <p>
              A tabela municipal
              inclui linhas suplementares
              a R$ 6,25,
              R$ 6,00
              e algumas tarifas menores.
            </p>

          </div>


          <div class="fare-note">

            Consulte a linha específica
            na tabela da SUMOB
            antes de utilizar
            o serviço suplementar.

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
            As linhas metropolitanas
            seguem uma tabela estadual
            diferente da rede municipal.
          </p>

          <div class="answer-block">

            <strong>
              As tarifas variam
              conforme o percurso.
            </strong>

            <p>
              Desde janeiro de 2026,
              os valores da rede metropolitana
              estão entre R$ 8,95
              e R$ 32,90,
              dependendo da linha.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Consulte pelo número da linha.
            </strong>

            <p>
              O DER-MG permite consultar
              tarifa, itinerário,
              horário e pontos de parada
              de cada serviço metropolitano.
            </p>

          </div>

        </section>


        <!-- ==================================================
             LINHAS METROPOLITANAS + METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração metropolitana com o metrô
          </h4>

          <div class="answer-block">

            <strong>
              Existem tarifas próprias
              para linhas integradas ao metrô.
            </strong>

            <p>
              O DER-MG publica
              tabela específica
              para as linhas metropolitanas
              integradas ao sistema metroviário.
            </p>

          </div>


          <div class="fare-note">

            Como os valores dependem
            da linha metropolitana,
            consulte a tabela de 2026
            antes do deslocamento.

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
                Dia útil
              </span>

              <strong>
                Linha municipal principal
              </strong>

              <p>
                Exemplo de viagem
                em linha troncal
                ou estrutural.
              </p>

              <span class="fare-scenario-result">
                R$ 6,25
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Domingo
              </span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Linha convencional
                ou suplementar
                participante do Catraca Livre.
              </p>

              <span class="fare-scenario-result">
                R$ 0,00
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Alimentadora + metrô
              </strong>

              <p>
                Valor integrado
                publicado pela Prefeitura.
              </p>

              <span class="fare-scenario-result">
                R$ 9,35
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Outra cidade da RMBH
              </span>

              <strong>
                Ônibus metropolitano
              </strong>

              <p>
                Consulte a tarifa
                específica da linha.
              </p>

              <span class="fare-scenario-result">
                Tarifa variável
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
              Não presuma tarifa única.
            </strong>

            <p>
              Tipo de linha,
              integração e sistema
              podem alterar o valor.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Domingo não significa
              transporte totalmente gratuito.
            </strong>

            <p>
              O Catraca Livre
              vale para ônibus municipais
              convencionais e suplementares,
              não para o metrô
              ou sistema metropolitano estadual.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Valores podem mudar.
            </strong>

            <p>
              Confirme sempre
              nas tabelas públicas
              antes da viagem.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/tarifas-e-integracoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas e integrações · PBH
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
            href="https://www.der.mg.gov.br/tabelas-de-transporte-metropolitano"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas metropolitanas · DER-MG
          </a>


          <a
            class="official-link"
            href="https://www.der.mg.gov.br/servicos/informacoes-sobre-horarios-e-tarifas-de-onibus-da-regiao-metropolitana-de-belo-horizonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar linha metropolitana · DER-MG
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
