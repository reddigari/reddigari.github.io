import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/Sidebar.css';


function Sidebar(props) {
    return (
        <Col md={2} className="Sidebar d-none d-lg-block">
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
export { Blurb };
