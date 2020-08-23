import React from 'react';
import 'app.css';
import coverimage from '../img/big-rose.png'
import Nav from './nav';

const App = () => (
    <div>
        <Nav />
        <h1 className = 'welcomeMessage'>Hello React</h1>
        <img className="cover" src={coverimage} alt=""/>
    </div>
);

export default App;