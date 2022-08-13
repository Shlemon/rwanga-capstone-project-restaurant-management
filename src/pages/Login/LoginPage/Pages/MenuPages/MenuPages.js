import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function MenuPages()
{
    return(
        <Container className='border border-2 my-5'>
            <h2 className='text-start'>Menus Setting</h2>
            <Form className='text-start'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className='d-flex justify-content-start'>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className='d-flex justify-content-start'>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Button variant="primary my-3">
                    Update Menu
                </Button>
            </Form>
        </Container>
    );
}