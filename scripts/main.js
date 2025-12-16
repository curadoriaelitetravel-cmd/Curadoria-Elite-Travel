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
   SPA - TROCA DE SEÇÕES
================================ */
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  // fecha menu mobile se estiver aberto
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    overlay.style.display = "none";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}
