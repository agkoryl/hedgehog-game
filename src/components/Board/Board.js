import React, { Component } from 'react';

import './Board.css';

import Instructions from '../Instructions/Instructions';
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
        startModal: true,
    }

    setMoveNumber = () => {
        let moveNumber = Math.floor(Math.random() * 6) + 1;
        this.setState({ currentMove: moveNumber });
        this.setHedgehogPosition(moveNumber);
    }

    setHedgehogPosition = (moveNumber) => {
        let newPosition = this.state.hedgehogPosition + moveNumber;

        if (newPosition === losingPosition) {
            console.log("you lost");
            this.setState({ hedgehogPosition: losingPosition });
        } else if (newPosition === winningPosition) {
            console.log("you won");
            this.setState({ hedgehogPosition: winningPosition });
        } else if ((newPosition) > 20) {
            let goBackPosition = 20 - [(this.state.hedgehogPosition + moveNumber) - 20];
            if (goBackPosition === 19) {
                this.setState({ hedgehogPosition: returnPosition });
            } else {
                this.setState({ hedgehogPosition: goBackPosition });
            }
        } else if (newPosition === goingBackPosition) {
            this.setState({ hedgehogPosition: returnPosition })
        } else {
            this.setState({ hedgehogPosition: newPosition });
        }
    }

    closeModal =()=> {
        this.setState({startModal: false});
    }

    render() {

        const fields = Array.from(Array(20).keys());
        return (
            <div className="main-container">
                 <Instructions visibility={this.state.startModal} closeModal={this.closeModal}/>
                <div className="game-board">
                    <Hedgehog position={this.state.hedgehogPosition} />
                    {fields.map((field) => {
                        const fieldNumber = field + 1;
                        if (fieldNumber === losingPosition) {
                            return <LoseGameField key={fieldNumber} />
                        }
                        else if (fieldNumber === goingBackPosition) {
                            return <GoBackGameField key={fieldNumber} />
                        }
                        else if (fieldNumber === winningPosition) {
                            return <WinGameField key={fieldNumber} />
                        }
                        else {
                            return <DefaultGameField number={fieldNumber} key={fieldNumber} />
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