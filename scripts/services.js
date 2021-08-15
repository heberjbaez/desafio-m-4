function addCardServices(params = {}) {
  const template = document.querySelector("#services-card-template");

  const container = document.querySelector(".services-content");

  template.content.querySelector(".home-services__services-img").src =
    params.image;

  template.content.querySelector(".home-services__services-title").textContent =
    params.title;

  template.content.querySelector(".home-services__services-text").textContent =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServicesData() {
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

function main() {
  getServicesData().then((works) => {
    for (const w of works) {
      addCardServices(w);
    }
  });

  headerComponent(document.querySelector(".header"));

  footerComponent(document.querySelector(".footer"));
}

main();
