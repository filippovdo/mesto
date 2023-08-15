import Popup from './Popup.js';

class PopupConfirm extends Popup {
    constructor(popupSelector, apiCallBacks) {
        super(popupSelector);
        this._apiCallBacks = apiCallBacks;
        this._buttonConfirm = this._popup.querySelector(".popup__button")
    }

    open(cardId) {
        super.open();
        this._card = cardId
    }


    close() {
        super.close()
    }

    setEventListeners() {
        super.setEventListeners();
        this._buttonConfirm.addEventListener("mousedown", () => { this._apiCallBacks(this._card) })
    }


    loadingConfirm(isLoading, content) {
        if (isLoading) {
            this._buttonConfirm.textContent = "Сохранение...";
        } else {
            this._buttonConfirm.textContent = content;
        }
    }
}

export { PopupConfirm };