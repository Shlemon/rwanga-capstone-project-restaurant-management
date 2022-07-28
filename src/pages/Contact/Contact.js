import './Contact.css';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { LocationMap } from '../../components/maps/LocationMap/LocationMap';
import { ContactBodyObject } from '../../services/LocalStorage/json-objects/Contact/ContactBodyObject';


const HeaderRow = () => 
{
    return(
        <>
            <Col lg={12} className='mt-5 mb-4 fw-bold' id='h-element-header'><h1>CONTACT US</h1></Col>
            <Col lg={12}><h5 id='h-element'>Use the form below to send us a message, and we'll get back to you</h5></Col>
            <Col lg={12}><h5 id='h-element'>as soon as possible</h5></Col>
        </>
    );
}


const FillSection = (props) =>
{
    return(
        <Col lg={12} id='h-element'>{props.fill}</Col>
    );
}

function CreateSection(props)
{
    return(
        <>
            <Row className='mt-4 fw-normal fs-5 text-center' id='h-element'>
                {props.section.map(function(sectionFill, sectionIndex)
                {
                    return <FillSection fill={sectionFill} />;
                })}
            </Row>
        </>
    );
}

function ContactControlPanel(props) 
{
    return(
        <>
            <Row>
                <HeaderRow />
                <Row className='mt-4 fw-normal fs-5' id='h-element'>
                    {/* Add cols here until line_n are over */}
                    {props.item.map(function(sectionName, sectionIndex)
                    {
                        return <CreateSection section={sectionName} />;
                    }
                    )}
                </Row>
                <Row className='mt-5'>
                    <Col lg={12}><ContactForm /></Col>
                    <Col lg={12} className='mt-5'><LocationMap /></Col>
                </Row>
            </Row>
        </>
    );
}

const Contact = () => {
    const contactBody = ContactBodyObject();
    return (
        <Container fluid id='main-container'>
            <ContactControlPanel item={contactBody}/>
        </Container>
    )
};

export default Contact;