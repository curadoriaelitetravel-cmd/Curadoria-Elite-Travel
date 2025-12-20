const SUPABASE_URL = "https://lnyoqoezezisakghtmim.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueW9xb2V6ZXppc2FrZ2h0bWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjI4OTMsImV4cCI6MjA3OTczODg5M30.Nn9ZPRXeJlvCGJ2kXQ3XBvT743pQn2VIXEsT9pexqnA";

const categoria = new URLSearchParams(window.location.search).get("cat");

document.getElementById("tituloCategoria").innerText =
  categoria ? categoria.replace("-", " ").toUpperCase() : "CURADORIA";

async function carregarPDFs() {
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/list/materiais/${categoria}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });

  const arquivos = await res.json();
  const grid = document.getElementById("listaPDFs");

  grid.innerHTML = "";

  arquivos.forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    const link = `${SUPABASE_URL}/storage/v1/object/public/materiais/${categoria}/${file.name}`;

    card.innerHTML = `
      <h3>${file.name.replace(".pdf","")}</h3>
      <p>Clique para abrir o material</p>
    `;

    card.onclick = () => window.open(link, "_blank");

    grid.appendChild(card);
  });
}

if (categoria) carregarPDFs();
