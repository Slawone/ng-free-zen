const Header = (data) => {
  const { name, logo, links, languages, themeButton } = data;

  return /* html */ `
    <header class="${name}">
      <div class="${name}__wrapper">
      <a className="${name}__logo" href="/">
        <img
          src="${logo.source}"
          alt="${logo.description}"
          loading="lazy"
        />
      </a>
      <nav class="${name}__nav">
        <ul className="${name}__list">
          ${links
            .map((link) => {
              return `
              <li class="${name}__item">
                <a class="${name}__link">${link}</a>
              </li>
            `;
            })
            .join('')}
        </ul>
      </nav>
      <select class="${name}__language">
        ${languages.map((language) => {
          return `
            <option value="${language}">
              ${language.toUpperCase()}
            </option>`;
        })}
      </select>
      <button class="${name}__theme-btn">
          <img src="${themeButton[0].source}" alt="${themeButton[0].description}" />
        </button>
      </div>
    </header>
  `;
}

export default Header;