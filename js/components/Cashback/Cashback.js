/**
 * @typedef {import('./types').Cashback} Cashback;
 */

/**
 * @function Cashback;
 * @description Large UI component
 * @param {Cashback} data
 * @returns {string} HTML ot empty
 */

export const Cashback = (data) => {

  if (!data) return '';

  return /* html */ `
    <section class="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <h1 class="cashback__title">${data.title.value}</h1>
          ${data.texts
            .map((text) => `<p class="cashback__copy">${text}</p>`)
            .join('')}
        </div>
      </div>
    </section>
  `;
};
