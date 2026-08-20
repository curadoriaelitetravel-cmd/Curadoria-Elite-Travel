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
            ônibus municipais,
            metrô e transporte metropolitano
            pertencem a sistemas tarifários diferentes.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Municipal principal
              </span>

              <strong>
                R$ 6,25
              </strong>

              <p>
                Troncais MOVE,
                troncais convencionais
                e linhas estruturais.
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
                Tarifa unitária
                dessas categorias
                da rede municipal.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Metrô
              </span>

              <strong>
                R$ 5,80
              </strong>

              <p>
                Tarifa unitária
                do sistema metroviário.
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
                Ônibus convencionais
                e suplementares municipais
                pelo Catraca Livre.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TARIFA MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifas dos ônibus municipais
          </h4>

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
                Linhas alimentadoras
                e circulares.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                R$ 0,00
              </strong>

              <p>
                As 13 linhas
                de Vilas e Favelas
                possuem tarifa zero.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Além das linhas de Vilas e Favelas,
            as alimentadoras 202, 204, 401 e 402
            também são gratuitas.

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
            Com o Cartão BHBUS,
            diferentes linhas da rede municipal
            podem oferecer integração tarifária.
          </p>

          <div class="answer-block">

            <strong>
              Segunda viagem
            </strong>

            <p>
              Em determinadas combinações,
              o passageiro paga
              apenas parte da tarifa
              no segundo embarque.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Dentro das estações
            </strong>

            <p>
              Entre linhas compatíveis,
              algumas transferências
              possuem complemento zero.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Janela de integração
            </strong>

            <p>
              O Cartão BHBUS permite
              integração física e tarifária
              durante 90 minutos.
            </p>

          </div>


          <div class="fare-note">

            O valor do complemento
            depende da combinação das linhas.
            Linhas circulares não integram
            entre si e também existem
            restrições entre linhas troncais
            e estruturais da mesma bacia.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS + METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integração entre ônibus municipal e metrô
          </h4>

          <p class="panel-intro">
            Todas as linhas municipais
            podem integrar com o metrô
            por meio do Cartão BHBUS,
            mas o valor final depende
            do tipo de linha utilizada.
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
                Combinação entre
                linha alimentadora
                e sistema metroviário.
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
                Integração realizada
                fora de uma estação
                de integração.
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
                Integração entre
                linha circular
                e metrô.
              </p>

              <span class="fare-scenario-result">
                R$ 10,05
              </span>

            </article>

          </div>


          <div class="fare-note">

            A tarifa unitária do metrô
            é R$ 5,80.
            As tarifas acima são valores
            integrados e não a simples soma
            das duas passagens.

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
              Aos domingos e feriados,
              os ônibus municipais são gratuitos.
            </strong>

            O benefício vale
            para todas as linhas convencionais
            e suplementares administradas
            pelo Município.
          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                0h às 23h59
              </strong>

              <p>
                A gratuidade vale
                para viagens iniciadas
                nesse período.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Com BHBUS
              </strong>

              <p>
                O cartão libera
                a catraca,
                mas nenhum crédito
                é descontado.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Sem BHBUS
              </strong>

              <p>
                O motorista
                ou a equipe da estação
                libera a catraca manualmente.
              </p>

            </article>

          </div>


          <div class="fare-note">

            <strong>
              O metrô não participa
              do Catraca Livre.
            </strong>

            Nos domingos e feriados,
            não há integração tarifária
            gratuita entre os ônibus municipais
            e o metrô.

          </div>

        </section>


        <!-- ==================================================
             GRATUIDADES PERMANENTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas municipais sempre gratuitas
          </h4>

          <p class="panel-intro">
            Algumas linhas possuem tarifa zero
            todos os dias,
            independentemente do Catraca Livre.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                13 linhas
              </strong>

              <p>
                Todas as linhas
                do sistema
                de Vilas e Favelas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                202 e 204
              </strong>

              <p>
                Linhas alimentadoras
                com tarifa zero.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                401 e 402
              </strong>

              <p>
                Linhas alimentadoras
                também gratuitas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRANSPORTE SUPLEMENTAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte suplementar
          </h4>

          <p class="panel-intro">
            O sistema suplementar
            possui 27 linhas
            e não participa
            da integração tarifária
            com o sistema convencional.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Maior parte das linhas
              </span>

              <strong>
                R$ 6,25
              </strong>

              <p>
                Tarifa aplicada
                a diversas linhas
                suplementares.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Outras linhas
              </span>

              <strong>
                R$ 6,00
              </strong>

              <p>
                Outra faixa comum
                do sistema suplementar.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Linha S19
              </span>

              <strong>
                R$ 3,00
              </strong>

              <p>
                Hospital Evangélico /
                Shopping Boulevard.
              </p>

            </article>

          </div>


          <div class="fare-note">

            As linhas suplementares
            também são gratuitas
            aos domingos e feriados
            pelo Catraca Livre.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus metropolitanos
          </h4>

          <p class="panel-intro">
            As linhas que conectam
            Belo Horizonte a outros municípios
            da Região Metropolitana
            pertencem ao sistema estadual,
            e não à rede municipal da PBH.
          </p>

          <div class="answer-block">

            <strong>
              Não existe uma tarifa única metropolitana.
            </strong>

            <p>
              O DER-MG define
              o valor individualmente
              conforme a linha
              e o serviço.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              O número da linha importa.
            </strong>

            <p>
              Para uma viagem metropolitana,
              a tarifa correta é determinada
              pela linha específica utilizada.
            </p>

          </div>


          <div class="fare-note">

            Nesse caso,
            a consulta oficial por linha
            é necessária porque
            não existe um único valor
            que represente toda a rede RMBH.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO + METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus metropolitano + metrô
          </h4>

          <div class="answer-block">

            <strong>
              Existem linhas metropolitanas
              integradas ao metrô.
            </strong>

            <p>
              Elas possuem tarifas próprias,
              publicadas separadamente
              pelo DER-MG.
            </p>

          </div>


          <div class="fare-note">

            A tabela vigente
            das linhas metropolitanas
            integradas ao metrô
            foi atualizada em
            1º de julho de 2026.
            O valor depende
            da linha utilizada.

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
                Troncal ou estrutural
              </strong>

              <p>
                Viagem municipal
                sem integração.
              </p>

              <span class="fare-scenario-result">
                R$ 6,25
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Dia útil
              </span>

              <strong>
                Metrô
              </strong>

              <p>
                Viagem unitária
                no sistema metroviário.
              </p>

              <span class="fare-scenario-result">
                R$ 5,80
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
                Com integração tarifária
                pelo BHBUS.
              </p>

              <span class="fare-scenario-result">
                R$ 9,35
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Domingo ou feriado
              </span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Convencional
                ou suplementar.
              </p>

              <span class="fare-scenario-result">
                R$ 0,00
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DIFERENÇAS IMPORTANTES
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Não confunda os sistemas
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🚌</span>

              <strong>
                Municipal
              </strong>

              <p>
                Rede administrada
                pelo Município
                de Belo Horizonte.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚇</span>

              <strong>
                Metrô
              </strong>

              <p>
                Tarifa unitária
                de R$ 5,80
                e integração específica
                com o BHBUS.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚐</span>

              <strong>
                Suplementar
              </strong>

              <p>
                Sistema municipal,
                mas sem integração tarifária
                com o convencional.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                Sistema estadual
                com tarifas definidas
                por linha.
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
            href="https://www.metrobh.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metrô BH
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
            Linha metropolitana · DER-MG
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
