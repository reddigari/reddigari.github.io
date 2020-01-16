import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu';
import '../styles/Header.css';

function Header(props) {
    const { location } = props;
    return (
        <Row className="Header">
            <Col md={12}>
                <h1>{props.title}</h1>
            </Col>
            <Col md={12}>
                {location.pathname !== "/" ? <NavMenu /> : null}
            </Col>
        </Row>
    )
}

export default withRouter(Header);
