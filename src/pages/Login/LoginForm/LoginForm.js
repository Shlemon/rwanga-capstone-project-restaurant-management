import './LoginForm.css';

import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../Firebase/firestore-cloud';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export default function LoginForm()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidState, setInvalid] = useState(false);

    const navigateToDashboard = () => {
        navigate('/dashboard');
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSignIn = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Successful Login! Redirecting...');
            navigateToDashboard();
            }
        )
        .catch((error) => {
            setInvalid(true);
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('Error Code: ', errorCode);
            console.log('Error Message: ', errorMessage);
        })
    }

    return(
        <Container fluid className='p-5' style={{backgroundColor: '#FEFDED'}}>
            <Container className='border border-4 py-5' style={{backgroundColor: 'white', width: '50%'}}>
                <h1 className='text-center my-5'>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='w-100'>Username</Form.Label>
                        <Form.Control className='w-100' type="email" placeholder="Email" onChange={handleEmailChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className='w-100'>Password</Form.Label>
                        <Form.Control className='w-100' type="password" placeholder="Password" onChange={handlePasswordChange}/>
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-center'>
                        <Button onClick={handleSignIn} style={{width: '100%'}} id='login-button'>
                            Log In
                        </Button>
                    </Form.Group>
                    {invalidState === true && <div className='text-danger text-center mt-3'>Invalid Email or Password</div> }
                </Form>
            </Container>
        </Container>
    );
}