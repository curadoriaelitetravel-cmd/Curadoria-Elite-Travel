// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — SALVADOR
// INDEX / CONFIGURAÇÃO CENTRAL
// ============================================================

(function () {
  "use strict";

  window.SALVADOR_TRANSPORT_MODULES =
    window.SALVADOR_TRANSPORT_MODULES || {};

  const SALVADOR_TRANSPORT = {

    id: "salvador",
    slug: "salvador",

    city: "Salvador",
    state: "Bahia",
    country: "Brasil",

    page: {
      eyebrow: "Malha de Transporte",

      title: "Salvador",

      description:
        "Entenda metrô, BRT, ônibus, VLT, Ferry-Boat, tarifas, integrações e meios de pagamento para circular por Salvador com mais clareza.",

      updatedAt: "Agosto de 2026"
    },


    // ========================================================
    // CARDS PRINCIPAIS
    // ========================================================

    cards: [

      {
        id: "network",
        module: "network",

        eyebrow: "Visão geral",

        title: "Rede de Transporte",

        description:
          "Veja o mapa do metrô e entenda Metrô, BRT, VLT, ônibus urbanos e metropolitanos e Ferry-Boat."
      },


      {
        id: "fares",
        module: "fares",

        eyebrow: "Valores e integrações",

        title: "Tarifas e integração",

        description:
          "Consulte tarifas do metrô, ônibus, BRT, integrações metropolitanas e valores do Ferry-Boat."
      },


      {
        id: "card",
        module: "card",

        eyebrow: "Bilhetes e cartões",

        title: "Como pagar",

        description:
          "Entenda aproximação, QR Code, Cartão Integração, SalvadorCARD, Metropasse e recargas."
      },


      {
        id: "bus",
        module: "bus",

        eyebrow: "Rede rodoviária",

        title: "Ônibus e BRT",

        description:
          "Veja ônibus municipais, BRT, linhas metropolitanas, terminais e canais de consulta."
      },


      {
        id: "planner",
        module: "planner",

        eyebrow: "Organização do percurso",

        title: "Planeje o trajeto",

        description:
          "Compare metrô, BRT, ônibus, VLT, Ferry-Boat e transporte metropolitano antes de sair."
      }

    ],


    // ========================================================
    // ACESSOS OFICIAIS
    // ========================================================

    quickAccess: [

      {
        label: "Mapa do Metrô",
        url: "https://www.ba.gov.br/trilhos/25/mapa-das-linhas"
      },

      {
        label: "Metrô Bahia",
        url: "https://trilhos.motiva.com.br/metrobahia/"
      },

      {
        label: "Mobilidade Salvador",
        url: "https://mobilidade.salvador.ba.gov.br/"
      },

      {
        label: "SalvadorCARD",
        url: "https://www.salvadorcard.com.br/"
      },

      {
        label: "AGERBA",
        url: "https://www.ba.gov.br/agerba/"
      },

      {
        label: "Ferry-Boat",
        url: "https://www.internacionaltravessias.com.br/"
      }

    ]

  };


  // ==========================================================
  // FUNÇÕES DE ACESSO AOS MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.SALVADOR_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      SALVADOR_TRANSPORT.cards.find(
        function (card) {
          return card.id === cardId;
        }
      ) || null
    );

  }


  function getCardModule(cardId) {

    const card = getCard(cardId);

    if (!card) {
      return null;
    }

    return getModule(card.module);

  }


  function getAvailableCards() {

    return SALVADOR_TRANSPORT.cards.filter(
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
      SALVADOR_TRANSPORT.cards
        .filter(
          function (card) {
            return !getModule(card.module);
          }
        )
        .map(
          function (card) {
            return card.module;
          }
        );


    if (missingModules.length > 0) {

      console.warn(
        "[Transportes · Salvador] Módulos ainda não carregados:",
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
        `[Transportes · Salvador] Não foi possível abrir o módulo "${cardId}".`
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
        "[Transportes · Salvador] Elementos do modal não foram encontrados."
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


    modal.classList.add("active");

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

  window.SALVADOR_TRANSPORT =
    SALVADOR_TRANSPORT;


  window.SALVADOR_TRANSPORT_API = {

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
      "salvadorTransportReady",
      {
        detail: {

          city:
            SALVADOR_TRANSPORT,

          api:
            window.SALVADOR_TRANSPORT_API

        }
      }
    )

  );

})();
