import { Image } from '../../components/Image/Image.js';
import { ListItem } from '../../components/ListItem/ListItem.js';

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

    return /* html */ `
      <header class="header">
        <div class="header__wrapper">
          <nav class="header__nav">
            <a class="header__logo" href="/">
              ${Image('./assets/logo.svg', 'header logo')}
            </a>
            <ul class="header__list">
              ${data.sections
                .map(
                  /** @param {*} section*/ (section) =>
                    ListItem(section.value, `#${section.key}`, 'header__item')
                )
                .join('')}
            </ul>
          </nav>
          <div class="header__actions">
          <div className="select-wrapper">
            <select class="header__select">
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
          </div>
            <button class="header__theme-btn">
              ${Image('./assets/icons/moon.svg', 'moon')}
            </button>
            <button class="header__burger-button">
             <span></span>
            </button>
          </div>
        </div>
      </header>
    `;
  } catch (error) {
      console.error(error);
      return '';
  }
};
