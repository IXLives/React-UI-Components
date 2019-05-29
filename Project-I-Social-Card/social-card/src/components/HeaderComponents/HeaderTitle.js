import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className = 'headerTitle'>
            <h2>Lambda School</h2>
            <h3>@LambdaSchool</h3>
            <time dateTime='1-26'>26 Jan</time>
        </div>
    );
}

export default HeaderTitle;
