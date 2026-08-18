// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — GRAMADO
// MÓDULO: PLANEJAMENTO DE TRAJETOS
// ============================================================

window.GRAMADO_TRANSPORT_MODULES =
  window.GRAMADO_TRANSPORT_MODULES || {};


window.GRAMADO_TRANSPORT_MODULES["planner"] = {

  kicker: "Gramado · planejamento de viagem",

  title: "Planeje o trajeto",

  body() {

    return `

      <div class="network-layout">


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Por onde começar?
          </h4>

          <p class="panel-intro">
            Em Gramado, a escolha depende da distância,
            do horário, do clima e de o deslocamento
            acontecer dentro ou fora do município.
          </p>

          <div class="planner-tool-grid">

            <article class="planner-tool-card">
              <span class="planner-tool-icon">🚶</span>
              <strong>Destino no Centro</strong>
              <p>
                Compare primeiro a caminhada.
                Muitas atrações centrais
                ficam relativamente próximas.
              </p>
            </article>

            <article class="planner-tool-card">
              <span class="planner-tool-icon">🚌</span>
              <strong>Bairro de Gramado</strong>
              <p>
                Consulte as rotas
                e os horários oficiais
                do transporte municipal.
              </p>
            </article>

            <article class="planner-tool-card">
              <span class="planner-tool-icon">🛣️</span>
              <strong>Outra cidade</strong>
              <p>
                Consulte a conectividade
                rodoviária intermunicipal
                disponibilizada pelos canais públicos.
              </p>
            </article>

            <article class="planner-tool-card">
              <span class="planner-tool-icon">🚗</span>
              <strong>Atração afastada</strong>
              <p>
                Compare transporte municipal,
                táxi, aplicativo e carro.
              </p>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            O que comparar antes de escolher
          </h4>

          <div class="planner-check-grid">

            <article class="planner-check-card">
              <span>⏱️</span>
              <strong>Tempo total</strong>
              <p>
                Considere espera
                e deslocamento até o ponto.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🌧️</span>
              <strong>Clima</strong>
              <p>
                Chuva, frio e neblina
                podem mudar a conveniência.
              </p>
            </article>

            <article class="planner-check-card">
              <span>👥</span>
              <strong>Número de pessoas</strong>
              <p>
                Para grupos,
                compare o custo total
                das alternativas.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🕒</span>
              <strong>Horário</strong>
              <p>
                Cada linha municipal
                possui sua programação.
              </p>
            </article>

            <article class="planner-check-card">
              <span>🧳</span>
              <strong>Bagagem</strong>
              <p>
                Na chegada ou saída,
                considere praticidade.
              </p>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Quando caminhar faz sentido
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">
              <strong>Trajeto curto</strong>
              <p>
                Compare a caminhada
                com o tempo de espera
                do transporte.
              </p>
            </article>

            <article class="comparison-card">
              <strong>Região central</strong>
              <p>
                Muitas atrações,
                restaurantes e lojas
                ficam concentrados.
              </p>
            </article>

            <article class="comparison-card">
              <strong>Clima ruim</strong>
              <p>
                Uma distância pequena
                pode deixar de ser conveniente
                com chuva ou frio intenso.
              </p>
            </article>

            <article class="comparison-card">
              <strong>Relevo</strong>
              <p>
                Considere inclinações
                e condições do percurso.
              </p>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Planejando pelo ônibus municipal
          </h4>

          <p class="panel-intro">
            Gramado possui 26 linhas municipais,
            com programação específica por rota.
          </p>

          <div class="bus-use-flow">

            <article class="bus-use-step">
              <span>1</span>
              <strong>Identifique a região</strong>
              <p>
                Confirme o bairro
                ou localidade do destino.
              </p>
            </article>

            <article class="bus-use-step">
              <span>2</span>
              <strong>Consulte a rota</strong>
              <p>
                Use os mapas,
                itinerários e informações
                publicados pela Prefeitura.
              </p>
            </article>

            <article class="bus-use-step">
              <span>3</span>
              <strong>Confira o horário</strong>
              <p>
                A frequência varia
                conforme a linha.
              </p>
            </article>

            <article class="bus-use-step">
              <span>4</span>
              <strong>Confirme o ponto</strong>
              <p>
                Veja o local correto
                de embarque e o sentido.
              </p>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Horários municipais
          </h4>

          <div class="answer-block">

            <strong>
              Consulte a programação específica.
            </strong>

            <p>
              A Prefeitura disponibiliza
              os horários do transporte coletivo
              em seus canais oficiais.
            </p>

          </div>

          <div class="answer-block">

            <strong>
              A nova rede ampliou os horários.
            </strong>

            <p>
              Parte das linhas passou
              a contar com atendimento noturno,
              mas isso não vale
              necessariamente para toda a rede.
            </p>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Viagem para outra cidade
          </h4>

          <p class="panel-intro">
            O deslocamento deixa de ser municipal
            e passa a integrar o sistema
            rodoviário intermunicipal.
          </p>

          <div class="answer-block">

            <strong>
              Consulte a conectividade oficial.
            </strong>

            <p>
              A Prefeitura mantém acesso
              às informações de conectividade
              rodoviária intermunicipal
              e interestadual.
            </p>

          </div>

          <div class="answer-block">

            <strong>
              Tarifas e horários podem variar.
            </strong>

            <p>
              Para viagens estaduais,
              consulte os canais públicos
              responsáveis antes de sair.
            </p>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Estação Rodoviária
          </h4>

          <div class="answer-block">

            <strong>
              É a principal referência
              para viagens rodoviárias.
            </strong>

            <p>
              Antes de embarcar,
              confirme plataforma,
              horário e destino.
            </p>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Várzea Grande
          </h4>

          <div class="answer-block">

            <strong>
              Também aparece
              na estrutura municipal.
            </strong>

            <p>
              A Prefeitura utilizou
              o Terminal Rodoviário
              da Várzea Grande
              no processo de implantação
              do novo sistema.
            </p>

          </div>

          <div class="fare-note">
            Não confunda
            a Rodoviária central
            com o atendimento municipal
            em Várzea Grande.
          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Atrações afastadas
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">
              <span>Ônibus municipal</span>
              <strong>Menor custo previsível</strong>
              <p>
                Pode funcionar bem
                quando existe linha
                e horário adequados.
              </p>
              <span class="route-compare-result">
                Consulte a rota
              </span>
            </article>

            <article class="route-compare-card">
              <span>Táxi ou aplicativo</span>
              <strong>Porta a porta</strong>
              <p>
                Pode reduzir espera
                em deslocamentos pontuais.
              </p>
              <span class="route-compare-result">
                Compare o custo
              </span>
            </article>

            <article class="route-compare-card">
              <span>Carro</span>
              <strong>Mais flexibilidade</strong>
              <p>
                Pode ser útil
                quando há várias paradas
                no mesmo dia.
              </p>
              <span class="route-compare-result">
                Considere estacionamento
              </span>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Como comparar opções
          </h4>

          <div class="route-compare-grid">

            <article class="route-compare-card">
              <span>Opção A</span>
              <strong>Mais barata, com espera</strong>
              <p>
                O ônibus pode custar menos,
                mas depende da programação da linha.
              </p>
              <span class="route-compare-result">
                Prioridade: custo
              </span>
            </article>

            <article class="route-compare-card">
              <span>Opção B</span>
              <strong>Porta a porta</strong>
              <p>
                Táxi ou aplicativo
                podem reduzir o atrito
                em alguns deslocamentos.
              </p>
              <span class="route-compare-result">
                Prioridade: conveniência
              </span>
            </article>

            <article class="route-compare-card">
              <span>Opção C</span>
              <strong>Caminhada</strong>
              <p>
                Para trajetos centrais,
                pode ser a alternativa
                mais simples.
              </p>
              <span class="route-compare-result">
                Veja clima e distância
              </span>
            </article>

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Aplicativo do transporte municipal
          </h4>

          <div class="answer-block">

            <strong>
              Previsto para setembro de 2026.
            </strong>

            <p>
              A Prefeitura anunciou
              o aplicativo “Nosso Transporte Público”
              para acompanhamento em tempo real
              da localização dos ônibus.
            </p>

          </div>

          <div class="visitor-alert">

            <strong>
              Ainda não trate como disponível.
            </strong>

            Em agosto de 2026,
            o lançamento está anunciado
            para setembro e deve ser confirmado
            oficialmente antes do uso.

          </div>

        </section>


        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de sair
          </h4>

          <div class="planner-tip-list">

            <article class="planner-tip">
              <span class="planner-tip-icon">📱</span>
              <div>
                <strong>Confira novamente</strong>
                <p>
                  Rotas e horários
                  podem ser atualizados.
                </p>
              </div>
            </article>

            <article class="planner-tip">
              <span class="planner-tip-icon">🌧️</span>
              <div>
                <strong>Considere o clima</strong>
                <p>
                  Ele pode mudar
                  a conveniência da caminhada.
                </p>
              </div>
            </article>

            <article class="planner-tip">
              <span class="planner-tip-icon">💰</span>
              <div>
                <strong>Compare o custo do grupo</strong>
                <p>
                  Para várias pessoas,
                  alternativas individuais
                  podem se tornar competitivas.
                </p>
              </div>
            </article>

            <article class="planner-tip">
              <span class="planner-tip-icon">📍</span>
              <div>
                <strong>Confirme o ponto</strong>
                <p>
                  Diferencie transporte municipal
                  de embarque rodoviário.
                </p>
              </div>
            </article>

          </div>

        </section>


        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.gramado.rs.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prefeitura de Gramado
          </a>

          <a
            class="official-link"
            href="https://www.gramado.rs.gov.br/cidadao/pagina/destino-turistico-inteligente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transporte e conectividade · Gramado
          </a>

          <a
            class="official-link"
            href="https://www.daer.rs.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DAER-RS
          </a>

          <a
            class="official-link"
            href="https://agergs.rs.gov.br/transporte-rodoviario-de-passageiros"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGERGS
          </a>

        </div>


        <div class="planner-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
