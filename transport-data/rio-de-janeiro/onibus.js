// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: ÔNIBUS, BRT E INTERMUNICIPAIS
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};


window.RIO_TRANSPORT_MODULES["bus"] = {

  kicker: "Rio de Janeiro · rede rodoviária",

  title: "Ônibus, BRT e intermunicipais",

  body() {

    return `

      <div class="network-layout">


        <!-- ==================================================
             VISÃO GERAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de escolher um ônibus
          </h4>

          <p class="panel-intro">
            No Rio, é importante distinguir ônibus municipal,
            BRT e ônibus intermunicipal.
            Eles pertencem a redes diferentes,
            usam canais de consulta diferentes
            e podem ter tarifas distintas.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🚌</span>

              <strong>
                Ônibus municipal
              </strong>

              <p>
                Circula dentro do município
                do Rio de Janeiro.
              </p>

              <small>
                Consulte linhas e plano operacional
                pelos canais da Prefeitura.
              </small>

            </article>


            <article class="bus-system-card">

              <span>🚍</span>

              <strong>
                BRT
              </strong>

              <p>
                Sistema de ônibus de alta capacidade
                operado em corredores e estações próprias.
              </p>

              <small>
                A operação é administrada
                pela MOBI-Rio.
              </small>

            </article>


            <article class="bus-system-card">

              <span>🌆</span>

              <strong>
                Ônibus intermunicipal
              </strong>

              <p>
                Liga o Rio a outros municípios
                da Região Metropolitana e do estado.
              </p>

              <small>
                Consulte itinerário e tarifa
                pelo DETRO/RJ.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS MUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus municipais
          </h4>

          <p class="panel-intro">
            A rede municipal atende bairros,
            terminais, estações e áreas
            que nem sempre possuem metrô ou trem.
          </p>

          <div class="bus-identification-grid">

            <article class="bus-identification-card">

              <span class="bus-identification-number">
                1
              </span>

              <strong>
                Confira o número da linha
              </strong>

              <p>
                O número é a referência mais segura
                para confirmar qual ônibus
                você deve utilizar.
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
                O letreiro mostra o sentido
                para o qual o veículo
                está seguindo.
              </p>

            </article>


            <article class="bus-identification-card">

              <span class="bus-identification-number">
                3
              </span>

              <strong>
                Confirme o ponto
              </strong>

              <p>
                Nem toda linha passa
                em todos os pontos
                da mesma avenida.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             PAGAMENTO MUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Pagamento nos ônibus municipais
          </h4>

          <div class="answer-block">

            <strong>
              O sistema municipal utiliza Jaé.
            </strong>

            <p>
              O Jaé é a bilhetagem eletrônica
              utilizada nos ônibus municipais,
              BRT, VLT, vans municipais
              e cabritinhos.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não conte com dinheiro a bordo.
            </strong>

            <p>
              A Prefeitura consolidou
              os meios eletrônicos de pagamento
              e vedou o recebimento de dinheiro
              em espécie dentro dos ônibus municipais.
            </p>

          </div>


          <div class="fare-note">

            <strong>
              Para visitantes:
            </strong>

            tenha o meio de pagamento pronto
            antes de embarcar,
            principalmente se o ônibus municipal
            fizer parte do seu deslocamento principal.

          </div>

        </section>


        <!-- ==================================================
             BRT
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            BRT · MOBI-Rio
          </h4>

          <p class="panel-intro">
            O BRT não deve ser tratado
            como um ônibus comum.
            Ele possui estações,
            corredores e serviços próprios.
          </p>

          <div class="lines-grid">

            <article class="line-mini-card">

              <div class="line-mini-head">

                <span
                  style="
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    min-width:38px;
                    height:38px;
                    border-radius:50%;
                    background:#dc5a32;
                    color:#fff;
                    font-weight:800;
                  "
                >
                  T
                </span>

                <div>
                  <strong>
                    Transoeste
                  </strong>

                  <small style="display:block;">
                    BRT
                  </small>
                </div>

              </div>

              <p>
                Principal eixo entre
                Barra da Tijuca, Recreio
                e Zona Oeste.
              </p>

              <span class="line-operator">
                MOBI-Rio
              </span>

            </article>


            <article class="line-mini-card">

              <div class="line-mini-head">

                <span
                  style="
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    min-width:38px;
                    height:38px;
                    border-radius:50%;
                    background:#397ec0;
                    color:#fff;
                    font-weight:800;
                  "
                >
                  C
                </span>

                <div>
                  <strong>
                    Transcarioca
                  </strong>

                  <small style="display:block;">
                    BRT
                  </small>
                </div>

              </div>

              <p>
                Liga Barra da Tijuca
                e Zona Norte,
                com acesso ao Galeão.
              </p>

              <span class="line-operator">
                MOBI-Rio
              </span>

            </article>


            <article class="line-mini-card">

              <div class="line-mini-head">

                <span
                  style="
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    min-width:38px;
                    height:38px;
                    border-radius:50%;
                    background:#80ae43;
                    color:#fff;
                    font-weight:800;
                  "
                >
                  O
                </span>

                <div>
                  <strong>
                    Transolímpica
                  </strong>

                  <small style="display:block;">
                    BRT
                  </small>
                </div>

              </div>

              <p>
                Conecta áreas da Zona Oeste
                e terminais importantes
                da rede.
              </p>

              <span class="line-operator">
                MOBI-Rio
              </span>

            </article>


            <article class="line-mini-card">

              <div class="line-mini-head">

                <span
                  style="
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    min-width:38px;
                    height:38px;
                    border-radius:50%;
                    background:#dfa824;
                    color:#fff;
                    font-weight:800;
                  "
                >
                  B
                </span>

                <div>
                  <strong>
                    Transbrasil
                  </strong>

                  <small style="display:block;">
                    BRT
                  </small>
                </div>

              </div>

              <p>
                Opera pelo eixo
                da Avenida Brasil
                e chega ao Terminal Gentileza.
              </p>

              <span class="line-operator">
                MOBI-Rio
              </span>

            </article>

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

              <span>📍</span>

              <strong>
                1. Localize a estação
              </strong>

              <p>
                O embarque acontece
                em estações e terminais
                próprios do sistema.
              </p>

            </article>


            <article class="bus-use-step">

              <span>🔢</span>

              <strong>
                2. Confira a linha
              </strong>

              <p>
                Um mesmo corredor pode ter
                serviços com destinos
                e paradas diferentes.
              </p>

            </article>


            <article class="bus-use-step">

              <span>🧭</span>

              <strong>
                3. Veja o sentido
              </strong>

              <p>
                Confirme qual terminal
                ou estação está indicado
                como destino.
              </p>

            </article>


            <article class="bus-use-step">

              <span>🟨</span>

              <strong>
                4. Valide o Jaé
              </strong>

              <p>
                A validação acontece
                antes do acesso
                à área de embarque.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             ÔNIBUS INTERMUNICIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Ônibus intermunicipais
          </h4>

          <p class="panel-intro">
            São usados quando o percurso
            ultrapassa os limites
            do município do Rio.
          </p>

          <div class="bus-system-grid">

            <article class="bus-system-card">

              <span>🌉</span>

              <strong>
                Região Metropolitana
              </strong>

              <p>
                Linhas ligam o Rio
                a Niterói, São Gonçalo,
                Duque de Caxias, Nova Iguaçu,
                Nilópolis, Magé, Maricá
                e outros municípios.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🔢</span>

              <strong>
                Cada linha possui tarifa própria
              </strong>

              <p>
                O valor depende
                da distância,
                do tipo de serviço
                e do itinerário.
              </p>

            </article>


            <article class="bus-system-card">

              <span>🏢</span>

              <strong>
                DETRO/RJ
              </strong>

              <p>
                É o canal oficial
                para consultar tarifas,
                itinerários
                e serviços intermunicipais.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             DIFERENÇA MUNICIPAL X INTERMUNICIPAL
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Municipal ou intermunicipal?
          </h4>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Municipal
              </strong>

              <p>
                A origem e o destino
                permanecem dentro
                do município do Rio de Janeiro.
              </p>

              <small
                style="
                  display:block;
                  margin-top:10px;
                  color:var(--muted);
                "
              >
                Referência:
                Prefeitura / Jaé.
              </small>

            </article>


            <article class="comparison-card">

              <strong>
                Intermunicipal
              </strong>

              <p>
                O ônibus atravessa
                a divisa entre municípios.
              </p>

              <small
                style="
                  display:block;
                  margin-top:10px;
                  color:var(--muted);
                "
              >
                Referência:
                DETRO/RJ / Riocard.
              </small>

            </article>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos rápidos
          </h4>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Dentro da capital
              </span>

              <strong>
                Copacabana → Centro
              </strong>

              <p>
                Se optar por ônibus comum,
                procure uma linha municipal.
              </p>

              <span class="fare-scenario-result">
                Rede municipal
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                BRT
              </span>

              <strong>
                Barra → Galeão
              </strong>

              <p>
                O BRT pode participar
                do trajeto pela Transcarioca.
                Confira o serviço exato.
              </p>

              <span class="fare-scenario-result">
                MOBI-Rio
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Outro município
              </span>

              <strong>
                Rio → Niterói de ônibus
              </strong>

              <p>
                Procure uma linha
                intermunicipal
                e confirme a tarifa no DETRO.
              </p>

              <span class="fare-scenario-result">
                Rede estadual
              </span>

            </article>

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
                  Confirme o número completo
                </strong>

                <p>
                  Não escolha uma linha
                  apenas pelo nome do bairro
                  exibido no letreiro.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                ↔️
              </span>

              <div>

                <strong>
                  Confira o sentido
                </strong>

                <p>
                  A mesma linha
                  opera nos dois sentidos.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                📱
              </span>

              <div>

                <strong>
                  Consulte antes de sair
                </strong>

                <p>
                  Planos operacionais,
                  desvios e linhas
                  podem mudar.
                </p>

              </div>

            </article>


            <article class="bus-tip">

              <span class="bus-tip-icon">
                💳
              </span>

              <div>

                <strong>
                  Confira o pagamento
                </strong>

                <p>
                  Municipal e intermunicipal
                  não usam necessariamente
                  o mesmo sistema de bilhetagem.
                </p>

              </div>

            </article>

          </div>

        </section>


        <!-- ==================================================
             FONTES
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/linhas-de-onibus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linhas municipais · Prefeitura
          </a>

          <a
            class="official-link"
            href="https://mobi-rio.rio.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MOBI-Rio
          </a>

          <a
            class="official-link"
            href="https://www.detro.rj.gov.br/regulares-tarifas-itinerario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linhas e tarifas intermunicipais
          </a>

          <a
            class="official-link"
            href="https://www.detro.rj.gov.br/operacao/onibus_intermunicipais"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ônibus intermunicipais · DETRO
          </a>

        </div>


        <div class="bus-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;

  }

};
