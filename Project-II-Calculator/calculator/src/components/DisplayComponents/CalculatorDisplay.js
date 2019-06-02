import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = props => {
    return (
        <div className='display'>
        <div className='answerBox'>0</div>
        <div className='sectionOne'>
            <ActionButton text='clear' />
            <NumberButton text='/' />
        </div>
        <div className='sectionTwo'>
            <NumberButton text='7' />
            <NumberButton text='8' />
            <NumberButton text='9' />
            <NumberButton text='x' />
        </div>
        <div className='sectionThree'>
            <NumberButton text='4' />
            <NumberButton text='5' />
            <NumberButton text='6' />
            <NumberButton text='-' />
        </div>
        <div className='sectionFour'>
            <NumberButton text='1' />
            <NumberButton text='2' />
            <NumberButton text='3' />
            <NumberButton text='+' />
        </div>
        <div className='sectionFive'>
            <ActionButton text='0' />
            <NumberButton text='=' />
        </div>
        </div>
    )
};

export default CalculatorDisplay;