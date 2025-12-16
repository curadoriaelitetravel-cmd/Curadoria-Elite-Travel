/***************************************
 * CURADORIA ELITE TRAVEL – MAIN.JS
 * Categorias oficiais + base futura
 ***************************************/

/* =========================
   SPA – CONTROLE DE SEÇÕES
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
  const active = menu.classList.toggle('active');
  overlay.style.display = active ? 'block' : 'none';
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
   CATEGORIAS OFICIAIS
========================= */
const categories = [
  {
    id: "city-guide",
    name: "City Guide",
    description: "Guias completos por cidade"
  },
  {
    id: "gastronomia",
    name: "Experiências Gastronômicas",
    description: "Melhores sugestões de bares e restaurantes"
  },
  {
    id: "pontos-turisticos",
    name: "Pontos Turísticos",
    description: "Sugestões das melhores atrações da cidade"
  },
  {
    id: "experiencias-imersivas",
    name: "Experiências Imersivas",
    description: "Sugestões dos melhores passeios da cidade"
  },
  {
    id: "compras-presentes",
    name: "Sugestões de Compras e Presentes",
    description: "Melhores indicações de compras para seus momentos"
  },
  {
    id: "vida-noturna",
    name: "Dicas de Vida Noturna",
    description: "Sugestões das melhores baladas e bares da cidade"
  },
  {
    id: "hoteis",
    name: "Hotéis & Hospedagens",
    description: "Sugestões das melhores hospedagens 3 a 4 estrelas"
  },
  {
    id: "cruzeiros",
    name: "Cruzeiros",
    description: "Sugestões das melhores experiências de cruzeiro do momento"
  }
];

/* =========================
   RENDER CATEGORIAS
========================= */
function renderCategories() {
  const container = document.getElementById('categoryCards');
  if (!container) return;

  container.innerHTML = '';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
    `;
    card.onclick = () => openCategory(cat);
    container.appendChild(card);
  });
}

/* =========================
   FUTURO: PRODUTOS POR CATEGORIA
========================= */
function openCategory(category) {
  const productsBox = document.getElementById('products');
  const title = document.getElementById('currentCategoryName');
  const list = document.getElementById('productsList');

  title.textContent = category.name;
  list.innerHTML = `
    <p style="color:#9a9a9a">
      Conteúdo em desenvolvimento.<br>
      Em breve, curadorias exclusivas para <strong>${category.name}</strong>.
    </p>
  `;

  productsBox.style.display = 'block';
}

/* =========================
   INICIALIZAÇÃO
========================= */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});
