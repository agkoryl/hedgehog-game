import React, { Component } from 'react';

import './Hedgehog.css';

import hedgehog from '../../assets/img/hedgehog.svg';
import { BouncyDiv, BounceOutDiv, BounceOutUpDiv, WobbleDiv } from './HedgehogAnimations';
import { winningPosition, losingPosition, goingBackPosition } from '../../constants/specialFieldsPositions';

class Hedgehog extends Component {

    setPosition(position) {
        let top = 0;
        if (position % 5 === 0) {
            top = position / 5 - 1;
        } else {
            top = Math.floor(position / 5);
        }
        let left = (position - 1) % 5;

        let topPercentage = top * 19 + 3 + "%";
        let leftPercentage = left * 19 + 3 + "%";

        return { top: topPercentage, left: leftPercentage };
    }

    renderHedgehog() {
        const { position } = this.props;

        if (position === goingBackPosition) {
            return <BounceOutDiv key={position} className="hedgehog">
                <img src={hedgehog} alt="hedgehog"></img>
            </BounceOutDiv>
        } else if (position === losingPosition) {
            return <BounceOutUpDiv key={position} className="hedgehog">
                <img src={hedgehog} alt="hedgehog"></img>
            </BounceOutUpDiv>
        } else if (position === winningPosition) {
            return <WobbleDiv key={position} className="hedgehog">
                <img src={hedgehog} alt="hedgehog"></img>
            </WobbleDiv>
        } else {
            return <BouncyDiv key={position} className="hedgehog">
                <img src={hedgehog} alt="hedgehog"></img>
            </BouncyDiv>
        }
    }

    render() {
        return (
            <div className="hedgehog-container" style={this.setPosition(this.props.position)}>
                {this.renderHedgehog()}
            </div>
        )
    }
}

export default Hedgehog;