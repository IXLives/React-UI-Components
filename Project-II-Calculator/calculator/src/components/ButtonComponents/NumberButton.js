import React from 'react';
import './Button.css';

function NumberButton() {
    return (
        <div className = 'topBottom'>
            <button>clear</button>
            <div className = 'numbers'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <button>0</button>
        </div>
    );
}

export default NumberButton;
