import './Footer.css';
//import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React from 'react';
//import logo from '../../images/Logo_for_nickname.png';

function Header() {

return (
    <footer className="footer">

          <p className="footer_copyright">&copy; KingoftheAll and Hirata</p>
          <div className="footer_contacts-container">
            <ul className='footer_contacts'>Контакты для связи:</ul>
            <li className='footer_contact'>программатор: @KingoftheAll</li>
            <li className='footer_contact'>тех директор: @KiskaVT</li>
          </div>
         
        </footer>
);
}

export default Header;