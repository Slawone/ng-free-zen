import { Header } from './components/Header/Header.js';
import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';
import { Care } from './components/Care/Care.js';
import { Cashback } from './components/Cashback/Cashback.js';
import { Clients } from './components/Clients/Clients.js';
import { Footer } from './components/Footer/Footer.js';
import { Modal } from './components/Modal/Modal.js';
import {handleShowModal} from './handlers/handlers.js';

const $root = document.getElementById('root');

(async () => {
  if ($root) {
    $root.insertAdjacentHTML('beforeend', await Header());
    $root.insertAdjacentHTML('beforeend', await Download());
    $root.insertAdjacentHTML('beforeend', await Warranty());
    $root.insertAdjacentHTML('beforeend', await Care());
    $root.insertAdjacentHTML('beforeend', await Cashback());
    $root.insertAdjacentHTML('beforeend', await Clients());
    $root.insertAdjacentHTML('beforeend', await Footer());
    $root.insertAdjacentHTML('beforeend', await Modal());

    const $showModalButton = document.getElementById('order-button');
    const $modal = document.getElementById('modal');
    const $form = document.getElementById('order');

    $showModalButton?.addEventListener('click', handleShowModal)
  }
})();
