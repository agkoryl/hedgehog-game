import React, { Component } from 'react';

import './Instructions.css';
import dice from '../../assets/img/dice.svg';
import hedgehog from '../../assets/img/hedgehog.svg';
import tunnel from '../../assets/img/tunnel.svg';
import stump from '../../assets/img/stump.svg';
import fox from '../../assets/img/fox.svg';


class Instructions extends Component {


    toggleVisibility(visibility) {
        if(visibility) {
            return { visibility: "hidden"}
        } else {
            return { visibility: "visible"}
        }   
    }

    render() {
        return (
            <React.Fragment>
                <div className="instructions-background" style={this.props.visibility ? { visibility: "visible"} :  { visibility: "hidden"}}/>
                <div className="instructions-container" style={this.props.visibility ? { visibility: "visible"} :  { visibility: "hidden"}}>
                    <div className="instructions-content">
                        <h3>Please, help me catch the Fox!</h3>
                        <div>
                            Hello! I'm
                            Hedgehog  <div className="instructions-image-container">
                                <img src={hedgehog} alt="hedgehog" />
                            </div> from the Nearby Forest.
                            I've been trying to sleep but the horrible Fox <div className="instructions-image-container">
                                <img src={fox} alt="fox" />
                            </div>  is constantly vexing me.
                            I have to catch him and teach him a lesson.
                            Please, help me find him! </div>


                        <h4>Instructions</h4>
                        <div>
                            Every time you press the dice
                            <div className="instructions-image-container" >
                                <img src={dice} alt="dice" />
                            </div>, Hedgehog is going to move according to the number you've got.
                            Be careful! If you step on the old stump
                            <div className="instructions-image-container">
                                <img src={stump} alt="stump" />
                            </div>, you lose.
                            If you go near the tunnel
                            <div className="instructions-image-container">
                                <img src={tunnel} alt="tunnel" />
                            </div> on field 19, you'll be sent back to 11.
                            Unfortunately, the Fox is cunning and in order to catch him you have to step exactly on the field number 20.
                            If you exceed this number, you'll get lost in the forest and you'll have to go back to find the way!
                        </div>
                        <div className="start-btn-container">
                            <button className="start-btn" onClick={this.props.closeModal}>
                                START
                            </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>


        )
    }
}

export default Instructions;