var buttonShow = document.querySelector('.profile__edit-button');
var buttonHide = document.querySelector('.popup__close');
var popup = document.querySelector('.popup');

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

function Popup(evt){

  popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent
    jobInput.value = profileText.textContent

}

formElement.addEventListener('submit', handleFormSubmit);

buttonShow.addEventListener('click', Popup);
  
buttonHide.addEventListener('click',  Popup);

  
  



