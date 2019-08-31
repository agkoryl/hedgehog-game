import React, { Component } from 'react';

import './Board.css';


import DefaultGameField from '../GameFields/DefaultGameField';
import LoseGameField from '../GameFields/LoseGameField';
import GoBackGameField from '../GameFields/GoBackGameField';
import WinGameField from '../GameFields/WinGameField';
import Hedgehog from '../Hedgehog/Hedgehog';
import Dice from '../Dice/Dice';
import ResultNumber from '../ResultNumber/ResultNumber';
import MessageBubble from '../MessageBubble/MessageBubble';


const losingPosition = 12;
const winningPosition = 20;
const goingBackPosition = 19;
const returnPosition = 11;

class Board extends Component {

    state = {
        hedgehogPosition: 1,
        currentMove: 0,
    }

    setMoveNumber = () => {
        let moveNumber = Math.floor(Math.random() * 6) + 1;
        this.setState({ currentMove: moveNumber });
        this.setHedgehogPosition(moveNumber);
    }

    setHedgehogPosition = (moveNumber) => {
        let newPosition = this.state.hedgehogPosition + moveNumber;

        if(newPosition === losingPosition) {
            console.log("you lost");
            this.setState({ hedgehogPosition: losingPosition });
        } else if(newPosition === winningPosition) {
            console.log("you won");
            this.setState({ hedgehogPosition: winningPosition });
        } else if((newPosition) > 20) {
            let goBackPosition = 20 - [(this.state.hedgehogPosition + moveNumber) - 20];
            if(goBackPosition === 19) {
                this.setState({ hedgehogPosition: returnPosition });
            } else {
                this.setState({ hedgehogPosition: goBackPosition });
            }
        }
        else if(newPosition === goingBackPosition) {
            this.setState({ hedgehogPosition: returnPosition })
        } else {
            this.setState({ hedgehogPosition: newPosition });
        }
    }

    render() {

        const fields = Array.from(Array(20).keys());
        return (
            <div className="main-container">
                <div className="game-board">
                    <Hedgehog position={this.state.hedgehogPosition} />
                    {fields.map((field) => {
                        if (field === 11) {
                            return <LoseGameField key={field} />
                        }
                        else if (field === 18) {
                            return <GoBackGameField key={field} />
                        }
                        else if (field === 19) {
                            return <WinGameField key={field} />
                        }
                        else {
                            return <DefaultGameField number={field + 1} key={field} />
                        }
                    })}
                    <ResultNumber currentMove={this.state.currentMove} />
                    <MessageBubble />
                    <Dice
                        currentMove={this.state.currentMove}
                        setMoveNumber={this.setMoveNumber}
                        setHedgehogPosition={this.setHedgehogPosition} />
                </div>
            </div>
        )
    }
}

export default Board;