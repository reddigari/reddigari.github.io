import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Header.css';

function Header(props) {
    return (
        <Row className="Header">
            <Col>
                <h1>{props.title}</h1>
            </Col>
        </Row>
    )
}

export default Header;
