// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


window.RIO_TRANSPORT_MODULES["planner"] = {

  kicker: "Rio de Janeiro · planejamento de viagem",

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
            No Rio,
            a melhor rota nem sempre usa
            um único sistema.
            Metrô,
            trem,
            BRT,
            VLT,
            ônibus
            e barcas
            cumprem funções diferentes.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚇
              </span>

              <strong>
                Centro, Zona Sul, Tijuca ou Barra
              </strong>

              <p>
                O metrô costuma ser
                um bom ponto de partida
                quando origem e destino
                ficam próximos
                às Linhas 1, 2 ou 4.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚆
              </span>

              <strong>
                Zona Norte, Zona Oeste ou Baixada
              </strong>

              <p>
                Os trens ganham importância
                para deslocamentos
                pelos cinco principais ramais
                da rede metropolitana.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚍
              </span>

              <strong>
                Barra, Recreio ou Zona Oeste
              </strong>

              <p>
                O BRT pode estruturar
                boa parte do trajeto,
                dependendo do corredor
                e do serviço escolhido.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🚋
              </span>

              <strong>
                Centro e Região Portuária
              </strong>

              <p>
                O VLT conecta
                Santos Dumont,
                Praça XV,
                Central,
                Praia Formosa
                e Terminal Gentileza.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                ⛴️
              </span>

              <strong>
                Niterói, Paquetá ou Ilha do Governador
              </strong>

              <p>
                As barcas podem ser
                a alternativa mais direta,
                mas funcionam
                com partidas programadas.
              </p>

            </article>


            <article class="planner-tool-card">

              <span class="planner-tool-icon">
                🌆
              </span>

              <strong>
                Outro município
              </strong>

              <p>
                Compare trem,
                barca
                ou ônibus intermunicipal
                de acordo com o destino.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             COMO ESCOLHER
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
                Inclua espera,
                caminhada
                e tempo de transferência.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🔄</span>

              <strong>
                Quantidade de trocas
              </strong>

              <p>
                Uma rota um pouco mais longa
                pode ser mais confortável
                se eliminar baldeações.
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
                bagagem
                e relevo
                podem mudar a melhor escolha.
              </p>

            </article>


            <article class="planner-check-card">

              <span>💳</span>

              <strong>
                Bilhetagem
              </strong>

              <p>
                Jaé
                e Riocard
                cumprem funções diferentes
                na rede.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🕒</span>

              <strong>
                Horário
              </strong>

              <p>
                Trem,
                barcas,
                ônibus
                e BRT
                possuem programações próprias.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚠️</span>

              <strong>
                Operação no dia
              </strong>

              <p>
                Eventos,
                obras
                e operações especiais
                podem alterar o serviço.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar o MetrôRio
          </h4>

          <p class="panel-intro">
            As Linhas 1,
            2
            e 4
            cobrem grande parte
            dos principais eixos turísticos
            e de conexão da cidade.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Linha 1
              </strong>

              <p>
                Liga a Tijuca
                ao Centro,
                Zona Sul
                e Ipanema.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 2
              </strong>

              <p>
                Liga Pavuna
                à Zona Norte
                e segue até Botafogo
                na configuração publicada
                pelo MetrôRio.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Linha 4
              </strong>

              <p>
                Conecta Ipanema,
                Leblon,
                São Conrado
                e Jardim Oceânico.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Barra da Tijuca
              </strong>

              <p>
                Jardim Oceânico
                conecta metrô
                e BRT.
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
                      Veja qual acesso fica mais próximo
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
                      Linha 1, 2 ou 4
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
                      Use o terminal indicado como referência
                    </small>

                  </div>

                </div>


                <div class="route-step">

                  <span class="route-step-icon">
                    🚪
                  </span>

                  <div>

                    <strong>
                      Escolha a saída correta
                    </strong>

                    <small>
                      Algumas estações possuem vários acessos
                    </small>

                  </div>

                </div>

              </div>

            </div>


            <div class="route-explanation">

              <article class="route-explanation-card">

                <strong>
                  Centro
                </strong>

                <p>
                  Central,
                  Saara,
                  Uruguaiana,
                  Carioca
                  e Cinelândia
                  atendem diferentes partes
                  da região central.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Copacabana
                </strong>

                <p>
                  Cardeal Arcoverde,
                  Siqueira Campos
                  e Cantagalo.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Ipanema
                </strong>

                <p>
                  General Osório
                  e Nossa Senhora da Paz.
                </p>

              </article>


              <article class="route-explanation-card">

                <strong>
                  Barra
                </strong>

                <p>
                  Jardim Oceânico
                  é o terminal metroviário
                  e conexão com o BRT.
                </p>

              </article>

            </div>

          </div>

        </section>


        <!-- ==================================================
             METRÔ + BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando combinar metrô e BRT
          </h4>

          <div class="answer-block">

            <strong>
              Jardim Oceânico
            </strong>

            <p>
              É uma das principais
              conexões entre metrô
              e BRT
              para deslocamentos
              pela Barra
              e Zona Oeste.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Vicente de Carvalho
            </strong>

            <p>
              Também possui
              integração tarifária
              entre metrô
              e BRT.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Metrô + BRT
              </span>

              <strong>
                R$ 9,70
              </strong>

              <p>
                Com Jaé
                e nas estações
                previstas
                pela integração.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             TRENS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar os trens
          </h4>

          <p class="panel-intro">
            A TrensRJ atende
            diferentes eixos
            da capital
            e da Região Metropolitana.
          </p>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Deodoro
              </strong>

              <p>
                Ramal importante
                para deslocamentos
                pela Zona Norte
                e Oeste.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Santa Cruz
              </strong>

              <p>
                Atende a Zona Oeste
                até Santa Cruz.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Japeri
              </strong>

              <p>
                Segue pela Baixada
                até Japeri.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Belford Roxo
              </strong>

              <p>
                Conecta a Central
                à Baixada Fluminense.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Saracuruna
              </strong>

              <p>
                Atende o eixo
                em direção
                à Baixada
                e Duque de Caxias.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             CENTRAL DO BRASIL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Central do Brasil
          </h4>

          <div class="answer-block">

            <strong>
              É o principal ponto
              de partida dos cinco ramais.
            </strong>

            <p>
              Deodoro,
              Santa Cruz,
              Japeri,
              Belford Roxo
              e Saracuruna
              aparecem entre os ramais
              atendidos pela estação.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              A região possui conexão
              com outros sistemas.
            </strong>

            <p>
              Metrô,
              VLT
              e ônibus
              podem completar
              o deslocamento
              pela área central.
            </p>

          </div>


          <div class="visitor-alert">

            <strong>
              Trem exige atenção ao horário.
            </strong>

            Primeiro e último trem
            variam de acordo
            com ramal,
            estação
            e dia da semana.

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como pensar o BRT
          </h4>

          <p class="panel-intro">
            O sistema possui
            quatro grandes corredores,
            mas cada corredor
            reúne vários serviços.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Transoeste
              </strong>

              <p>
                Barra,
                Recreio,
                Santa Cruz
                e Campo Grande.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Transcarioca
              </strong>

              <p>
                Barra,
                Madureira,
                Zona Norte
                e Galeão.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Transolímpica
              </strong>

              <p>
                Conecta diferentes
                áreas da Zona Oeste
                e Deodoro.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Transbrasil
              </strong>

              <p>
                Estrutura o eixo
                da Avenida Brasil
                até o Terminal Gentileza.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             SERVIÇOS BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            No BRT, veja mais do que o corredor
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">

              <span>🔢</span>

              <strong>
                Número
              </strong>

              <p>
                Identifica
                o serviço específico.
              </p>

            </article>


            <article class="planner-check-card">

              <span>📍</span>

              <strong>
                Destino
              </strong>

              <p>
                Confirma
                o sentido da viagem.
              </p>

            </article>


            <article class="planner-check-card">

              <span>🚏</span>

              <strong>
                Parador
              </strong>

              <p>
                Realiza
                mais paradas.
              </p>

            </article>


            <article class="planner-check-card">

              <span>⚡</span>

              <strong>
                Expresso ou semidireto
              </strong>

              <p>
                Atende
                menos estações
                ao longo do percurso.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             GALEÃO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Galeão pelo BRT
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Transcarioca
              </span>

              <strong>
                Linha 42
              </strong>

              <p>
                Madureira
                ↔ Galeão Tom Jobim,
                serviço parador.
              </p>

              <span class="fare-scenario-result">
                BRT
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Centro / Gentileza
              </span>

              <strong>
                Terminal Gentileza ↔ Galeão
              </strong>

              <p>
                Serviço direto
                publicado
                pela MOBI-Rio.
              </p>

              <span class="fare-scenario-result">
                Direto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             VLT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            VLT Carioca
          </h4>

          <p class="panel-intro">
            O VLT possui
            quatro linhas
            e é especialmente útil
            na região central
            e portuária.
          </p>

          <div class="lines-grid">

            ${createLineMiniCard(
              "#2476aa",
              "1",
              "Linha 1",
              "VLT",
              "Santos Dumont ↔ Terminal Gentileza",
              "Azul"
            )}

            ${createLineMiniCard(
              "#579b58",
              "2",
              "Linha 2",
              "VLT",
              "Praça XV ↔ Praia Formosa",
              "Verde"
            )}

            ${createLineMiniCard(
              "#d8af2d",
              "3",
              "Linha 3",
              "VLT",
              "Santos Dumont ↔ Central",
              "Amarela"
            )}

            ${createLineMiniCard(
              "#e58432",
              "4",
              "Linha 4",
              "VLT",
              "Praça XV ↔ Terminal Gentileza",
              "Laranja"
            )}

          </div>


          <div class="fare-note">

            <strong>
              Horário geral:
            </strong>

            todos os dias,
            das 5h às 23h.

          </div>

        </section>


        <!-- ==================================================
             TERMINAL GENTILEZA
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Terminal Intermodal Gentileza
          </h4>

          <p class="panel-intro">
            É um dos principais
            pontos de integração
            entre sistemas municipais.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                VLT
              </strong>

              <p>
                Linhas 1
                e 4
                chegam ao terminal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                BRT
              </strong>

              <p>
                A Transbrasil
                utiliza Gentileza
                como terminal.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Galeão
              </strong>

              <p>
                Existe serviço BRT
                direto
                entre Gentileza
                e o aeroporto.
              </p>

            </article>


            <article class="comparison-card">

              <strong>
                Ônibus
              </strong>

              <p>
                Linhas municipais
                atendem
                o terminal
                e seu entorno.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelas Barcas
          </h4>

          <p class="panel-intro">
            Diferentemente
            do metrô e do VLT,
            as barcas possuem
            horários de partida
            definidos por linha.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Rio ↔ Niterói
              </span>

              <strong>
                Praça XV ↔ Praça Arariboia
              </strong>

              <p>
                Travessia
                de até 22 minutos.
              </p>

              <span class="route-compare-result">
                R$ 5,00
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Rio ↔ Charitas
              </span>

              <strong>
                Praça XV ↔ Charitas
              </strong>

              <p>
                Travessia
                de até 28 minutos.
              </p>

              <span class="route-compare-result">
                R$ 7,70
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Ilha do Governador
              </span>

              <strong>
                Praça XV ↔ Cocotá
              </strong>

              <p>
                Travessia
                de até 61 minutos.
              </p>

              <span class="route-compare-result">
                R$ 5,00
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Paquetá
              </span>

              <strong>
                Praça XV ↔ Paquetá
              </strong>

              <p>
                Travessia
                de até 81 minutos.
              </p>

              <span class="route-compare-result">
                R$ 5,00
              </span>

            </article>

          </div>


          <div class="visitor-alert">

            <strong>
              Para barcas,
              horário realmente importa.
            </strong>

            Confira a partida
            correspondente à linha
            antes de sair,
            especialmente para
            Paquetá,
            Cocotá
            e Charitas.

          </div>

        </section>


        <!-- ==================================================
             INTERMUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus intermunicipais
          </h4>

          <p class="panel-intro">
            Se a viagem
            atravessa a divisa
            do município do Rio,
            o serviço pode pertencer
            à rede estadual.
          </p>

          <div class="route-compare-grid">

            <article class="route-compare-card">

              <span>
                Rio → Niterói
              </span>

              <strong>
                Ônibus ou barca
              </strong>

              <p>
                Compare ponto de origem,
                destino final,
                tempo
                e conveniência.
              </p>

              <span class="route-compare-result">
                Duas redes possíveis
              </span>

            </article>


            <article class="route-compare-card">

              <span>
                Rio → Baixada
              </span>

              <strong>
                Trem ou ônibus
              </strong>

              <p>
                Dependendo da região,
                o trem pode concentrar
                a parte principal
                do trajeto.
              </p>

              <span class="route-compare-result">
                Compare o destino
              </span>

            </article>

          </div>


          <div class="fare-note">

            No ônibus intermunicipal,
            tarifa e itinerário
            dependem da linha específica.

          </div>

        </section>


        <!-- ==================================================
             BUM
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Chegando pelo Terminal Pedro Fernandes
          </h4>

          <div class="answer-block">

            <strong>
              Existe uma integração
              específica com a rede municipal.
            </strong>

            <p>
              O Bilhete Único
              de Integração Margaridas
              foi criado em 2026
              para passageiros
              que chegam de ônibus intermunicipal
              ao Terminal BRT Metropolitano
              Pedro Fernandes.
            </p>

          </div>


          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Parte municipal
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Permite utilizar
                os modos municipais
                previstos no benefício.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Janela
              </span>

              <strong>
                Até 20 horas
              </strong>

              <p>
                Com até quatro
                deslocamentos municipais
                nas condições do BUM.
              </p>

            </article>

          </div>


          <div class="fare-note">

            A passagem
            do ônibus intermunicipal
            é paga separadamente.

          </div>

        </section>


        <!-- ==================================================
             COMO COMPARAR
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
                Mais trocas
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
                Menos baldeações
              </strong>

              <p>
                Pode reduzir
                o atrito da viagem
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
                Pode ser importante
                no calor,
                na chuva
                ou com bagagem.
              </p>

              <span class="route-compare-result">
                Prioridade: conforto
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             À NOITE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            À noite, planeje com mais margem
          </h4>

          <div class="planner-tip-list">

            <article class="planner-tip">

              <span class="planner-tip-icon">
                🚆
              </span>

              <div>

                <strong>
                  Trem
                </strong>

                <p>
                  Primeiro e último trem
                  variam conforme
                  ramal e estação.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                ⛴️
              </span>

              <div>

                <strong>
                  Barcas
                </strong>

                <p>
                  A grade
                  depende da linha
                  e do dia.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                🚍
              </span>

              <div>

                <strong>
                  BRT e ônibus
                </strong>

                <p>
                  Frequência
                  e serviços disponíveis
                  mudam ao longo do dia.
                </p>

              </div>

            </article>


            <article class="planner-tip">

              <span class="planner-tip-icon">
                ⚠️
              </span>

              <div>

                <strong>
                  Operações especiais
                </strong>

                <p>
                  Grandes eventos
                  podem alterar
                  temporariamente
                  horários e trajetos.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             O QUE CONFIRMAR
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que realmente precisa ser confirmado no dia
          </h4>

          <div class="payment-choice-grid">

            <article class="payment-choice">

              <strong>
                Horário do trem
              </strong>

              <p>
                Depende
                do ramal,
                estação
                e dia da semana.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Partida da barca
              </strong>

              <p>
                Cada ligação
                possui programação própria.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Serviço do BRT
              </strong>

              <p>
                Parador,
                expresso,
                semidireto
                e direto
                podem parar
                em estações diferentes.
              </p>

            </article>


            <article class="payment-choice">

              <strong>
                Ônibus específico
              </strong>

              <p>
                Horário,
                ponto
                e eventual desvio
                são operacionais.
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
            href="https://www.metrorio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetrôRio
          </a>


          <a
            class="official-link"
            href="https://trensrj.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TrensRJ
          </a>


          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BRT · MOBI-Rio
          </a>


          <a
            class="official-link"
            href="https://trilhos.motiva.com.br/vltrio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VLT Carioca
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/linhas-horarios-e-tarifas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Horários das Barcas
          </a>


          <a
            class="official-link"
            href="https://www.detro.rj.gov.br/regulares-tarifas-itinerario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linhas intermunicipais · DETRO/RJ
          </a>


          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/integracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integrações · Prefeitura do Rio
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
