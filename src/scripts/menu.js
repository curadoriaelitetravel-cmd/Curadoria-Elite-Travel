// menu.js — abre/fecha menu mobile e controla overlay
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');

  function openMenu(){
    mobileMenu.classList.add('open');
    overlay.style.display = 'block';
  }
  function closeMenu(){
    mobileMenu.classList.remove('open');
    overlay.style.display = 'none';
  }

  if(mobileBtn) mobileBtn.addEventListener('click', openMenu);
  if(closeBtn) closeBtn.addEventListener('click', closeMenu);
  if(overlay) overlay.addEventListener('click', closeMenu);

  // close when clicking a menu item
  document.querySelectorAll('#mobile-menu ul li').forEach(li=>{
    li.addEventListener('click', () => {
      closeMenu();
    });
  });
});
