import './Header.css';
//import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React from 'react';
import logo from '../../images/Logo_for_nickname.png';

function Header() {

return (
    <header className="me ">

          <div className="me__logo "><img className="me__img" src={logo} alt="my logo"/></div>
          <div className="header__navigate">
            <div className='header__sign'><p className='header__sign-text'>Войти</p></div>
            <div className='header__sign'><p className='header__sign-text'>Регистрация</p></div>
          </div>
          
        </header>
);
}

export default Header;