import './index.css';

import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js'
import { validationConfig, initialCards, authorizationToken } from '../utils/constants.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';
import { Api } from "../scripts/Api.js";
import { PopupConfirm } from "../scripts/PopupConfirm.js";

const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_profile');
const profileFormElement = profilePopup.querySelector('.popup__content');
const profileNameInput = profileFormElement.querySelector('.popup__form_input_name');
const profileAboutInput = profileFormElement.querySelector('.popup__form_input_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__text');
const avatarImage = document.querySelector('.profile__avatar');
const cardAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_new-card');
const cardFormElement = cardPopup.querySelector('.popup__content');
const avatarPopup = document.querySelector('.popup_avatar');
const avatarFormElement = avatarPopup.querySelector('.popup__content');

const api = new Api(authorizationToken);

const imagePopup = new PopupWithImage('.popup_img');
imagePopup.setEventListeners();

const cardList = new Section({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, '.elements');



const profileFormValidator = new FormValidator(validationConfig, profileFormElement);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, cardFormElement);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, avatarFormElement);
avatarFormValidator.enableValidation();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    infoSelector: '.profile__text',
    selectorAvatar: ".profile__avatar"
});

let userId;

Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([userData, cardItems]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        userInfo.setAvatar(userData.avatar);
        cardList.renderItems(cardItems);
    })
    .catch((err) => {
        console.log(err);
    });

profileEditButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    profilePopupForm.open();
    profileFormValidator.resetValidation();
    profileNameInput.value = userData.name;
    profileAboutInput.value = userData.info;
});



const profilePopupForm = new PopupWithForm('.popup_profile', (formData) => {
    profilePopupForm.loadingConfirm(true);
    api
        .editCustomProfile(formData)
        .then((res) => {
            userInfo.setUserInfo(res);
            profilePopupForm.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            profilePopupForm.loadingConfirm(false, "Сохранить");
        });
});
const cardPopupForm = new PopupWithForm('.popup_new-card', (formData) => {
    cardPopupForm.loadingConfirm(true);
    console.log(formData);
    api
        .addNewCard(formData)
        .then((res) => {
            const cardElement = createCard(res);
            cardList.addItem(cardElement);
            cardPopupForm.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            cardPopupForm.loadingConfirm(false, "Создать");
        });
});
profilePopupForm.setEventListeners();
cardPopupForm.setEventListeners();

cardAddButton.addEventListener("click", () => {
    cardPopupForm.open();
    cardFormValidator.resetValidation();
});

const popupClose = new PopupConfirm(".popup_delete-card", (thisCard) => {
    popupClose.loadingConfirm(true);
    api
        .deleteCard(thisCard.cardObj._id)
        .then((res) => {
            thisCard.cardDom.remove();
            popupClose.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupClose.loadingConfirm(false, "Да");
        });
});
popupClose.setEventListeners();

function createCard(item) {
    const newCard = new Card(
        {
            data: item,
            userId: userId,
            handleCardClick: (name, link) => {
                imagePopup.open(name, link);
            },
            handleCardDelete: (card) => {
                popupClose.open(card);
            },
            handleCardLike: (thisCardId) => {
                if (!newCard.isLiked()) {
                    api
                        .setCardLike(thisCardId)
                        .then((res) => {
                            newCard.likeCard(res.likes.length);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    api
                        .deleteCardLike(thisCardId)
                        .then((res) => {
                            newCard.likeCard(res.likes.length);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            },
        },
        "#element"
    );

    const cardElement = newCard.renderCard();
    return cardElement;
}


cardAddButton.addEventListener('click', () => {
    cardFormValidator.toggleButtonState();
    cardFormValidator.resetValidation();
    cardPopupForm.open();
});

const popupAvatar = new PopupWithForm(".popup_avatar", (formData) => {
    popupAvatar.loadingConfirm(true);
    api
        .updateAvatar({ avatar: formData.formAbout })
        .then((res) => {
            userInfo.setAvatar(formData.formAbout);
            popupAvatar.close();
        })
        .catch((err) => {
            console.log("qwe", err);
        })
        .finally(() => {
            popupAvatar.loadingConfirm(false, "Сохранить");
        });
});
popupAvatar.setEventListeners();

avatarImage.addEventListener("click", () => {
    avatarFormValidator.toggleButtonState();
    avatarFormValidator.resetValidation();
    popupAvatar.open();
});

