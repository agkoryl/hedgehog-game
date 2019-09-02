import React, { Component } from 'react';

import './MessageBubble.css';

import hedgehog from '../../assets/img/hedgehog.svg';
import { messages } from '../../constants/bubbleMessages';

class MessageBubble extends Component {

    state = {
        currentMessage: "Quickly"
    }

    componentDidMount() {
        setInterval(()=> this.randomMessage(), 4000)
    }

    randomMessage() {
        let randomNumber = Math.floor(Math.random() * messages.length);
        let randomMessage = messages[randomNumber];
        this.setState({currentMessage: randomMessage});
    }

    render() {
        return (
            <div className="bubble">
                <p id="message">{this.state.currentMessage}</p>
                <div className="bubble-image">
                    <img src={hedgehog} alt="hedgehog"></img>
                </div>
            </div>
        )
    }
}

export default MessageBubble;