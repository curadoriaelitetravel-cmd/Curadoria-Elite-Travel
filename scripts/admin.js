const categories = JSON.parse(localStorage.getItem("categories")) || [];
const pdfs = JSON.parse(localStorage.getItem("pdfs")) || [];

const catInput = document.getElementById("catName");
const catList = document.getElementById("categoryList");
const catSelect = document.getElementById("pdfCategory");
const pdfList = document.getElementById("pdfList");

function save(){
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("pdfs", JSON.stringify(pdfs));
}

function renderCategories(){
  catList.innerHTML = "";
  catSelect.innerHTML = "";

  categories.forEach(cat=>{
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${cat}</span>`;
    catList.appendChild(div);

    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    catSelect.appendChild(opt);
  });
}

function renderPDFs(){
  pdfList.innerHTML = "";
  pdfs.forEach(p=>{
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${p.title} — <em>${p.category}</em></span><a href="${p.link}" target="_blank">Abrir</a>`;
    pdfList.appendChild(div);
  });
}

function addCategory(){
  if(!catInput.value) return;
  categories.push(catInput.value);
  catInput.value="";
  save();
  renderCategories();
}

function addPDF(){
  const title=document.getElementById("pdfTitle").value;
  const category=catSelect.value;
  const link=document.getElementById("pdfLink").value;
  if(!title||!link) return;

  pdfs.push({title,category,link});
  save();
  renderPDFs();
}

renderCategories();
renderPDFs();
