/**
 * @typedef {import('./types').Footer} Footer;
 */

/**
 * @function Footer
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Footer = async () => {
  const API_URL = 'http://localhost:3000/data/meta';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return /* html */ `
    <footer class="footer" style="background-color: #000; color: #fff">
      <div class="footer__wrapper">
        <div class="footer__top">
          ${data.categories
            .map(
              /**
               * @param {{ name: string, links: { name: string, url: string }[] }} category
               */
              (category) => {
                return `
              <div class="footer__column">
                <h3 class="footer__title">${category.name}</h3>
                <ul class="footer__list">
                  ${category.links
                    .map(
                      /**
                       * @param {{
                       *   name?: string,
                       *   url?: string,
                       *   source?: string,
                       *   email?: string
                       * }} link
                       */
                      (link) => {
                        return `
                      <li class="footer__item">
                        ${
                          link.name
                            ? `<a class="footer__link" href="${link.url}" target="_blank">${link.name}</a>`
                            : link.source
                              ? `<a class="footer__link" href="${link.url}" target="_blank"><img src=${link.source}></a>`
                              : `<a class="footer__link" href="mailto:${link.email}" target="_blank">${link.email}</a>`
                        }
                      </li>`;
                      }
                    )
                    .join('')}
                </ul>
              </div>
            `;
              }
            )
            .join('')}
        </div>
        <div class="footer__bottom">
          <div class="footer__text-block">
            <a class="footer__logo" href="/">
              <img src="./assets/logo-footer.svg" alt="logo footer" />
            </a>
            ${data.details
              .map(
                /**             *
                 * @param {string} detail
                 */
                (detail) => {
                  return `<p class="footer__copy">${detail}</p>`;
                }
              )
              .join('')}
          </div>
          <div class="footer__copyright">
            <img src="./assets/copyright.svg" alt="copyright" />
          </div>
        </div>
      </div>
    </footer>
  `;
  } catch (Error) {
    console.error(Error);
    return '';
  }
};
