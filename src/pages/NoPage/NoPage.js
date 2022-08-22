import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return(
    <Container className='my-5 d-flex justify-content-center align-items-center align-content-center text-center fs-1 fw-bold'>
        <Row>
            <Col md={12} className='mb-3'>This page isn't available</Col>
            <Col md={12}><Link to='/'>Go To Home Page</Link></Col>
        </Row>
    </Container>
    );
};

export default NoPage;