// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// MÓDULO: TARIFAS E INTEGRAÇÕES
// ============================================================

window.RIO_TRANSPORT_MODULES =
  window.RIO_TRANSPORT_MODULES || {};

window.RIO_TRANSPORT_MODULES["fares"] = {

  kicker: "Rio de Janeiro · tarifas vigentes",

  title: "Tarifas e integração",

  body() {

    return `

      <div class="network-layout">

        <!-- ==================================================
             VALORES PRINCIPAIS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Valores principais
          </h4>

          <p class="panel-intro">
            No Rio de Janeiro, cada sistema pode ter sua própria
            tarifa. Antes de embarcar, identifique se o transporte
            é municipal ou metropolitano.
          </p>

          <div class="fare-highlight-grid">

            <article class="fare-highlight">

              <span>
                Ônibus municipal
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Tarifa básica dos ônibus municipais
                da cidade do Rio de Janeiro.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                BRT
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Tarifa básica da rede BRT municipal
                administrada pela MOBI-Rio.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                VLT Carioca
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Tarifa básica para viagens
                na rede municipal de VLT.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                MetrôRio
              </span>

              <strong>
                R$ 7,90
              </strong>

              <p>
                Tarifa pública das Linhas 1, 2 e 4.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Trem metropolitano
              </span>

              <strong>
                R$ 7,60
              </strong>

              <p>
                Tarifa integral vigente
                do sistema ferroviário metropolitano.
              </p>

            </article>


            <article class="fare-highlight">

              <span>
                Barcas
              </span>

              <strong>
                R$ 5,00
              </strong>

              <p>
                Valor das ligações regulares como
                Praça XV ↔ Praça Arariboia,
                Paquetá e Cocotá.
              </p>

            </article>

          </div>

        </section>


        <!-- ==================================================
             BARCAS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifas das barcas
          </h4>

          <p class="panel-intro">
            A tarifa varia conforme a linha.
            Confira o destino antes de embarcar.
          </p>

          <div class="table-scroll">

            <table class="info-table">

              <thead>

                <tr>
                  <th>Ligação</th>
                  <th>Tarifa</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>
                    <strong>
                      Praça XV ↔ Praça Arariboia
                    </strong>
                  </td>

                  <td>
                    R$ 5,00
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Praça XV ↔ Cocotá
                    </strong>
                  </td>

                  <td>
                    R$ 5,00
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Praça XV ↔ Paquetá
                    </strong>
                  </td>

                  <td>
                    R$ 5,00
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Praça XV ↔ Charitas
                    </strong>
                  </td>

                  <td>
                    R$ 7,70
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Angra dos Reis ↔ Ilha Grande
                    </strong>
                  </td>

                  <td>
                    R$ 20,50
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>
                      Mangaratiba ↔ Ilha Grande
                    </strong>
                  </td>

                  <td>
                    R$ 20,50
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>


        <!-- ==================================================
             DOIS SISTEMAS TARIFÁRIOS
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de falar em integração
          </h4>

          <p class="panel-intro">
            Esta é uma das diferenças mais importantes
            para entender o transporte do Rio.
          </p>

          <div class="comparison-grid">

            <article class="comparison-card">

              <strong>
                Transportes municipais
              </strong>

              <p>
                Ônibus municipais, BRT, VLT,
                vans municipais e cabritinhos
                pertencem ao sistema municipal.
              </p>

              <small
                style="
                  display:block;
                  margin-top:10px;
                  color:var(--muted);
                  line-height:1.5;
                "
              >
                A bilhetagem municipal utiliza o Jaé.
              </small>

            </article>


            <article class="comparison-card">

              <strong>
                Transportes metropolitanos
              </strong>

              <p>
                Trem, barcas e ônibus intermunicipais
                pertencem à rede estadual/metropolitana.
              </p>

              <small
                style="
                  display:block;
                  margin-top:10px;
                  color:var(--muted);
                  line-height:1.5;
                "
              >
                Benefícios do Bilhete Único Intermunicipal
                utilizam o Riocard Mais habilitado no BUI.
              </small>

            </article>

          </div>

          <div class="fare-note">

            <strong>
              MetrôRio funciona como ponto de encontro
              entre os dois sistemas.
            </strong>

            Dependendo da integração utilizada,
            o passageiro pode precisar do Jaé
            ou do Riocard habilitado no BUI.

          </div>

        </section>


        <!-- ==================================================
             INTEGRAÇÕES COM METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Integrações com o MetrôRio
          </h4>

          <p class="panel-intro">
            Algumas combinações possuem tarifa própria
            quando realizadas com o meio de pagamento correto
            e dentro das regras de integração.
          </p>

          <div class="table-scroll">

            <table class="info-table">

              <thead>

                <tr>
                  <th>Integração</th>
                  <th>Meio exigido</th>
                  <th>Valor</th>
                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    <strong>
                      Metrô + BRT
                    </strong>
                  </td>

                  <td>
                    Jaé
                  </td>

                  <td>
                    R$ 9,70
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>
                      Metrô + Van Rocinha/Vidigal
                    </strong>
                  </td>

                  <td>
                    Jaé
                  </td>

                  <td>
                    R$ 8,80
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>
                      Metrô + ônibus de integração
                    </strong>
                  </td>

                  <td>
                    Jaé ou Riocard habilitado
                  </td>

                  <td>
                    R$ 8,80
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>
                      Metrô + trem
                    </strong>
                  </td>

                  <td>
                    Riocard habilitado no BUI
                  </td>

                  <td>
                    R$ 9,40
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>
                      Metrô + ônibus intermunicipal
                    </strong>
                  </td>

                  <td>
                    Riocard habilitado no BUI
                  </td>

                  <td>
                    R$ 9,40
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>
                      Metrô + barcas
                    </strong>
                  </td>

                  <td>
                    Riocard habilitado no BUI
                  </td>

                  <td>
                    R$ 9,40
                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          <div class="fare-note">

            <strong>
              Prazo de integração:
            </strong>

            nas integrações tarifárias informadas
            pelo MetrôRio, o período máximo
            de transferência é de 120 minutos.

          </div>

        </section>


        <!-- ==================================================
             BUI
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Bilhete Único Intermunicipal · BUI
          </h4>

          <p class="panel-intro">
            O BUI é um benefício tarifário estadual.
            Ele não é simplesmente um cartão diferente:
            o benefício precisa estar habilitado
            em um Riocard Mais elegível.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Trem + Metrô
              </strong>

              <p>
                Com Riocard habilitado no BUI,
                a integração tarifária custa R$ 9,40.
              </p>

              <span class="fare-scenario-result">
                R$ 9,40
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus intermunicipal + Metrô ou trem
              </strong>

              <p>
                O benefício tarifário estadual
                também pode reduzir o custo
                dessa combinação.
              </p>

              <span class="fare-scenario-result">
                R$ 9,40
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Ônibus intermunicipal + Barcas
              </strong>

              <p>
                Combinação prevista entre
                os modos metropolitanos participantes.
              </p>

              <span class="fare-scenario-result">
                R$ 9,40
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Integração
              </span>

              <strong>
                Trem + ônibus municipal
              </strong>

              <p>
                Quando realizada dentro
                das regras do benefício estadual.
              </p>

              <span class="fare-scenario-result">
                R$ 9,40
              </span>

            </article>

          </div>

          <div class="visitor-alert">

            <strong>
              Para turistas:
            </strong>

            não presuma que qualquer Riocard
            concede automaticamente o benefício.

            O Bilhete Único Intermunicipal possui
            regras próprias de cadastro e elegibilidade.

            Para uma visita curta,
            pagar as tarifas normais pode ser
            mais simples do que tentar aderir
            a um benefício destinado ao uso cotidiano.

          </div>

        </section>


        <!-- ==================================================
             TARIFA SOCIAL METRÔ
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Tarifa Social do Metrô
          </h4>

          <div class="answer-block">

            <strong>
              Valor reduzido: R$ 5,00
            </strong>

            <p>
              A Tarifa Social reduz o valor
              da passagem do MetrôRio
              para usuários que atendam
              aos critérios do benefício estadual.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Não é uma tarifa turística.
            </strong>

            <p>
              O benefício exige cadastro,
              CPF e Riocard Mais habilitado
              conforme as regras do programa.
            </p>

          </div>

        </section>


        <!-- ==================================================
             EXEMPLOS PARA O VIAJANTE
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Exemplos práticos
          </h4>

          <p class="panel-intro">
            O objetivo é entender quando existe
            uma tarifa integrada e quando cada viagem
            é cobrada separadamente.
          </p>

          <div class="fare-scenario-grid">

            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 1
              </span>

              <strong>
                Apenas metrô
              </strong>

              <p>
                Uma viagem comum custa R$ 7,90.
                Para uso ocasional,
                não é necessário aderir
                a um benefício tarifário.
              </p>

              <span class="fare-scenario-result">
                R$ 7,90
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 2
              </span>

              <strong>
                Ônibus municipal + BRT
              </strong>

              <p>
                Ambos pertencem à rede municipal.
                Consulte as regras vigentes
                de integração no Jaé.
              </p>

              <span class="fare-scenario-result">
                Use o mesmo Jaé
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 3
              </span>

              <strong>
                Metrô + BRT
              </strong>

              <p>
                A integração tarifária oficial
                é realizada com Jaé
                nas estações previstas.
              </p>

              <span class="fare-scenario-result">
                R$ 9,70
              </span>

            </article>


            <article class="fare-scenario">

              <span class="fare-scenario-kicker">
                Exemplo 4
              </span>

              <strong>
                Centro do Rio → Niterói de barca
              </strong>

              <p>
                A ligação Praça XV ↔ Praça Arariboia
                possui tarifa integral de R$ 5,00.
              </p>

              <span class="fare-scenario-result">
                R$ 5,00
              </span>

            </article>

          </div>

        </section>


        <!-- ==================================================
             AVISO
        =================================================== -->

        <section class="panel-box network-full">

          <h4 class="panel-title">
            Antes de embarcar
          </h4>

          <div class="answer-block">

            <strong>
              Não some tarifas automaticamente.
            </strong>

            <p>
              Algumas combinações possuem integração
              e outras não. O valor final depende
              dos modos utilizados,
              do cartão e das regras aplicáveis.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Use sempre o mesmo meio de pagamento
              quando a viagem depender de integração.
            </strong>

            <p>
              Trocar de cartão durante o percurso
              pode impedir o reconhecimento
              da integração tarifária.
            </p>

          </div>


          <div class="answer-block">

            <strong>
              Tarifas podem mudar.
            </strong>

            <p>
              Antes da viagem,
              confirme o valor vigente
              nos canais oficiais.
            </p>

          </div>

        </section>


        <!-- ==================================================
             FONTES OFICIAIS
        =================================================== -->

        <div class="official-map-actions">

          <a
            class="official-link"
            href="https://www.metrorio.com.br/como-pagar/meios-e-tarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas MetrôRio
          </a>


          <a
            class="official-link"
            href="https://transportes.prefeitura.rio/integracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integrações municipais
          </a>


          <a
            class="official-link"
            href="https://www.riocardmais.com.br/modaisetarifas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riocard Mais
          </a>


          <a
            class="official-link"
            href="https://barcasrio.com.br/linhas-horarios-e-tarifas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarifas das Barcas
          </a>

        </div>


        <div class="fare-updated">
          Informações verificadas em agosto de 2026.
        </div>

      </div>

    `;
  }

};
