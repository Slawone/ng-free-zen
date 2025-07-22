/**
 * @function Modal
 * @description Modal component
 * @returns {Promise<string>} HTML or empty
 */

export const Modal = async () => {
  return /* html */ `
    <div class="modal" id="modal">
      <div class="modal__body">
        <!-- close button -->
        <button class="modal__close" id="close" type="button">
          <img src="./assets/icons/close.svg" alt="close" />
        </button>
        <!-- title -->
        <h3 class="modal__title">Order a consultation</h3>
        <!-- form -->
        <form class="form" id="order">
          <!-- input name -->
          <label class="form__input">
            <span>Name</span>
            <input type="text" id="name" name="name"/>
          </label>
          <!-- input tel -->
          <label class="form__input">
            <span>Tel</span>
            <input type="tel" id="tel" name="tel"/>
          </label>
          <!-- input email -->
          <label class="form__input">
            <span>E-mail</span>
            <input type="email" id="email" name="email"/>
          </label>
          <!-- conection -->
          <label class="form__select">
            <span>Connection</span>
            <select id="connection" name="connection">
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
          <!-- Policy -->
          <label class="form__checkbox">
            <input type="checkbox" id="policy" name="policy">
            <a href="#!" target="_blank">Privacy policy</a>
          </label>
          <!-- Button Submit -->
           <button class="form__submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  `;
};
