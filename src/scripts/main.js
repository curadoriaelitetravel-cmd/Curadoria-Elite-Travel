/* /src/scripts/main.js
   Lógica principal: envio de formulários (Contato + Avalie-nos) e listagem de materiais no admin
*/

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Configurações ----------
  const API_SEND_EMAIL = '/api/send-email';
  const API_LIST_MATERIALS = '/api/list-materials'; // backend será adicionado depois
  const EMAIL_DESTINATION = 'curadoriaelitetravel@gmail.com';

  // ---------- Helpers ----------
  function showMessage(el, msg, type = 'info') {
    // type: info | success | error
    if(!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    el.className = (
      type === 'success'
        ? 'msg-success'
        : (type === 'error'
            ? 'msg-error'
            : 'msg-info')
    );
  }

  function hideMessage(el) {
    if(el) el.style.display='none';
  }

  async function postJSON(url, payload) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    return res;
  }

  // ---------- CONTACT FORM ----------
  const contactForm =
      document.getElementById('contactForm')
      || document.querySelector('form#contactForm')
      || document.querySelector('form[name="contactForm"]');

  const contactFeedback = document.getElementById('contactFeedback');

  if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideMessage(contactFeedback);

      const f = contactForm;
      const name = (f.querySelector('[name="name"]') || f.querySelector('#contName') || {}).value || '';
      const email = (f.querySelector('[name="email"]') || f.querySelector('#contEmail') || {}).value || '';
      const subject = 'Contato via site';
      const message = (f.querySelector('[name="message"]') || f.querySelector('#contMessage') || {}).value || '';

      if(!name || !email || !message) {
        showMessage(contactFeedback, 'Por favor preencha nome, email e mensagem.', 'error');
        return;
      }

      showMessage(contactFeedback, 'Enviando...', 'info');

      try {
        const payload = {
          type: 'contact',
          to: EMAIL_DESTINATION,
          name,
          email,
          subject,
          message
        };

        const res = await postJSON(API_SEND_EMAIL, payload);
        const json = await res.json().catch(()=>({}));

        if(res.ok && json && json.success !== false) {
          showMessage(contactFeedback, 'Mensagem enviada — responderemos em breve.', 'success');
          contactForm.reset();
        } else {
          console.error('sendEmail error:', json);
          showMessage(contactFeedback, 'Erro ao enviar mensagem. Verifique a configuração do servidor.', 'error');
        }
      } catch(err) {
        console.error('Erro no envio:', err);
        showMessage(contactFeedback, 'Erro ao enviar mensagem. Verifique a conexão.', 'error');
      }
    });
  }

  // ---------- REVIEW (AVALIE-NOS) FORM ----------
  const reviewForm =
      document.getElementById('reviewForm')
      || document.querySelector('form#reviewForm')
      || document.querySelector('form[name="reviewForm"]');

  const reviewFeedback = document.getElementById('revFeedback');

  if(reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideMessage(reviewFeedback);

      const f = reviewForm;
      const name = (f.querySelector('[name="name"]') || f.querySelector('#revName') || {}).value || '';
      const email = (f.querySelector('[name="email"]') || f.querySelector('#revEmail') || {}).value || '';
      const rating = (f.querySelector('[name="rating"]') || f.querySelector('#revRating') || {}).value || '';
      const comment = (f.querySelector('[name="comment"]') || f.querySelector('#revComment') || {}).value || '';

      if(!name || !email) {
        showMessage(reviewFeedback, 'Por favor preencha nome e email.', 'error');
        return;
      }

      showMessage(reviewFeedback, 'Enviando avaliação...', 'info');

      try {
        const payload = {
          type: 'review',
          to: EMAIL_DESTINATION,
          name,
          email,
          rating,
          message: comment
        };

        const res = await postJSON(API_SEND_EMAIL, payload);
        const json = await res.json().catch(()=>({}));

        if(res.ok && json && json.success !== false) {
          showMessage(reviewFeedback, 'Avaliação enviada — obrigado!', 'success');
          reviewForm.reset();
        } else {
          console.error('sendReview error:', json);
          showMessage(reviewFeedback, 'Erro ao enviar avaliação — verifique o servidor.', 'error');
        }
      } catch(err) {
        console.error('Erro no envio da avaliação:', err);
        showMessage(reviewFeedback, 'Erro ao enviar avaliação. Verifique a conexão.', 'error');
      }
    });
  }

  // ---------- ADMIN: Listar Materiais ----------
  async function fetchMaterialsAndRender() {
    const container =
        document.getElementById('adminMaterialsContainer')
        || document.getElementById('produtos')
        || document.querySelector('.admin-materials');

    if(!container) return;

    container.innerHTML = '<div class="muted">Carregando materiais...</div>';

    try {
      const res = await fetch(API_LIST_MATERIALS);
      if(!res.ok) throw new Error('Erro ao carregar materiais');

      const json = await res.json();
      const items = Array.isArray(json) ? json : (json.items || []);

      if(items.length === 0) {
        container.innerHTML = '<div class="muted">Nenhum material cadastrado.</div>';
        return;
      }

      const table = document.createElement('table');
      table.style.width = '100%';
      table.style.borderCollapse = 'collapse';

      table.innerHTML = `
        <thead>
          <tr style="text-align:left;">
            <th>Título</th>
            <th>Categoria</th>
            <th>Cidade</th>
            <th>País</th>
            <th>Preço</th>
            <th>Arquivo</th>
          </tr>
        </thead>
      `;

      const tbody = document.createElement('tbody');

      items.forEach(it => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${it.title || ''}</td>
          <td>${it.category || ''}</td>
          <td>${it.city || ''}</td>
          <td>${it.country || ''}</td>
          <td>${it.price != null ? ('R$ ' + Number(it.price).toFixed(2)) : '-'}</td>
          <td>${it.file_url ? `<a href="${it.file_url}" target="_blank">Abrir</a>` : '-'}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      container.innerHTML = '';
      container.appendChild(table);

    } catch(err) {
      console.error('Erro ao buscar materiais:', err);
      container.innerHTML = '<div class="muted">Erro ao carregar materiais.</div>';
    }
  }

  // Atualiza materiais ao carregar o admin
  fetchMaterialsAndRender();

  // Expor para debug
  window.CET = { fetchMaterialsAndRender };
});
