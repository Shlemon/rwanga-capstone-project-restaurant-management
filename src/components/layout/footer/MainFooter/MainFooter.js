import './MainFooter.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lava_img from '../../../../assets/main-menu/lava-logo.png';

const NavLinks = () =>
{
    return(
        <>
        <Col lg={4}>
            <Link to='/' id='nav-links'>First</Link>
        </Col>
        <Col lg={4}>
            <Link to='/' id='nav-links'>Second</Link>
        </Col>
        <Col lg={4}>
            <Link to='/' id='nav-links'>Third</Link>
        </Col>
        </>
    );
}

const ContactColumn = (props) =>
{
    return(
        <>
            <Row>
                <Col style={{color: '#0C594D', fontWeight: 'bold', fontSize: '20px'}}>Contact Us</Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>Duhok, Masike,</Col>
                <Col sm={12}>Armenian Church Road,</Col>
                <Col sm={12}>near Mersen Towers</Col>
            </Row>
            <Row className='mt-3'>
                <Col>(+964)750-123-45678</Col>
            </Row>
            <Row className='mt-2'>
                <Col>Links to pages</Col>
            </Row>
        </>
    );
}

const HoursColumn = (props) =>
{
    return(
        <>
            <Row>
                <Col style={{color: '#0C594D', fontWeight: 'bold', fontSize: '20px'}}>Hours</Col>
            </Row>
            <Row className='mt-3'>
                <Col sm={12}>Duhok, Masike,</Col>
                <Col sm={12}>Armenian Church Road,</Col>
                <Col sm={12}>near Mersen Towers</Col>
            </Row>
            <Row className='mt-3'>
                <Col>(+964)750-123-45678</Col>
            </Row>
            <Row className='mt-2'>
                <Col>Links to pages</Col>
            </Row>
        </>
    );
}

const MoreInfoColumn = (props) =>
{
    return(
        <>
            <Row>
                <Col style={{color: '#0C594D', fontWeight: 'bold', fontSize: '20px'}}>More Info</Col>
            </Row>
            <Row className='mt-3 gap-3'>
                <Col sm={12}><Link to='/' id='nav-link-moreinfo'>Catering</Link></Col>
                <Col sm={12}><Link to='reserve' id='nav-link-moreinfo'>Reservations</Link></Col>
                <Col sm={12}><Link to='contact' id='nav-link-moreinfo'>Contact Us</Link></Col>
            </Row>
        </>
    );
}

const ContactInfo = () => 
{
    return(
        <Container className='pb-3'>
            <Row id='contact-info-row' className='mt-5' style={{color: '#8D9F90'}}>
                <Col sm={5} id='lava-logo-control'>
                    <Link to='/'><img src={lava_img} alt='Lava resaurant'/></Link>
                </Col>
                <Col> <ContactColumn /> </Col>
                <Col> <HoursColumn /> </Col>
                <Col> <MoreInfoColumn /> </Col>
            </Row>
            <Row id='contact-info-copyright' className='mt-3'>
                <Col lg={12} id='nav-link-moreinfo'>
                    Copyright © 2020 BUSINESS_NAME. All rights reserved.
                </Col>
            </Row>
        </Container>
    );
}

export default function MainFooter() 
{
    return(
        <Container fluid id='footer-body'>
            <Row className='text-center py-5 fs-1'>
                <NavLinks />
            </Row>
            <Row id='contact-info'>
                <ContactInfo />
            </Row>
        </Container>
    );
}