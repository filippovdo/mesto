var buttonShow = document.querySelector('.profile__edit-button');
var buttonHide = document.querySelector('.popup__close');
var popup = document.querySelector('.popup');

buttonShow.addEventListener ('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup_opened');
  })

buttonHide.addEventListener ('click', function() {
  popup.classList.remove('popup_opened');
  })

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__text');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

buttonShow.addEventListener ('click', function(evt) {
  evt.preventDefault();

  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent

  popup.classList.add('popup_opened');
  })

buttonHide.addEventListener ('click', function() {
  popup.classList.remove('popup_opened');
  })



