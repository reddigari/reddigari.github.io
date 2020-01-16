import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';
import '../styles/ContactIcons.css';


function ContactIcons(props) {
    return (
        <div className="ContactIcons">
            <a href="mailto:samirreddigari@gmail.com">
                <Email />
            </a>
            <a href="https://github.com/reddigari">
                <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/samir-reddigari-24ab70b5/">
                <LinkedIn />
            </a>
        </div>
    )
}

export default ContactIcons;
