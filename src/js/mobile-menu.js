const menuToggleEl = document.querySelector(".js-menu-toggle");
const menuIconEl = document.querySelector(".js-menu-toggle__icon");
const mobileMenuEl = document.querySelector(".js-mobile-menu");
const openIconPath = "./src/img/icons/menu.svg";
const closeIconPath = "./src/img/icons/close.svg";

menuToggleEl.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isOpen = mobileMenuEl.classList.toggle("mobile-menu__active");
  menuIconEl.src = isOpen ? closeIconPath : openIconPath;
}
