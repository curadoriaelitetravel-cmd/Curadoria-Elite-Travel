(function () {
  'use strict';

  window.SP_TRANSPORT_MODULES = window.SP_TRANSPORT_MODULES || {};

  const SAO_PAULO_TRANSPORT = {
    id: 'sao-paulo',
    slug: 'sao-paulo',
    city: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',

    page: {
      eyebrow: 'Malha de transportes',
      title: 'São Paulo',
      description:
        'Entenda a rede, consulte tarifas e descubra como usar o transporte público de São Paulo com mais segurança e autonomia.',
      updatedAt: 'Julho de 2026'
    },

    map: {
      image:
        'https://www.metro.sp.gov.br/wp-content/uploads/2024/06/mapa-da-rede-metroferroviaria.pdf',
      officialPage:
        'https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/',
      alt: 'Mapa oficial da rede metropolitana de transportes de São Paulo'
    },

    cards: [
      {
        id: 'network',
        module: 'network',
        icon: '⌘',
        eyebrow: 'Visão geral',
        title: 'Rede Metropolitana',
        description:
          'Veja as linhas de metrô, trem e monotrilho, os operadores e as principais conexões da rede.'
      },

      {
        id: 'fares',
        module: 'fares',
        icon: 'R$',
        eyebrow: 'Valores e integrações',
        title: 'Tarifas e integração',
        description:
          'Consulte tarifas, passes temporais e regras de integração entre ônibus, metrô e trem.'
      },

      {
        id: 'card',
        module: 'card',
        icon: '▣',
        eyebrow: 'Bilhetes e cartões',
        title: 'Como pagar',
        description:
          'Entenda quando usar aproximação, QR Code, Bilhete Único, Cartão TOP ou dinheiro.'
      },

      {
        id: 'bus',
        module: 'bus',
        icon: '🚌',
        eyebrow: 'Rede rodoviária',
        title: 'Como usar os ônibus',
        description:
          'Aprenda a identificar linhas, conferir o sentido, acompanhar veículos e usar ônibus intermunicipais.'
      },

      {
        id: 'planner',
        module: 'planner',
        icon: '⌖',
        eyebrow: 'Organização do percurso',
        title: 'Planeje o trajeto',
        description:
          'Compare rotas, entenda baldeações, confira horários e escolha o caminho mais adequado.'
      }
    ],

    quickAccess: [
      {
        label: 'Mapa oficial',
        url: 'https://www.metro.sp.gov.br/sua-viagem/mapa-da-rede/'
      },
      {
        label: 'Situação do Metrô',
        url: 'https://www.metro.sp.gov.br/sua-viagem/status-das-linhas/'
      },
      {
        label: 'Situação da CPTM',
        url: 'https://www.cptm.sp.gov.br/cptm/sua-viagem/situacao-das-linhas'
      },
      {
        label: 'Olho Vivo',
        url: 'https://olhovivo.sptrans.com.br/'
      },
      {
        label: 'Busca de itinerários',
        url: 'https://www.sptrans.com.br/busca-de-itinerarios/'
      }
    ],

    emergency: {
      title: 'Canais de atendimento',
      items: [
        {
          label: 'SPTrans',
          value: '156',
          url: 'tel:156'
        },
        {
          label: 'Metrô de São Paulo',
          value: '0800 770 7722',
          url: 'tel:08007707722'
        },
        {
          label: 'CPTM',
          value: '0800 055 0121',
          url: 'tel:08000550121'
        }
      ]
    }
  };

  function getModule(moduleName) {
    return window.SP_TRANSPORT_MODULES[moduleName] || null;
  }

  function getCard(cardId) {
    return SAO_PAULO_TRANSPORT.cards.find(function (card) {
      return card.id === cardId;
    }) || null;
  }

  function getCardModule(cardId) {
    const card = getCard(cardId);

    if (!card) {
      return null;
    }

    return getModule(card.module);
  }

  function getAvailableCards() {
    return SAO_PAULO_TRANSPORT.cards.filter(function (card) {
      return Boolean(getModule(card.module));
    });
  }

  function validateModules() {
    const missingModules = SAO_PAULO_TRANSPORT.cards
      .filter(function (card) {
        return !getModule(card.module);
      })
      .map(function (card) {
        return card.module;
      });

    if (missingModules.length > 0) {
      console.warn(
        '[Transportes · São Paulo] Módulos ainda não carregados:',
        missingModules.join(', ')
      );
    }

    return missingModules;
  }

  function renderCards(container) {
    if (!container) {
      return;
    }

    container.innerHTML = SAO_PAULO_TRANSPORT.cards
      .map(function (card) {
        return `
          <button
            class="transport-card"
            type="button"
            data-transport-card="${card.id}"
            aria-label="Abrir ${card.title}"
          >
            <span class="transport-card-icon" aria-hidden="true">
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

            <span class="transport-card-arrow" aria-hidden="true">
              →
            </span>
          </button>
        `;
      })
      .join('');
  }

  function renderQuickAccess(container) {
    if (!container) {
      return;
    }

    container.innerHTML = SAO_PAULO_TRANSPORT.quickAccess
      .map(function (item) {
        return `
          <a
            class="transport-quick-link"
            href="${item.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${item.label}
            <span aria-hidden="true">↗</span>
          </a>
        `;
      })
      .join('');
  }

  function openModule(cardId, elements) {
    const card = getCard(cardId);
    const moduleData = getCardModule(cardId);

    if (!card || !moduleData) {
      console.error(
        `[Transportes · São Paulo] Não foi possível abrir o módulo "${cardId}".`
      );

      return false;
    }

    const modal = elements && elements.modal;
    const kicker = elements && elements.kicker;
    const title = elements && elements.title;
    const body = elements && elements.body;

    if (!modal || !kicker || !title || !body) {
      console.error(
        '[Transportes · São Paulo] Elementos do modal não foram encontrados.'
      );

      return false;
    }

    kicker.textContent = moduleData.kicker || card.eyebrow;
    title.textContent = moduleData.title || card.title;

    body.innerHTML =
      typeof moduleData.body === 'function'
        ? moduleData.body()
        : moduleData.body || '';

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');

    document.documentElement.classList.add('transport-modal-open');
    document.body.classList.add('transport-modal-open');

    const closeButton = modal.querySelector(
      '[data-close-transport-modal], #closeTransportModal'
    );

    if (closeButton) {
      window.setTimeout(function () {
        closeButton.focus();
      }, 50);
    }

    return true;
  }

  function closeModule(modal) {
    if (!modal) {
      return;
    }

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');

    document.documentElement.classList.remove('transport-modal-open');
    document.body.classList.remove('transport-modal-open');
  }

  function initializeTransportPage(options) {
    const settings = options || {};

    const cardsContainer =
      settings.cardsContainer ||
      document.querySelector('[data-transport-cards]');

    const quickAccessContainer =
      settings.quickAccessContainer ||
      document.querySelector('[data-transport-quick-access]');

    const modal =
      settings.modal ||
      document.querySelector('[data-transport-modal]');

    const kicker =
      settings.kicker ||
      document.querySelector('[data-transport-modal-kicker]');

    const title =
      settings.title ||
      document.querySelector('[data-transport-modal-title]');

    const body =
      settings.body ||
      document.querySelector('[data-transport-modal-body]');

    renderCards(cardsContainer);
    renderQuickAccess(quickAccessContainer);
    validateModules();

    document.addEventListener('click', function (event) {
      const cardButton = event.target.closest('[data-transport-card]');

      if (cardButton) {
        const cardId = cardButton.getAttribute('data-transport-card');

        openModule(cardId, {
          modal: modal,
          kicker: kicker,
          title: title,
          body: body
        });

        return;
      }

      const closeButton = event.target.closest(
        '[data-close-transport-modal], #closeTransportModal'
      );

      if (closeButton) {
        closeModule(modal);
        return;
      }

      if (
        modal &&
        event.target === modal &&
        modal.classList.contains('is-open')
      ) {
        closeModule(modal);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (
        event.key === 'Escape' &&
        modal &&
        modal.classList.contains('is-open')
      ) {
        closeModule(modal);
      }
    });
  }

  window.SAO_PAULO_TRANSPORT = SAO_PAULO_TRANSPORT;

  window.SAO_PAULO_TRANSPORT_API = {
    getModule: getModule,
    getCard: getCard,
    getCardModule: getCardModule,
    getAvailableCards: getAvailableCards,
    validateModules: validateModules,
    renderCards: renderCards,
    renderQuickAccess: renderQuickAccess,
    openModule: openModule,
    closeModule: closeModule,
    initialize: initializeTransportPage
  };

  document.dispatchEvent(
    new CustomEvent('saoPauloTransportReady', {
      detail: {
        city: SAO_PAULO_TRANSPORT,
        api: window.SAO_PAULO_TRANSPORT_API
      }
    })
  );
})();
