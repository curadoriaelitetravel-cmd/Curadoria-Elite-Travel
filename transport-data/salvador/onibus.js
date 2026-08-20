// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: ÔNIBUS, BRT E METROPOLITANOS
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["bus"] = {

  kicker: "Salvador · rede rodoviária",

  title: "Ônibus e BRT",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Três redes podem aparecer no seu trajeto
          </h4>

          <p class="panel-intro">
            Em Salvador,
            ônibus municipal,
            BRT
            e ônibus metropolitano
            cumprem funções diferentes.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Circula dentro de Salvador
                e conecta bairros,
                terminais,
                metrô
                e outros pontos da cidade.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                BRT Salvador
              </strong>

              <p>
                Sistema municipal
                com cinco linhas
                e estações próprias.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ônibus metropolitano
              </strong>

              <p>
                Liga Salvador
                a municípios
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
            Como identificar o ônibus certo
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
                Use o código da linha
                como primeira referência.
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
                O letreiro confirma
                o sentido da viagem.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                3
              </span>

              <strong>
                Confira o embarque
              </strong>

              <p>
                Uma mesma região
                pode possuir vários pontos,
                plataformas
                ou estações.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT Salvador
          </h4>

          <p class="panel-intro">
            O sistema possui
            cinco linhas em operação
            e conecta os eixos
            da Rodoviária,
            Pituba,
            Rio Vermelho
            e Lapa.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#235a95",
              "B1",
              "Estação BRT Rodoviária ↔ Pituba",
              "BRT",
              "Via Cidadela",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B2",
              "Estação BRT Rodoviária ↔ Rio Vermelho",
              "BRT",
              "Via Pituba e Amaralina",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B3",
              "Estação BRT Rodoviária ↔ Pituba",
              "BRT",
              "Via Paulo VI",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B4",
              "Pituba ↔ Lapa",
              "BRT",
              "Eixo Pituba–Centro",
              "Prefeitura de Salvador"
            )}

            ${createLineMiniCard(
              "#235a95",
              "B5",
              "Estação BRT Rodoviária ↔ Lapa",
              "BRT",
              "Eixo Rodoviária–Centro",
              "Prefeitura de Salvador"
            )}

          </div>

        </section>


        <!-- ==================================================
             ALERTA RODOVIÁRIA BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atenção ao nome “Rodoviária” no BRT
          </h4>

          <div class="visitor-alert">

            <strong>
              Estação BRT Rodoviária
              não é a Nova Rodoviária da Bahia.
            </strong>

            As linhas B1,
            B2,
            B3
            e B5
            ainda utilizam “Rodoviária”
            como referência no nome oficial
            divulgado para o BRT.

            Essa estação fica no eixo
            da região do Shopping da Bahia.

          </div>


          <div class="answer-block">

            <strong>
              A rodoviária intermunicipal
              mudou para Águas Claras.
            </strong>

            <p>
              Desde 20 de janeiro de 2026,
              a principal rodoviária
              de Salvador funciona
              no Terminal Salvador,
              em Águas Claras.
            </p>

          </div>

        </section>


        <!-- ==================================================
             COMO USAR BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como usar o BRT
          </h4>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>
                📍
              </span>

              <strong>
                1. Localize a estação
              </strong>

              <p>
                O embarque ocorre
                nas estações
                atendidas pela linha.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                🔢
              </span>

              <strong>
                2. Identifique a linha
              </strong>

              <p>
                B1,
                B2,
                B3,
                B4
                e B5
                possuem percursos diferentes.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                ↔️
              </span>

              <strong>
                3. Confira o sentido
              </strong>

              <p>
                Observe o destino
                antes de entrar
                no veículo.
              </p>

            </article>


            <article class="bus-use-step">

              <span>
                💳
              </span>

              <strong>
                4. Use a bilhetagem adequada
              </strong>

              <p>
                Para integração,
                utilize um cartão
                compatível com
                os sistemas envolvidos.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             B4 E B5
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT entre Pituba, Lapa e região da Rodoviária
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                B4 · Pituba ↔ Lapa
              </strong>

              <p>
                Utiliza o trecho
                que passa por estações
                como Rio Vermelho,
                HGE,
                Vasco da Gama
                e Barris
                até a Lapa.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                B5 · Rodoviária ↔ Lapa
              </strong>

              <p>
                Liga a Estação BRT Rodoviária
                à Lapa
                pelo corredor do sistema.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A Prefeitura informa
            operação diária
            das linhas B4 e B5,
            com programação própria.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipal
          </h4>

          <p class="panel-intro">
            A rede convencional
            complementa metrô,
            BRT
            e terminais
            e alcança áreas
            fora dos corredores estruturais.
          </p>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Linha
              </strong>

              <p>
                Identifique
                o código e o destino
                antes do embarque.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Ponto
              </strong>

              <p>
                Confirme
                o ponto correto
                para o sentido
                da viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Integração
              </strong>

              <p>
                Dependendo do trajeto,
                combinar ônibus,
                metrô
                ou BRT
                pode reduzir etapas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🎫</span>

              <strong>
                Pagamento
              </strong>

              <p>
                Bilhete Avulso
                e cartões compatíveis
                são explicados
                na seção “Como pagar”.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TERMINAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pontos importantes de conexão
          </h4>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🏙️</span>

              <strong>
                Lapa
              </strong>

              <p>
                Grande terminal
                do transporte urbano
                e ponto final
                das linhas B4 e B5.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚇</span>

              <strong>
                Pirajá
              </strong>

              <p>
                Conecta ônibus
                à Linha 1
                do metrô.
              </p>

            </article>


            <article class="bus-system-card">

              <span>✈️</span>

              <strong>
                Terminal Aeroporto
              </strong>

              <p>
                Recebe linhas
                metropolitanas
                e possui conexão
                com o sistema metroviário.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Mussurunga
              </strong>

              <p>
                Importante terminal
                para conexões
                urbanas
                e metropolitanas.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Conecta metrô,
                ônibus urbanos,
                metropolitanos
                e a Nova Rodoviária.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                Terminal Shopping da Bahia
              </strong>

              <p>
                Mantém atendimento
                de linhas municipais
                na região
                da antiga rodoviária.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             NOVA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Nova Rodoviária da Bahia
          </h4>

          <div class="visitor-alert">

            <strong>
              Para viagens rodoviárias,
              a referência agora é Águas Claras.
            </strong>

            A Nova Rodoviária da Bahia —
            Terminal Salvador —
            funciona no bairro
            de Águas Claras
            desde 20 de janeiro de 2026.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                O terminal possui
                conexão direta
                com o sistema metroviário.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus urbanos
              </strong>

              <p>
                O Terminal Águas Claras
                integra a nova estrutura
                à rede municipal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Metropolitanos
              </strong>

              <p>
                Linhas metropolitanas
                também utilizam
                Águas Claras
                como terminal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Rodoviários
              </strong>

              <p>
                Serviços intermunicipais
                e interestaduais
                partem da nova estrutura.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ANTIGA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            E a região da antiga Rodoviária?
          </h4>

          <div class="answer-block">

            <strong>
              O Terminal Shopping da Bahia
              continua funcionando.
            </strong>

            <p>
              Ele permanece
              como terminal urbano
              para linhas municipais.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Cinco linhas municipais
              tiveram o nome atualizado.
            </strong>

            <p>
              Os códigos permaneceram,
              mas “Rodoviária”
              foi substituído
              por “Terminal Shopping da Bahia”
              na nomenclatura.
            </p>

          </div>


          <div class="fare-note">

            Portanto,
            “Terminal Shopping da Bahia”,
            “Estação BRT Rodoviária”
            e “Nova Rodoviária da Bahia”
            não são a mesma referência.

          </div>

        </section>


        <!-- ==================================================
             COMO CHEGAR À NOVA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como chegar à Nova Rodoviária
            pelo transporte público
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Saindo da Lapa
              </span>

              <strong>
                Metrô · Linha 1
              </strong>

              <p>
                A Prefeitura indica
                a Linha 1
                para chegar
                a Águas Claras.
              </p>

              <span class="fare-scenario-result">
                Terminal Águas Claras
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Saindo de Pirajá
              </span>

              <strong>
                Metrô ou linha 1720
              </strong>

              <p>
                Além do metrô,
                existe a linha
                1720 —
                Terminal Águas Claras
                x Estação Pirajá.
              </p>

              <span class="fare-scenario-result">
                Duas alternativas
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Saindo de Mussurunga
              </span>

              <strong>
                Linha 2 + Linha 1
              </strong>

              <p>
                Utilize a Linha 2
                até Acesso Norte
                e faça a conexão
                com a Linha 1.
              </p>

              <span class="fare-scenario-result">
                Águas Claras
              </span>

            </article>

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
            Se o destino fica
            em outro município
            da Região Metropolitana,
            a viagem pode utilizar
            a rede regulada pela AGERBA.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                67 linhas
              </strong>

              <p>
                Rede divulgada
                pela AGERBA
                em junho de 2026.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Quatro operadoras
              </strong>

              <p>
                As linhas publicadas
                estão distribuídas
                entre quatro empresas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Vários terminais
              </strong>

              <p>
                Águas Claras,
                Aeroporto,
                Mussurunga
                e Pirajá
                aparecem em diferentes linhas.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Tarifa por linha
              </strong>

              <p>
                O preço depende
                do serviço
                e do percurso utilizado.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CONEXÕES METROPOLITANAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos úteis de conexões metropolitanas
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Camaçari
              </span>

              <strong>
                Linha 800A
              </strong>

              <p>
                Camaçari
                ↔ Terminal Águas Claras.
              </p>

              <span class="fare-scenario-result">
                Águas Claras
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Camaçari
              </span>

              <strong>
                Linha 808I
              </strong>

              <p>
                Camaçari
                ↔ Terminal Mussurunga
                via Parafuso.
              </p>

              <span class="fare-scenario-result">
                Mussurunga
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Praia do Forte
              </span>

              <strong>
                Linha 138
              </strong>

              <p>
                Praia do Forte
                ↔ Terminal Aeroporto.
              </p>

              <span class="fare-scenario-result">
                Terminal Aeroporto
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Arembepe
              </span>

              <strong>
                Linha 857I
              </strong>

              <p>
                Arembepe
                ↔ Terminal Aeroporto.
              </p>

              <span class="fare-scenario-result">
                Terminal Aeroporto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             HORÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários e operação
          </h4>

          <div class="answer-block">

            <strong>
              Cada linha possui
              sua própria programação.
            </strong>

            <p>
              Não existe um horário único
              para ônibus municipais,
              BRT
              ou linhas metropolitanas.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Este é um dado
              que vale confirmar antes de sair.
            </strong>

            Horários,
            alterações temporárias
            e operações especiais
            podem mudar.

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento
          </h4>

          <div class="answer-block">

            <strong>
              Ônibus municipal
            </strong>

            <p>
              O Bilhete Avulso SalvadorCARD
              é uma alternativa
              sem cadastro
              para o visitante.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              BRT
            </strong>

            <p>
              Faz parte
              da rede tarifária municipal
              e pode participar
              da integração
              com o metrô.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Metropolitano
            </strong>

            <p>
              A tarifa depende
              da linha
              e pode haver integração
              com o sistema metroviário.
            </p>

          </div>


          <div class="fare-note">

            Compra,
            cartões
            e recarga
            estão detalhados
            na seção “Como pagar”.

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
                  Use número + destino
                </strong>

                <p>
                  Os dois juntos
                  reduzem o risco
                  de embarcar
                  no sentido errado.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🧳
              </span>

              <div>

                <strong>
                  Vai viajar de rodoviária?
                </strong>

                <p>
                  A Nova Rodoviária da Bahia
                  fica em Águas Claras.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🚍
              </span>

              <div>

                <strong>
                  “Rodoviária” no BRT
                  é outra referência
                </strong>

                <p>
                  Não confunda
                  Estação BRT Rodoviária
                  com o terminal rodoviário
                  de Águas Claras.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                🌆
              </span>

              <div>

                <strong>
                  Outra cidade da RMS?
                </strong>

                <p>
                  Identifique
                  a linha metropolitana
                  correspondente.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                📅
              </span>

              <div>

                <strong>
                  Operações especiais
                </strong>

                <p>
                  Carnaval,
                  São João
                  e grandes eventos
                  podem alterar
                  temporariamente o serviço.
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
            href="https://mobilidade.salvador.ba.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://mobilidade.salvador.ba.gov.br/trecho-2-do-brt-salvador-completa-um-ano-de-funcionamento-e-beneficia-milhares-de-cidadaos-de-15-bairros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linhas do BRT · Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://mobilidade.salvador.ba.gov.br/linhas-de-onibus-da-rodoviaria-serao-renomeadas-a-partir-desta-quarta-feira-21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mudança da Rodoviária · Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/noticias/2026-06/8381/agerba-reforca-operacao-do-transporte-metropolitano-e-amplia-oferta-para"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linhas metropolitanas · AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte metropolitano · AGERBA
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
