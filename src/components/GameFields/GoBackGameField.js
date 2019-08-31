import React, { Component } from 'react';

import './GameField.css';
import tunnel from '../../assets/img/tunnel.svg';

class GoBackGameField extends Component {

    render() {
        return (
            <div className="game-field">
                <img src={tunnel} alt="tunnel"></img>
            </div>
        )
    }

}

export default GoBackGameField;