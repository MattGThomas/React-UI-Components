import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className = 'buttonsContainer'>
        <div className = 'buttons'>
            <button className={`numberButton`}>{props.text}</button>
        </div>
        </div>
    )
}

export default NumberButton;