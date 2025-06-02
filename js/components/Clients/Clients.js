const Clients = (data) => {
  const { name, images } = data;

  return /* html */ `
    <section class="${name}">
      <div class="${name}__wrapper">
      ${images.map(image => {
        return `
          <div class="${name}__img">
            <img
              src="${image.source}"
              alt="${image.description}"
            >
          </div>
        `
      })}
      </div>
    </section>
  `;
}

export default Clients;