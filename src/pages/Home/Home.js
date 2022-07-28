import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutInformationSplit = () => 
{
    return(
        <>
            <Col lg={12}>
                <h6 id='info-id'>Inspired by the Add Inspiration thing Here.</h6>
            </Col>
            <Col lg={12}>
                <h6 id='info-id'>Built on the principle that food tastes better when shared.</h6>
            </Col>
            <Col lg={12}>
                <h6 id='info-id'>For the vibrant community of Area Name.</h6>
            </Col>
        </>
    );
}

const FirstCardCombo = (props) =>
{
    return(
        <>
        <Col lg={6} id='left-img-first'>
            <Link to='/mainmenu' id='menu-as-link'>Menu</Link>
        </Col>
        <Col lg={6} id='right-img-first'>
            <Row className='text-start mx-5 fw-bold'>
                <Col sm={12}>
                    Enjoy our current offering of delicious dishes, made with local ingredients sourced from
                </Col>
                <Col sm={12}>
                    our friends and neighbors.
                </Col>
                <Col sm={12} className='mt-4'>
                    <Link to='/mainmenu' id='link-as-button'>View our Menu</Link>
                </Col>
            </Row>
        </Col>
        </>
    );
}

const SecondCardCombo = (props) => 
{
    return(
        <>
        <Col lg={6} id='right-img-first'>
            <Row className='text-start mx-5 fw-bold'>
                <Col sm={12}>
                    Enjoy our current offering of delicious dishes, made with local ingredients sourced from
                </Col>
                <Col sm={12}>
                    our friends and neighbors.
                </Col>
                <Col sm={12} className='mt-4'>
                    <Link to='/mainmenu' id='link-as-button'>View our Menu</Link>
                </Col>
            </Row>
        </Col>
        <Col lg={6} id='left-img-first'>
            <Link to='/mainmenu' id='menu-as-link'>Menu</Link>
        </Col>
        </>
    );
}

const Home = () => {
    return(
        <>
        <Container fluid id='main-home-page'>
            <Row>
                <h1 id='main-img'>Lava Rest</h1>
            </Row>
            <Row id='information-section' className='my-5'>
                <AboutInformationSplit />
            </Row>
            <Row className='text-center'>
                <FirstCardCombo />
            </Row>
            <Row className='text-center'>
                <SecondCardCombo />
            </Row>
        </Container>
        </>
    );
};

export default Home;