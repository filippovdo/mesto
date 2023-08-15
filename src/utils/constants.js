export const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

export const validationConfig = {
	formSelector: '.popup__content',
	inputSelector: '.popup__form',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_inactive',
	inputErrorClass: 'popup__form_error',
	errorClass: 'popup__error_visible'
};

export const authorizationToken = {
	baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
	headers: {
		authorization: "d118db5a-2792-4984-918a-15d24ad7c664",
		"Content-Type": "application/json",
	},
};