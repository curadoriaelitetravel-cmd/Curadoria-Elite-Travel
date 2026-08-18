// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BELO HORIZONTE
// INDEX / CONFIGURAÇÃO CENTRAL
// ============================================================

(function () {
  "use strict";

  window.BELO_HORIZONTE_TRANSPORT_MODULES =
    window.BELO_HORIZONTE_TRANSPORT_MODULES || {};


  const BELO_HORIZONTE_TRANSPORT = {

    id: "belo-horizonte",
    slug: "belo-horizonte",

    city: "Belo Horizonte",
    state: "Minas Gerais",
    country: "Brasil",


    // ========================================================
    // PÁGINA
    // ========================================================

    page: {

      eyebrow:
        "Malha de Transporte",

      title:
        "Belo Horizonte",

      description:
        "Entenda metrô, MOVE, ônibus municipais, sistema suplementar, transporte metropolitano, tarifas, integrações e meios de pagamento para circular por Belo Horizonte com mais clareza.",

      updatedAt:
        "Agosto de 2026"

    },


    // ========================================================
    // CARDS PRINCIPAIS
    // ========================================================

    cards: [

      {
        id: "network",
        module: "network",

        eyebrow:
          "Visão geral",

        title:
          "Rede de Transporte",

        description:
          "Entenda a Linha 1 do metrô, MOVE, ônibus municipais, sistema suplementar e conexões metropolitanas."
      },


      {
        id: "fares",
        module: "fares",

        eyebrow:
          "Valores e integrações",

        title:
          "Tarifas e integração",

        description:
          "Veja tarifas municipais, integrações com o metrô, Catraca Livre e valores da rede metropolitana."
      },


      {
        id: "card",
        module: "card",

        eyebrow:
          "Bilhetes e cartões",

        title:
          "Como pagar",

        description:
          "Entenda Cartão BHBUS, QR Code, recargas, integração tarifária e diferenças entre os sistemas municipal e metropolitano."
      },


      {
        id: "bus",
        module: "bus",

        eyebrow:
          "Ônibus e conexões",

        title:
          "Ônibus e MOVE",

        description:
          "Veja linhas convencionais, MOVE, suplementar, estações, Madrugão e transporte metropolitano."
      },


      {
        id: "planner",
        module: "planner",

        eyebrow:
          "Organização do percurso",

        title:
          "Planeje o trajeto",

        description:
          "Compare metrô, MOVE, ônibus municipais e transporte metropolitano antes de escolher como se deslocar."
      }

    ],


    // ========================================================
    // ACESSOS PÚBLICOS OFICIAIS
    // ========================================================

    quickAccess: [

      {
        label:
          "SUMOB · Belo Horizonte",

        url:
          "https://prefeitura.pbh.gov.br/sumob"
      },


      {
        label:
          "Horários e itinerários",

        url:
          "https://prefeitura.pbh.gov.br/sumob/onibus/horarios-e-itinerarios"
      },


      {
        label:
          "Ônibus em tempo real",

        url:
          "https://prefeitura.pbh.gov.br/sumob/onibus-em-tempo-real"
      },


      {
        label:
          "Tarifas e integrações",

        url:
          "https://prefeitura.pbh.gov.br/sumob/onibus/tarifas-e-integracoes"
      },


      {
        label:
          "Transporte metropolitano · MG",

        url:
          "https://www.mg.gov.br/servico/obter-informacoes-sobre-o-transporte-coletivo-da-regiao-metropolitana-de-belo-horizonte"
      },


      {
        label:
          "DER-MG",

        url:
          "https://www.der.mg.gov.br/"
      }

    ]

  };


  // ==========================================================
  // FUNÇÕES DE ACESSO AOS MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.BELO_HORIZONTE_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      BELO_HORIZONTE_TRANSPORT.cards.find(
        function (card) {

          return card.id === cardId;

        }
      ) || null
    );

  }


  function getCardModule(cardId) {

    const card =
      getCard(cardId);


    if (!card) {
      return null;
    }


    return getModule(
      card.module
    );

  }


  function getAvailableCards() {

    return BELO_HORIZONTE_TRANSPORT.cards.filter(
      function (card) {

        return Boolean(
          getModule(card.module)
        );

      }
    );

  }


  // ==========================================================
  // VALIDAÇÃO
  // ==========================================================

  function validateModules() {

    const missingModules =
      BELO_HORIZONTE_TRANSPORT.cards
        .filter(
          function (card) {

            return !getModule(
              card.module
            );

          }
        )
        .map(
          function (card) {

            return card.module;

          }
        );


    if (
      missingModules.length > 0
    ) {

      console.warn(
        "[Transportes · Belo Horizonte] Módulos ainda não carregados:",
        missingModules.join(", ")
      );

    }


    return missingModules;

  }


  // ==========================================================
  // ABRIR CONTEÚDO
  // ==========================================================

  function openModule(
    cardId,
    elements
  ) {

    const card =
      getCard(cardId);

    const moduleData =
      getCardModule(cardId);


    if (
      !card ||
      !moduleData
    ) {

      console.error(
        `[Transportes · Belo Horizonte] Não foi possível abrir o módulo "${cardId}".`
      );

      return false;

    }


    const modal =
      elements &&
      elements.modal;

    const kicker =
      elements &&
      elements.kicker;

    const title =
      elements &&
      elements.title;

    const body =
      elements &&
      elements.body;


    if (
      !modal ||
      !kicker ||
      !title ||
      !body
    ) {

      console.error(
        "[Transportes · Belo Horizonte] Elementos do modal não foram encontrados."
      );

      return false;

    }


    kicker.textContent =
      moduleData.kicker ||
      card.eyebrow;


    title.textContent =
      moduleData.title ||
      card.title;


    body.innerHTML =
      typeof moduleData.body === "function"
        ? moduleData.body()
        : moduleData.body || "";


    modal.classList.add(
      "active"
    );


    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "modal-open"
    );


    return true;

  }


  // ==========================================================
  // FECHAR CONTEÚDO
  // ==========================================================

  function closeModule(modal) {

    if (!modal) {
      return;
    }


    modal.classList.remove(
      "active"
    );


    modal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "modal-open"
    );

  }


  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  window.BELO_HORIZONTE_TRANSPORT =
    BELO_HORIZONTE_TRANSPORT;


  window.BELO_HORIZONTE_TRANSPORT_API = {

    getModule:
      getModule,

    getCard:
      getCard,

    getCardModule:
      getCardModule,

    getAvailableCards:
      getAvailableCards,

    validateModules:
      validateModules,

    openModule:
      openModule,

    closeModule:
      closeModule

  };


  // ==========================================================
  // VALIDAÇÃO AUTOMÁTICA
  // ==========================================================

  window.setTimeout(
    function () {

      validateModules();

    },
    0
  );


  // ==========================================================
  // EVENTO DE PRONTO
  // ==========================================================

  document.dispatchEvent(

    new CustomEvent(
      "beloHorizonteTransportReady",

      {
        detail: {

          city:
            BELO_HORIZONTE_TRANSPORT,

          api:
            window.BELO_HORIZONTE_TRANSPORT_API

        }
      }

    )

  );

})();
