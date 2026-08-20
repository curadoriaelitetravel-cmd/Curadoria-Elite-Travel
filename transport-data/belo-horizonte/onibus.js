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
                e utiliza micro-ônibus.
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
                como principal referência
                para identificar o serviço.
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
                O mesmo corredor
                pode receber várias linhas.
                Confirme se aquela parada
                atende a linha desejada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIOS E ITINERÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários, itinerários e pontos
          </h4>

          <p class="panel-intro">
            A SUMOB mantém ferramentas oficiais
            para localizar linhas,
            horários, itinerários
            e pontos de parada.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Horário
              </strong>

              <p>
                Consulte as partidas
                programadas da linha
                que você pretende utilizar.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Itinerário
              </strong>

              <p>
                Permite verificar
                as ruas e regiões
                atendidas pela linha.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ponto de ônibus
              </strong>

              <p>
                A consulta oficial permite
                pesquisar um endereço
                e visualizar os pontos
                e linhas próximos.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Horários e itinerários
            são dados operacionais
            e podem sofrer alterações.
            Para uma viagem específica,
            confira a informação oficial
            pouco antes de sair.

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
            A rede convencional
            atende diferentes tipos
            de deslocamento dentro
            de Belo Horizonte.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Bairro ↔ Centro
              </strong>

              <p>
                Linhas conectam
                bairros à região central
                e retornam à área de origem.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bairro → Centro
              </strong>

              <p>
                Existem serviços
                direcionados
                à Área Central.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Bairro ↔ Bairro
              </strong>

              <p>
                Também existem linhas
                que conectam regiões
                sem exigir passagem
                pelo Centro.
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
              para atender áreas
              com vias estreitas,
              acesso mais difícil
              ou topografia acentuada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Tarifa zero.
            </strong>

            As linhas dessa categoria
            possuem gratuidade permanente.

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como funciona o MOVE
          </h4>

          <p class="panel-intro">
            O MOVE é o sistema BRT
            de Belo Horizonte.
            Muitas viagens combinam
            linhas alimentadoras
            e troncais.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Linha alimentadora
              </strong>

              <p>
                Sai do bairro
                e leva o passageiro
                até uma estação
                de integração.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Estação
              </strong>

              <p>
                O passageiro entra
                na estrutura de integração
                do sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Linha troncal
              </strong>

              <p>
                Circula pelos principais
                corredores estruturais
                da cidade.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Conexão final
              </strong>

              <p>
                Dependendo do destino,
                outra linha pode completar
                a última parte
                do percurso.
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
                Um dos principais
                corredores estruturais
                do MOVE.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                Importante ligação
                entre a região central,
                Pampulha
                e o vetor Norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                Corredor utilizado
                pelas linhas troncais
                do vetor Norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                Corredor importante
                para os deslocamentos
                ligados à região
                de Venda Nova.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES DE INTEGRAÇÃO MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            4 estações de integração do MOVE
          </h4>

          <p class="panel-intro">
            São estruturas maiores
            onde ocorre a ligação
            entre linhas alimentadoras
            e linhas do MOVE.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Venda Nova
              </strong>

              <p>
                Rua Padre Pedro Pinto,
                no bairro Candelária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Próxima ao encontro
                da Avenida Vilarinho
                com Cristiano Machado
                e MG-010.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Avenida Cristiano Machado,
                entre o Anel Rodoviário
                e a Via 240.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Avenida Portugal,
                no bairro
                Jardim Atlântico.
              </p>

            </article>

          </div>


          <div class="fare-note">

            As quatro estações
            de integração do MOVE
            funcionam 24 horas.

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES BHBUS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Outras estações de integração
          </h4>

          <p class="panel-intro">
            Além das quatro estações MOVE,
            Belo Horizonte possui
            duas estações de integração
            do sistema BHBUS.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Barreiro
              </strong>

              <p>
                Avenida Afonso Vaz de Melo,
                na região do Barreiro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Diamante
              </strong>

              <p>
                Avenida João Rola Filho,
                no bairro Diamante.
              </p>

            </article>

          </div>


          <div class="fare-note">

            Barreiro e Diamante
            também funcionam 24 horas.

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES DE TRANSFERÊNCIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            37 estações de transferência do MOVE
          </h4>

          <p class="panel-intro">
            Elas ficam distribuídas
            pelos corredores estruturais
            e pela Área Central.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                14 estações
                de transferência.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                9 estações
                de transferência.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                6 estações
                de transferência.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                4 estações
                de transferência.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Área Central
              </strong>

              <p>
                Tamoios,
                Carijós,
                São Paulo
                e Rio de Janeiro.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              A transferência acontece
              dentro da própria estação.
            </strong>

            <p>
              O usuário pode desembarcar
              e embarcar em outras linhas
              dentro do mesmo espaço
              sem pagar uma nova passagem,
              conforme as regras
              do sistema.
            </p>

          </div>


          <div class="fare-note">

            As estações de transferência
            funcionam normalmente
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
              e atende trajetos específicos
              da cidade.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não possui integração tarifária
              com o Sistema Convencional
              ou MOVE.
            </strong>

            Embora também faça parte
            do transporte municipal,
            sua lógica tarifária
            é independente.

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
            O Madrugão amplia
            a operação dos ônibus municipais
            durante o período
            de menor oferta regular.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Madrugão
              </span>

              <strong>
                128 linhas
              </strong>

              <p>
                Operam entre
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
                Conecta áreas
                de vida noturna
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
                Faixa de operação
                publicada pela Prefeitura.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Linha 10
              </span>

              <strong>
                25 min
              </strong>

              <p>
                Intervalo programado
                entre as partidas.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              A Linha 10 custa R$ 6,25.
            </strong>

            <p>
              Com o Cartão BHBUS,
              é possível utilizar
              outra linha municipal
              dentro de 90 minutos
              sem pagar uma segunda tarifa,
              conforme a regra
              específica do serviço.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Por onde passa a Linha 10
            </strong>

            <p>
              O percurso atende pontos
              como Estação Central,
              Floresta,
              Praça da Liberdade,
              Savassi,
              Lourdes,
              Praça Raul Soares,
              Mercado Novo,
              área hospitalar
              e estações Carijós
              e Rio de Janeiro.
            </p>

          </div>


          <div class="fare-note">

            As linhas disponíveis
            durante a madrugada
            variam conforme a região.
            Para depender de uma linha específica,
            confirme a operação e o horário
            no dia da viagem.

          </div>

        </section>


        <!-- ==================================================
             PONTO FORA DO PONTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ponto Fora do Ponto
          </h4>

          <p class="panel-intro">
            Em determinados horários,
            passageiros podem solicitar
            desembarque fora do ponto regular,
            dentro das regras estabelecidas
            pela Prefeitura.
          </p>

          <div class="answer-block">

            <strong>
              Nos bairros
            </strong>

            <p>
              De segunda a sexta-feira,
              o benefício é permitido
              das 21h às 5h,
              conforme as regras
              do programa.
            </p>

          </div>


          <div class="fare-note">

            A parada precisa ocorrer
            em local onde seja possível
            realizar o desembarque
            com segurança
            e respeitando as regras de trânsito.

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
            Se a viagem cruza
            os limites de Belo Horizonte
            em direção a outro município
            da RMBH,
            ela pode pertencer
            ao sistema metropolitano estadual.
          </p>

          <div class="answer-block">

            <strong>
              O número da linha
              identifica o serviço.
            </strong>

            <p>
              Horário,
              itinerário,
              pontos de parada
              e tarifa dependem
              da linha metropolitana utilizada.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não confunda municipal
              com metropolitano.
            </strong>

            As linhas metropolitanas
            seguem regras operacionais,
            tarifárias e de bilhetagem
            diferentes da rede municipal
            de Belo Horizonte.

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
                  MOVE pode exigir conexão
                </strong>

                <p>
                  Muitas viagens combinam
                  alimentadora,
                  estação
                  e linha troncal.
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
                  Existe uma rede específica
                  do Madrugão,
                  mas confirme a linha
                  que atende sua região.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🌆
              </span>

              <div>

                <strong>
                  Vai para outra cidade?
                </strong>

                <p>
                  Verifique se o ônibus
                  pertence ao sistema
                  metropolitano.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
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
            href="https://prefeitura.pbh.gov.br/sumob/onibus/pontos-de-onibus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pontos de ônibus · PBH
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
