const sections = document.querySelectorAll("section");

function showSection(id){
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0,0);
}

/* MENU MOBILE */
function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("overlay").style.display =
    document.getElementById("mobileMenu").classList.contains("active")
      ? "block" : "none";
}

/* CURADORIA DINÂMICA */
const categories = JSON.parse(localStorage.getItem("categories")) || [];
const pdfs = JSON.parse(localStorage.getItem("pdfs")) || [];

const curadoriaSection = document.getElementById("curadoria");

function renderCuradoria(){
  curadoriaSection.innerHTML = `<h2>Curadoria</h2><div class="grid"></div>`;
  const grid = curadoriaSection.querySelector(".grid");

  categories.forEach(cat=>{
    const card = document.createElement("div");
    card.className = "card-cat";
    card.innerHTML = `<h3>${cat}</h3><p>Explorar indicações selecionadas</p>`;
    card.onclick = () => openCategory(cat);
    grid.appendChild(card);
  });
}

function openCategory(category){
  curadoriaSection.innerHTML = `
    <button class="btn-back" onclick="renderCuradoria()">← Voltar</button>
    <h2>${category}</h2>
    <div class="grid"></div>
  `;

  const grid = curadoriaSection.querySelector(".grid");
  const filtered = pdfs.filter(p => p.category === category);

  filtered.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card-pdf";
    card.innerHTML = `
      <h4>${p.title}</h4>
      <a href="${p.link}" target="_blank">Abrir PDF</a>
    `;
    grid.appendChild(card);
  });
}

renderCuradoria();
