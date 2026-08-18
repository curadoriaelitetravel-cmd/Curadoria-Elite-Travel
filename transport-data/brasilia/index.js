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


    // ========================================================
    // PÁGINA
    // ========================================================

    page: {

      eyebrow:
        "Malha de Transporte",

      title:
        "Brasília",

      description:
        "Entenda metrô, BRT, ônibus, serviços complementares, tarifas, integração e meios de pagamento para circular pelo Distrito Federal com mais clareza.",

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
          "Entenda metrô, BRT, ônibus, Zebrinha, serviços complementares e as principais conexões do Distrito Federal."
      },


      {
        id: "fares",
        module: "fares",

        eyebrow:
          "Valores e integrações",

        title:
          "Tarifas e integração",

        description:
          "Veja as tarifas do sistema, integração do Cartão Mobilidade, pagamento avulso e gratuidade do Vai de Graça."
      },


      {
        id: "card",
        module: "card",

        eyebrow:
          "Bilhetes e cartões",

        title:
          "Como pagar",

        description:
          "Entenda Cartão Mobilidade, recargas, pagamento por aproximação, dispositivos NFC e Bilhete Avulso QR Code."
      },


      {
        id: "bus",
        module: "bus",

        eyebrow:
          "Ônibus e conexões",

        title:
          "Ônibus e BRT",

        description:
          "Veja ônibus, BRT, Zebrinha, terminais, serviços rurais e como consultar linhas pelo DF no Ponto."
      },


      {
        id: "planner",
        module: "planner",

        eyebrow:
          "Organização do percurso",

        title:
          "Planeje o trajeto",

        description:
          "Compare metrô, BRT e ônibus e consulte rotas, horários, paradas e informações operacionais antes de sair."
      }

    ],


    // ========================================================
    // ACESSOS PÚBLICOS OFICIAIS
    // ========================================================

    quickAccess: [

      {
        label:
          "SEMOB-DF",

        url:
          "https://www.semob.df.gov.br/"
      },


      {
        label:
          "DF no Ponto",

        url:
          "https://dfnoponto.semob.df.gov.br/"
      },


      {
        label:
          "Metrô-DF",

        url:
          "https://metro.df.gov.br/"
      },


      {
        label:
          "Agência Brasília · GDF",

        url:
          "https://agenciabrasilia.df.gov.br/"
      },


      {
        label:
          "TCB",

        url:
          "https://tcb.df.gov.br/"
      }

    ]

  };


  // ==========================================================
  // FUNÇÕES DE ACESSO AOS MÓDULOS
  // ==========================================================

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

    return BRASILIA_TRANSPORT.cards.filter(
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
      BRASILIA_TRANSPORT.cards
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
        "[Transportes · Brasília] Módulos ainda não carregados:",
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

  window.BRASILIA_TRANSPORT =
    BRASILIA_TRANSPORT;


  window.BRASILIA_TRANSPORT_API = {

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
      "brasiliaTransportReady",

      {
        detail: {

          city:
            BRASILIA_TRANSPORT,

          api:
            window.BRASILIA_TRANSPORT_API

        }
      }

    )

  );

})();
