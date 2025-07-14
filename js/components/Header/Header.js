/**
 * @typedef {import('./types').Header} HeaderData;
 */

/**
 * @function Header
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Header = async () => {
  const API_URL = 'http://localhost:3000/data/meta';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return /* html */ `
      <header class="header">
        <div class="header__wrapper">
          <a class="header__logo" href="/">
            <img
              src="./assets/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </a>
          <nav class="header__nav">
            <ul class="header__desktop-list">
              ${data.sections
                .map(
                  /**             *
                   * @param {string} section
                   */
                  (section) => {
                    return `
                    <li class="header__desktop-item">
                      <a class="header__desktop-link">${section}</a>
                    </li>
                  `;
                  }
                )
                .join('')}
            </ul>
            <ul className="header__mobile-list">
              ${data.sections
                .map(
                  /**             *
                   * @param {string} section
                   */
                  (section) => {
                    return `
                    <li class="header__mobile-item">
                      <a class="header__mobile-link">${section}</a>
                    </li>
                  `;
                  }
                )
                .join('')}
            </ul>
          </nav>
          <select class="header__language">
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>
          <button class="header__theme-btn">
            <img src="./assets/icons/moon.svg" alt="moon">
          </button>
          <button class="header__burger-button">
            <img src="./assets/icons/btn-burger.svg" alt="btn-burger">
          </button>
        </div>
      </header>
    `;
  } catch (error) {
      console.error(error);
      return '';
  }
};
