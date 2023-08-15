class Card {
	constructor({data, userId, handleCardClick, handleCardDelete, handleCardLike} ,templateSelector ) {
		this._card = data;
		this._name = data.name;
		this._link = data.link;
		this._cardLikes = data.likes;
		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
		this._handleCardDelete = handleCardDelete;
		this._handleCardLike = handleCardLike;
		this._cardId = data._id;
		this._userId = userId;
		this._cardElement = this._getTemplate();
	}

	_getTemplate() {
		const templateElement = document.querySelector(this._templateSelector).content;
		const cardElement = templateElement.querySelector('.element').cloneNode(true);
		return cardElement;
	}

	renderCard() {
		this._cardElement = this._getTemplate();
		this._cardElementImage = this._cardElement.querySelector(".element__cover");
		this._cardElementImage.src = this._link;
		this._cardElementImage.alt = this._name;
		this._descriptionElement = this._cardElement.querySelector(".element__title");
		this._descriptionElement.textContent = this._name;
		this._buttonLike = this._cardElement.querySelector(".element__like");
		this._buttonDelete = this._cardElement.querySelector(".element__trash");
		if (this._userId !== this._card.owner._id) {
			this._buttonDelete.style.display = "none";
		}
		this._numberLikes = this._cardElement.querySelector(".element__number-likes");
		this._numberLikes.textContent = this._cardLikes.length;
		this.showLike();
		this._eventListeners();
		return this._cardElement;
	}

	showLike() {
		this._cardLikes.forEach((element) => {
			if (element._id === this._userId) {
				this._buttonLike.classList.add("element__like_active");
			}
		});
	}

	isLiked() {
		return this._buttonLike.classList.contains("element__like_active");
	}
	likeCard(count) {
		this._likes = this._card.likes;
		this._numberLikes.textContent = count;
		this._buttonLike.classList.toggle("element__like_active");
	  }

	_removeCard() {
		this._cardElement.remove();
		this._cardElement = null;
	}

	_eventListeners() {
		this._buttonLike.addEventListener("click", () => this._handleCardLike(this._cardId));
		this._buttonDelete.addEventListener("click", () => {
			this._handleCardDelete({ cardObj: this._card, cardDom: this._cardElement });
		});
		this._cardElementImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
	}

}

export default Card;
