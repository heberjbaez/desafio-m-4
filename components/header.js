function headerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = ` <div class="header__container">
  <a href="../index.html">
  <img src="../images/logo.png" alt="logo" class="header__img-logo" />
</a>
  <div class="header__nav-container">
  <img   src="../icons/close.png" alt="burguer" class="header__close-nav" />
    <a href="../pages/portfolio.html" class="header__nav-link">Portfolio</a>
    <a href="../pages/servicios.html" class="header__nav-link">Servicios</a>
    <a href="../pages/contacto.html" class="header__nav-link">Contacto</a>
  </div>
  <img   src="../icons/burger.png" alt="burguer" class="header__burguer" />
  </div>`;

  el.appendChild(componentEl);

  const BurgerEl = document.querySelector(".header__burguer");
  const closeEl = document.querySelector(".header__close-nav");
  const navEl = document.querySelector(".header__nav-container");

  BurgerEl.addEventListener("click", () => {
    navEl.style.display = "flex";
  });
  closeEl.addEventListener("click", () => {
    navEl.style.display = "";
  });
}
