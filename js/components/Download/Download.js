const Download = (data) => {

  const { name, title, texts, buttons, image } = data;

  return /* html */`
    <section class="${name}">
      <div class="${name}__wrapper">
        <div class="${name}__text-block">
          <h1 class="${name}__title">${title.value}</h1>
          ${texts.map(text => `<p class="${name}__copy">${text}</p>`).join('')}
          <div class="${name}__links">
            ${buttons.map(button => {
              return `
                <a class="${name}__link">
                  <img
                    src="${button.source}"
                    alt="${button.description}"
                  >
                </a>
              `;
            }).join('')}
          </div>
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

export default Download;