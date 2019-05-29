import React from 'react';
import './Button.css';

function ActionButton(){
    return (
        <div className = 'actionButtons'>
            <button>/</button>
            <button>x</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
        </div>
    );
}

export default ActionButton;