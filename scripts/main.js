/* ================================
   Curadoria Elite Travel - main.js
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ====================
     CONTROLE DE SEÇÕES
  ==================== */
  window.showSection = function (id) {
    document.querySelectorAll(".section").forEach(sec => {
      sec.classList.remove("active");
    });

    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* ====================
     MENU MOBILE
  ==================== */
  window.toggleMobileMenu = function () {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");

    if (!menu || !overlay) return;

    const isActive = menu.classList.contains("active");

    menu.classList.toggle("active");
    overlay.style.display = isActive ? "none" : "block";
  };

  /* ====================
     CATEGORIAS CURADORIA
  ==================== */
  const categorias = [
    {
      nome: "City Guide",
      descricao: "Guias completos por cidade"
    },
    {
      nome: "Experiências Gastronômicas",
      descricao: "Melhores sugestões de bares e restaurantes"
    },
    {
      nome: "Pontos Turísticos",
      descricao: "Sugestões das melhores atrações da cidade"
    },
    {
      nome: "Experiências Imersivas",
      descricao: "Sugestões dos melhores passeios da cidade"
    },
    {
      nome: "Sugestões de Compras e Presentes",
      descricao: "Melhores indicações de compras"
    },
    {
      nome: "Dicas de Vida Noturna",
      descricao: "Baladas e bares selecionados"
    },
    {
      nome: "Hotéis & Hospedagens",
      descricao: "Hospedagens 3 a 4 estrelas"
    },
    {
      nome: "Cruzeiros",
      descricao: "Melhores experiências de cruzeiro"
    }
  ];

  const categoryContainer = document.getElementById("categoryCards");

  if (categoryContainer) {
    categoryContainer.innerHTML = "";

    categorias.forEach(cat => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
        <h3>${cat.nome}</h3>
        <p>${cat.descricao}</p>
      `;
      categoryContainer.appendChild(card);
    });
  }

  /* ====================
     AVALIAÇÃO (ESTRELAS)
  ==================== */
  const starsContainer = document.getElementById("ratingStars");
  let selectedRating = 0;

  if (starsContainer) {
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.className = "fas fa-star";
      star.addEventListener("click", () => {
        selectedRating = i;
        updateStars();
      });
      starsContainer.appendChild(star);
    }
  }

  function updateStars() {
    const stars = starsContainer.querySelectorAll("i");
    stars.forEach((star, index) => {
      star.classList.toggle("active", index < selectedRating);
    });
  }

  /* ====================
     FORM CONTATO (visual)
  ==================== */
  const contactForm = document.getElementById("contactForm");
  const contactFeedback = document.getElementById("contactFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      contactFeedback.textContent = "Mensagem enviada com sucesso!";
    });
  }

  /* ====================
     FORM AVALIAÇÃO (visual)
  ==================== */
  const reviewForm = document.getElementById("reviewForm");
  const reviewFeedback = document.getElementById("reviewFeedback");

  if (reviewForm) {
    reviewForm.addEventListener("submit", e => {
      e.preventDefault();
      reviewFeedback.textContent = "Avaliação enviada. Obrigado!";
      reviewForm.reset();
      selectedRating = 0;
      updateStars();
    });
  }

});
