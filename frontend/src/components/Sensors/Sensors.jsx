 import './Sensors.css'
 import React from 'react';

function Sensors(){

    return (
        <section className="Sensors" aria-label='БД Датчиков'>
            <div className="Sensors__tab">
                <ul className='Sensors__tab-properties'>
                    <li className='Sensors__tab-item'>Номер</li>
                    <li className='Sensors__tab-item'>Название</li>
                    <li className='Sensors__tab-item'>prop-1</li>
                    <li className='Sensors__tab-item'>prop-2</li>
                    <li className='Sensors__tab-item'>prop-3</li>
                </ul>
                <p></p>
            </div>
            <ul className="cards">
            

            </ul>
          </section>
    );

}


export default Sensors