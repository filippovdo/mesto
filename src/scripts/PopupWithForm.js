import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__content');
        this._submitHandler = submitHandler;
        this._inputList = this._form.querySelectorAll('input.popup__form');
        this._buttonElement = this._form.querySelector(".popup__button");
    }

    _getInputValues() {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    loadingConfirm(isLoading, content) {
        if (isLoading) {
          this._buttonElement.textContent = "Сохранение...";
        } else {
          this._buttonElement.textContent = content;
        }
      }
}

export default PopupWithForm;