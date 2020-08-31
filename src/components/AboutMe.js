import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AboutMe(props) {
    return (
        <Col>
            <p>I am the lead software developer at <a href="http://brainspecmed.com">BrainSpec</a> in Boston, MA.
               I recently graduated from the Harvard Extension School with a master's degree (ALM) in software
               engineering, and a graduate certificate in data science.
            </p>

            <p>Hobby projects I've worked on range from a React app for <a href="https://reddigari.github.io/mbta-tracker">
               Boston public transit arrival times</a>, to a <a
               href="https://whatsthatnumber.xyz">serverless digit recognition
               application</a>, to an interactive visualization of
               <a href="https://reddigari.github.io/HopViz"> hop flavor and aroma characteristics</a>.
            </p>

            <p>Formerly I was a researcher in the <a href="http://psych.nyu.edu/pylkkanen/lab/">NYU
               Neurolinguistics Lab</a>,
               where I used magnetoencephalography to address questions about the neural underpinnings of human
               language. My interests are in the brain's representation of thematic relations, the predictive
               mechanisms employed during verb processing, and how linguistic context modulates language
               processing in general. Check out my research <Link to="/research">here</Link>.
            </p>
        </Col>
    )
}

export default AboutMe
