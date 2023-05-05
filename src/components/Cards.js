import { PopupWithForm } from '../components/Popup/PopupWithForm/PopupWithForm.js';

export class Card {
  constructor({ cardData, handleCardClick }, templateSelector) {
      this._cardData = cardData;
      this._card = this._getCardTemplate(templateSelector);
      this._cardEditButton = this._card.querySelector('.cards__edit');
      this._cardDeleteButton = this._card.querySelector('.cards__trash');
      this._cardId = this._card.querySelector('.cards__id');
      this._cardName = this._card.querySelector('.cards__name-v');
      this._cardTemp = this._card.querySelector('.cards__temperature');
      this._cardHum = this._card.querySelector('.cards__humidity');
      this._cardImage = this._card.querySelector('.cards__title');
      this._cardElement = this._createCard();
      this._handleCardClick = handleCardClick;
      this._setEventListeners();
  };

  _getCardTemplate(templateSelector) {
      return document
          .querySelector(templateSelector)
          .content
          .querySelector('.cards__item')
          .cloneNode(true);
  };
  
  _createCard() {
    this._cardId.textContent = this._cardData.sensor_id;
    this._cardName.textContent = this._cardData.name;
    this._cardTemp.textContent = this._cardData.temperature;
    this._cardHum.textContent = this._cardData.humidity;
      return this._card
  };


// получение информации для попапа редактирования
  getCardInfo() {
    
    return {
        sensor_id: this._cardId.textContent,
        name: this._cardName.textContent,
        temperature: this._cardTemp.textContent,
        humidity: this._cardHum.textContent
    }
  }


  // установление информации для попапа редактирования
  setCardInfo({ sensor_id, name, temperature, humidity}) {

    this._cardId.textContent = sensor_id;
    this._cardName.textContent = name;
    this._cardTemp.textContent = temperature;
    this._cardData.humidity = humidity;
  }
// функция, вызываемая при открытии попапа редактирования
// устанавливает данные в карточку и в локальное хранилище
  _editCard(){
    const userInfoPopup = new PopupWithForm({ popupSelector: '.popup__edit-card', submitFunction: (data) => {
      raw[cardInd] = data;
      localStorage.setItem('masSens', JSON.stringify(raw));
      localStorage.setItem('editObject', JSON.stringify(raw[cardInd]))
      console.log(this.cardData)
      this.setCardInfo(data);
        userInfoPopup.closePopup();
      }
      });
      const raw = JSON.parse(localStorage.getItem('masSens'));
      const cardInd = raw.findIndex((masEl)=> {
 
       return Number(this.getCardInfo().sensor_id) === Number(masEl.sensor_id)

      
      });
    userInfoPopup.setEventListeners();
    userInfoPopup.setInputValues({
     sensor_id: this.getCardInfo().sensor_id,
     name: this.getCardInfo().name,
     temperature: this.getCardInfo().temperature,
     humidity: this.getCardInfo().humidity
    });

    userInfoPopup.openPopup();
}

  _deleteCard() { 
      this._card.remove();
      localStorage
  };


// установление слушателей
  _setEventListeners() {
      this._cardDeleteButton.addEventListener('click', () => this._deleteCard());
      this._cardEditButton.addEventListener('click', () => {this._editCard()});
      this._cardImage.addEventListener('click', () => {
          this._handleCardClick({
            sensor_id: this._cardData.sensor_id,
            name: this._cardData.name,
            temperature: this._cardData.temperature,
            humidity: this._cardData.humidity
          })
      });
  };

  getCard() {
      return this._cardElement
  };
}
