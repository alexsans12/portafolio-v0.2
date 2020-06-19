const mobileMenu = document.querySelector(".main-mobile__menu");
const mainMenu = document.querySelector(".main-menu");
const body = document.querySelector("body");
let menuOpen = false;

mobileMenu.addEventListener('click', () => {
  if(!menuOpen) {
    mainMenu.classList.add('main-menu--open');
    mobileMenu.classList.add('main-mobile__menu--open');
    body.classList.add('overflow');
    menuOpen = true;
  } else {
    mainMenu.classList.remove('main-menu--open');
    mobileMenu.classList.remove('main-mobile__menu--open');
    body.classList.remove('overflow');
    menuOpen = false;
  }
});
