import React from 'react';
import SectionHeader from './SectionHeader';
import { Col } from 'react-bootstrap';
import Apartment from '@material-ui/icons/Apartment';
import Home from '@material-ui/icons/Home';
import '../styles/Contact.css';


function Contact(props) {
    const items = props.data || [];
    const icons = {
        personal: Home,
        work: Apartment
    }
    return (
        <>
            {
                items.map((d, i) => 
                    <ContactItem key={`contact-${i}`}icon={icons[d.kind]} {...d} />
                )
            }
        </>
    )
}


function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
}


function ContactItem(props) {
    const { kind, icon, email, address } = props;
    return (
        <Col md={12}> 
            <div className="ContactItem">
                <SectionHeader icon={icon} title={capitalize(kind)} />
                <div className="contact-info">
                    <a href={`mailto:${email}`}>{email}</a>  
                    { address ? <hr /> : null }
                    { address ? <Address {...address} /> : null }
                </div>
            </div>
        </Col>
    )
}


function Address(props) {
    return (
        <>
            <b>{props.name}</b><br />
            {props.company}<br />
            {props.streetAddress}<br />
            {props.city}, {props.state} {props.zip}
        </>
    )
}

export default Contact;
