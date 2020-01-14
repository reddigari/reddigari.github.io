import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import MainMenuLink from './MainMenuLink'
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/App.css';

function App() {
  return (
    <Container className="App">
        <Row className="justify-content-center">
            <Sidebar imagePath="/sidebar-photo.png"
                blurbText="Developer, neuroscientist, and data-lover." />
            <Col md={6}>
                <Header title="Samir Reddigari" />
                <Row className="mt-3">
                    <MainMenuLink path="about" text="About Me" color="#880000" />
                    <MainMenuLink path="research" text="Research" color="#008800" />
                    <MainMenuLink path="projects" text="Projects" color="#000088" />
                    <MainMenuLink path="resume" text="Resume" color="#880088" />
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
