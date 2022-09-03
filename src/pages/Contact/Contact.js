import './Contact.css';
import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { LocationMap } from '../../components/maps/LocationMap/LocationMap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ContactColumn from '../../components/forms/FormikForms/ContactColumn';

// const HeaderRow = () => 
// {
//     return(
//         <>
//             <Col lg={12} className='mt-5 mb-4 fw-bold' id='h-element-header'><h1>CONTACT US</h1></Col>
//             <Col lg={12}><h5 id='h-element'>Use the form below to send us a message, and we'll get back to you as soon as possible</h5></Col>
//         </>
//     );
// }


// const FillSection = (props) =>
// {
//     return(
//         <Col lg={12} id='h-element'>{props.fill}</Col>
//     );
// }

// function CreateSection(props)
// {
//     return(
//         <>
//             <Row className='mt-4 fw-normal fs-5 text-center' id='h-element'>
//                 {props.section.map(function(sectionFill, sectionIndex)
//                 {
//                     return <FillSection fill={sectionFill} />;
//                 })}
//             </Row>
//         </>
//     );
// }

// function ContactControlPanel(props) 
// {
//     return(
//         <>
//             <Row>
//                 <HeaderRow />
//                 <Row className='mt-4 fw-normal fs-5' id='h-element'>
//                     {/* Add cols here until line_n are over */}
//                     {props.item.map(function(sectionName, sectionIndex)
//                     {
//                         return <CreateSection section={sectionName} />;
//                     }
//                     )}
//                 </Row>
//                 <Row className='mt-5'>
//                     <Col lg={12}><ContactForm /></Col>
//                     <Col lg={12} className='mt-5'><LocationMap /></Col>
//                 </Row>
//             </Row>
//         </>
//     );
// }

const Contact = () => {
    return(
        <Container fluid className='py-5 text-center' id='main-container'>
            <h1 className='mb-5' id='h-element-header'>Contact Us</h1>
            <Container className='text-center' id='h-element-container'>
                <h5 id='h-element' className='mb-4'>Use the form below to send us a message, and we'll get back to you as soon as possible.</h5>
                <h5 id='h-element' className='mb-4'>For assistance with reservations, email us at dummy-account@email.com and a member of our staff will help you find a stable as soon as possible.</h5>
                <h5 id='h-element' className='mb-5'>For general inquiries, you can also reach us by phone at (+964)705-123-45678 or email dummy-account@email.com. Looking forward to hearing from you!</h5>
            </Container>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    messageDescription: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().email().required('Required'),
                    phoneNumber: Yup.string().required('Required'),
                    subject: Yup.string().required('Required'),
                    messageDescription: Yup.string().required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    alert(JSON.stringify(values, null, 2));
                }}>
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            {/* Name */}
                            <ContactColumn cdata={{
                                name: 'name',
                                injection: <Field as='input' name='name' placeholder='Name' id='field-width'/>
                            }}/>

                            {/* Email */}
                            <ContactColumn cdata={{
                                name: 'email',
                                injection: <Field type='email' name='email' placeholder='Email' id='field-width'/>
                            }}/>

                            {/* Phone number */}
                            <ContactColumn cdata={{
                                name: 'phoneNumber',
                                injection: <Field as='input' name='phoneNumber' placeholder='Phone Number' id='field-width'/>
                            }}/>

                            {/* Subject */}
                            <ContactColumn cdata={{
                                name: 'subject',
                                injection: <Field as='select' name='subject' id='field-width'>
                                                <option>What are you getting in touch about?</option>
                                                <option value={'General Inquiry'}>General Inquiry</option>
                                                <option value={'Catering'}>Catering</option>
                                                <option value={'Parties'}>Parties</option>
                                            </Field>
                            }}/>

                            {/* Message description */}
                            <ContactColumn cdata={{
                                name: 'messageDescription',
                                injection: <Field as='textarea' name='messageDescription' placeholder='Your Message' id='field-width' style={{height: '100px'}}/>
                            }}/>
                            <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-1'>Submit</button></Col></Row>
                        </Form>
                    )}
            </Formik>
        </Container>
    );
    // return (
    //     <Container fluid id='main-container'>
    //         <ContactControlPanel item={contactBody}/>
    //     </Container>
    // )
};

export default Contact;