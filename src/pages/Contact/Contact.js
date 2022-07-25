import './Contact.css';
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';

const Contact = () => {
    return (
        <Container fluid id='main-container'>
            <Container className='my-5'>
                <Row>
                    <Col lg={12}><h1 className='mt-5 mb-4 fw-bold' id='h-element-header'>CONTACT US</h1></Col>
                    <Col lg={12}><h5 className='fw-normal' id='h-element'>Use the form below to send us a message, and we'll get back to you as soon as possible</h5></Col>
                    <Row className='mt-4 fw-normal fs-5' id='h-element'>
                        <Col lg={12}>
                            For assistance with reservations, email us at shlemon.namrod@yahoo.com and a
                        </Col>
                        <Col lg={12}>
                            member of our staff will help you find a table as soon as possible.
                        </Col>
                    </Row>
                    <Row className='mt-4 fw-normal fs-5' id='h-element'>
                        <Col lg={12}>
                            We would love to host your parties, birthday celebration, family gathering or other
                        </Col>
                        <Col lg={12}>
                            special event in our beautiful space. For parties of 15 guests or more, please email
                        </Col>
                        <Col lg={12}>
                            events@randommail.com for details about booking a private event.
                        </Col>
                    </Row>
                    <Row className='mt-4 fw-normal fs-5' id='h-element'>
                        <Col lg={12}>
                            For general inquiries, you can also reach us by phone at (+964)750-123-45678 or email
                        </Col>
                        <Col lg={12}>
                            info@randomemail.com. Looking forward to hearing from you!
                        </Col>
                    </Row>
                </Row>
                <Row className='my-5 mx-5'>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Contact;