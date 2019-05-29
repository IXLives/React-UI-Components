import React from 'react';

import './Button.css';

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

function ButtonContainer () {
    return (
        <div className = 'buttonContainer'>
            <NumberButton />
            <ActionButton />
        </div>
    );
}

export default ButtonContainer;