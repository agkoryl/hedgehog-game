import React, { Component } from 'react';

import './Dice.css';

import dice from '../../assets/img/dice.svg';

class Dice extends Component {


    makeAMove = () => {
        this.props.setMoveNumber();
    }


    render() {
        return (
            <button className="dice" onClick={this.makeAMove}>
                <img src={dice} alt="throw the dice"></img>
            </button>
        )
    }
}

export default Dice;