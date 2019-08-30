import React, { Component } from 'react';

import './Board.css';
import hedgehog from '../../assets/img/hedgehog.svg';
import fox from '../../assets/img/fox.svg';
import stump from '../../assets/img/stump.svg';
import sink from '../../assets/img/sink.svg';
import dice from '../../assets/img/dice.svg';

class Board extends Component {

    render() {
        return (
            <div className="main-container">
                <div className="game-board">
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                        <img src={stump} alt="stump"></img>
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">
                    </div>
                    <div className="game-field">

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