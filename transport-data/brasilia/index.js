// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — BRASÍLIA
// INDEX / CONFIGURAÇÃO CENTRAL
// ============================================================

(function () {
  "use strict";

  window.BRASILIA_TRANSPORT_MODULES =
    window.BRASILIA_TRANSPORT_MODULES || {};


  const BRASILIA_TRANSPORT = {

    id: "brasilia",
    slug: "brasilia",

    city: "Brasília",
    state: "Distrito Federal",
    country: "Brasil",

    page: {
      eyebrow: "Malha de Transporte",
      title: "Brasília",
      description:
        "Conteúdo em preparação.",
      updatedAt: "Agosto de 2026"
    },

    cards: [

      {
        id: "network",
        module: "network",
        eyebrow: "Visão geral",
        title: "Rede de Transporte",
        description:
          "Conteúdo em preparação."
      },

      {
        id: "fares",
        module: "fares",
        eyebrow: "Valores e integrações",
        title: "Tarifas e integração",
        description:
          "Conteúdo em preparação."
      },

      {
        id: "card",
        module: "card",
        eyebrow: "Bilhetes e cartões",
        title: "Como pagar",
        description:
          "Conteúdo em preparação."
      },

      {
        id: "bus",
        module: "bus",
        eyebrow: "Ônibus e conexões",
        title: "Ônibus e BRT",
        description:
          "Conteúdo em preparação."
      },

      {
        id: "planner",
        module: "planner",
        eyebrow: "Organização do percurso",
        title: "Planeje o trajeto",
        description:
          "Conteúdo em preparação."
      }

    ],

    quickAccess: []

  };


  function getModule(moduleName) {

    return (
      window.BRASILIA_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      BRASILIA_TRANSPORT.cards.find(
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

    return BRASILIA_TRANSPORT.cards.filter(
      function (card) {
        return Boolean(
          getModule(card.module)
        );
      }
    );

  }


  function validateModules() {

    const missingModules =
      BRASILIA_TRANSPORT.cards
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
        "[Transportes · Brasília] Módulos ainda não carregados:",
        missingModules.join(", ")
      );

    }


    return missingModules;

  }


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
        `[Transportes · Brasília] Não foi possível abrir o módulo "${cardId}".`
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
        "[Transportes · Brasília] Elementos do modal não foram encontrados."
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


  window.BRASILIA_TRANSPORT =
    BRASILIA_TRANSPORT;


  window.BRASILIA_TRANSPORT_API = {

    getModule,
    getCard,
    getCardModule,
    getAvailableCards,
    validateModules,
    openModule,
    closeModule

  };


  window.setTimeout(
    function () {
      validateModules();
    },
    0
  );


  document.dispatchEvent(

    new CustomEvent(
      "brasiliaTransportReady",
      {
        detail: {
          city: BRASILIA_TRANSPORT,
          api: window.BRASILIA_TRANSPORT_API
        }
      }
    )

  );

})();
