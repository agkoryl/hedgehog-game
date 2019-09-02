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
import DefaultModal from '../DefaultModal/DefaultModal';
import { winningPosition, losingPosition, goingBackPosition, returnPosition } from '../../constants/specialFieldsPositions';
import { winModalTitle, winModalMessage, loseModalTitle, loseModalMessage, creditsModalTitle, creditsModalMessage } from '../../constants/modalMessages';

class Board extends Component {

    state = {
        hedgehogPosition: 1,
        currentMove: 0,
        startModal: true,
        winModal: false,
        loseModal: false,
        creditsModal: false,
        throwNumber: 0,
        sumOfNumbers: 0,
    }

    setMoveNumber = () => {
        let moveNumber = Math.floor(Math.random() * 6) + 1;
        this.setState({ currentMove: moveNumber });
        this.setHedgehogPosition(moveNumber);
        this.addNumbersOnDice(moveNumber);
    }

    addNumbersOnDice(moveNumber) {
        let newSum = this.state.sumOfNumbers + moveNumber;
        this.setState({ sumOfNumbers: newSum });
    }

    countMeanNumber() {
        let meanNumber = this.state.sumOfNumbers / this.state.throwNumber;
        return meanNumber.toFixed(2);
    }

    setHedgehogPosition = (moveNumber) => {
        let newPosition = this.state.hedgehogPosition + moveNumber;

        if (newPosition === losingPosition) {
            this.handleHedgehogLost();
        } else if (newPosition === winningPosition) {
            this.handleHedgehogWin();
        } else if (newPosition > winningPosition) {
            this.handleHedgehogWentTooFar(moveNumber);
        } else if (newPosition === goingBackPosition) {
            this.handleHedgehogWentIntoTunnel();
        } else {
            this.setState({ hedgehogPosition: newPosition });
        }
    }

    handleHedgehogLost() {
        this.setState({ hedgehogPosition: losingPosition });
        setTimeout(() => this.openModal("loseModal"), 1800);
    }

    handleHedgehogWin() {
        this.setState({ hedgehogPosition: winningPosition });
        setTimeout(() => this.openModal("winModal"), 1800);
    }

    handleHedgehogWentTooFar(moveNumber) {
        let goBackPosition = 20 - [(this.state.hedgehogPosition + moveNumber) - 20];
        if (goBackPosition === goingBackPosition) {
            this.handleHedgehogWentIntoTunnel();
        } else {
            this.setState({ hedgehogPosition: goBackPosition });
        }
    }

    handleHedgehogWentIntoTunnel() {
        this.setState({ hedgehogPosition: goingBackPosition });
        setTimeout(() => this.setState({ hedgehogPosition: returnPosition }), 2000);
    }

    closeModal = (modal) => {
        this.setState({ [modal]: false });
        this.setState({ hedgehogPosition: 1 });
        if (modal === "winModal" || modal === "loseModal") {
            this.resetThrowNumber();
        }
    }

    openModal = (modal) => {
        this.setState({ [modal]: true })
    }

    increaseThrowNumber = () => {
        let increasedNumber = this.state.throwNumber + 1;
        this.setState({ throwNumber: increasedNumber })
    }

    resetThrowNumber() {
        this.setState({ throwNumber: 0 })
    }

    render() {
        const {
            startModal,
            winModal,
            loseModal,
            creditsModal,
            hedgehogPosition,
            currentMove,
            throwNumber,
        } = this.state;
        const fields = Array.from(Array(20).keys());
        return (
            <div className="main-container">
                <Instructions
                    visibility={startModal}
                    closeModal={() => this.closeModal("startModal")}
                />
                <DefaultModal
                    visibility={winModal}
                    closeModal={() => this.closeModal("winModal")}
                    messageTitle={winModalTitle}
                    messageText={winModalMessage}
                    image={"hedgehog"}
                    buttonMessage={"Play again"}
                    throwNumber={throwNumber}
                    meanNumber={this.countMeanNumber()}
                />
                <DefaultModal
                    visibility={loseModal}
                    closeModal={() => this.closeModal("loseModal")}
                    messageTitle={loseModalTitle}
                    messageText={loseModalMessage}
                    image={"fox"}
                    buttonMessage={"Try again"}
                    throwNumber={throwNumber}
                    meanNumber={this.countMeanNumber()}
                />
                <DefaultModal
                    visibility={creditsModal}
                    closeModal={() => this.closeModal("creditsModal")}
                    messageTitle={creditsModalTitle}
                    messageText={creditsModalMessage}
                    buttonMessage="close"
                    image={"hedgehog"}
                />
                <div className="game-board">
                    <Hedgehog position={hedgehogPosition} />
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
                    <ResultNumber currentMove={currentMove} />
                    <MessageBubble />
                    <Dice
                        currentMove={currentMove}
                        setMoveNumber={this.setMoveNumber}
                        hedgehogPosition={this.state.hedgehogPosition}
                        setHedgehogPosition={this.setHedgehogPosition}
                        increaseThrowNumber={this.increaseThrowNumber}
                    />
                </div>
                <div className="credits-container" onClick={() => this.openModal("creditsModal")}>credits</div>
            </div>
        )
    }
}

export default Board;