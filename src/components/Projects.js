import React from 'react';
import { Col } from 'react-bootstrap';
import GitHub from '@material-ui/icons/GitHub';
import SectionHeader from './SectionHeader';
import '../styles/Projects.css';


function Projects(props) {
    const items = props.data || [];
    return (
        <>
            {
                items.map((d, i) => 
                    <ProjectItem key={`project-${i}`} {...d} />
                )
            }
        </>
    )
}


function ProjectItem(props) {
    const { title, link, description, github } = props;
    return (
        <Col md={12}> 
            <div className="ProjectItem">
                <a href={link}>
                <SectionHeader title={title} />
                    </a>
                <div className="project-info">
                    {description}
                    { github ?
                        <span> <a href={github}>[ <GitHub style={{fontSize: "1rem"}}/> Code ]</a></span> : null
                    }
                </div>
            </div>
        </Col>
    )
}


export default Projects;
