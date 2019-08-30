import React, { Component } from 'react';

import './Board.css';
import hedgehog from '../../assets/img/hedgehog.svg';
import fox from '../../assets/img/fox.svg';
import stump from '../../assets/img/stump.svg';
import dice from '../../assets/img/dice.svg';
import tunnel from '../../assets/img/tunnel.svg';

class Board extends Component {

    render() {
        return (
            <div className="main-container">
                <div className="game-board">
                    <div className="hedgehog-container">
                        <div className="hedgehog">
                            <img src={hedgehog} alt="hedgehog"></img>
                        </div>
                    </div>
                    <div className="game-field">
                        1
                    </div>
                    <div className="game-field">
                        2
                    </div>
                    <div className="game-field">
                        3
                    </div>
                    <div className="game-field">
                        4
                    </div>
                    <div className="game-field">
                        5
                    </div>
                    <div className="game-field">
                        6
                    </div>
                    <div className="game-field">
                        7
                    </div>
                    <div className="game-field">
                        8
                    </div>
                    <div className="game-field">
                        9
                    </div>
                    <div className="game-field">
                        10
                    </div>
                    <div className="game-field">
                        11
                    </div>
                    <div className="game-field">
                        <img src={stump} alt="stump"></img>
                    </div>
                    <div className="game-field">
                        13
                    </div>
                    <div className="game-field">
                        14
                    </div>
                    <div className="game-field">
                        15
                    </div>
                    <div className="game-field">
                        16
                    </div>
                    <div className="game-field">
                        17
                    </div>
                    <div className="game-field">
                        18
                    </div>
                    <div className="game-field">
                        <img src={tunnel} alt="tunnel"></img>
                    </div>
                    <div className="game-field">
                        <img src={fox} alt="fox"></img>
                    </div>
                    <div className="move">
                        <h2>3</h2>
                    </div>
                    <div className="bubble">
                        <p id="message">Let's start</p>
                        <div className="bubble-image">
                            <img src={hedgehog} alt="hedgehog"></img>
                        </div>
                    </div>
                    <button className="dice">
                        <img src={dice} alt="throw the dice"></img>
                    </button>
                </div>
            </div>
        )
    }
}

export default Board;