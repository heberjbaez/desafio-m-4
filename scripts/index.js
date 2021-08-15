function addHomeContent(params) {
  const titleEl = document.querySelector(".welcome__title");
  const subTitleEl = document.querySelector(".welcome__sub-title");

  titleEl.innerText = params.title;
  subTitleEl.innerText = params.subtitle;
}

function getHomeData() {
  return fetch(
    "https://cdn.contentful.com/spaces/bxe1nnyp7aam/environments/master/entries?access_token=XkkVmSIbqJKo34YluVx94CZI-kXw4EiSf9JHp2rfzB4&content_type=home"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          subtitle: item.fields.subtitulo,
        };
      });
      return fieldsCollections;
    });
}

function insertContentHome() {
  getHomeData().then((content) => {
    for (const c of content) {
      addHomeContent(c);
    }
  });
}

function addPresentationContent(params) {
  const template = document.querySelector(".presentation-template");

  const container = document.querySelector(".presentation");

  template.content.querySelector(".presentation__img").src = params.image;

  template.content.querySelector(".presentation__title").textContent =
    params.title;

  template.content.querySelector(".presentation__text").textContent =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPresentationData() {
  return fetch(
    "https://cdn.contentful.com/spaces/bxe1nnyp7aam/environments/master/entries?access_token=XkkVmSIbqJKo34YluVx94CZI-kXw4EiSf9JHp2rfzB4&content_type=presentation"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const imagePresentation = searchAsset(item.fields.image.sys.id, data);
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: imagePresentation.fields.file.url,
        };
      });
      return fieldsCollections;
    });
}

function searchAsset(id, data) {
  return data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
}

function insertContentPresentation() {
  getPresentationData().then((content) => {
    for (const c of content) {
      addPresentationContent(c);
    }
  });
}

function addCardServicesHome(params = {}) {
  const template = document.querySelector(".services-template");

  const container = document.querySelector(".my-services__container");

  template.content.querySelector(".my-services__img").src = params.image;

  template.content.querySelector(".my-services__title").textContent =
    params.title;

  template.content.querySelector(".my-services__text").textContent =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServicesHomeData() {
  return fetch(
    "https://cdn.contentful.com/spaces/bxe1nnyp7aam/environments/master/entries?access_token=XkkVmSIbqJKo34YluVx94CZI-kXw4EiSf9JHp2rfzB4&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const image = searchAsset(item.fields.imagen.sys.id, data);
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: image.fields.file.url,
        };
      });
      return fieldsCollections;
    });
}

function searchAsset(id, data) {
  return data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
}

function insertContentServicesHome() {
  getServicesHomeData().then((content) => {
    for (const c of content) {
      addCardServicesHome(c);
    }
  });
}

function main() {
  insertContentHome();

  insertContentPresentation();

  insertContentServicesHome();

  headerComponent(document.querySelector(".header"));

  formComponent(document.querySelector(".contact"));

  footerComponent(document.querySelector(".footer"));
}

main();
