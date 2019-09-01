import React, { Component } from 'react';

import './DefaultModal.css';

import hedgehog from '../../assets/img/hedgehog.svg';
import fox from '../../assets/img/fox.svg';


class DefaultModal extends Component {


    toggleVisibility(visibility) {
        if (visibility) {
            return { visibility: "hidden" }
        } else {
            return { visibility: "visible" }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="modal-background" style={this.props.visibility ? { visibility: "visible" } : { visibility: "hidden" }} />
                <div className="modal-container" style={this.props.visibility ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div className="modal-content">
                        <div className="modal-message">
                            <div className="modal-text">
                                <h1>{this.props.messageTitle}</h1>
                                <p>{this.props.messageText}</p>
                            </div>
                            <div className="modal-image">
                                <img src={this.props.image === "hedgehog" ? hedgehog : fox} alt="end"></img>
                            </div>
                        </div>
                        <div className="restart-btn-container">
                            <button className="restart-btn" onClick={this.props.closeModal}>
                                TRY AGAIN
                            </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>


        )
    }
}

export default DefaultModal;