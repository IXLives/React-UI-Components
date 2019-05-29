import React from 'react';

import {ReactComponent as Comment} from './comment.svg';
import {ReactComponent as Retweet} from './retweet.svg';
import {ReactComponent as Like} from './like.svg';
import {ReactComponent as Mail} from './mail.svg';

import './Footer.css';

function Footer() {
    return (
        <div className = 'footer'>
            <Comment />
            <Retweet />
            <Like />
            <Mail />
        </div>
    );
}

export default Footer;