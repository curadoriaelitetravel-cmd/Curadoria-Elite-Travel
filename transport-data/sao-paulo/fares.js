window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

window.SP_TRANSPORT_MODULES["fares"] = {
  kicker: 'São Paulo · tarifas vigentes',
  title: 'Tarifas e integração',

  body() {
    return `

          <section class="panel-box">
            <h4 class="panel-title">Valores principais</h4>
            <p class="panel-intro">
              Os valores abaixo são os que mais importam para quem visita São Paulo e usa
              o transporte público de forma ocasional.
            </p>

            <div class="fare-highlight-grid">
              <article class="fare-highlight">
                <span>Ônibus municipal</span>
                <strong>R$ 5,30</strong>
                <p>
                  Tarifa comum da rede municipal. Com crédito comum no Bilhete Único,
                  permite integração entre ônibus dentro da regra vigente.
                </p>
              </article>

              <article class="fare-highlight">
                <span>Metrô ou trem</span>
                <strong>R$ 5,40</strong>
                <p>
                  Uma viagem na rede metroferroviária, incluindo Metrô e CPTM.
                </p>
              </article>

              <article class="fare-highlight">
                <span>Ônibus + metrô/trem</span>
                <strong>R$ 9,38</strong>
                <p>
                  Tarifa integrada comum usada com Bilhete Único dentro dos limites de tempo
                  e embarques.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Como funciona a integração</h4>
            <p class="panel-intro">
              Integração não significa viagens ilimitadas. Ela combina embarques específicos
              dentro de uma janela de tempo.
            </p>

            <div class="integration-grid">
              <article class="integration-card">
                <h5>Somente ônibus municipais</h5>

                <div class="integration-visual" aria-label="Até quatro ônibus em três horas">
                  <span class="integration-step">🚌 1</span>
                  <span class="integration-arrow">+</span>
                  <span class="integration-step">🚌 2</span>
                  <span class="integration-arrow">+</span>
                  <span class="integration-step">🚌 3</span>
                  <span class="integration-arrow">+</span>
                  <span class="integration-step">🚌 4</span>
                </div>

                <p>
                  Uma tarifa comum permite até quatro embarques em ônibus diferentes
                  durante três horas.
                </p>
              </article>

              <article class="integration-card">
                <h5>Ônibus + metrô ou trem</h5>

                <div class="integration-visual" aria-label="Até três ônibus e um embarque sobre trilhos">
                  <span class="integration-step">🚌 até 3</span>
                  <span class="integration-arrow">+</span>
                  <span class="integration-step">🚇 1 embarque</span>
                </div>

                <p>
                  A tarifa integrada permite até três ônibus em três horas e um embarque
                  no Metrô ou na CPTM. O acesso aos trilhos deve acontecer nas duas primeiras horas.
                </p>
              </article>
            </div>

            <div class="fare-note">
              <strong>Importante:</strong>
              para receber o benefício da integração, use o mesmo Bilhete Único em todos os embarques.
              Pagamentos avulsos por QR Code, aproximação ou dinheiro não formam essa integração
              tarifária entre ônibus e trilhos.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Passes temporais</h4>
            <p class="panel-intro">
              Fazem sentido quando várias viagens serão realizadas dentro do mesmo período.
            </p>

            <div class="table-scroll">
              <table class="info-table">
                <thead>
                  <tr>
                    <th>Modalidade</th>
                    <th>Valor</th>
                    <th>Limite</th>
                    <th>Quando pode compensar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>24 horas · ônibus</strong></td>
                    <td>R$ 20,25</td>
                    <td>Até 10 viagens em 24 horas corridas</td>
                    <td>A partir da 4ª tarifa de ônibus no mesmo período.</td>
                  </tr>
                  <tr>
                    <td><strong>24 horas · metrô/trem</strong></td>
                    <td>R$ 20,50</td>
                    <td>Até 10 viagens em 24 horas corridas</td>
                    <td>A partir da 4ª viagem sobre trilhos no mesmo período.</td>
                  </tr>
                  <tr>
                    <td><strong>24 horas · integrado</strong></td>
                    <td>R$ 27,28</td>
                    <td>Até 10 viagens em 24 horas corridas</td>
                    <td>A partir do 3º uso da tarifa integrada no mesmo período.</td>
                  </tr>
                  <tr>
                    <td><strong>Mensal · ônibus</strong></td>
                    <td>R$ 257,53</td>
                    <td>Até 10 viagens por dia durante 31 dias</td>
                    <td>Voltado a uso frequente, não a uma visita curta comum.</td>
                  </tr>
                  <tr>
                    <td><strong>Mensal · metrô/trem</strong></td>
                    <td>R$ 262,43</td>
                    <td>Até 10 viagens por dia durante 31 dias</td>
                    <td>Mais adequado para estadias longas e deslocamentos diários.</td>
                  </tr>
                  <tr>
                    <td><strong>Mensal · integrado</strong></td>
                    <td>R$ 411,13</td>
                    <td>Até 10 viagens por dia durante 31 dias</td>
                    <td>Para uso frequente combinado entre ônibus e trilhos.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="fare-note">
              <strong>O cálculo acima é uma comparação simples de preço.</strong>
              O passe temporal exige crédito adequado no Bilhete Único e só vale a pena
              quando as viagens realmente acontecerem dentro da janela indicada.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Qual tarifa faz mais sentido?</h4>

            <div class="fare-scenario-grid">
              <article class="fare-scenario">
                <span class="fare-scenario-kicker">Exemplo 1</span>
                <strong>Duas viagens de metrô no mesmo dia</strong>
                <p>
                  Duas tarifas unitárias custam R$ 10,80. O passe de 24 horas não compensa.
                </p>
                <span class="fare-scenario-result">Use tarifa unitária</span>
              </article>

              <article class="fare-scenario">
                <span class="fare-scenario-kicker">Exemplo 2</span>
                <strong>Quatro viagens de metrô no mesmo período</strong>
                <p>
                  Quatro tarifas custariam R$ 21,60. O passe de 24 horas de R$ 20,50
                  passa a ser ligeiramente mais econômico.
                </p>
                <span class="fare-scenario-result">Compare o passe de 24h</span>
              </article>

              <article class="fare-scenario">
                <span class="fare-scenario-kicker">Exemplo 3</span>
                <strong>Ônibus e metrô em vários deslocamentos</strong>
                <p>
                  Três tarifas integradas custariam R$ 28,14. O passe integrado de 24 horas
                  custa R$ 27,28 e pode ser mais vantajoso.
                </p>
                <span class="fare-scenario-result">Passe integrado pode compensar</span>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Domingos e datas especiais</h4>

            <div class="answer-block">
              <strong>Ônibus municipais são gratuitos aos domingos.</strong>
              <p>
                O benefício vale da 0h às 23h59 para todas as pessoas, inclusive turistas.
                A gratuidade também é aplicada em 25 de dezembro, 1º de janeiro e 25 de janeiro.
              </p>
            </div>

            <div class="answer-block">
              <strong>Metrô, trem e ônibus intermunicipais continuam pagos.</strong>
              <p>
                O Domingão Tarifa Zero abrange somente os ônibus municipais da cidade de São Paulo.
                Como a tarifa do ônibus é gratuita, não há desconto de integração com os trilhos nesse dia.
              </p>
            </div>
          </section>

          <div class="official-map-actions">
            <a
              class="official-link"
              href="https://www.sptrans.com.br/tarifas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarifas SPTrans
            </a>

            <a
              class="official-link"
              href="https://bilheteunico.sptrans.com.br/comum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Regras do Bilhete Único
            </a>

            <a
              class="official-link"
              href="https://www.metro.sp.gov.br/sua-viagem/bilhetes-cartoes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarifas do Metrô
            </a>

            <a
              class="official-link"
              href="https://www.cptm.sp.gov.br/cptm/sua-viagem/bilhetes-e-cartoes/quadro-de-tarifas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarifas da CPTM
            </a>
          </div>

          <div class="fare-updated">
            Informações verificadas em julho de 2026.
          </div>
        
    `;
  }
};
