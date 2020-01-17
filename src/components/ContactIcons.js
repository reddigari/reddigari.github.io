import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';
import '../styles/ContactIcons.css';


function ContactIcons(props) {
    const items = props.data || [];
    const iconMap = {
        email: Email,
        github: GitHub,
        linkedin: LinkedIn
    }
    const contactLinks = items.map(d => {
        const href = d.kind === "email" ? `mailto:${d.value}` : d.value;
        const Icon = iconMap[d.kind];
        return <a key={d.kind} href={href}><Icon /></a>
    });

    return (
        <div className="ContactIcons">
            { contactLinks }
        </div>
    )
}

export default ContactIcons;
