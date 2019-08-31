import React, { Component } from 'react';

import './Hedgehog.css';

import hedgehog from '../../assets/img/hedgehog.svg';

class Hedgehog extends Component {

    setPosition(position) {
        let top = 0;
        if(position%5 === 0) {
            top = position/5-1;
        } else {
            top = Math.floor(position /5);
        }
        let left = (position-1)%5;

        let topPercentage = top * 19 + 3 + "%";

        let leftPercentage = left * 19 + 3 + "%";

        return { top: topPercentage, left: leftPercentage};
    }

    render() {
        return (
            <div className="hedgehog-container" style={this.setPosition(this.props.position)}>
                <div className="hedgehog">
                    <img src={hedgehog} alt="hedgehog"></img>
                </div>
            </div>
        )
    }
}

export default Hedgehog;