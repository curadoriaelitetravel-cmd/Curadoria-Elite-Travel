(function () {
  'use strict';

  window.NEW_YORK_TRANSPORT_MODULES =
    window.NEW_YORK_TRANSPORT_MODULES || {};


  const NEW_YORK_TRANSPORT = {

    id: 'new-york',
    slug: 'new-york',

    city: 'Nova York',
    state: 'New York',
    country: 'Estados Unidos',

    page: {

      eyebrow: 'Malha de transportes',

      title: 'Nova York',

      description:
        'Entenda subway, ônibus, trens, ferries e conexões aeroportuárias para circular por Nova York com mais clareza e autonomia.',

      updatedAt: 'Agosto de 2026'

    },


    map: {

      image:
        '/images/mapa-transporte-new-york.png',

      officialPage:
        'https://www.mta.info/maps',

      alt:
        'Mapa oficial da rede de transporte de Nova York'

    },


    cards: [

      {
        id: 'network',
        module: 'network',
        icon: '⌘',
        eyebrow: 'Visão geral',
        title: 'Rede de Transporte',
        description:
          'Entenda subway, ônibus, trens suburbanos, PATH, ferries e as principais conexões da rede.'
      },


      {
        id: 'fares',
        module: 'fares',
        icon: '$',
        eyebrow: 'Valores e integrações',
        title: 'Tarifas e integração',
        description:
          'Veja tarifas, transferências, limites de cobrança e diferenças entre os principais sistemas.'
      },


      {
        id: 'card',
        module: 'card',
        icon: '▣',
        eyebrow: 'Bilhetes e pagamento',
        title: 'Como pagar',
        description:
          'Entenda OMNY, pagamento por aproximação e os meios utilizados nos diferentes sistemas.'
      },


      {
        id: 'bus',
        module: 'bus',
        icon: '🚌',
        eyebrow: 'Rede de ônibus',
        title: 'Como usar os ônibus',
        description:
          'Aprenda a identificar linhas locais, Limited, Select Bus Service e ônibus expressos.'
      },


      {
        id: 'planner',
        module: 'planner',
        icon: '⌖',
        eyebrow: 'Organização do percurso',
        title: 'Planeje o trajeto',
        description:
          'Compare subway, ônibus, PATH, LIRR, Metro-North, ferries e conexões com os aeroportos.'
      }

    ],


    quickAccess: [

      {
        label: 'Mapas oficiais · MTA',
        url: 'https://www.mta.info/maps'
      },


      {
        label: 'Status do serviço · MTA',
        url: 'https://www.mta.info/'
      },


      {
        label: 'Planejar viagem · MTA',
        url: 'https://new.mta.info/'
      },


      {
        label: 'OMNY',
        url: 'https://omny.info/'
      },


      {
        label: 'PATH',
        url: 'https://www.panynj.gov/path/en/index.html'
      }

    ],


    emergency: {

      title: 'Canais de atendimento',

      items: [

        {
          label: 'MTA',
          value: '511',
          url: 'tel:511'
        },


        {
          label: 'NYC',
          value: '311',
          url: 'tel:311'
        }

      ]

    }

  };


  // ==========================================================
  // MÓDULOS
  // ==========================================================

  function getModule(moduleName) {

    return (
      window.NEW_YORK_TRANSPORT_MODULES[moduleName] ||
      null
    );

  }


  function getCard(cardId) {

    return (
      NEW_YORK_TRANSPORT.cards.find(
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

    return NEW_YORK_TRANSPORT.cards.filter(
      function (card) {

        return Boolean(
          getModule(card.module)
        );

      }
    );

  }


  function validateModules() {

    const missingModules =
      NEW_YORK_TRANSPORT.cards

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


    if (missingModules.length > 0) {

      console.warn(
        '[Transportes · Nova York] Módulos ainda não carregados:',
        missingModules.join(', ')
      );

    }


    return missingModules;

  }


  // ==========================================================
  // CARDS
  // ==========================================================

  function renderCards(container) {

    if (!container) {
      return;
    }


    container.innerHTML =
      NEW_YORK_TRANSPORT.cards

        .map(
          function (card) {

            return `

              <button
                class="transport-card"
                type="button"
                data-transport-card="${card.id}"
                aria-label="Abrir ${card.title}"
              >

                <span
                  class="transport-card-icon"
                  aria-hidden="true"
                >
                  ${card.icon}
                </span>


                <span class="transport-card-content">

                  <span class="transport-card-eyebrow">
                    ${card.eyebrow}
                  </span>


                  <strong class="transport-card-title">
                    ${card.title}
                  </strong>


                  <span class="transport-card-description">
                    ${card.description}
                  </span>

                </span>


                <span
                  class="transport-card-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </button>

            `;

          }
        )

        .join('');

  }


  // ==========================================================
  // ACESSO RÁPIDO
  // ==========================================================

  function renderQuickAccess(container) {

    if (!container) {
      return;
    }


    container.innerHTML =
      NEW_YORK_TRANSPORT.quickAccess

        .map(
          function (item) {

            return `

              <a
                class="transport-quick-link"
                href="${item.url}"
                target="_blank"
                rel="noopener noreferrer"
              >

                ${item.label}

                <span aria-hidden="true">
                  ↗
                </span>

              </a>

            `;

          }
        )

        .join('');

  }


  // ==========================================================
  // ABRIR MÓDULO
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
        `[Transportes · Nova York] Não foi possível abrir o módulo "${cardId}".`
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
        '[Transportes · Nova York] Elementos do modal não foram encontrados.'
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
      typeof moduleData.body === 'function'
        ? moduleData.body()
        : moduleData.body || '';


    modal.classList.add(
      'is-open'
    );


    modal.setAttribute(
      'aria-hidden',
      'false'
    );


    document.documentElement.classList.add(
      'transport-modal-open'
    );


    document.body.classList.add(
      'transport-modal-open'
    );


    const closeButton =
      modal.querySelector(
        '[data-close-transport-modal], #closeTransportModal'
      );


    if (closeButton) {

      window.setTimeout(
        function () {

          closeButton.focus();

        },
        50
      );

    }


    return true;

  }


  // ==========================================================
  // FECHAR MÓDULO
  // ==========================================================

  function closeModule(modal) {

    if (!modal) {
      return;
    }


    modal.classList.remove(
      'is-open'
    );


    modal.setAttribute(
      'aria-hidden',
      'true'
    );


    document.documentElement.classList.remove(
      'transport-modal-open'
    );


    document.body.classList.remove(
      'transport-modal-open'
    );

  }


  // ==========================================================
  // INICIALIZAÇÃO
  // ==========================================================

  function initializeTransportPage(options) {

    const settings =
      options || {};


    const cardsContainer =
      settings.cardsContainer ||
      document.querySelector(
        '[data-transport-cards]'
      );


    const quickAccessContainer =
      settings.quickAccessContainer ||
      document.querySelector(
        '[data-transport-quick-access]'
      );


    const modal =
      settings.modal ||
      document.querySelector(
        '[data-transport-modal]'
      );


    const kicker =
      settings.kicker ||
      document.querySelector(
        '[data-transport-modal-kicker]'
      );


    const title =
      settings.title ||
      document.querySelector(
        '[data-transport-modal-title]'
      );


    const body =
      settings.body ||
      document.querySelector(
        '[data-transport-modal-body]'
      );


    renderCards(
      cardsContainer
    );


    renderQuickAccess(
      quickAccessContainer
    );


    validateModules();


    document.addEventListener(
      'click',
      function (event) {

        const cardButton =
          event.target.closest(
            '[data-transport-card]'
          );


        if (cardButton) {

          const cardId =
            cardButton.getAttribute(
              'data-transport-card'
            );


          openModule(
            cardId,
            {
              modal: modal,
              kicker: kicker,
              title: title,
              body: body
            }
          );


          return;

        }


        const closeButton =
          event.target.closest(
            '[data-close-transport-modal], #closeTransportModal'
          );


        if (closeButton) {

          closeModule(
            modal
          );

          return;

        }


        if (
          modal &&
          event.target === modal &&
          modal.classList.contains(
            'is-open'
          )
        ) {

          closeModule(
            modal
          );

        }

      }
    );


    document.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Escape' &&
          modal &&
          modal.classList.contains(
            'is-open'
          )
        ) {

          closeModule(
            modal
          );

        }

      }
    );

  }


  // ==========================================================
  // API PÚBLICA
  // ==========================================================

  window.NEW_YORK_TRANSPORT =
    NEW_YORK_TRANSPORT;


  window.NEW_YORK_TRANSPORT_API = {

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

    renderCards:
      renderCards,

    renderQuickAccess:
      renderQuickAccess,

    openModule:
      openModule,

    closeModule:
      closeModule,

    initialize:
      initializeTransportPage

  };


  // ==========================================================
  // EVENTO DE PRONTIDÃO
  // ==========================================================

  document.dispatchEvent(

    new CustomEvent(
      'newYorkTransportReady',
      {

        detail: {

          city:
            NEW_YORK_TRANSPORT,

          api:
            window.NEW_YORK_TRANSPORT_API

        }

      }
    )

  );

})();
