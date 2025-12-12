// menu.js — controla o menu mobile (abrir/fechar)
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }
  function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  window.toggleMenu = function() {
    if (mobileMenu && mobileMenu.classList.contains('active')) closeMenu();
    else openMenu();
  };

  window.closeMobileMenu = closeMenu;

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
});
