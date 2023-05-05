import './index.css';
import  jsonmas from '../data/events.json';
import {formSetting, popupAddBut, cardSelectors,} from '../consts/consts.js';
import { Card } from '../components/Cards.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/Popup/PopupWithImage/PopupWithImage.js';
import { PopupWithForm } from '../components/Popup/PopupWithForm/PopupWithForm.js';

//Функциональность прописана с использованием LocalStorage, для того, чтобы не терять карточки при перезагрузке
// Данная реализация связана с тем,что редактировать файл JSON возможно через node, который я освоил не достаточным образом пока что

const massiveCards = JSON.parse(localStorage.getItem('masSens'));
localStorage.setItem('masSens', JSON.stringify(jsonmas));
 

const massive = [];

// Функция создания карточек: забирает данные с даты м формирует карточку, сразу подгружая её в локальное хранилище
  function createCard(cardData){
    massive.push(cardData)
    localStorage.setItem('masSens', JSON.stringify(massive));
    return new Card({ 
        cardData, 
        handleCardClick: () => {
            popupImage.showPopupImgCard(cardData);
        } 
    }, '.template').getCard();
  };
  
  const cardsSection = new Section(
    {
        renderer: (item) => {
            cardsSection.addItem(createCard(item));
        }
    },
    cardSelectors.containerSelector
  );
  
  
  const popupImage = new PopupWithImage('.popup_info');

  // попап создания карточки  
  const newCardPopup = new PopupWithForm({ popupSelector: '.popup__addcard', submitFunction: (data) => {
    cardsSection.addItem(createCard({
        sensor_id: data['add_Id'],
        name: data['add_name'],
        temperature: data['add_temperature'],
        humidity: data['add_humidity']
    }, cardSelectors.cardSelectors));
    newCardPopup.closePopup();
  } 
  });

  cardsSection.renderItems(massiveCards);
  popupImage.setEventListeners();
  newCardPopup.setEventListeners();
  
  const formValidators = {};
// Организация валидации данных. В данном случае валидировать особо нечего т.к почти все данные вводятся в виде чисел, но валидация прописана наиболее универсально
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };
  
  enableValidation(formSetting);
  
  popupAddBut.addEventListener('click', function () {
      formValidators['placeForm'].disableSubmitButton();
      newCardPopup.openPopup();
  });