window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

window.SP_TRANSPORT_MODULES["bus"] = {
  kicker: 'São Paulo · ônibus municipais e intermunicipais',
  title: 'Como usar os ônibus',

  body() {
    return `

          <section class="panel-box">
            <h4 class="panel-title">Como identificar o ônibus certo</h4>
            <p class="panel-intro">
              Não escolha apenas pela cor do veículo. Para confirmar uma linha,
              observe sempre três informações.
            </p>

            <div class="bus-identification-grid">
              <article class="bus-identification-card">
                <span class="bus-identification-number">1</span>
                <strong>Número completo da linha</strong>
                <p>
                  É a identificação mais segura. Confira também os números após o hífen,
                  pois eles podem diferenciar serviços parecidos.
                </p>
              </article>

              <article class="bus-identification-card">
                <span class="bus-identification-number">2</span>
                <strong>Destino no letreiro</strong>
                <p>
                  O nome exibido na frente mostra para onde aquele ônibus está seguindo.
                  Uma mesma linha pode aparecer nos dois sentidos.
                </p>
              </article>

              <article class="bus-identification-card">
                <span class="bus-identification-number">3</span>
                <strong>Ponto e sentido da viagem</strong>
                <p>
                  Confirme se a linha passa naquele ponto e se o veículo está indo
                  na direção do seu destino.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como ler o letreiro</h4>

            <div class="bus-example">
              <div class="bus-display" aria-label="Exemplo de letreiro de ônibus">
                <span class="bus-display-line">5109-10</span>
                <span class="bus-display-destination">TERM. VL. PRUDENTE</span>
              </div>

              <div class="bus-example-explanation">
                <strong>O número identifica a linha. O nome indica o destino.</strong>
                <p>
                  Antes de entrar, compare as duas informações com o resultado do planejador.
                  Não embarque apenas porque o ônibus passa perto de uma região conhecida.
                </p>
              </div>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Passo a passo para embarcar</h4>

            <div class="bus-use-flow">
              <article class="bus-use-step">
                <span>🔎</span>
                <strong>1. Pesquise o trajeto</strong>
                <p>
                  Informe origem e destino ou procure pelo número da linha no canal oficial.
                </p>
              </article>

              <article class="bus-use-step">
                <span>📍</span>
                <strong>2. Confirme o ponto</strong>
                <p>
                  Veja em qual parada a linha passa e caminhe até o ponto indicado.
                </p>
              </article>

              <article class="bus-use-step">
                <span>🚌</span>
                <strong>3. Confira o letreiro</strong>
                <p>
                  Compare número, destino e sentido antes de sinalizar para o veículo.
                </p>
              </article>

              <article class="bus-use-step">
                <span>📡</span>
                <strong>4. Acompanhe a chegada</strong>
                <p>
                  Use o Olho Vivo para consultar a localização e a previsão do ônibus.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Cores e áreas operacionais</h4>
            <p class="panel-intro">
              A cor representa a área de operação do ônibus. Ela ajuda na orientação,
              mas não informa sozinha o destino da linha.
            </p>

            <div class="region-grid">
              ${createRegionCard("#7ac36a", "Área 1 · Noroeste", "Verde-claro")}
              ${createRegionCard("#355ca8", "Área 2 · Norte", "Azul-escuro")}
              ${createRegionCard("#e0c326", "Área 3 · Nordeste", "Amarelo")}
              ${createRegionCard("#c7473e", "Área 4 · Leste", "Vermelho")}
              ${createRegionCard("#3b8d57", "Área 5 · Sudeste", "Verde-escuro")}
              ${createRegionCard("#5aa7cf", "Área 6 · Sul", "Azul-claro")}
              ${createRegionCard("#7f3045", "Área 7 · Sudoeste", "Vinho")}
              ${createRegionCard("#df8b2e", "Área 8 · Oeste", "Laranja")}
            </div>

            <div class="fare-note">
              <strong>A cor é apenas uma referência regional.</strong>
              Ônibus de cores diferentes podem compartilhar partes do trajeto.
              Número, destino e sentido continuam sendo as informações decisivas.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como a rede está organizada</h4>

            <div class="bus-system-grid">
              <article class="bus-system-card">
                <span>🏙️</span>
                <strong>Linhas estruturais</strong>
                <p>
                  Fazem ligações de maior alcance entre regiões, terminais, corredores
                  e áreas centrais.
                </p>
              </article>

              <article class="bus-system-card">
                <span>🏘️</span>
                <strong>Linhas locais</strong>
                <p>
                  Conectam bairros a terminais, estações e outros pontos de integração.
                </p>
              </article>

              <article class="bus-system-card">
                <span>🛣️</span>
                <strong>Corredores</strong>
                <p>
                  Trechos com infraestrutura dedicada ou prioritária para ônibus.
                  Algumas plataformas realizam embarque pelo lado esquerdo.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Ônibus intermunicipais metropolitanos</h4>
            <p class="panel-intro">
              Esses ônibus conectam a cidade de São Paulo aos demais municípios da
              Região Metropolitana. Eles não pertencem ao sistema municipal da SPTrans.
            </p>

            <div class="bus-system-grid">
              <article class="bus-system-card">
                <span>🌆</span>
                <strong>Para onde levam</strong>
                <p>
                  Atendem deslocamentos entre a capital e cidades como Guarulhos,
                  Osasco, Barueri, Taboão da Serra, Santo André, São Bernardo do Campo
                  e Diadema, entre outras.
                </p>
              </article>

              <article class="bus-system-card">
                <span>🔢</span>
                <strong>Linhas e tarifas próprias</strong>
                <p>
                  Cada linha possui numeração, itinerário, operadora e tarifa específicos.
                  O valor varia conforme o trajeto.
                </p>
              </article>

              <article class="bus-system-card">
                <span>🚉</span>
                <strong>Conexão com trilhos</strong>
                <p>
                  Muitas linhas atendem terminais e estações do Metrô e da CPTM,
                  facilitando a continuação da viagem.
                </p>
              </article>
            </div>

            <div class="fare-note">
              <strong>Não use apenas a busca da SPTrans.</strong>
              Para linhas intermunicipais, consulte o serviço oficial de itinerários
              e tarifas da EMTU/ARTESP.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como pagar o ônibus intermunicipal</h4>

            <div class="answer-block">
              <strong>O cartão atual é o TOP.</strong>
              <p>
                O antigo Cartão BOM foi substituído pelo Cartão TOP. Ele é aceito
                nas linhas intermunicipais metropolitanas e também pode ser utilizado
                no Metrô e na CPTM.
              </p>
            </div>

            <div class="answer-block">
              <strong>Confirme a tarifa antes do embarque.</strong>
              <p>
                Diferentemente da tarifa municipal da capital, o preço das linhas
                intermunicipais varia conforme o serviço e o percurso.
              </p>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Ônibus durante a madrugada</h4>

            <div class="answer-block">
              <strong>A Rede Noturno opera da 0h às 4h.</strong>
              <p>
                O serviço conecta diferentes regiões da cidade e atende locais próximos
                a estações do Metrô. Consulte sempre o mapa e os horários antes de sair.
              </p>
            </div>

            <div class="answer-block">
              <strong>Linhas noturnas devem ser conferidas separadamente.</strong>
              <p>
                Não presuma que a mesma linha usada durante o dia continuará com o mesmo
                trajeto e frequência durante a madrugada.
              </p>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Antes de embarcar</h4>

            <div class="bus-tip-list">
              <article class="bus-tip">
                <span class="bus-tip-icon">↔️</span>
                <div>
                  <strong>Confira o sentido</strong>
                  <p>O ponto do outro lado da rua normalmente atende a direção oposta.</p>
                </div>
              </article>

              <article class="bus-tip">
                <span class="bus-tip-icon">📱</span>
                <div>
                  <strong>Salve o número completo</strong>
                  <p>Uma captura de tela ajuda a comparar rapidamente a linha e o destino no ponto.</p>
                </div>
              </article>

              <article class="bus-tip">
                <span class="bus-tip-icon">⏱️</span>
                <div>
                  <strong>Previsão não é horário garantido</strong>
                  <p>Trânsito, desvios e condições de operação podem alterar a chegada.</p>
                </div>
              </article>

              <article class="bus-tip">
                <span class="bus-tip-icon">⚠️</span>
                <div>
                  <strong>Verifique mudanças operacionais</strong>
                  <p>Interdições e eventos podem mudar temporariamente pontos e itinerários.</p>
                </div>
              </article>
            </div>
          </section>

          <div class="official-map-actions">
            <a
              class="official-link"
              href="https://www.sptrans.com.br/itinerarios/linha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buscar linha
            </a>

            <a
              class="official-link"
              href="https://olhovivo.sptrans.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acompanhar no Olho Vivo
            </a>

            <a
              class="official-link"
              href="https://www.sptrans.com.br/terminais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver terminais
            </a>

            <a
              class="official-link"
              href="https://www.sptrans.com.br/corredores-e-faixas-exclusivas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Corredores e faixas
            </a>

            <a
              class="official-link"
              href="https://www.sptrans.com.br/rede-de-onibus-da-madrugada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rede Noturno
            </a>

            <a
              class="official-link"
              href="https://www.emtu.sp.gov.br/emtu/itinerarios-e-tarifas.fss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linhas intermunicipais
            </a>

            <a
              class="official-link"
              href="https://www.emtu.sp.gov.br/emtu/bilhetes-e-cartoes/sao-paulo/cartao-top-comum.fss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cartão TOP
            </a>
          </div>

          <div class="bus-updated">
            Informações verificadas em julho de 2026.
          </div>

    `;
  }
};
