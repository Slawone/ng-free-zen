import { Title } from '../../components/Title/Title.js';
import { Paragraph } from '../../components/Paragraph/Paragraph.js';
import { Image } from '../../components/Image/Image.js';

/**
 * @typedef {import('./types').Download} Download;
 */


/**
 * @function Download
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Download = async () => {
  const API_URL = 'http://localhost:3000/data/download';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return /* html */ `
      <section class="download">
        <div class="download__wrapper">
          <div class="download__text-block">
            ${Title(1, 'download__title', data.title.value)}
            ${data.texts
              .map(/** @param {string} text*/text => Paragraph(text, 'download__copy'))
              .join('')
            }
            <div class="download__links">
              <a href="#!">
                ${Image('/assets/icons/link-apple.svg', 'apple')}
              </a>
              <a href="#!">
                ${Image('/assets/icons/link-google.svg', 'google')}
              </a>
            </div>
          </div>
          <div class="download__image-block">
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
