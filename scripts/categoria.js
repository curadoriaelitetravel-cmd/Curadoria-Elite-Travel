const SUPABASE_URL = "https://lnyoqoezezisakghtmim.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueW9xb2V6ZXppc2FrZ2h0bWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjI4OTMsImV4cCI6MjA3OTczODg5M30.Nn9ZPRXeJlvCGJ2kXQ3XBvT743pQn2VIXEsT9pexqnA";

const categoryMap = {
  "city-guide": "City Guide",
  "experiencias-gastronomicas": "Experiências Gastronômicas",
  "pontos-turisticos": "Pontos Turísticos",
  "experiencias-imersivas": "Experiências Imersivas",
  "compras-presentes": "Compras & Presentes",
  "vida-noturna": "Vida Noturna",
  "hoteis": "Hotéis & Hospedagens",
  "cruzeiros": "Cruzeiros"
};

const params = new URLSearchParams(window.location.search);
const categorySlug = params.get("cat");

document.getElementById("categoryTitle").innerText =
  categoryMap[categorySlug] || "Curadoria";

async function loadMaterials() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/materiais?categoria=eq.${categorySlug}`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    }
  );

  const data = await res.json();
  const grid = document.getElementById("materialsGrid");

  if (!data.length) {
    grid.innerHTML = "<p>Nenhum material disponível nesta categoria.</p>";
    return;
  }

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.titulo}</h3>
      <p>${item.descricao || ""}</p>
      <a href="${item.url}" target="_blank">Abrir PDF</a>
    `;

    grid.appendChild(card);
  });
}

loadMaterials();
