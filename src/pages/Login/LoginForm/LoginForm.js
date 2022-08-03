import './LoginForm.css';

import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginForm() 
{
    return(
        <Container fluid className='p-5' style={{backgroundColor: '#FEFDED'}}>
            <Container className='border border-4 py-5' style={{backgroundColor: 'white', width: '50%'}}>
                <h1 className='text-center my-5'>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='w-100'>Username</Form.Label>
                        <Form.Control className='w-100' type="email" placeholder="Enter username"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className='w-100'>Password</Form.Label>
                        <Form.Control className='w-100' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-center'>
                        <Link to={'/dashboard'} style={{width: '100%'}} id='login-button'>
                            Log In
                        </Link>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    );
}