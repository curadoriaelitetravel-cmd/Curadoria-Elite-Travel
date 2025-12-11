// main.js — lógica central do site
document.addEventListener('DOMContentLoaded', () => {
  // config
  const SEND_EMAIL_API = '/api/send-email';
  const LIST_MATERIALS_API = '/api/list-materials';
  const DEST_EMAIL = 'curadoriaelitetravel@gmail.com';

  // mock data (será substituído por backend real no futuro)
  window.MOCK_CATEGORIES = [
    { id: 1, name: "City Guide", icon: "map", price: 49.90, status: 'enabled', description: 'Guias urbanos essenciais.' },
    { id: 2, name: "Restaurantes", icon: "restaurant", price: 29.90, status: 'enabled', description: 'Seleção gastronômica refinada.' },
    { id: 3, name: "Bares", icon: "local_bar", price: 19.90, status: 'enabled', description: 'Drinks e bares recomendados.' },
    { id: 4, name: "Passeios", icon: "hiking", price: 45.90, status: 'enabled', description: 'Passeios e tours selecionados.' },
    { id: 5, name: "Vida Noturna", icon: "nights_stay", price: 25.90, status: 'enabled', description: 'Vida noturna e entretenimento.' },
    { id: 6, name: "Hotéis", icon: "hotel", price: 59.90, status: 'enabled', description: 'Hotéis selecionados.' },
    { id: 7, name: "Cruzeiros", icon: "directions_boat", price: 79.90, status: 'disabled', description: 'EM BREVE' }
  ];

  window.MOCK_PRODUCTS = [
    { id: 101, code:'CG-PAR-24', categoryId:1, country:'França', city:'Paris', price:49.90, description:'Guia de Paris 3 dias', fileUrl:'#' }
  ];

  window.MOCK_COLUMNS = [
    { id:1, title:'O Despertar de Lisboa', date:'15/11/2025', content:'Lisboa cativa...' },
    { id:2, title:'Gastronomia de Milão', date:'10/11/2025', content:'Milão e sua culinária...' }
  ];

  // utilities
  function el(selector){ return document.querySelector(selector); }
  function elAll(selector){ return Array.from(document.querySelectorAll(selector)); }

  // SPA helper
  window.showSection = function(sectionId){
    document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if(target) target.classList.add('active');
    window.location.hash = sectionId;
  };

  // init
  renderCategoryCards();
  renderColumns();
  renderRatingStars();
  applyInitialHash();

  // CONTACT form
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');
  if(contactForm){
    contactForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      contactFeedback.style.display='none';
      const payload = {
        type:'contact',
        name: contactForm.name.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value
      };
      try {
        const res = await fetch(SEND_EMAIL_API, {
          method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)
        });
        const json = await res.json().catch(()=>({}));
        if(res.ok && json.success!==false){
          contactFeedback.textContent='Mensagem enviada — responderemos em breve.';
          contactFeedback.className='feedback-message';
          contactFeedback.style.display='block';
          contactForm.reset();
        } else {
          contactFeedback.textContent='Erro ao enviar mensagem. Verifique a configuração do servidor.';
          contactFeedback.className='feedback-message';
          contactFeedback.style.display='block';
        }
      } catch(err){
        console.error(err);
        contactFeedback.textContent='Erro de conexão ao enviar mensagem.';
        contactFeedback.className='feedback-message';
        contactFeedback.style.display='block';
      }
    });
  }

  // REVIEW form
  let selectedRating = 0;
  function renderRatingStars(){
    const container = document.getElementById('rating-stars');
    container.innerHTML='';
    for(let i=1;i<=5;i++){
      const iEl = document.createElement('i');
      iEl.className = `fa fa-star ${i<=selectedRating ? 'selected' : ''}`;
      iEl.dataset.value = i;
      iEl.addEventListener('click', ()=>{ selectedRating = (selectedRating===i?0:i); renderRatingStars();});
      container.appendChild(iEl);
    }
    updateRatingLegend();
  }
  function updateRatingLegend(){
    const legend = document.getElementById('rating-legend');
    if(selectedRating===0) legend.textContent='Clique nas estrelas para nos avaliar';
    else if(selectedRating<=2) legend.textContent='1 a 2 Estrela - Muito ruim';
    else if(selectedRating===3) legend.textContent='3 Estrela - Regular';
    else if(selectedRating===4) legend.textContent='4 Estrela - Bom';
    else legend.textContent='5 Estrela - Excelente';
  }

  const reviewForm = document.getElementById('submit-review-form');
  const reviewFeedback = document.getElementById('review-feedback');
  if(reviewForm){
    reviewForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const payload = {
        type:'review',
        rating:selectedRating,
        name: document.getElementById('review-nome').value,
        lastName: document.getElementById('review-sobrenome').value,
        email: document.getElementById('review-email').value,
        gender: document.getElementById('review-genero').value,
        birthDate: document.getElementById('review-aniversario').value,
        state: document.getElementById('review-estado').value,
        city: document.getElementById('review-cidade').value,
        type: document.getElementById('review-tipo').value,
        comment: document.getElementById('review-comentario').value
      };
      try {
        const res = await fetch(SEND_EMAIL_API, {
          method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)
        });
        const json = await res.json().catch(()=>({}));
        if(res.ok && json.success!==false){
          reviewFeedback.textContent='Avaliação enviada — obrigado!';
          reviewFeedback.style.display='block';
          reviewForm.reset();
          selectedRating = 0; renderRatingStars();
        } else {
          reviewFeedback.textContent='Erro ao enviar avaliação — verifique o servidor.';
          reviewFeedback.style.display='block';
        }
      } catch(err){
        console.error(err);
        reviewFeedback.textContent='Erro de conexão ao enviar avaliação.';
        reviewFeedback.style.display='block';
      }
    });
  }

  // RENDER categories/products
  function renderCategoryCards(){
    const container = document.getElementById('category-cards-container');
    if(!container) return;
    container.innerHTML = window.MOCK_CATEGORIES.map(cat=>{
      const disabled = cat.status==='disabled' ? 'disabled' : '';
      const click = cat.status==='disabled' ? '' : `onclick="selectCategory(${cat.id})"`;
      const statusText = cat.status==='disabled' ? ' — EM BREVE' : '';
      return `<div class="category-card ${disabled}" ${click}><h4>${cat.name.toUpperCase()}</h4><p>${cat.description}${statusText}</p></div>`;
    }).join('');
  }

  window.selectCategory = function(categoryId){
    const cat = window.MOCK_CATEGORIES.find(c=>c.id===categoryId);
    if(!cat) return;
    document.getElementById('current-category-title').textContent = cat.name;
    document.getElementById('products').style.display='block';
    renderProducts(categoryId);
  };

  function renderProducts(categoryId){
    const container = document.getElementById('products-container');
    const filtered = window.MOCK_PRODUCTS.filter(p => p.categoryId===categoryId);
    container.innerHTML = filtered.length ? filtered.map(p=>`
      <div class="product-card card">
        <h4>${p.country} — ${p.city}</h4>
        <p>${p.description}</p>
        <p class="product-price">R$ ${p.price.toFixed(2).replace('.',',')}</p>
        <button class="btn btn-primary" onclick="openCheckoutModal(${p.id})">Comprar</button>
      </div>
    `).join('') : `<p style="text-align:center;color:var(--muted)">Nenhum material disponível.</p>`;
  }

  // COLUMNS
  function renderColumns(){
    const container = document.getElementById('columns-container');
    if(!container) return;
    container.innerHTML = window.MOCK_COLUMNS.map(c=>`
      <div class="column-card card" onclick="openColumnModal(${c.id})">
        <h4>${c.title}</h4>
        <div class="column-preview">${c.content.substring(0,140)}...</div>
        <div class="column-date">Publicado em ${c.date}</div>
      </div>
    `).join('');
  }

  window.openColumnModal = function(id){
    const c = window.MOCK_COLUMNS.find(x=>x.id===id);
    if(!c) return;
    document.getElementById('modal-column-title').textContent = c.title;
    document.getElementById('modal-column-date').textContent = `Publicado em ${c.date}`;
    document.getElementById('modal-column-content').textContent = c.content;
    document.getElementById('column-modal').style.display = 'flex';
  };

  // ADMIN login (mock)
  const adminForm = document.getElementById('admin-login-form');
  if(adminForm){
    adminForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('admin-email').value;
      const pw = document.getElementById('admin-password').value;
      if(email==='admin@elitetravel.com' && pw==='admin@123'){
        localStorage.setItem('isAdminLoggedIn','true');
        document.getElementById('admin-panel').style.display='block';
        showSection('admin');
        renderAdminPanel();
        closeModal('admin-login-modal');
      } else {
        document.getElementById('admin-login-feedback').textContent='Credenciais de Admin incorretas.';
        document.getElementById('admin-login-feedback').style.display='block';
      }
    });
  }

  function renderAdminPanel(){
    const panel = document.getElementById('admin-panel');
    panel.style.display='block';
    panel.innerHTML = `<div class="card"><h3>Painel Administrativo (mock)</h3>
      <p>Material cadastrados: ${window.MOCK_PRODUCTS.length}</p>
      <p>Categorias: ${window.MOCK_CATEGORIES.length}</p>
      <p>Colunas: ${window.MOCK_COLUMNS.length}</p>
    </div>`;
  }

  // modal helpers
  window.closeModal = function(id){
    const el = document.getElementById(id);
    if(el) el.style.display='none';
  };

  // checkout mock
  window.openCheckoutModal = function(productId){
    const p = window.MOCK_PRODUCTS.find(x=>x.id===productId);
    if(!p){ alert('Produto não encontrado'); return; }
    document.getElementById('checkout-product-name').textContent = `${p.description} (${p.city})`;
    document.getElementById('checkout-product-price').textContent = `R$ ${p.price.toFixed(2).replace('.',',')}`;
    document.getElementById('checkout-modal').style.display='flex';
  };

  window.processPayment = function(){
    alert('Processamento de pagamento (mock). Integre Stripe / Supabase para produção.');
    closeModal('checkout-modal');
  };

  // initial hash show
  function applyInitialHash(){
    const initial = window.location.hash ? window.location.hash.substring(1) : 'hero';
    showSection(initial);
  }

});
