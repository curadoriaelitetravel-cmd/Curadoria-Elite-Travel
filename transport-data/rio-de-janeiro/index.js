// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — RIO DE JANEIRO
// INDEX / CONFIGURAÇÃO CENTRAL
// ============================================================

(function () {
  "use strict";

  window.RIO_TRANSPORT_MODULES =
    window.RIO_TRANSPORT_MODULES || {};

  const RIO_DE_JANEIRO_TRANSPORT = {

    id: "rio",
    slug: "rio-de-janeiro",

    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    country: "Brasil",

    page: {
      eyebrow: "Malha de Transporte",

      title: "Rio de Janeiro",

      description:
        "Entenda metrô, trens metropolitanos, BRT, VLT, barcas, ônibus, tarifas e meios de pagamento para circular pelo Rio de Janeiro com mais clareza.",

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

        title: "Rede Metropolitana",

        description:
          "Veja o mapa integrado e entenda MetrôRio, trens metropolitanos, BRT, VLT, barcas e suas conexões."
      },


      {
        id: "fares",
        module: "fares",

        eyebrow: "Valores e integrações",

        title: "Tarifas e integração",

        description:
          "Consulte tarifas dos principais sistemas e entenda a diferença entre integrações municipais e metropolitanas."
      },


      {
        id: "card",
        module: "card",

        eyebrow: "Bilhetes e cartões",

        title: "Como pagar",

        description:
          "Entenda Jaé, Riocard Mais, Giro, aproximação, QR Code e qual meio utilizar em cada transporte."
      },


      {
        id: "bus",
        module: "bus",

        eyebrow: "Rede rodoviária",

        title: "Ônibus",

        description:
          "Veja como funcionam ônibus municipais, BRT administrado pela MOBI-Rio e linhas intermunicipais."
      },


      {
        id: "planner",
        module: "planner",

        eyebrow: "Organização do percurso",

        title: "Planeje o trajeto",

        description:
          "Compare metrô, trem, BRT, VLT, barcas e ônibus e consulte os canais oficiais antes de sair."
      }

    ],


    // ========================================================
    // ACESSOS OFICIAIS
    // ========================================================

    quickAccess: [

      {
        label: "Mapa Metropolitano",
        url: "https://www.rj.gov.br/transporte/node/797"
      },

      {
        label: "MetrôRio",
        url: "https://www.metrorio.com.br/"
      },

      {
        label: "MOBI-Rio",
        url: "https://mobi-rio.rio.br/"
      },

      {
        label: "Barcas Rio",
        url: "https://barcasrio.com.br/"
      },

      {
        label: "DETRO/RJ",
        url: "https://www.detro.rj.gov.br/"
      },

      {
        label: "Transportes Prefeitura do Rio",
        url: "https://transportes.prefeitura.rio/"
      }

    ]

  };


  // ==========================================================
  // FUNÇÕES DE ACESSO AOS MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.RIO_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      RIO_DE_JANEIRO_TRANSPORT.cards.find(
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

    return RIO_DE_JANEIRO_TRANSPORT.cards.filter(
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
      RIO_DE_JANEIRO_TRANSPORT.cards
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
        "[Transportes · Rio de Janeiro] Módulos ainda não carregados:",
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
        `[Transportes · Rio de Janeiro] Não foi possível abrir o módulo "${cardId}".`
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
        "[Transportes · Rio de Janeiro] Elementos do modal não foram encontrados."
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

  window.RIO_DE_JANEIRO_TRANSPORT =
    RIO_DE_JANEIRO_TRANSPORT;


  window.RIO_TRANSPORT_API = {

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
      "rioTransportReady",
      {
        detail: {

          city:
            RIO_DE_JANEIRO_TRANSPORT,

          api:
            window.RIO_TRANSPORT_API

        }
      }
    )

  );

})();
