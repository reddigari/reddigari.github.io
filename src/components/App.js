import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MainMenu from './MainMenu';
import AboutMe from './AboutMe';
import Research from './Research';
import Projects from './Projects';
import Contact from './Contact';
import ContactIcons from './ContactIcons';
import Blurb from './Blurb';
import { DATA_URL, PHOTO_URL } from '../constants';
import '../styles/App.css';


class App extends React.Component {

    constructor() {
        super();
        this.state = {data: null};
    }

    componentDidMount() {
        fetch(DATA_URL)
            .then(resp => resp.json().then(d => {
                this.setState({data: d});
            }))
            .catch(err => console.log(err));
    }

    render() {
        const data = this.state.data;

        if (!data) return null;
        return (
            <Router>
                <Container className="App">
                    <Row className="justify-content-center">
                        <Sidebar>
                            <img src={PHOTO_URL} alt="" className="img-fluid" />
                            <ContactIcons data={data.contactData.contactLinks} />
                            <Blurb text="Developer, neuroscientist, and data-lover." />
                        </Sidebar>
                        <Col md={7} className="main">
                            <Header title="Samir Reddigari" />
                            <Row className="mt-3">
                                <Switch>
                                    <Route path="/" exact component={MainMenu} />
                                    <Route path="/about" exact component={AboutMe} />
                                    <Route path="/projects" exact
                                        component={() => <Projects data={data.projectData} />} />
                                    <Route path="/research" exact
                                        component={() => <Research data={data.researchData} />} />
                                    <Route path="/contact" exact
                                        component={() => <Contact data={data.contactData.contactItems} />} />
                                </Switch>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default App;
