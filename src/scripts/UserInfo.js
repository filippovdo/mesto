class UserInfo {
    constructor({ nameSelector, infoSelector, selectorAvatar }) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._selectorAvatar = document.querySelector(selectorAvatar);
    }

    getUserInfo() {
        return { name: this._nameElement.textContent, info: this._infoElement.textContent };
    }

    setUserInfo(userData) {
        this._nameElement.textContent = userData.name;
        this._infoElement.textContent = userData.about;
    }

    setAvatar(userAvatar) {
        this._selectorAvatar.style.backgroundImage = `url(${userAvatar})`;
    }
}

export default UserInfo;