import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupLabel = this._popup.querySelector('.popup__label');
    }

    open(name, link) {
        console.log(name);
        console.log(link);
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupLabel.textContent = name;
        super.open();
    }
}

export default PopupWithImage;
