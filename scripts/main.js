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
  }
}

/* ===============================
   CATEGORIAS DA CURADORIA
================================ */
const categoriasCuradoria = [
  {
    titulo: "City Guide",
    descricao: "Guias completos por cidade, reunindo os principais pontos, experiências e dicas essenciais."
  },
  {
    titulo: "Experiências Gastronômicas",
    descricao: "Sugestões de bares e restaurantes cuidadosamente selecionados."
  },
  {
    titulo: "Pontos Turísticos",
    descricao: "As melhores atrações para conhecer o destino com profundidade."
  },
  {
    titulo: "Experiências Imersivas",
    descricao: "Passeios e vivências que conectam você à alma do lugar."
  },
  {
    titulo: "Sugestões de Compras e Presentes",
    descricao: "Indicações certeiras para compras especiais e souvenirs."
  },
  {
    titulo: "Vida Noturna",
    descricao: "Bares, baladas e experiências noturnas imperdíveis."
  },
  {
    titulo: "Hotéis & Hospedagens",
    descricao: "Hospedagens 3 a 4 estrelas bem localizadas e bem avaliadas."
  },
  {
    titulo: "Cruzeiros",
    descricao: "Experiências de cruzeiros selecionadas com critério e conforto."
  }
];

/* ===============================
   RENDERIZA CURADORIA
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const curadoriaSection = document.getElementById("curadoria");

  if (!curadoriaSection) return;

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
  grid.style.gap = "24px";
  grid.style.marginTop = "40px";

  categoriasCuradoria.forEach(cat => {
    const card = document.createElement("div");
    card.style.background = "#151515";
    card.style.border = "1px solid rgba(255,255,255,.08)";
    card.style.padding = "24px";
    card.style.borderRadius = "10px";

    card.innerHTML = `
      <h3 style="color:#D4AF37;font-family:Cinzel,serif;margin-bottom:10px">
        ${cat.titulo}
      </h3>
      <p style="color:#ccc;line-height:1.6">
        ${cat.descricao}
      </p>
    `;

    grid.appendChild(card);
  });

  curadoriaSection.appendChild(grid);
});
