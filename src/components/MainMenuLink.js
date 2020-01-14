import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/MainMenuLink.css';


function MainMenuLink(props) {


    const linkStyle = {
        borderLeft: `15px solid ${props.color}`
    }

    return (
        <Col md={6}>
            <a className="MainMenuLink" href={props.path} 
                style={linkStyle}>
                {props.text}
            </a>
        </Col>
    )
}

export default MainMenuLink;
