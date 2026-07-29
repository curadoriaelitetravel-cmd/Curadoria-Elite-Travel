window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

window.SP_TRANSPORT_MODULES["planner"] = {
  kicker: 'São Paulo · planejamento de viagem',
  title: 'Planeje o trajeto',

  body() {
    return `

          <section class="panel-box">
            <h4 class="panel-title">Qual ferramenta devo usar?</h4>
            <p class="panel-intro">
              Cada canal resolve um tipo diferente de dúvida.
              Escolha pelo que você precisa descobrir.
            </p>

            <div class="planner-tool-grid">
              <article class="planner-tool-card">
                <span class="planner-tool-icon">🗺️</span>
                <strong>Quero comparar trajetos</strong>
                <p>
                  Use o Google Maps para comparar transporte público,
                  caminhada, tempo total e quantidade de baldeações.
                </p>
              </article>

              <article class="planner-tool-card">
                <span class="planner-tool-icon">📡</span>
                <strong>Quero saber onde o ônibus está</strong>
                <p>
                  Use o Olho Vivo para acompanhar a posição do veículo
                  e a previsão de chegada ao ponto.
                </p>
              </article>

              <article class="planner-tool-card">
                <span class="planner-tool-icon">🔢</span>
                <strong>Quero consultar uma linha</strong>
                <p>
                  Use a busca da SPTrans para ver itinerário, mapa,
                  horários, pontos atendidos e programação.
                </p>
              </article>

              <article class="planner-tool-card">
                <span class="planner-tool-icon">🚇</span>
                <strong>Quero consultar a rede sobre trilhos</strong>
                <p>
                  Use os canais oficiais do Metrô e da CPTM para linhas,
                  estações, horários e condições de operação.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Antes de escolher uma rota</h4>
            <p class="panel-intro">
              A rota mais rápida nem sempre é a mais confortável ou simples.
              Confira estes cinco pontos.
            </p>

            <div class="planner-check-grid">
              <article class="planner-check-card">
                <span>⏱️</span>
                <strong>Tempo total</strong>
                <p>Considere também espera, caminhada e transferência.</p>
              </article>

              <article class="planner-check-card">
                <span>🔄</span>
                <strong>Baldeações</strong>
                <p>Menos trocas normalmente reduzem a chance de erro.</p>
              </article>

              <article class="planner-check-card">
                <span>🚶</span>
                <strong>Caminhada</strong>
                <p>Veja distância, inclinação e trechos após a estação.</p>
              </article>

              <article class="planner-check-card">
                <span>🕒</span>
                <strong>Horário</strong>
                <p>Confirme se todo o trajeto opera no momento da viagem.</p>
              </article>

              <article class="planner-check-card">
                <span>⚠️</span>
                <strong>Condições atuais</strong>
                <p>Verifique alertas, desvios e mudanças operacionais.</p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como interpretar uma rota</h4>

            <div class="route-example">
              <div class="route-phone">
                <span class="route-phone-title">Exemplo de trajeto</span>

                <div class="route-step-list">
                  <div class="route-step">
                    <span class="route-step-icon">🚶</span>
                    <div>
                      <strong>Caminhe 300 metros</strong>
                      <small>Até a estação mais próxima</small>
                    </div>
                  </div>

                  <div class="route-step">
                    <span class="route-step-icon">🚇</span>
                    <div>
                      <strong>Linha 1-Azul</strong>
                      <small>Confirme o sentido indicado</small>
                    </div>
                  </div>

                  <div class="route-step">
                    <span class="route-step-icon">🔄</span>
                    <div>
                      <strong>Troque para a Linha 2-Verde</strong>
                      <small>Siga as placas dentro da estação</small>
                    </div>
                  </div>

                  <div class="route-step">
                    <span class="route-step-icon">🚶</span>
                    <div>
                      <strong>Caminhe 150 metros</strong>
                      <small>Da saída correta até o destino</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="route-explanation">
                <article class="route-explanation-card">
                  <strong>Leia o sentido da linha</strong>
                  <p>
                    O nome exibido após a linha normalmente indica a estação
                    terminal usada como referência para aquela direção.
                  </p>
                </article>

                <article class="route-explanation-card">
                  <strong>Baldeação acontece dentro da estação</strong>
                  <p>
                    Siga as placas com o nome e a cor da próxima linha.
                    Evite sair pela catraca sem necessidade.
                  </p>
                </article>

                <article class="route-explanation-card">
                  <strong>A saída faz parte da rota</strong>
                  <p>
                    Estações grandes possuem várias saídas. Confira o nome
                    da rua, avenida ou ponto de referência antes de subir.
                  </p>
                </article>

                <article class="route-explanation-card">
                  <strong>O tempo pode mudar</strong>
                  <p>
                    Aplicativos trabalham com estimativas. Espera, lotação
                    e alterações operacionais podem aumentar a duração real.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como comparar duas opções</h4>

            <div class="route-compare-grid">
              <article class="route-compare-card">
                <span>Exemplo 1</span>
                <strong>40 minutos com duas baldeações</strong>
                <p>
                  Pode ser mais rápido, mas exige mais atenção e aumenta
                  a chance de pegar uma direção errada.
                </p>
                <span class="route-compare-result">
                  Priorize se o tempo for essencial
                </span>
              </article>

              <article class="route-compare-card">
                <span>Exemplo 2</span>
                <strong>48 minutos com uma baldeação</strong>
                <p>
                  Oito minutos a mais podem valer a pena quando a rota
                  é mais simples e exige menos caminhada.
                </p>
                <span class="route-compare-result">
                  Melhor para uma viagem tranquila
                </span>
              </article>

              <article class="route-compare-card">
                <span>Exemplo 3</span>
                <strong>55 minutos com muito trecho a pé</strong>
                <p>
                  Veja se chuva, bagagem, calor ou horário tornam essa
                  caminhada inconveniente antes de escolher.
                </p>
                <span class="route-compare-result">
                  Compare conforto e contexto
                </span>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Horários de referência</h4>
            <p class="panel-intro">
              Use estes horários apenas como orientação inicial.
              Cada estação, linha ou serviço pode ter condições próprias.
            </p>

            <div class="hours-grid">
              <article class="hours-card">
                <span>🚇</span>
                <strong>Metrô</strong>
                <p>
                  Operação geral das 4h40 à 0h. Nas madrugadas de sábado
                  para domingo, há funcionamento 24 horas em caráter
                  experimental até setembro de 2026.
                </p>
              </article>

              <article class="hours-card">
                <span>🚆</span>
                <strong>CPTM</strong>
                <p>
                  Operação geral das 4h à 0h. Consulte a estação e a linha
                  para confirmar horários e possíveis mudanças.
                </p>
              </article>

              <article class="hours-card">
                <span>🚌</span>
                <strong>Ônibus municipais</strong>
                <p>
                  Os horários variam por linha. Consulte a programação
                  oficial antes de sair, principalmente à noite.
                </p>
              </article>

              <article class="hours-card">
                <span>🌙</span>
                <strong>Rede Noturno</strong>
                <p>
                  Serviço de ônibus da madrugada entre 0h e 4h.
                  As linhas e frequências devem ser verificadas separadamente.
                </p>
              </article>
            </div>

            <div class="fare-note">
              <strong>Atenção ao último embarque:</strong>
              chegar à estação perto do encerramento pode limitar transferências.
              Consulte o horário específico da estação e da linha usada.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Dicas que evitam erros</h4>

            <div class="planner-tip-list">
              <article class="planner-tip">
                <span class="planner-tip-icon">📱</span>
                <div>
                  <strong>Pesquise antes de sair</strong>
                  <p>
                    Salve a rota ou faça uma captura de tela caso o sinal
                    fique instável.
                  </p>
                </div>
              </article>

              <article class="planner-tip">
                <span class="planner-tip-icon">🔋</span>
                <div>
                  <strong>Saia com bateria suficiente</strong>
                  <p>
                    O celular será usado para rota, localização
                    e eventuais bilhetes digitais.
                  </p>
                </div>
              </article>

              <article class="planner-tip">
                <span class="planner-tip-icon">↔️</span>
                <div>
                  <strong>Confira o sentido antes da plataforma</strong>
                  <p>
                    Veja o nome da estação terminal indicado
                    para a direção da viagem.
                  </p>
                </div>
              </article>

              <article class="planner-tip">
                <span class="planner-tip-icon">🎨</span>
                <div>
                  <strong>Siga a cor e o número da linha</strong>
                  <p>
                    Em estações grandes, placas coloridas ajudam
                    a encontrar a transferência correta.
                  </p>
                </div>
              </article>

              <article class="planner-tip">
                <span class="planner-tip-icon">🚪</span>
                <div>
                  <strong>Confirme a saída da estação</strong>
                  <p>
                    A saída errada pode adicionar caminhada e colocar
                    você no lado oposto da avenida.
                  </p>
                </div>
              </article>

              <article class="planner-tip">
                <span class="planner-tip-icon">⚠️</span>
                <div>
                  <strong>Confira a operação no momento da viagem</strong>
                  <p>
                    Obras, eventos e falhas podem alterar temporariamente
                    o trajeto planejado.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <div class="official-map-actions">
            <a
              class="official-link"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Google Maps
            </a>

            <a
              class="official-link"
              href="https://www.sptrans.com.br/busca-de-itinerarios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planejar pela SPTrans
            </a>

            <a
              class="official-link"
              href="https://olhovivo.sptrans.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Olho Vivo
            </a>

            <a
              class="official-link"
              href="https://www.metro.sp.gov.br/sua-viagem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar Metrô
            </a>

            <a
              class="official-link"
              href="https://www.cptm.sp.gov.br/cptm/sua-viagem"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar CPTM
            </a>
          </div>

          <div class="planner-updated">
            Informações verificadas em julho de 2026.
          </div>

    `;
  }
};
