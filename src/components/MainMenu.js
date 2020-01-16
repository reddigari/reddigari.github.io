import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/MainMenu.css';


function MainMenu(props) {
    return (
        <Row>
            <MainMenuLink path="about" text="About Me" color="#880000" />
            <MainMenuLink path="research" text="Research" color="#dea033" />
            <MainMenuLink path="projects" text="Projects" color="#008800" />
            <MainMenuLink path="https://s3.amazonaws.com/reddigari.github.io/Reddigari_CV.pdf"
                external text="Resume" color="#000088" />
            <MainMenuLink path="contact" text="Contact" color="#880088" />
        </Row>
    )
}

function MainMenuLink(props) {


    const linkStyle = {
        borderLeft: `15px solid ${props.color}`
    }

    return (
        <Col md={6}>
            {props.external ?
                <a className="MainMenuLink" href={props.path} style={linkStyle}>{props.text}</a>
                :
                <Link className="MainMenuLink" to={props.path}
                    style={linkStyle}>
                    {props.text}
                </Link>
            }
        </Col>
    )
}

export default MainMenu;
