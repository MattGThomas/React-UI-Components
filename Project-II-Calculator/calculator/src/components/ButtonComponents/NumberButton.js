import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className = 'buttonsContainer'>
        <div className = 'buttons'>
            <button className={`numberButton`}><strong>{props.text}</strong></button>
        </div>
        </div>
    )
}

export default NumberButton;