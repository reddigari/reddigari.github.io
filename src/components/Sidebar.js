import React from 'react';
import { Col } from 'react-bootstrap';
import ContactIcons from './ContactIcons';
import '../styles/Sidebar.css';


function Sidebar(props) {
    return (
        <Col md={2} className="Sidebar d-none d-md-block">
            <img src={props.imagePath} alt="" className="img-fluid" />
            <ContactIcons />
            {props.blurbText ? <Blurb text={props.blurbText} /> : null}
            {props.children}
        </Col>
    )
}


function Blurb(props) {
    return (
        <div className="Blurb">
            {props.text}
        </div>
    )
}

export default Sidebar;
