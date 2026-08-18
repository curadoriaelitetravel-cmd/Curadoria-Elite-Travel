// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: ÔNIBUS, MOVE E METROPOLITANOS
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


window.BELO_HORIZONTE_TRANSPORT_MODULES["bus"] = {

  kicker: "Belo Horizonte · ônibus e conexões",

  title: "Ônibus e MOVE",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de escolher um ônibus
          </h4>

          <p class="panel-intro">
            Belo Horizonte possui diferentes
            tipos de serviço municipal,
            além de uma rede metropolitana estadual.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Convencional
              </strong>

              <p>
                Liga bairros,
                região central
                e diferentes áreas da cidade.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                MOVE
              </strong>

              <p>
                Sistema BRT
                com linhas alimentadoras,
                troncais e estações.
              </p>

            </article>


            <article class="bus-system-card">

              <span>S</span>

              <strong>
                Suplementar
              </strong>

              <p>
                Complementa a rede
                em trajetos específicos
                e áreas de difícil acesso.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Metropolitano
              </strong>

              <p>
                Conecta Belo Horizonte
                a outros municípios
                da Região Metropolitana.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO IDENTIFICAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como identificar a linha certa
          </h4>

          <div class="bus-identification-grid">

            <article class="bus-identification-card">

              <span class="bus-identification-number">
                1
              </span>

              <strong>
                Confira o número
              </strong>

              <p>
                Use o número da linha
                como principal referência.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                2
              </span>

              <strong>
                Leia o destino
              </strong>

              <p>
                O letreiro ajuda
                a confirmar o sentido
                correto da viagem.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                3
              </span>

              <strong>
                Confira o ponto
              </strong>

              <p>
                Consulte a parada
                e o itinerário oficial
                antes de embarcar.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CONSULTA OFICIAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários e itinerários
          </h4>

          <div class="answer-block">

            <strong>
              A Prefeitura mantém consulta pública.
            </strong>

            <p>
              É possível verificar
              horários e itinerários
              das linhas municipais
              diretamente no portal da SUMOB.
            </p>

          </div>


          <div class="fare-note">

            Antes de sair,
            confira novamente a linha.
            Alterações operacionais
            podem modificar horários
            e itinerários.

          </div>

        </section>


        <!-- ==================================================
             SISTEMA CONVENCIONAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Sistema Convencional
          </h4>

          <p class="panel-intro">
            É uma das bases
            da rede municipal
            de Belo Horizonte.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Bairro ↔ Centro
              </strong>

              <p>
                Linhas conectam
                bairros ao Centro
                e retornam à região de origem.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bairro → Centro
              </strong>

              <p>
                Algumas linhas
                possuem atendimento
                direcionado ao Centro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bairro ↔ Bairro
              </strong>

              <p>
                Também existem linhas
                que conectam regiões
                sem passar pelo Centro.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VILAS E FAVELAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Linhas de Vilas e Favelas
          </h4>

          <div class="answer-block">

            <strong>
              Fazem parte
              do Sistema Convencional.
            </strong>

            <p>
              Utilizam veículos menores
              para atender regiões
              de acesso mais difícil
              e topografia acentuada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Tarifa zero.
            </strong>

            As 13 linhas dessa categoria
            possuem gratuidade permanente
            desde abril de 2023.

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como funciona o MOVE
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Linha alimentadora
              </strong>

              <p>
                Sai do bairro
                e leva o passageiro
                a uma estação de integração.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Estação
              </strong>

              <p>
                Dentro da estação,
                é possível trocar
                para outra linha compatível.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Linha troncal
              </strong>

              <p>
                Segue pelos principais
                corredores estruturais
                da cidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Destino final
              </strong>

              <p>
                Outra linha
                pode completar
                a última etapa da viagem.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CORREDORES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Principais corredores do MOVE
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                Importante eixo
                do sistema no vetor Nordeste.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                Corredor importante
                entre Centro,
                Pampulha e vetor Norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                Atende o vetor Norte
                e conecta-se
                à região de Vilarinho.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                Concentra serviços
                ligados à região
                de Venda Nova.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações de integração
          </h4>

          <p class="panel-intro">
            A Prefeitura identifica
            quatro grandes estações
            de integração do MOVE.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Venda Nova
              </strong>

              <p>
                Integra linhas
                alimentadoras
                e troncais.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Integra MOVE
                e metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante conexão
                entre ônibus,
                MOVE e metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Atende linhas
                do eixo da Pampulha.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Essas estações
            funcionam 24 horas.

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES DE TRANSFERÊNCIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações de transferência
          </h4>

          <div class="answer-block">

            <strong>
              Belo Horizonte possui
              37 estações de transferência.
            </strong>

            <p>
              Elas estão distribuídas
              pelos corredores estruturais
              e pela Área Central.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Trocas dentro da estação
            </strong>

            <p>
              O passageiro pode
              desembarcar e embarcar
              em outras linhas
              dentro do mesmo espaço,
              conforme as regras do sistema.
            </p>

          </div>


          <div class="fare-note">

            Em geral,
            essas estações funcionam
            das 4h à 1h.
            São Paulo e Tamoios
            fecham aos domingos e feriados.

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
              Complementa a rede municipal.
            </strong>

            <p>
              Utiliza micro-ônibus
              e atende trajetos
              bairro a bairro,
              áreas de difícil acesso
              e regiões específicas.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não possui integração tarifária
              com os demais sistemas municipais.
            </strong>

            O pagamento e a lógica
            de integração são diferentes
            do Sistema Convencional
            e do MOVE.

          </div>

        </section>


        <!-- ==================================================
             MADRUGÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Transporte durante a madrugada
          </h4>

          <p class="panel-intro">
            Belo Horizonte possui
            uma operação municipal específica
            para o período noturno.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Madrugão
              </span>

              <strong>
                127 linhas
              </strong>

              <p>
                Funcionam entre
                0h e 3h59.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Linha 10
              </span>

              <strong>
                Circular Noturno
              </strong>

              <p>
                Conecta importantes
                áreas de vida noturna
                e o sistema MOVE.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Linha 10
              </span>

              <strong>
                23h20 às 4h
              </strong>

              <p>
                Operação publicada
                pela Prefeitura.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Frequência
              </span>

              <strong>
                25 min
              </strong>

              <p>
                Intervalo programado
                da Linha 10.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A programação da madrugada
            pode ser atualizada.
            Consulte a SUMOB
            antes de depender
            de uma linha específica.

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
            Para viagens entre Belo Horizonte
            e outros municípios da RMBH,
            consulte o sistema estadual.
          </p>

          <div class="answer-block">

            <strong>
              Pesquise pelo número da linha.
            </strong>

            <p>
              O DER-MG disponibiliza
              consulta de horário,
              itinerário,
              pontos de parada
              e tarifa.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Municipal e metropolitano
              não são o mesmo sistema.
            </strong>

            <p>
              A linha metropolitana
              segue regras tarifárias
              e operacionais próprias.
            </p>

          </div>

        </section>


        <!-- ==================================================
             DICAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Dicas que evitam erro
          </h4>

          <div class="bus-tip-list">

            <article class="bus-tip">

              <span class="bus-tip-icon">
                🔢
              </span>

              <div>

                <strong>
                  Salve o número da linha
                </strong>

                <p>
                  Número e destino juntos
                  ajudam a confirmar
                  o ônibus correto.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🚍
              </span>

              <div>

                <strong>
                  MOVE envolve integração
                </strong>

                <p>
                  Muitas viagens
                  combinam alimentadora,
                  estação e troncal.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🌙
              </span>

              <div>

                <strong>
                  Vai sair de madrugada?
                </strong>

                <p>
                  Consulte primeiro
                  o Madrugão
                  e a Linha 10.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🌆
              </span>

              <div>

                <strong>
                  Outra cidade?
                </strong>

                <p>
                  Verifique se a linha
                  pertence ao sistema
                  metropolitano.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES PÚBLICAS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/horarios-e-itinerarios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários e itinerários · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/tipos-de-linha-e-servicos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tipos de linha · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/onibus/estacoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estações · PBH
          </a>


          <a
            class="official-link"
            href="https://prefeitura.pbh.gov.br/sumob/madrugao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Madrugão · PBH
          </a>


          <a
            class="official-link"
            href="https://www.der.mg.gov.br/servicos/informacoes-sobre-horarios-e-tarifas-de-onibus-da-regiao-metropolitana-de-belo-horizonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ônibus metropolitanos · DER-MG
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
