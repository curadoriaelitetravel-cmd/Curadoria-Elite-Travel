/* =========================
   CONTROLE DE SEÇÕES (SPA)
========================= */
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================
   MENU MOBILE
========================= */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  const isOpen = menu.classList.contains('active');

  if (isOpen) {
    menu.classList.remove('active');
    overlay.style.display = 'none';
  } else {
    menu.classList.add('active');
    overlay.style.display = 'block';
  }
}

/* =========================
   MODAIS
========================= */
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function openAdminLogin() {
  openModal('adminLoginModal');
}

function openAuth() {
  openModal('authModal');
}

/* =========================
   CATEGORIAS (OFICIAIS)
========================= */
const categories = [
  {
    id: "city-guide",
    title: "City Guide",
    description: "Guias completos por cidade"
  },
  {
    id: "gastronomia",
    title: "Experiências Gastronômicas",
    description: "Melhores sugestões de bares e restaurantes"
  },
  {
    id: "pontos-turisticos",
    title: "Pontos Turísticos",
    description: "Sugestões das melhores atrações da cidade"
  },
  {
    id: "imersivas",
    title: "Experiências Imersivas",
    description: "Sugestões dos melhores passeios da cidade"
  },
  {
    id: "compras",
    title: "Sugestões de Compras e Presentes",
    description: "Melhores indicações de compras para seus momentos"
  },
  {
    id: "vida-noturna",
    title: "Dicas de Vida Noturna",
    description: "Sugestões das melhores baladas e bares"
  },
  {
    id: "hoteis",
    title: "Hotéis & Hospedagens",
    description: "Sugestões das melhores hospedagens 3 a 4 estrelas"
  },
  {
    id: "cruzeiros",
    title: "Cruzeiros",
    description: "Sugestões das melhores experiências de cruzeiro do momento"
  }
];

/* =========================
   RENDERIZAÇÃO DAS CATEGORIAS
========================= */
function renderCategories() {
  const container = document.getElementById('categoryCards');
  if (!container) return;

  container.innerHTML = "";

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <h3>${cat.title}</h3>
      <p>${cat.description}</p>
    `;
    container.appendChild(card);
  });
}

/* =========================
   INICIALIZAÇÃO
========================= */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  showSection('inicio');
});
