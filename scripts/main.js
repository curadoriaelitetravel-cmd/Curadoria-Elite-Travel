/* ===============================
   CONFIGURAÇÃO SUPABASE
================================ */

const SUPABASE_BASE_URL =
  "https://lnyoqoezezisakghtmim.supabase.co/storage/v1/object/public/materiais";

/* ===============================
   MAPA DE CATEGORIAS
================================ */

const categorias = {
  "city-guide": {
    titulo: "City Guide — Guias completos por cidade",
    arquivos: [
      {
        nome: "City Guide Paris",
        descricao: "Guia completo com atrações, gastronomia e experiências.",
        arquivo: "city-guide/paris-city-guide.pdf"
      }
    ]
  }
};

/* ===============================
   CARREGAR CATEGORIA
================================ */

function carregarCategoria() {
  const params = new URLSearchParams(window.location.search);
  const categoriaId = params.get("cat");

  if (!categoriaId || !categorias[categoriaId]) {
    document.getElementById("pdfGrid").innerHTML =
      "<p>Categoria não encontrada.</p>";
    return;
  }

  const categoria = categorias[categoriaId];
  document.getElementById("categoryTitle").innerText = categoria.titulo;

  const grid = document.getElementById("pdfGrid");
  grid.innerHTML = "";

  categoria.arquivos.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
    `;

    card.onclick = () => {
      window.open(`${SUPABASE_BASE_URL}/${item.arquivo}`, "_blank");
    };

    grid.appendChild(card);
  });
}

carregarCategoria();

/* ===============================
   INDEX — NAVEGAÇÃO
================================ */

function showCategory(cat){
  window.location.href = `categoria.html?cat=${cat}`;
}
