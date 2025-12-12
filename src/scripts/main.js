// main.js — lógica central: SPA, formulários, render, admin mock
document.addEventListener('DOMContentLoaded', () => {
  // Config
  const API_SEND = '/api/send-email';
  const API_LIST = '/api/list-materials';
  const EMAIL_DEST = 'curadoriaelitetravel@gmail.com';

  // -- Mock data (substituir por DB no futuro) --
  window.CATEGORIES = [
    { id:1, name:'City Guide', description:'Guias urbanos essenciais', status:'enabled' },
    { id:2, name:'Restaurantes', description:'Seleção gastronômica', status:'enabled' },
    { id:3, name:'Bares', description:'Bares e coquetéis', status:'enabled' },
    { id:4, name:'Passeios', description:'Passeios e tours', status:'enabled' },
    { id:5, name:'Vida Noturna', description:'Noitada e entretenimento', status:'enabled' },
    { id:6, name:'Hotéis', description:'Hospedagens selecionadas', status:'enabled' },
    { id:7, name:'Cruzeiros', description:'EM BREVE', status:'disabled' }
  ];

  window.PRODUCTS = [
    { id:101, code:'CG-PAR', categoryId:1, country:'França', city:'Paris', price:49.90, description:'Guia de Paris (exemplo)', fileUrl:'#' }
  ];

  window.COLUMNS = [
    { id:1, title:'O Despertar de Lisboa', date:'15/11/2025', content:'Lisboa é encantadora...' }
  ];

  // --- SPA helpers ---
  window.showSection = (id) => {
    document.querySelectorAll('main .section').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    window.scrollTo(0,0);
    // special: render profile or admin when needed
    if (id === 'admin') renderAdminPanel();
  };

  // Render category cards
  function renderCategories(){
    const container = document.getElementById('categoryCards');
    if(!container) return;
    container.innerHTML = '';
    window.CATEGORIES.forEach(cat => {
      const disabled = cat.status === 'disabled';
      const card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML = `<h3>${cat.name}</h3><p>${cat.description}${disabled ? ' — EM BREVE' : ''}</p>`;
      if(!disabled) card.addEventListener('click', ()=> selectCategory(cat.id));
      container.appendChild(card);
    });
  }

  window.selectCategory = (id) => {
    const cat = window.CATEGORIES.find(c => c.id === id);
    if(!cat) return;
    document.getElementById('currentCategoryName').textContent = cat.name;
    document.getElementById('products').style.display = 'block';
    renderProducts(id);
    showSection('curadoria');
  };

  function renderProducts(categoryId){
    const list = document.getElementById('productsList');
    if(!list) return;
    list.innerHTML = '';
    const items = window.PRODUCTS.filter(p => p.categoryId === categoryId);
    if(items.length === 0) {
      list.innerHTML = '<p class="muted">Nenhum material disponível.</p>';
      return;
    }
    items.forEach(p => {
      const el = document.createElement('div');
      el.className = 'product-card';
      el.innerHTML = `<h4>${p.country} — ${p.city}</h4><p>${p.description}</p><p class="muted">R$ ${p.price.toFixed(2)}</p><a class="btn btn-outline" href="${p.fileUrl}" target="_blank">Abrir</a>`;
      list.appendChild(el);
    });
  }

  // Render columns
  function renderColumns(){
    const container = document.getElementById('columnsList');
    if(!container) return;
    container.innerHTML = '';
    window.COLUMNS.forEach(c => {
      const card = document.createElement('div');
      card.className = 'column-item card';
      card.innerHTML = `<h4>${c.title}</h4><p class="muted">Publicado em ${c.date}</p><p>${c.content.substring(0,150)}...</p>`;
      card.addEventListener('click', () => openColumnModal(c));
      container.appendChild(card);
    });
  }

  window.openColumnModal = (col) => {
    document.getElementById('columnModalTitle').textContent = col.title;
    document.getElementById('columnModalDate').textContent = `Publicado em ${col.date}`;
    document.getElementById('columnModalBody').textContent = col.content;
    openModal('columnModal');
  };

  // --- Modals helpers ---
  function openModal(id){
    const m = document.getElementById(id);
    if(!m) return;
    m.style.display = 'flex';
    m.setAttribute('aria-hidden', 'false');
  }
  window.openModal = openModal;

  window.closeModal = (id) => {
    const m = document.getElementById(id);
    if(!m) return;
    m.style.display = 'none';
    m.setAttribute('aria-hidden','true');
  };

  // --- Mobile menu helpers (safe fallback) ---
  window.openAdminLogin = () => openModal('adminLoginModal');
  window.openAuth = (tab) => openModal('authModal');

  // --- Rating (Avalie-nos) ---
  let selectedRating = 0;
  function renderRatingStars(){
    const container = document.getElementById('ratingStars');
    if(!container) return;
    container.innerHTML = '';
    for(let i=1;i<=5;i++){
      const iEl = document.createElement('i');
      iEl.className = 'fa fa-star';
      if(i <= selectedRating) iEl.classList.add('active');
      iEl.dataset.value = i;
      iEl.addEventListener('click', ()=> {
        selectedRating = (selectedRating === i ? 0 : i);
        renderRatingStars();
      });
      container.appendChild(iEl);
    }
  }

  // --- Forms: contact & review send to /api/send-email ---
  async function postJSON(url, payload){
    return fetch(url, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
  }

  // Contact
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const payload = {
        type:'contact',
        name: document.getElementById('contName').value,
        email: document.getElementById('contEmail').value,
        subject: document.getElementById('contSubject').value,
        message: document.getElementById('contMessage').value
      };
      const feedback = document.getElementById('contactFeedback');
      feedback.textContent = 'Enviando...';
      try {
        const res = await postJSON(API_SEND, payload);
        const json = await res.json().catch(()=>({}));
        if(res.ok && json.success !== false){
          feedback.textContent = 'Mensagem enviada — obrigada!';
          contactForm.reset();
        } else {
          feedback.textContent = 'Erro ao enviar. Verifique a configuração.';
          console.error('send error', json);
        }
      } catch(err){
        feedback.textContent = 'Erro de rede ao enviar.';
        console.error(err);
      }
    });
  }

  // Review
  const reviewForm = document.getElementById('reviewForm');
  if(reviewForm){
    reviewForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      if(selectedRating === 0){
        document.getElementById('reviewFeedback').textContent = 'Por favor selecione 1 a 5 estrelas.';
        return;
      }
      const payload = {
        type:'review',
        rating:selectedRating,
        name: document.getElementById('revName').value,
        email: document.getElementById('revEmail').value,
        message: document.getElementById('revComment').value
      };
      const feedback = document.getElementById('reviewFeedback');
      feedback.textContent = 'Enviando...';
      try {
        const res = await postJSON(API_SEND, payload);
        const json = await res.json().catch(()=>({}));
        if(res.ok && json.success !== false){
          feedback.textContent = 'Avaliação enviada — obrigado!';
          reviewForm.reset();
          selectedRating = 0;
          renderRatingStars();
        } else {
          feedback.textContent = 'Erro ao enviar avaliação.';
        }
      } catch(err){
        feedback.textContent = 'Erro de rede ao enviar.';
        console.error(err);
      }
    });
  }

  // --- Admin login (mock) ---
  const adminForm = document.getElementById('adminLoginForm');
  if(adminForm){
    adminForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('adminEmail').value;
      const pw = document.getElementById('adminPassword').value;
      if(email === 'admin@elitetravel.com' && pw === 'admin@123'){
        // show admin panel
        const panel = document.getElementById('adminPanel');
        panel.style.display = 'block';
        panel.innerHTML = `<div class="card"><h3>Painel administrativo (mock)</h3>
          <p>Materiais: ${window.PRODUCTS.length}</p>
          <p>Categorias: ${window.CATEGORIES.length}</p>
          <p>Colunas: ${window.COLUMNS.length}</p></div>`;
        showSection('admin');
        closeModal('adminLoginModal');
      } else {
        document.getElementById('adminLoginFeedback').textContent = 'Credenciais incorretas.';
      }
    });
  }

  // --- Add material (admin mock) ---
  const addMaterialForm = document.getElementById('addMaterialForm');
  if(addMaterialForm){
    addMaterialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // fallback: local add only
      const title = document.getElementById('matTitle').value;
      const category = document.getElementById('matCategory').value;
      const city = document.getElementById('matCity').value;
      const country = document.getElementById('matCountry').value;
      const price = parseFloat(document.getElementById('matPrice').value || 0);
      const file = document.getElementById('matFile').value;
      window.PRODUCTS.push({
        id: 1000 + window.PRODUCTS.length + 1,
        code: title.slice(0,6).toUpperCase(),
        categoryId: (window.CATEGORIES.find(c=>c.name===category)||{id:1}).id,
        country, city, price, description:title, fileUrl:file
      });
      document.getElementById('addMaterialFeedback').textContent = 'Material adicionado (local).';
      renderProducts();
    });
  }

  // --- Initialization ---
  renderCategories();
  renderProducts(window.CATEGORIES[0].id);
  renderColumns();
  renderRatingStars();

});
