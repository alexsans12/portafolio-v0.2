const mobileNav = document.querySelector(".mobile-nav");
const mainMobile = document.querySelector(".main-mobile");
let menuOpen = false;
mobileNav.addEventListener('click', () => {
  if(!menuOpen) {
    mobileNav.classList.add('open');
    mainMobile.setAttribute('style', 'right: 0');
    menuOpen = true;
  } else {
    mobileNav.classList.remove('open');
    mainMobile.setAttribute('style', 'right: 100vw');
    menuOpen = false;
  }
});
