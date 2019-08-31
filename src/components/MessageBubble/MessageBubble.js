import React, { Component } from 'react';

import './MessageBubble.css';

import hedgehog from '../../assets/img/hedgehog.svg';

class MessageBubble extends Component {


    render() {
        return (
            <div className="bubble">
                <p id="message">Let's catch the fox...</p>
                <div className="bubble-image">
                    <img src={hedgehog} alt="hedgehog"></img>
                </div>
            </div>
        )
    }
}

export default MessageBubble;