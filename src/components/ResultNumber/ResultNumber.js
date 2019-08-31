import React, { Component } from 'react';

import './ResultNumber.css';


class ResultNumber extends Component {


    render() {
        return (
            <div className="move">
                <h2>{this.props.currentMove}</h2>
            </div>
        )
    }
}

export default ResultNumber;



