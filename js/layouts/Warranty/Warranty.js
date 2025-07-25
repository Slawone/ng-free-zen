import { Title } from '../../components/Title/Title.js';
import { Paragraph } from '../../components/Paragraph/Paragraph.js';
import { Image } from '../../components/Image/Image.js';

/**
 * @typedef {import('./types').Warranty} Warranty;
 */

/**
 * @function Warranty
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Warranty = async () => {
  const API_URL = 'http://localhost:3000/data/warranty';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return /* html */ `
      <section class="warranty">
        <div class="warranty__wrapper">
          <div class="warranty__text-block">
            ${Title(1, 'warranty__title', data.title.value)}
            ${data.texts
              .map(
                /** @param {string} text*/ (text) =>
                  Paragraph(text, 'warranty__copy')
              )
              .join('')}
          </div>
          <div class="warranty__image-block">
            ${Image(`${data.image.source}`, `${data.image.description}`)}
          </div>
        </div>
      </section>
    `;
  } catch (Error) {
    console.error(Error);
    return '';
  }
};
