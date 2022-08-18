import { Container, Row, Col } from 'react-bootstrap';


export default function Dashboard()
{
    return(
        <Container fluid className='border my-5'>
            <Row className='my-3'>
                <Col lg={6}>
                    Website Title
                </Col>
                <Col lg={6}>
                    Website Name
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    Website Logo
                </Col>
                <Col lg={6}>
                    Website Favicon
                </Col>
            </Row>
        </Container>
    );
}