import React from 'react';
import Button from './Button.css';

const OperatorButton = props => {
    return (
        <div>
            <button className={`operatorButton`}>{props.text}</button>
        </div>
    )
}

export default OperatorButton;