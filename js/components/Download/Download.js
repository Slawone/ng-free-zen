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
        <h1 class="download__title">${data.title.value}</h1>
        ${data.texts
          .map(
            /**             *
             * @param {string} text
             */
            (text) => `<p class="download__copy">${text}</p>`
          )
          .join('')}
        <div class="download__links">
          <a href="#!">
            <img src="./assets/icons/link-apple.svg" alt="apple" />
          </a>
          <a href="#!">
            <img src="./assets/icons/link-google.svg" alt="google" />
          </a>
        </div>
      </div>
      <div class="download__image-block">
        <img
          src=${data.image.source}
          alt="${data.image.description}"
        />
      </div>
    </div>
  </section>
    `;
  } catch (Error) {
    console.error(Error);
    return '';
  }
};
