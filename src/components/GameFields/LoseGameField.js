import React, { Component } from 'react';

import './GameField.css';
import stump from '../../assets/img/stump.svg';

class LoseGameField extends Component {

    render() {
        return (
            <div className="game-field">
                <img src={stump} alt="stump"></img>
            </div>
        )
    }

}

export default LoseGameField;