const burgerMenuBtn = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__navbar");


burgerMenuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});