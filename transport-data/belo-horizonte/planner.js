// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.BELO_HORIZONTE_TRANSPORT_MODULES =
  window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


window.BELO_HORIZONTE_TRANSPORT_MODULES["planner"] = {

  kicker: "Belo Horizonte · planejamento de viagem",

  title: "Planeje o trajeto",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             COMO PENSAR A VIAGEM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar o deslocamento
          </h4>

          <p class="panel-intro">
            Em Belo Horizonte,
            metrô, MOVE e ônibus cumprem
            funções diferentes.
            O ponto de partida é entender
            qual deles cobre melhor
            a parte principal do percurso.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Destino próximo à Linha 1
              </strong>

              <p>
                O metrô pode concentrar
                a parte principal da viagem,
                com ônibus ou caminhada
                apenas na origem
                ou no destino.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Destino no eixo do MOVE
              </strong>

              <p>
                A viagem pode combinar
                alimentadora,
                estação de integração
                e linha troncal.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Fora desses eixos
              </strong>

              <p>
                A rede convencional
                amplia a cobertura
                entre bairros,
                Centro e outras regiões
                da cidade.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Outra cidade da RMBH
              </strong>

              <p>
                O deslocamento pode pertencer
                ao sistema metropolitano estadual,
                com tarifa e bilhetagem próprias.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o metrô tende a fazer sentido
          </h4>

          <p class="panel-intro">
            A Linha 1 é a linha metroviária
            disponível atualmente
            para o passageiro.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🚇</span>

              <strong>
                Linha 1
              </strong>

              <p>
                Eldorado
                ↔ Vilarinho.
              </p>

            </article>


            <article class="hours-card">

              <span>🏙️</span>

              <strong>
                Central
              </strong>

              <p>
                É uma das principais
                referências para acessar
                a região central
                de Belo Horizonte.
              </p>

            </article>


            <article class="hours-card">

              <span>🔄</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Importante ponto
                de conexão entre
                metrô,
                MOVE
                e ônibus.
              </p>

            </article>


            <article class="hours-card">

              <span>🚍</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Integra o metrô
                ao MOVE
                e a serviços do vetor Norte.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Novo Eldorado ainda não deve ser tratado
              como estação disponível.
            </strong>

            A expansão da Linha 1
            até Novo Eldorado
            continua sendo apresentada
            como implantação
            nos canais atuais do Metrô BH.

          </div>


          <div class="visitor-alert">

            <strong>
              Não planeje a viagem
              contando com a Linha 2.
            </strong>

            A Linha 2 está em implantação
            e não deve ser tratada
            como rede operacional completa
            para o passageiro.

          </div>

        </section>


        <!-- ==================================================
             MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como funciona uma viagem pelo MOVE
          </h4>

          <p class="panel-intro">
            O MOVE é o BRT municipal
            de Belo Horizonte.
            Uma única viagem pode envolver
            mais de um ônibus
            sem deixar de formar
            um único deslocamento.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Alimentadora
              </strong>

              <p>
                Uma linha local
                pode levar o passageiro
                do bairro até uma estação
                de integração.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Estação
              </strong>

              <p>
                A estação concentra
                as possibilidades
                de transferência
                para outros serviços.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Troncal
              </strong>

              <p>
                As linhas troncais
                percorrem os grandes
                corredores estruturais
                do sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Última etapa
              </strong>

              <p>
                Dependendo do destino,
                outra linha
                ou uma caminhada
                completa o percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CORREDORES MOVE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Eixos importantes do MOVE
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                Corredor importante
                entre a região central,
                Pampulha
                e o vetor Norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                Estrutura deslocamentos
                em direção
                ao vetor Nordeste
                e São Gabriel.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                Faz parte
                do eixo estrutural
                de ligação
                com o vetor Norte.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                É importante
                para os deslocamentos
                relacionados
                a Venda Nova.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ESTAÇÕES DE INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estações de integração
          </h4>

          <p class="panel-intro">
            Belo Horizonte possui
            quatro grandes estações
            de integração do MOVE
            e duas estações BHBUS.
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
                e serviços do MOVE.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Vilarinho
              </strong>

              <p>
                Conexão entre
                metrô
                e MOVE.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                São Gabriel
              </strong>

              <p>
                Conexão entre
                metrô,
                MOVE
                e ônibus.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                Pampulha
              </strong>

              <p>
                Importante estação
                para os deslocamentos
                da região da Pampulha.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Barreiro
              </strong>

              <p>
                Estação de integração
                do sistema BHBUS.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Diamante
              </strong>

              <p>
                Estação BHBUS
                na região
                do Barreiro.
              </p>

            </article>

          </div>


          <div class="fare-note">

            As seis estações
            funcionam 24 horas.

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
            Elas estão distribuídas
            pelos corredores estruturais
            e pela Área Central.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Antônio Carlos
              </strong>

              <p>
                14 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Cristiano Machado
              </strong>

              <p>
                9 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Pedro I
              </strong>

              <p>
                6 estações.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Vilarinho
              </strong>

              <p>
                4 estações.
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
              Transferência dentro da estação
            </strong>

            <p>
              O passageiro pode desembarcar
              e embarcar em outras linhas
              dentro do mesmo espaço
              sem pagar outra passagem,
              conforme as regras
              de utilização da estação.
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
             ÔNIBUS CONVENCIONAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o ônibus convencional ganha importância
          </h4>

          <div class="answer-block">

            <strong>
              Bairro fora do eixo do metrô
              ou do MOVE
            </strong>

            <p>
              A rede convencional
              amplia a cobertura
              para áreas da cidade
              que não possuem
              estação próxima.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Bairro ↔ Centro
            </strong>

            <p>
              Muitas linhas
              conectam diretamente
              bairros à Área Central.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Bairro ↔ Bairro
            </strong>

            <p>
              Também existem
              ligações transversais
              que evitam necessariamente
              passar pelo Centro.
            </p>

          </div>

        </section>


        <!-- ==================================================
             VILAS E FAVELAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Vilas e Favelas
          </h4>

          <div class="answer-block">

            <strong>
              13 linhas têm tarifa zero.
            </strong>

            <p>
              Elas utilizam veículos menores
              para atender áreas
              de acesso mais difícil
              e topografia acentuada.
            </p>

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
              em trajetos específicos
              dentro de Belo Horizonte.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Não conte com integração tarifária
              com o Convencional ou MOVE.
            </strong>

            O Sistema Suplementar
            possui lógica tarifária independente.

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO E INTEGRAÇÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O meio de pagamento pode mudar o custo
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Ônibus municipal
              </span>

              <strong>
                BHBUS
              </strong>

              <p>
                É a referência
                para aproveitar
                as integrações tarifárias
                da rede municipal.
              </p>

              <span class="route-compare-result">
                Integração
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metrô avulso
              </span>

              <strong>
                Pagamento digital
              </strong>

              <p>
                Aproximação,
                QR Code
                e autoatendimento
                resolvem uma viagem unitária.
              </p>

              <span class="route-compare-result">
                Sem integração ônibus
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Metropolitano
              </span>

              <strong>
                Cartão ÓTIMO
              </strong>

              <p>
                É o sistema
                de bilhetagem utilizado
                na rede metropolitana.
              </p>

              <span class="route-compare-result">
                Sistema estadual
              </span>

            </article>

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
            O programa Madrugão
            amplia a oferta municipal
            entre 0h e 3h59.
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
                Rede especial
                durante a madrugada.
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
                Liga áreas importantes
                de vida noturna
                a conexões
                do sistema MOVE.
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
                Horário estrutural
                publicado pela Prefeitura.
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
                entre partidas.
              </p>

            </article>

          </div>


          <div class="answer-block">

            <strong>
              Linha 10: principais referências
            </strong>

            <p>
              O percurso passa por
              Estação Central,
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

            A rede disponível
            para uma origem específica
            e os horários das partidas
            são informações operacionais.
            Confirme esses dados
            no dia do deslocamento.

          </div>

        </section>


        <!-- ==================================================
             DOMINGOS E FERIADOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Domingos e feriados
          </h4>

          <div class="visitor-alert">

            <strong>
              Ônibus municipais convencionais
              e suplementares são gratuitos.
            </strong>

            O Catraca Livre
            vale para viagens iniciadas
            entre 0h e 23h59.

          </div>


          <div class="fare-note">

            O benefício não inclui
            o metrô
            nem a rede metropolitana estadual.

          </div>

        </section>


        <!-- ==================================================
             REDE DE DOMINGO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            A rede muda aos domingos
          </h4>

          <div class="answer-block">

            <strong>
              Nem todas as linhas
              mantêm a mesma operação.
            </strong>

            <p>
              Belo Horizonte possui
              uma configuração específica
              da rede aos domingos,
              com linhas que circulam,
              linhas que não operam
              e alternativas para determinadas regiões.
            </p>

          </div>


          <div class="fare-note">

            A gratuidade é estável,
            mas a linha disponível
            para um trajeto específico
            deve ser confirmada
            na Rede de Domingo da PBH.

          </div>

        </section>


        <!-- ==================================================
             METROPOLITANO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando entra o sistema metropolitano
          </h4>

          <p class="panel-intro">
            Se o deslocamento cruza
            Belo Horizonte
            em direção a outro município
            da Região Metropolitana,
            pode ser necessário utilizar
            uma linha estadual.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Dentro de BH
              </span>

              <strong>
                Municipal
              </strong>

              <p>
                Convencional,
                MOVE
                e Suplementar
                pertencem à estrutura municipal.
              </p>

              <span class="route-compare-result">
                PBH / SUMOB
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Entre municípios
              </span>

              <strong>
                Metropolitano
              </strong>

              <p>
                Tarifas,
                linhas,
                horários
                e bilhetagem
                pertencem ao sistema estadual.
              </p>

              <span class="route-compare-result">
                Governo de Minas
              </span>

            </article>

          </div>


          <div class="fare-note">

            No sistema metropolitano,
            tarifa e horário realmente
            dependem da linha específica.
            Esses dados devem ser consultados
            no serviço estadual atualizado.

          </div>

        </section>


        <!-- ==================================================
             TEMPO REAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que precisa ser confirmado no momento da viagem
          </h4>

          <p class="panel-intro">
            A estrutura da rede
            está explicada acima.
            Já alguns dados mudam
            ao longo do dia.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Horário da linha
              </strong>

              <p>
                As partidas variam
                conforme linha,
                dia e período.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Itinerário operacional
              </strong>

              <p>
                Desvios e alterações
                podem modificar
                temporariamente
                o percurso.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ponto de embarque
              </strong>

              <p>
                A PBH permite pesquisar
                os pontos e as linhas
                que passam por determinado endereço.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Posição do ônibus
              </strong>

              <p>
                A ferramenta em tempo real
                mostra veículos
                e previsão de chegada.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO COMPARAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como comparar duas opções
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Menor tempo
              </span>

              <strong>
                Mais conexões
              </strong>

              <p>
                Pode valer a pena
                quando as transferências
                são simples e bem conectadas.
              </p>

              <span class="route-compare-result">
                Prioridade: tempo
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Menos trocas
              </span>

              <strong>
                Viagem mais direta
              </strong>

              <p>
                Pode ser mais confortável
                mesmo que o percurso
                leve alguns minutos a mais.
              </p>

              <span class="route-compare-result">
                Prioridade: simplicidade
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Menos caminhada
              </span>

              <strong>
                Maior conforto
              </strong>

              <p>
                Pode fazer diferença
                com bagagem,
                chuva,
                calor
                ou mobilidade reduzida.
              </p>

              <span class="route-compare-result">
                Prioridade: conforto
              </span>

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
            href="https://prefeitura.pbh.gov.br/sumob/onibus-em-tempo-real"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ônibus em tempo real · PBH
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
            href="https://prefeitura.pbh.gov.br/sumob/onibus/rede-de-domingo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rede de Domingo · PBH
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
            href="https://www.mg.gov.br/servico/obter-informacoes-sobre-o-transporte-coletivo-da-regiao-metropolitana-de-belo-horizonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · Governo de Minas
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
