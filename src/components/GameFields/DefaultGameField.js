import React, { Component } from 'react';

import './GameField.css';

class DefaultGameField extends Component {

    render() {
        return (
            <div className="game-field">
                {this.props.number}
            </div>
        )
    }

}

export default DefaultGameField;