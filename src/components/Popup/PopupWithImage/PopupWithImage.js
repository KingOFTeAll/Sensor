
import { Popup } from '../Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupID = this._popup.querySelector('.popupInfo__ID');
        this.__popupName = this._popup.querySelector('.popupInfo__Name');
        this._popupTemp = this._popup.querySelector('.popupInfo__Temperature');
        this._popupHum = this._popup.querySelector('.popupInfo__Humidity');
    }


    showPopupImgCard(cardData) {
        console.log(cardData);
        this.__popupName.textContent = cardData.name;
        this._popupID.textContent = cardData.sensor_id;
        this._popupTemp.textContent = cardData.temperature;
        this._popupHum.textContent = cardData.humidity;
      
        super.openPopup();
      }
}