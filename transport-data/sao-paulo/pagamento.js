window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

window.SP_TRANSPORT_MODULES["card"] = {
  kicker: 'São Paulo · bilhetagem',
  title: 'Como pagar o transporte',

  body() {
    return `

          <div class="payment-hero">
            <section class="payment-recommendation">
              <span class="payment-eyebrow">Melhor opção para visitantes</span>
              <h4>Escolha de acordo com o transporte que você realmente vai usar</h4>
              <p>
                Para viagens ocasionais apenas de metrô ou trem, a solução mais simples é
                pagar por aproximação ou comprar um bilhete unitário QR Code. O Bilhete Único
                passa a ser mais interessante quando o visitante também pretende usar ônibus
                ou combinar diferentes meios de transporte.
              </p>
            </section>
          </div>

          <section class="panel-box">
            <h4 class="panel-title">Formas de pagamento</h4>
            <p class="panel-intro">
              A aceitação muda conforme o modal e a estação. Veja onde cada opção faz sentido.
            </p>

            <div class="payment-method-grid">
              <article class="payment-method">
                <span class="payment-method-icon">💳</span>
                <strong>Cartão por aproximação</strong>
                <span class="payment-status available">Disponível</span>
                <small>Em todas as estações do Metrô. Na CPTM, confirme a estação.</small>
              </article>

              <article class="payment-method">
                <span class="payment-method-icon">▣</span>
                <strong>Bilhete QR Code</strong>
                <span class="payment-status available">Disponível</span>
                <small>Metrô e trem. Compra física ou digital.</small>
              </article>

              <article class="payment-method">
                <span class="payment-method-icon">🟨</span>
                <strong>Bilhete Único</strong>
                <span class="payment-status available">Disponível</span>
                <small>Ônibus, metrô e trem, com integração conforme as regras.</small>
              </article>

              <article class="payment-method">
                <span class="payment-method-icon">🟦</span>
                <strong>Cartão TOP</strong>
                <span class="payment-status available">Disponível</span>
                <small>Ônibus intermunicipais metropolitanos e uso também no Metrô e na CPTM.</small>
              </article>

              <article class="payment-method">
                <span class="payment-method-icon">💵</span>
                <strong>Dinheiro</strong>
                <span class="payment-status partial">Uso limitado</span>
                <small>Ônibus e pontos físicos indicados. Não é a opção principal nas catracas.</small>
              </article>

              <article class="payment-method">
                <span class="payment-method-icon">📱</span>
                <strong>Carteira digital</strong>
                <span class="payment-status partial">Conforme o canal</span>
                <small>QR Code disponível por canais digitais e Carteira Google.</small>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Qual opção eu escolheria?</h4>

            <div class="payment-choice-grid">
              <article class="payment-choice">
                <strong>Vou usar metrô ou trem poucas vezes</strong>
                <p>
                  Pagamento por aproximação ou QR Code. Não é preciso emitir cartão
                  personalizado apenas para essas viagens.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Vou usar ônibus todos os dias</strong>
                <p>
                  O Bilhete Único tende a ser mais prático e permite aproveitar
                  as regras de integração entre ônibus.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Vou combinar ônibus com metrô ou trem</strong>
                <p>
                  Use o Bilhete Único para acessar a tarifa integrada, respeitando
                  o período e a quantidade de embarques.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Vou sair da capital em ônibus intermunicipal</strong>
                <p>
                  Considere o Cartão TOP. Ele é o cartão atual do sistema
                  metropolitano e substituiu o antigo Cartão BOM.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Não tenho tempo para fazer cadastro</strong>
                <p>
                  Para metrô e trem, use aproximação ou QR Code.
                  Nos ônibus, confirme o pagamento em dinheiro.
                </p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Bilhete Único</h4>
            <p class="panel-intro">
              Cartão da SPTrans usado nos ônibus municipais e também aceito
              na rede sobre trilhos.
            </p>

            <div class="answer-block">
              <strong>Quem pode solicitar?</strong>
              <p>
                O cadastro do Bilhete Único Comum está disponível a partir
                dos seis anos. A primeira via é gratuita.
              </p>
            </div>

            <div class="answer-block">
              <strong>Estrangeiro pode fazer o cadastro?</strong>
              <p>
                Sim. O formulário oficial possui a opção “Estrangeiro(a)”,
                mas também solicita CPF e dados de identificação. Um turista
                sem CPF deve preferir aproximação ou QR Code para metrô e trem
                e confirmar diretamente com a SPTrans qualquer alternativa
                para emissão do cartão.
              </p>
            </div>

            <div class="answer-block">
              <strong>Quais documentos são necessários?</strong>
              <p>
                Cadastro com CPF, documento de identificação e foto.
                Na retirada, apresente um documento que permita sua identificação.
              </p>
            </div>

            <div class="answer-block">
              <strong>Onde retirar?</strong>
              <p>
                Após concluir o cadastro sem pendências, retire o cartão
                em um Posto de Atendimento da SPTrans.
              </p>
            </div>

            <div class="visitor-alert">
              <strong>Para quem está apenas visitando:</strong>
              fazer um cartão personalizado pode não compensar em uma estadia curta.
              Compare o tempo de cadastro e retirada com a quantidade de viagens
              de ônibus e integrações que você pretende realizar.
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Onde comprar ou recarregar</h4>

            <div class="purchase-grid">
              <article class="purchase-card">
                <span>🏧</span>
                <strong>Máquinas nas estações</strong>
                <p>Compra de QR Code e serviços disponíveis na estação.</p>
              </article>

              <article class="purchase-card">
                <span>📱</span>
                <strong>Aplicativo TOP</strong>
                <p>Compra digital de bilhete QR Code para metrô e trem.</p>
              </article>

              <article class="purchase-card">
                <span>💬</span>
                <strong>WhatsApp TOP</strong>
                <p>Canal digital para aquisição do bilhete QR Code.</p>
              </article>

              <article class="purchase-card">
                <span>🏪</span>
                <strong>Pontos credenciados</strong>
                <p>Compra e recarga em estabelecimentos indicados.</p>
              </article>

              <article class="purchase-card">
                <span>🏢</span>
                <strong>Postos SPTrans</strong>
                <p>Retirada e atendimento do Bilhete Único personalizado.</p>
              </article>

              <article class="purchase-card">
                <span>📲</span>
                <strong>Carteira Google</strong>
                <p>Canal disponível para bilhetes QR Code compatíveis.</p>
              </article>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Atenção antes de embarcar</h4>

            <div class="answer-block">
              <strong>Use o mesmo cartão bancário ou dispositivo durante a viagem.</strong>
              <p>
                Cada passageiro deve aproximar seu próprio meio de pagamento.
              </p>
            </div>

            <div class="answer-block">
              <strong>A aproximação não substitui o Bilhete Único em todos os trajetos.</strong>
              <p>
                Para combinar ônibus com metrô ou trem, o Bilhete Único continua
                sendo a referência. Consulte os valores no card Tarifas e integração.
              </p>
            </div>

            <div class="answer-block">
              <strong>Confirme a estação da CPTM.</strong>
              <p>
                A aproximação está em expansão na rede de trens.
                Caso não esteja disponível, use QR Code ou outro meio aceito.
              </p>
            </div>
          </section>

          <section class="panel-box">
            <h4 class="panel-title">Cartão TOP — antigo Cartão BOM</h4>
            <p class="panel-intro">
              O Cartão TOP é utilizado nas linhas de ônibus intermunicipais
              da Região Metropolitana de São Paulo. Ele também pode ser usado
              no Metrô e na CPTM.
            </p>

            <div class="payment-choice-grid">
              <article class="payment-choice">
                <strong>Para que serve</strong>
                <p>
                  É indicado para quem se desloca entre a capital e municípios
                  da região metropolitana, como Guarulhos, Osasco, Barueri,
                  Santo André, São Bernardo do Campo e Diadema.
                </p>
              </article>

              <article class="payment-choice">
                <strong>O antigo Cartão BOM</strong>
                <p>
                  O sistema atual é o Cartão TOP. A referência ao nome BOM
                  é mantida apenas para ajudar quem ainda encontra orientações antigas.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Integração</strong>
                <p>
                  Algumas combinações elegíveis entre ônibus intermunicipal,
                  Metrô e CPTM podem oferecer benefício tarifário.
                  Confirme sempre a regra vigente para a linha utilizada.
                </p>
              </article>

              <article class="payment-choice">
                <strong>Antes de solicitar</strong>
                <p>
                  Consulte os canais oficiais para cadastro, emissão, recarga,
                  postos de atendimento e documentos exigidos.
                </p>
              </article>
            </div>

            <div class="fare-note">
              <strong>Bilhete Único e Cartão TOP não são o mesmo cartão.</strong>
              O Bilhete Único atende principalmente o sistema municipal da capital.
              O TOP é a referência para os ônibus intermunicipais metropolitanos.
            </div>
          </section>

          <div class="official-map-actions">
            <a
              class="official-link"
              href="https://www.emtu.sp.gov.br/emtu/bilhetes-e-cartoes/sao-paulo/cartao-top-comum.fss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cartão TOP
            </a>

            <a
              class="official-link"
              href="https://www.emtu.sp.gov.br/emtu/itinerarios-e-tarifas.fss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linhas e tarifas intermunicipais
            </a>

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
              href="https://atendimento.sptrans.com.br/cadastro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cadastro Bilhete Único
            </a>

            <a
              class="official-link"
              href="https://www.metro.sp.gov.br/sua-viagem/bilhetes-cartoes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bilhetes do Metrô
            </a>

            <a
              class="official-link"
              href="https://www.cptm.sp.gov.br/cptm/sua-viagem/bilhetes-e-cartoes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bilhetes da CPTM
            </a>
          </div>

          <div class="payment-updated">
            Informações verificadas em julho de 2026.
          </div>

    `;
  }
};
