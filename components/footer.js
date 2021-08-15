function footerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = ` <div class="footer__container">
    <img src="../images/logo.png" alt="logo" class="footer__img-logo" />
    <div class="footer__social-medias">
      <div class="social-media__container">
        <label for="" class="social-media__label">Instagram</label>
        <img src="../icons/instagram.png" alt="" class="social-media__logo" />
      </div>
      <div class="social-media__container">
        <label for="" class="social-media__label">Linkedin</label>
        <img src="../icons/linkedin-logo.png" alt="" class="social-media__logo" />
      </div>
      <div class="social-media__container">
        <label for="" class="social-media__label">Github</label>
        <img src="../icons/github-character.png" alt="" class="social-media__logo" />
      </div>
    </div>
  </div>`;

  el.appendChild(componentEl);
}
