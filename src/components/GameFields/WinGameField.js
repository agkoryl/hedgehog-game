import React, { Component } from 'react';

import './GameField.css';
import fox from '../../assets/img/fox.svg';

class WinGameField extends Component {

    render() {
        return (
            <div className="game-field">
                <img src={fox} alt="fox"></img>
            </div>
        )
    }

}

export default WinGameField;