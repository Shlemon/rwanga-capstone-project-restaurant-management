import { Form, Container, Button } from 'react-bootstrap';
import './ContactForm.css';


export function ContactForm()
{
    return(
        <Container>
            <Form className='d-flex justify-content-center'>
                <Form.Group className='w-75' id='main-form'>
                    <Form.Control placeholder='Name' aria-label='Username' className='mb-3'/>
                    <Form.Control placeholder='Email' type='email' className='mb-3'/>
                    <Form.Control placeholder='Phone Number' type='text' className='mb-3'/>
                    <Form.Select aria-label='Default select example'>
                        <option>What are you getting in touch about?</option>
                        <option value='1'>General Inquiry</option>
                        <option value='2'>Press</option>
                        <option value='3'>Catering</option>
                        <option value='4'>Large Parties</option>
                    </Form.Select>
                    <Form.Control placeholder='Your Message' type='text' className='my-3' id='description-form'/>
                    <Button className='w-50 d-flex justify-content-center shadow-none mt-5'>Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    );
}