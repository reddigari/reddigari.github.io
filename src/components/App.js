import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import MainMenu from './MainMenu'
import '../styles/App.css';

function App() {
  return (
    <Router>
        <Container className="App">
            <Row className="justify-content-center">
                <Sidebar imagePath="/sidebar-photo.png"
                    blurbText="Developer, neuroscientist, and data-lover." />
                <Col md={6}>
                    <Header title="Samir Reddigari" />
                    <Row className="mt-3">
                        <Switch>
                            <Route path="/" exact component={MainMenu} />
                        </Switch>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Router>
  );
}

export default App;
