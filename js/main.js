const mobileMenu = document.querySelector(".main-mobile__menu");
const mainMenu = document.querySelector(".main-menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let menuOpen = false;

mobileMenu.addEventListener('click', () => {
  if(!menuOpen) {
    mobileMenu.classList.add('main-mobile__menu--open');
    mobileMenu.classList.add('fixed');
    mainMenu.setAttribute('style', 'right: 0; display: inline-block');
    main.classList.add('hidden');
    footer.classList.add('hidden');
    menuOpen = true;
  } else {
    mobileMenu.classList.remove('main-mobile__menu--open');
    mobileMenu.classList.remove('fixed');
    mainMenu.setAttribute('style', 'right: 100vw');
    main.classList.remove('hidden');
    footer.classList.remove("hidden");
    menuOpen = false;
  }
});
