/**
 * @typedef {import('./types').Cashback} Cashback;
 */

/**
 * @function Cashback;
 * @description Large UI component
 * @returns {Promise<string>} HTML ot empty
 */

export const Cashback = async () => {

  const API_URL = 'http://localhost:3000/data/cashback';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return /* html */ `
    <section class="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <h1 class="cashback__title">${data.title.value}</h1>
          ${data.texts
            .map(
              /**
               * @param {string} text
               */
              (text) => `<p class="cashback__copy">${text}</p>`
            )
            .join('')}
        </div>
        <button class="cashback__button" id="order-button" type="button">Order a consultation</button>
      </div>
    </section>
  `;
  } catch (Error) {
    console.error(Error)
    return '';
  }


};
