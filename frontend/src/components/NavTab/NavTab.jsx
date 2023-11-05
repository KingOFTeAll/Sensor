import './NavTab.css';
import React from 'react';
import lupa from '../../images/Loupa.svg';

function NavTab() {
    return (
    <div className="line">

    <section className="NavTab">
  <div className="NavTab__search">
    <div className='NavTab__Filter'><p className="NavTab__Filter-text">Фильтр</p> </div>
    <form className="NavTab__form" name="searchform" novalidate>
      <input type="number" className="NavTab__input"/>
      <button className="NavTab__button" type="button"><img className="NavTab__lens" src={lupa} alt="найти"/></button>
    </form>
  </div>
  <button
  type="button"
  className="NavTab__add"
  id="NavTab__add"
></button>
</section>

</div>
    );
}

export default NavTab;