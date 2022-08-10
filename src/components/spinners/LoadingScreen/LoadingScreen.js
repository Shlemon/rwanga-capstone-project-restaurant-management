import './LoadingScreen.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function LoadingSpinner()
{
    return(
        <Container fluid className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <Row className='fs-3 fw-bold'>
                <Col xs={12} className='mb-3 d-flex justify-content-center align-items-center align-content-center'>Loading...</Col>
                <Col xs={12} className='d-flex justify-content-center align-items-center align-content-center'><div className='loader'></div></Col>
            </Row>
        </Container>
    )
}