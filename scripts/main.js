/* ===============================
   MENU MOBILE
================================ */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("active");
  overlay.style.display = menu.classList.contains("active") ? "block" : "none";
}

/* ===============================
   NAVEGAÇÃO ENTRE SEÇÕES
================================ */
function showSection(id) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 👇 garante que a curadoria apareça ao clicar
    if (id === "curadoria") {
      renderCuradoria();
    }
  }
}

/* ===============================
   DADOS DA CURADORIA
================================ */
const categoriasCuradoria = [
  {
    titulo: "City Guide",
    descricao: "Guias completos por cidade, reunindo pontos turísticos, experiências e dicas essenciais."
  },
  {
    titulo: "Experiências Gastronômicas",
    descricao: "Melhores sugestões de bares e restaurantes cuidadosamente selecionados."
  },
  {
    titulo: "Pontos Turísticos",
    descricao: "Sugestões das melhores atrações da cidade."
  },
  {
    titulo: "Experiências Imersivas",
    descricao: "Passeios que conectam você à alma e cultura do destino."
  },
  {
    titulo: "Sugestões de Compras e Presentes",
    descricao: "Indicações certeiras para compras e lembranças especiais."
  },
  {
    titulo: "Dicas de Vida Noturna",
    descricao: "Sugestões das melhores baladas e bares da cidade."
  },
  {
    titulo: "Hotéis & Hospedagens",
    descricao: "Hospedagens 3 a 4 estrelas bem localizadas e bem avaliadas."
  },
  {
    titulo: "Cruzeiros",
    descricao: "Sugestões das melhores experiências de cruzeiro do momento."
  }
];

/* ===============================
   RENDERIZA CURADORIA
================================ */
function renderCuradoria() {
  const curadoriaSection = document.getElementById("curadoria");
  if (!curadoriaSection) return;

  // evita duplicar
  if (curadoriaSection.querySelector(".curadoria-grid")) return;

  const grid = document.createElement("div");
  grid.className = "curadoria-grid";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
  grid.style.gap = "28px";
  grid.style.marginTop = "40px";

  categoriasCuradoria.forEach(cat => {
    const card = document.createElement("div");
    card.style.background = "#151515";
    card.style.border = "1px solid rgba(255,255,255,.1)";
    card.style.padding = "26px";
    card.style.borderRadius = "12px";

    card.innerHTML = `
      <h3 style="color:#D4AF37;font-family:Cinzel,serif;margin-bottom:12px">
        ${cat.titulo}
      </h3>
      <p style="color:#ccc;line-height:1.6;font-size:0.95rem">
        ${cat.descricao}
      </p>
    `;

    grid.appendChild(card);
  });

  curadoriaSection.appendChild(grid);
}
