import { Header } from './layouts/Header/Header.js';
// import { Download } from './layouts/Download/Download.js';
// import { Warranty } from './layouts/Warranty/Warranty.js';
// import { Care } from './layouts/Care/Care.js';
// import { Cashback } from './layouts/Cashback/Cashback.js';
// import { Clients } from './layouts/Clients/Clients.js';
import { Main } from './layouts/Main/Main.js';
import { Footer } from './layouts/Footer/Footer.js';
import { Modal } from './components/Modal/Modal.js';
import { initRouting } from './helpers/initRouting.js';
import { handleShowModal } from './handlers/handlers.js';

const $root = document.getElementById('root');

(async () => {
  if ($root) {
    $root.insertAdjacentHTML('beforeend', await Header());
    $root.insertAdjacentHTML('beforeend', await Main());
    // $root.insertAdjacentHTML('beforeend', await Download());
    // $root.insertAdjacentHTML('beforeend', await Warranty());
    // $root.insertAdjacentHTML('beforeend', await Care());
    // $root.insertAdjacentHTML('beforeend', await Cashback());
    // $root.insertAdjacentHTML('beforeend', await Clients());
    $root.insertAdjacentHTML('beforeend', await Footer());
    $root.insertAdjacentHTML('beforeend', await Modal());

    initRouting();

    const $showModalButton = document.getElementById('order-button');
    const $modal = document.getElementById('modal');
    const $form = document.getElementById('order');

    $showModalButton?.addEventListener('click', handleShowModal);
  }
})();
