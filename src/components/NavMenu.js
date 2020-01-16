import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/NavMenu.css';


function NavMenu(props) {
    return (
        <Row className="NavMenu">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/research">Research</NavLink>
                <NavLink exact to="/projects">Projects</NavLink>
                <a href="https://s3.amazonaws.com/reddigari.github.io/Reddigari_CV.pdf">Resume</a>
                <NavLink exact to="/contact">Contact</NavLink>
        </Row>
    )
}


export default NavMenu;
