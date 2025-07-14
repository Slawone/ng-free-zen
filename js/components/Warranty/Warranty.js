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
            <h1 class="warranty__title">${data.title.value}</h1>
            ${data.texts.map(
            /**             *
             * @param {string} text
             */
              (text) => `<p class="warranty__copy">${text}</p>`).join('')}
          </div>
          <div class="warranty__image-block">
            <img
              src="${data.image.source}"
              alt="${data.image.description}"
            />
          </div>
        </div>
      </section>
    `;
  } catch (Error) {
    console.error(Error)
    return '';
  }
}