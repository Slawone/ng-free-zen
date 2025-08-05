import { Download } from "../layouts/Download/Download.js";
import { Warranty } from "../layouts/Warranty/Warranty.js";
import { Care } from "../layouts/Care/Care.js";
import { Cashback } from "../layouts/Cashback/Cashback.js";
import { Clients } from "../layouts/Clients/Clients.js";

/**
 * @function iniitRouting
 * @description navigates through pages
 */

export const initRouting = () => {
  const routes = {
    '#download': Download,
    '#warranty': Warranty,
    '#care': Care,
    '#cashback': Cashback,
    '#clients': Clients,
  };

  const $app = document.getElementById('main');

  /**
   * @function renderRoute
   * @description navigates through pages
   */

  async function renderRoute() {
    const hash = window.location.hash || '#download';

    if (!$app) return;

    const page = routes[hash];

    if (typeof page === 'function') {
      $app.innerHTML = await page();
    } else {
      $app.innerHTML = `<h2>Страница не найдена</h2>`;
    }

    // Обновление активной ссылки в меню
    const links = document.querySelectorAll('.menu a');
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  // Навешиваем обработчик при смене хэша
  window.addEventListener('hashchange', renderRoute);

  // Первый запуск
  renderRoute();
};
