import './MainFooter.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lava_img from '../../../../assets/main-menu/lava-logo.png';
import { RiInstagramFill, RiSnapchatFill, RiFacebookFill } from 'react-icons/ri';
import React from 'react';

const NavLinks = () =>
{
    return(
        <React.Fragment>
            <Col sm={4} id='footer-3-tabs'>
                <Link to='/' id='nav-links'>Home</Link>
            </Col>
            <Col sm={4} id='footer-3-tabs'>
                <Link to='/mainmenu' id='nav-links'>Menu</Link>
            </Col>
            <Col sm={4} id='footer-3-tabs'>
                <Link to='/contact' id='nav-links'>Contact Us</Link>
            </Col>
        </React.Fragment>
    );
}

const ContactColumn = (props) =>
{
    return(
        <React.Fragment>
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
                <Col className='fs-2'>
                    <RiInstagramFill className='me-3'/>
                    <RiSnapchatFill className='me-3'/>
                    <RiFacebookFill/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

const HoursColumn = (props) =>
{
    return(
        <React.Fragment>
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
        </React.Fragment>
    );
}

const MoreInfoColumn = (props) =>
{
    return(
        <React.Fragment>
            <Row>
                <Col style={{color: '#0C594D', fontWeight: 'bold', fontSize: '20px'}}>More Info</Col>
            </Row>
            <Row className='mt-3 gap-3'>
                <Col sm={12}><Link to='/' id='nav-link-moreinfo'>Catering</Link></Col>
                <Col sm={12}><Link to='contact' id='nav-link-moreinfo'>Contact Us</Link></Col>
            </Row>
        </React.Fragment>
    );
}

const ContactInfo = () => 
{
    return(
        <Container className='pb-3'>
            <Row id='contact-info-row' className='mt-5'>
                <Col sm={6} id='lava-logo-control'>
                    <Link to='/'><img src={lava_img} alt='Lava resaurant'/></Link>
                </Col>
                <Col sm={2} className='mt-5'> <ContactColumn /> </Col>
                <Col sm={2} className='mt-5'> <HoursColumn /> </Col>
                <Col sm={2} className='mt-5'> <MoreInfoColumn /> </Col>
            </Row>
            <Row id='contact-info-copyright' className='mt-5'>
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
            <Row className='text-center fs-1'>
                <NavLinks />
            </Row>
            <Row id='contact-info'>
                <ContactInfo />
            </Row>
        </Container>
    );
}