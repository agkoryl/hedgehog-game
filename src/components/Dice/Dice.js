import React, { Component } from 'react';

import './Dice.css';

import dice from '../../assets/img/dice.svg';
import { RotatingDiv } from './DiceAnimation';
import { winningPosition, losingPosition, goingBackPosition } from '../../constants/specialFieldsPositions';

class Dice extends Component {

    makeAMove = () => {
        this.props.setMoveNumber();
        this.props.increaseThrowNumber();
    }

    excludePositions() {
        const { hedgehogPosition } = this.props;

        return hedgehogPosition !== winningPosition &&
            hedgehogPosition !== losingPosition &&
            hedgehogPosition !== goingBackPosition;
    }

    render() {
        return (
            <button className="dice" onClick={this.excludePositions() ? this.makeAMove : null}>
                <RotatingDiv key={this.props.hedgehogPosition}>
                    <img src={dice} alt="throw the dice"></img>
                </RotatingDiv>
            </button>
        )
    }
}

export default Dice;