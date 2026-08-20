// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.SALVADOR_TRANSPORT_MODULES =
  window.SALVADOR_TRANSPORT_MODULES || {};


window.SALVADOR_TRANSPORT_MODULES["planner"] = {

  kicker: "Salvador · planejamento de viagem",

  title: "Planeje o trajeto",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             POR ONDE COMEÇAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Por onde começar?
          </h4>

          <p class="panel-intro">
            Em Salvador,
            a melhor combinação depende
            da região de origem,
            do destino
            e de quais sistemas
            atendem o percurso.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Destino no eixo do metrô
              </strong>

              <p>
                As Linhas 1 e 2
                podem resolver
                a parte principal
                do deslocamento
                e combinar com ônibus
                ou BRT.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Destino no eixo do BRT
              </strong>

              <p>
                O BRT possui
                cinco linhas
                entre Rodoviária,
                Pituba,
                Rio Vermelho
                e Lapa.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚌
              </span>

              <strong>
                Fora dos grandes eixos
              </strong>

              <p>
                Os ônibus municipais
                ampliam a cobertura
                entre bairros
                e terminais.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚊
              </span>

              <strong>
                Calçada e Lobato
              </strong>

              <p>
                O VLT já transporta passageiros
                em operação assistida
                no primeiro trecho.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                ⛴️
              </span>

              <strong>
                Ilha de Itaparica
              </strong>

              <p>
                O Ferry-Boat
                liga São Joaquim
                a Bom Despacho.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Outra cidade da RMS
              </strong>

              <p>
                A viagem pode envolver
                metrô
                e ônibus metropolitano
                regulado pela AGERBA.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE COMPARAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que comparar antes de escolher
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>⏱️</span>

              <strong>
                Tempo total
              </strong>

              <p>
                Inclua caminhada,
                espera
                e tempo de integração.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Número de trocas
              </strong>

              <p>
                Uma rota mais rápida
                nem sempre é
                a mais simples.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚶</span>

              <strong>
                Caminhada
              </strong>

              <p>
                Calor,
                chuva,
                ladeiras
                e bagagem
                podem mudar bastante
                a escolha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Integração tarifária
              </strong>

              <p>
                Algumas combinações
                exigem cartão compatível
                para reconhecer
                a integração.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                Cada sistema
                e cada linha
                possuem programação própria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Operação especial
              </strong>

              <p>
                Carnaval,
                São João,
                grandes eventos
                e feriados
                podem alterar
                temporariamente a rede.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar o metrô
          </h4>

          <p class="panel-intro">
            Salvador possui
            duas linhas metroviárias
            em operação.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>1</span>

              <strong>
                Linha 1
              </strong>

              <p>
                Liga Lapa
                ao eixo de Pirajá
                e Águas Claras.
              </p>

            </article>


            <article class="hours-card">

              <span>2</span>

              <strong>
                Linha 2
              </strong>

              <p>
                Liga Acesso Norte
                ao eixo do Aeroporto.
              </p>

            </article>


            <article class="hours-card">

              <span>🔄</span>

              <strong>
                Acesso Norte
              </strong>

              <p>
                É o ponto
                de transferência
                entre as Linhas 1 e 2.
              </p>

            </article>


            <article class="hours-card">

              <span>🧳</span>

              <strong>
                Águas Claras
              </strong>

              <p>
                Atende a região
                da Nova Rodoviária
                da Bahia.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO LER A ROTA DE METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como interpretar uma rota de metrô
          </h4>

          <div class="route-example">

            <div class="route-phone">

              <span class="route-phone-title">
                Exemplo de trajeto
              </span>

              <div class="route-step-list">

                <div class="route-step">

                  <span class="route-step-icon">
                    🚶
                  </span>

                  <div>

                    <strong>
                      Caminhe até a estação
                    </strong>

                    <small>
                      Escolha o acesso mais conveniente
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🚇
                  </span>

                  <div>

                    <strong>
                      Identifique a linha
                    </strong>

                    <small>
                      Linha 1 ou Linha 2
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    ↔️
                  </span>

                  <div>

                    <strong>
                      Confira o sentido
                    </strong>

                    <small>
                      Veja o terminal indicado
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🔄
                  </span>

                  <div>

                    <strong>
                      Transfira em Acesso Norte
                    </strong>

                    <small>
                      Apenas se precisar mudar de linha
                    </small>

                  </div>

                </div>

              </div>

            </div>


            <div class="route-explanation">

              <article class="route-explanation-card">

                <strong>
                  Linha 1
                </strong>

                <p>
                  Útil para Lapa,
                  Pirajá,
                  Águas Claras
                  e conexões nesse eixo.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Linha 2
                </strong>

                <p>
                  Útil para o eixo
                  da Avenida Paralela
                  e Aeroporto.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Acesso Norte
                </strong>

                <p>
                  É onde as duas linhas
                  se encontram.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Última etapa
                </strong>

                <p>
                  Ônibus
                  ou BRT
                  podem completar
                  o percurso.
                </p>

              </article>

            </div>

          </div>

        </section>


        <!-- ==================================================
             AEROPORTO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aeroporto
          </h4>

          <div class="answer-block">

            <strong>
              O eixo do Aeroporto
              é atendido pela Linha 2.
            </strong>

            <p>
              Dependendo da origem,
              pode ser necessário
              utilizar Acesso Norte
              para trocar
              da Linha 1
              para a Linha 2.
            </p>

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando o BRT ganha importância
          </h4>

          <p class="panel-intro">
            O sistema possui
            cinco linhas
            e estrutura deslocamentos
            entre Rodoviária,
            Pituba,
            Rio Vermelho
            e Lapa.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                B1
              </strong>

              <p>
                Estação BRT Rodoviária
                ↔ Pituba
                via Cidadela.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                B2
              </strong>

              <p>
                Estação BRT Rodoviária
                ↔ Rio Vermelho
                via Pituba e Amaralina.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                B3
              </strong>

              <p>
                Estação BRT Rodoviária
                ↔ Pituba
                via Paulo VI.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                B4
              </strong>

              <p>
                Pituba
                ↔ Lapa.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                B5
              </strong>

              <p>
                Estação BRT Rodoviária
                ↔ Lapa.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ALERTA RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Cuidado com a palavra “Rodoviária”
          </h4>

          <div class="visitor-alert">

            <strong>
              Estação BRT Rodoviária
              não é a Nova Rodoviária da Bahia.
            </strong>

            A estação do BRT
            mantém essa denominação
            no eixo da região
            do Shopping da Bahia.

            A rodoviária intermunicipal
            funciona atualmente
            em Águas Claras.

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando entram os ônibus municipais
          </h4>

          <p class="panel-intro">
            Eles ampliam a cobertura
            para áreas da cidade
            que não ficam diretamente
            nos eixos do metrô
            ou do BRT.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">

              <span>1</span>

              <strong>
                Identifique o destino
              </strong>

              <p>
                Veja em qual bairro
                ou região
                ele está.
              </p>

            </article>


            <article class="bus-use-step">

              <span>2</span>

              <strong>
                Localize a linha
              </strong>

              <p>
                Use número
                e destino
                como referência.
              </p>

            </article>


            <article class="bus-use-step">

              <span>3</span>

              <strong>
                Veja o ponto
              </strong>

              <p>
                Confirme o local
                correto de embarque
                e o sentido.
              </p>

            </article>


            <article class="bus-use-step">

              <span>4</span>

              <strong>
                Considere a integração
              </strong>

              <p>
                Metrô
                ou BRT
                podem resolver
                outra parte
                do percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT em operação assistida
          </h4>

          <p class="panel-intro">
            O primeiro trecho
            começou a transportar passageiros
            em 29 de junho de 2026.
          </p>

          <div class="hours-grid">

            <article class="hours-card">

              <span>🚊</span>

              <strong>
                Trecho atual
              </strong>

              <p>
                Calçada ↔ Lobato,
                com percurso
                de aproximadamente 4 km.
              </p>

            </article>


            <article class="hours-card">

              <span>📍</span>

              <strong>
                Paradas
              </strong>

              <p>
                O trecho assistido
                atende São Joaquim,
                Calçada 2,
                Estação Calçada,
                Pátio Calçada,
                Santa Luzia,
                Lobato
                e Marisqueiras.
              </p>

            </article>


            <article class="hours-card">

              <span>📅</span>

              <strong>
                Dias
              </strong>

              <p>
                Segunda a sexta-feira,
                exceto feriados.
              </p>

            </article>


            <article class="hours-card">

              <span>🕗</span>

              <strong>
                Horário
              </strong>

              <p>
                Das 8h às 16h
                nesta etapa assistida.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Ainda é operação assistida.
            </strong>

            Não conte com o VLT
            como se toda a rede planejada
            já estivesse disponível.

            Para um compromisso essencial,
            confirme a operação
            pouco antes da viagem.

          </div>

        </section>


        <!-- ==================================================
             FERRY
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ferry-Boat para a Ilha de Itaparica
          </h4>

          <p class="panel-intro">
            O sistema liga
            São Joaquim,
            em Salvador,
            a Bom Despacho,
            na Ilha de Itaparica.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Passageiro a pé
              </strong>

              <p>
                R$ 7,20
                em dia útil
                ou R$ 9,50
                aos sábados,
                domingos
                e feriados.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Com veículo
              </strong>

              <p>
                A tarifa muda
                conforme a categoria
                do veículo
                e o dia da travessia.
              </p>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Horário é informação operacional.
            </strong>

            A programação,
            quantidade de embarcações
            e operações especiais
            podem mudar
            conforme o período.

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
              A rodoviária intermunicipal
              agora fica em Águas Claras.
            </strong>

            O Terminal Salvador
            entrou em operação
            em 20 de janeiro de 2026.

          </div>


          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Metrô
              </strong>

              <p>
                Há conexão direta
                entre o terminal
                e o sistema metroviário.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                O Terminal Águas Claras
                reúne conexões
                urbanas
                e metropolitanas.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO CHEGAR À RODOVIÁRIA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como chegar à Nova Rodoviária
            pelo transporte público
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Região da Lapa
              </span>

              <strong>
                Linha 1
              </strong>

              <p>
                Utilize o metrô
                no sentido
                de Águas Claras.
              </p>

              <span class="fare-scenario-result">
                Estação Águas Claras
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Pirajá
              </span>

              <strong>
                Linha 1 ou ônibus 1720
              </strong>

              <p>
                O deslocamento
                pode ser feito
                pelo metrô
                ou pela linha municipal
                Terminal Águas Claras
                x Estação Pirajá.
              </p>

              <span class="fare-scenario-result">
                Águas Claras
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Eixo da Linha 2
              </span>

              <strong>
                Linha 2 + Linha 1
              </strong>

              <p>
                Vá até Acesso Norte,
                troque para a Linha 1
                e siga
                para Águas Claras.
              </p>

              <span class="fare-scenario-result">
                1 transferência
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             REGIÃO METROPOLITANA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Destinos na Região Metropolitana
          </h4>

          <p class="panel-intro">
            Salvador se conecta
            a outros municípios
            por linhas metropolitanas
            reguladas pela AGERBA.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Camaçari
              </strong>

              <p>
                Há conexões
                com terminais
                como Águas Claras
                e Mussurunga.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Praia do Forte
              </strong>

              <p>
                A linha metropolitana 138
                liga Praia do Forte
                ao Terminal Aeroporto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Arembepe
              </strong>

              <p>
                A linha 857I
                liga Arembepe
                ao Terminal Aeroporto.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Lauro de Freitas
              </strong>

              <p>
                O eixo do metrô
                e a rede metropolitana
                podem participar
                do deslocamento,
                dependendo do destino.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO COMPARAR ROTAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como comparar duas rotas
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Mais rápida
              </span>

              <strong>
                Mais integrações
              </strong>

              <p>
                Pode valer a pena
                quando as conexões
                são simples
                e próximas.
              </p>

              <span class="route-compare-result">
                Prioridade: tempo
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Mais direta
              </span>

              <strong>
                Menos trocas
              </strong>

              <p>
                Pode reduzir
                o atrito
                durante a viagem,
                mesmo levando
                alguns minutos a mais.
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
                Mais conforto
              </strong>

              <p>
                Pode ser relevante
                no calor,
                na chuva,
                com bagagem
                ou em áreas de ladeira.
              </p>

              <span class="route-compare-result">
                Prioridade: conforto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE CONFIRMAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que realmente precisa ser confirmado
            no dia da viagem
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                Ônibus,
                BRT,
                VLT,
                Ferry
                e metropolitanos
                possuem programação própria.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Ponto ou plataforma
              </strong>

              <p>
                Confirme o local
                de embarque
                do serviço escolhido.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Alterações temporárias
              </strong>

              <p>
                Eventos,
                obras
                e operações especiais
                podem modificar
                o serviço.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚊</span>

              <strong>
                VLT
              </strong>

              <p>
                Por estar
                em operação assistida,
                merece confirmação
                adicional antes do uso.
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
            href="https://mobilidade.salvador.ba.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mobilidade Salvador
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTB · Governo da Bahia
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/trilhos/noticias/2026-06/1068/inicio-da-operacao-assistida-do-vlt-marca-nova-fase-da-mobilidade-em-salvador"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operação assistida do VLT · CTB
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERBA
          </a>


          <a
            class="official-link"
            href="https://www.ba.gov.br/agerba/noticias/2026-06/8384/novo-terminal-rodoviario-de-salvador-amplia-servicos-e-fortalece-logistica-de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Rodoviária · AGERBA
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
