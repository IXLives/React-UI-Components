import React from 'react';

import './Button.css';

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const numbers = [
    {buttonStyle: 'big',
    text: 'clear'},
    {buttonStyle:'num',
    text:'1'},
    {buttonStyle:'num',
    text:'2'},
    {buttonStyle:'num',
    text:'3'},
    {buttonStyle:'num',
    text:'4'},
    {buttonStyle:'num',
    text:'5'},
    {buttonStyle:'num',
    text:'6'},
    {buttonStyle:'num',
    text:'7'},
    {buttonStyle:'num',
    text:'8'},
    {buttonStyle:'num',
    text:'9'},
    {buttonStyle:'big',
    text:'0'}
];

const actions = [
    {buttonStyle:'action',
    text:'÷'},
    {buttonStyle:'action',
    text:'x'},
    {buttonStyle:'action',
    text:'-'},
    {buttonStyle:'action',
    text:'+'},
    {buttonStyle:'action',
    text:'='}
];

function ButtonContainer () {
    return (
        <div className = 'buttonContainer'>
            <div className = 'numbers'>
                {numbers.map((properties, index) => {
                    return <NumberButton numberButs={properties} />;
                })}
            </div>
            <div className = 'actions'>
                {actions.map((properties, index) => {
                    return <ActionButton actionButs={properties} />;
                })}
            </div>
        </div>
    );
}

export default ButtonContainer;