window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

window.SP_TRANSPORT_MODULES["network"] = {
  kicker: 'São Paulo · visão completa',
  title: 'Rede Metropolitana',

  body() {
    return `

          <div class="network-layout">

            <div class="network-row">
              <section class="panel-box">
                <h4 class="panel-title">Mapa da rede</h4>
                <p class="panel-intro">
                  Metrô, trens metropolitanos e monotrilho reunidos em uma única visualização.
                </p>

                <div class="official-map-wrap">
                  <img
                    class="official-map-image"
                    src="${MAP_URL}"
                    alt="Mapa da rede metropolitana de São Paulo em 2026"
                    loading="lazy"
                  />
                </div>

                <div class="official-map-actions">
                  <button class="map-zoom-button" type="button" id="openMapLightbox">
                    Ampliar mapa
                  </button>

                  <a
                    class="official-link"
                    href="https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fonte oficial
                  </a>
                </div>
              </section>

              <section class="panel-box">
                <h4 class="panel-title">Entenda este mapa</h4>
                <p class="panel-intro">
                  Cores identificam linhas. Símbolos mostram conexões, serviços e pontos importantes.
                </p>

                <div class="legend-grid">
                  ${createLegendLine("#6f1935", "Linha escura", "É a Linha 7 — Rubi, um trem metropolitano operado pela TIC Trens.")}
                  ${createLegendSymbol("↔", "Integração gratuita", "Troca de linha sem pagamento adicional dentro da área indicada.")}
                  ${createLegendSymbol("R$", "Integração tarifada", "Existe conexão, mas com regra própria de cobrança.")}
                  ${createLegendSymbol("🚶", "Conexão a pé", "É necessário sair e caminhar entre as estações.")}
                  ${createLegendSymbol("✈", "Aeroporto", "Indica ligação com aeroporto ou serviço de acesso aeroportuário.")}
                  ${createLegendSymbol("B", "Terminal rodoviário", "Indica conexão com terminal de ônibus intermunicipal ou interestadual.")}
                  ${createLegendSymbol("E", "Serviço expresso", "Serviço que pode parar em menos estações.")}
                  ${createLegendSymbol("A", "Acesso livre", "Trecho ou estação indicada com acesso sem bloqueio tarifário.")}
                </div>
              </section>
            </div>

            <div class="network-row">
              <section class="panel-box">
                <h4 class="panel-title">Diferença entre metrô e trem</h4>
                <p class="panel-intro">
                  Ambos fazem parte da rede, mas atendem escalas e trajetos diferentes.
                </p>

                <div class="comparison-grid">
                  <article class="comparison-card">
                    <strong>Metrô</strong>
                    <p>
                      Opera principalmente dentro da cidade, com estações mais próximas
                      e alta frequência em áreas urbanas.
                    </p>
                  </article>

                  <article class="comparison-card">
                    <strong>Trem metropolitano</strong>
                    <p>
                      Liga a capital a bairros mais afastados e municípios da Região Metropolitana.
                    </p>
                  </article>
                </div>
              </section>

              <section class="panel-box">
                <h4 class="panel-title">Operadores presentes no mapa</h4>
                <p class="panel-intro">
                  Cada operador administra linhas específicas da rede.
                </p>

                <div class="operator-grid">
                  ${createOperatorCard("#224d93", "Metrô SP", "Linhas 1, 2, 3 e 15")}
                  ${createOperatorCard("#d33a35", "CPTM", "Linhas 10, 11, 12 e 13")}
                  ${createOperatorCard("#d7b11e", "ViaQuatro", "Linha 4")}
                  ${createOperatorCard("#20a39c", "ViaMobilidade", "Linhas 5, 8 e 9")}
                  ${createOperatorCard("#7c2f87", "TIC Trens", "Linha 7")}
                </div>
              </section>
            </div>

            <section class="panel-box network-full">
              <h4 class="panel-title">Linhas da rede</h4>
              <p class="panel-intro">
                As 14 linhas aparecem em duas fileiras de sete para reduzir a rolagem.
              </p>

              <div class="lines-grid">
                ${createLineMiniCard("#1f6fc2", "1", "Azul", "Metrô", "Jabaquara ↔ Tucuruvi", "Metrô SP")}
                ${createLineMiniCard("#31945a", "2", "Verde", "Metrô", "Vila Prudente ↔ Vila Madalena", "Metrô SP")}
                ${createLineMiniCard("#c94239", "3", "Vermelha", "Metrô", "Corinthians-Itaquera ↔ Palmeiras-Barra Funda", "Metrô SP")}
                ${createLineMiniCard("#d4b11c", "4", "Amarela", "Metrô", "Luz ↔ Vila Sônia", "ViaQuatro")}
                ${createLineMiniCard("#8b4ba5", "5", "Lilás", "Metrô", "Capão Redondo ↔ Chácara Klabin", "ViaMobilidade")}
                ${createLineMiniCard("#6f1935", "7", "Rubi", "Trem metropolitano", "Luz ↔ Jundiaí", "TIC Trens")}
                ${createLineMiniCard("#8a8a8a", "8", "Diamante", "Trem metropolitano", "Júlio Prestes ↔ Itapevi", "ViaMobilidade")}

                ${createLineMiniCard("#49a8c4", "9", "Esmeralda", "Trem metropolitano", "Osasco ↔ Varginha", "ViaMobilidade")}
                ${createLineMiniCard("#24a184", "10", "Turquesa", "Trem metropolitano", "Brás ↔ Rio Grande da Serra", "CPTM")}
                ${createLineMiniCard("#df7f32", "11", "Coral", "Trem metropolitano", "Luz ↔ Estudantes", "CPTM")}
                ${createLineMiniCard("#223e89", "12", "Safira", "Trem metropolitano", "Brás ↔ Calmon Viana", "CPTM")}
                ${createLineMiniCard("#37a17b", "13", "Jade", "Trem metropolitano", "Eng. Goulart ↔ Aeroporto-Guarulhos", "CPTM")}
                ${createLineMiniCard("#b3b3b3", "15", "Prata", "Monotrilho", "Vila Prudente ↔ Jardim Colonial", "Metrô SP")}
                ${createLineMiniCard("#b58735", "17", "Ouro", "Monotrilho", "Em implantação", "Metrô SP")}
              </div>
            </section>
          </div>
        
    `;
  }
};
