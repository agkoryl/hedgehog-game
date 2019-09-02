import React, { Component } from 'react';

import './DefaultModal.css';

import hedgehog from '../../assets/img/hedgehog.svg';
import fox from '../../assets/img/fox.svg';

class DefaultModal extends Component {

    toggleVisibility(isVisible) {
        return isVisible ? { visibility: "visible" } : { visibility: "hidden" }
    }

    render() {
        const {
            visibility,
            image,
            messageText,
            messageTitle,
            closeModal,
            buttonMessage,
            throwNumber,
            meanNumber,
        } = this.props;
        return (
            <React.Fragment>
                <div className="modal-background" style={this.toggleVisibility(visibility)} />
                <div className="modal-container" style={this.toggleVisibility(visibility)}>
                    <div className="modal-content">
                        <div className="modal-message">
                            <div className="modal-text">
                                <h1>{messageTitle}</h1>
                                <p>{messageText}</p>
                                {throwNumber &&
                                    <p>Throw number: {throwNumber}</p>
                                }
                                {meanNumber &&
                                    <p>Mean number on the dice: {meanNumber}</p>
                                }
                            </div>
                            <div className="modal-image">
                                <img src={image === "hedgehog" ? hedgehog : fox} alt="end"></img>
                            </div>
                        </div>
                        <div className="restart-btn-container">
                            <button className="restart-btn" onClick={closeModal}>
                                {buttonMessage}
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultModal;