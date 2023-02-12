var buttonShow = document.querySelector('.profile__edit-button');

var buttonHide = document.querySelector('.popup__close');
var popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__form_input_name');
let jobInput = document.querySelector('.popup__form_input_about');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');


function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
  popupClose();
}

function popupOpen(){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
}

function popupClose(){
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

buttonShow.addEventListener('click', popupOpen);
  
buttonHide.addEventListener('click',  popupClose);


var popup_two = document.querySelector('.popup__two');
var cardButtonShow = document.querySelector('.profile__add-button');
var cardButtonHide = document.querySelector('.popup__two .popup__close');

function popupCardOpen(){
  console.log('test')
  popup_two.classList.add('popup_opened');
//  nameInput.value = profileName.textContent
//  jobInput.value = profileText.textContent
}

function popupCardClose(){
  popup_two.classList.remove('popup_opened');
}

cardButtonShow.addEventListener('click', popupCardOpen);
  
cardButtonHide.addEventListener('click',  popupCardClose);