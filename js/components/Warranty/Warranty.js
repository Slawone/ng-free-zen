const Warranty = (data) => {

  const { name, title, texts, image } = data;

  return /* html */ `
    <section class="${name}">
      <div class="${name}__wrapper">
        <div class="${name}__text-block">
          <h1 class="${name}__title">${title.value}</h1>
          ${texts.map((text) => `<p class="${name}__copy">${text}</p>`).join('')}
        </div>
        <div class="${name}__image-block">
          <img
            src="${image.source}"
            alt="${image.description}"
          />
        </div>
      </div>
    </section>
  `;
}

export default Warranty;