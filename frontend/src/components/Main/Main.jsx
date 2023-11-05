import React from 'react';
import NavTab from '../NavTab/NavTab';
import Sensors from '../Sensors/Sensors';
import './Main.css';

function Main() {
return (
    <main className ="main">
        <NavTab/>
        <Sensors/>
    </main>
);
}

export default Main;