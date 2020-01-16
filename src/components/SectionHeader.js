import React from 'react';
import '../styles/SectionHeader.css';


function SectionHeader(props) {
    const Icon = props.icon;
    const iconStyle = {
        marginTop: '-8px',
        marginRight: '0.25rem'
    }
    return (
        <div className="SectionHeader">
            { Icon ? <Icon style={iconStyle} /> : null }
            <span className="section-title">{props.title}</span>
        </div>
    )
}

export default SectionHeader;
