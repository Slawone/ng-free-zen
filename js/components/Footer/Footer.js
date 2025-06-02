const Footer = (data) => {

  const {name, columns, logo, texts, copyright} = data;

  return /* html */ `
    <footer class="${name}" style="background-color: #000; color: #fff">
      <div class="${name}__wrapper">
        <div class="${name}__top">
          ${columns.map(column => {
            return `
              <div class="${name}__column">
                <h3 class="${name}__title">${column.title.value}</h3>
                <ul class="${name}__list">
                  ${column.links
                    .map((link) => {
                      return `
                      <li class="${name}__item">
                        <a class="${name}__link" href="">${link}</a>
                      </li>`;
                    })
                    .join('')}
                </ul>
              </div>
            `;
          }).join('')}
        </div>
        <div class="${name}__bottom">
          <div class="${name}__text-block">
            <a class="${name}__logo" href="/">
              <img src="${logo.source}" alt="${logo.description}" />
            </a>
            ${texts.map(text => {
              return `<p class="${name}__copy">${text}</p>`
            }).join('')}
          </div>
          <div class="${name}__copyright">
            <img src="${copyright.source}" alt="${copyright.description}" />
          </div>
        </div>
      </div>
    </footer>
  `;
}

export default Footer;