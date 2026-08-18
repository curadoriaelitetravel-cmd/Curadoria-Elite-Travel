// ============================================================
// CURADORIA ELITE TRAVEL
// TRANSPORTES — GRAMADO
// INDEX / CONFIGURAÇÃO CENTRAL
// ============================================================

(function () {
  "use strict";

  window.GRAMADO_TRANSPORT_MODULES =
    window.GRAMADO_TRANSPORT_MODULES || {};

  const GRAMADO_TRANSPORT = {

    id: "gramado",
    slug: "gramado",

    city: "Gramado",
    state: "Rio Grande do Sul",
    country: "Brasil",

    page: {
      eyebrow: "Malha de Transporte",

      title: "Gramado",

      description:
        "Entenda a rede municipal, conexões rodoviárias, tarifas, bilhetagem e alternativas de deslocamento para circular por Gramado com mais clareza.",

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
          "Entenda como funciona a mobilidade de Gramado, a rede municipal e as principais conexões rodoviárias."
      },


      {
        id: "fares",
        module: "fares",

        eyebrow: "Valores e custos",

        title: "Tarifas e custos",

        description:
          "Consulte a tarifa municipal e entenda como funcionam os valores das viagens intermunicipais."
      },


      {
        id: "card",
        module: "card",

        eyebrow: "Bilhetagem",

        title: "Como pagar",

        description:
          "Entenda a bilhetagem eletrônica e o Cartão Nosso Transporte Público do sistema municipal."
      },


      {
        id: "bus",
        module: "bus",

        eyebrow: "Ônibus e conexões",

        title: "Ônibus",

        description:
          "Veja a rede municipal, áreas atendidas, conexões rodoviárias e referências para embarque."
      },


      {
        id: "planner",
        module: "planner",

        eyebrow: "Organização do percurso",

        title: "Planeje o trajeto",

        description:
          "Compare caminhada, ônibus, táxi, aplicativo, carro e conexões rodoviárias antes de decidir como se deslocar."
      }

    ],


    // ========================================================
    // ACESSOS PÚBLICOS
    // ========================================================

    quickAccess: [

      {
        label: "Prefeitura de Gramado",
        url: "https://www.gramado.rs.gov.br/"
      },

      {
        label: "Trânsito e Transporte · Gramado",
        url: "https://www.gramado.rs.gov.br/subportal/seguranca-publica-transito-transporte-e-fiscalizacao"
      },

      {
        label: "DAER-RS",
        url: "https://www.daer.rs.gov.br/"
      },

      {
        label: "AGERGS",
        url: "https://agergs.rs.gov.br/transporte-rodoviario-de-passageiros"
      }

    ]

  };


  // ==========================================================
  // FUNÇÕES DE ACESSO AOS MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.GRAMADO_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      GRAMADO_TRANSPORT.cards.find(
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

    return GRAMADO_TRANSPORT.cards.filter(
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
      GRAMADO_TRANSPORT.cards
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
        "[Transportes · Gramado] Módulos ainda não carregados:",
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
        `[Transportes · Gramado] Não foi possível abrir o módulo "${cardId}".`
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
        "[Transportes · Gramado] Elementos do modal não foram encontrados."
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

  window.GRAMADO_TRANSPORT =
    GRAMADO_TRANSPORT;


  window.GRAMADO_TRANSPORT_API = {

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
      "gramadoTransportReady",
      {
        detail: {

          city:
            GRAMADO_TRANSPORT,

          api:
            window.GRAMADO_TRANSPORT_API

        }
      }
    )

  );

})();
