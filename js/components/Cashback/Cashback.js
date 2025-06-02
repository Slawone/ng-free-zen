const Cashback = (data) => {
  const { name, title, texts, button } = data;

  return /* html */ `
    <section class="${name}">
      <div class="${name}__wrapper">
        <div class="${name}__text-block">
          <h1 class="${name}__title">${title.value}</h1>
          ${texts
            .map((text) => `<p class="${name}__copy">${text}</p>`)
            .join('')}
        </div>
        <button class="${name}__button" type="button">
          ${button.value}
        </button>
      </div>
    </section>
  `;
};

export default Cashback;
  