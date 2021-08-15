function formComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<form class="form">
      <h2 class="form__title">Escribime</h2>
      <div class="form__inputs-container">
        <div class="form__input-container">
          <label for="" class="form__inputs-label">NOMBRE</label>
          <input name="name" type="text" class="form__input" />
        </div>
        <div class="form__input-container">
          <label for="" class="form__inputs-label">EMAIL</label>
          <input name="email" type="text" class="form__input" />
        </div>
        <div class="form__input-container">
          <label for="" class="form__inputs-label">Mensaje</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            class="form__input"
          ></textarea>
        </div>
        <button class="form__button-submit">Enviar</button>
       </div>
    </form>`;

  el.appendChild(componentEl);

  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objeto = Object.fromEntries(formData.entries());

    let mensaje = `Nombre: ${objeto.name} <br>
      <br>
      Mail: ${objeto.email} <br> 
      <br>
      Mensaje: ${objeto.message} `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: mensaje,
        to: "heberjbaez@gmail.com",
        message: mensaje,
      }),
    })
      .then(() => {
        alert("El mensaje fue enviado");
        document.querySelectorAll(".form__input").forEach((input) => {
          input.value = "";
        });
      })
      .catch(() => {
        alert("Error al enviar");
      });
  });
}
