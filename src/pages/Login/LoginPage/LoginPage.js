import './LoginPage.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Sidebar from '../../../components/layout/sidebar/Sidebar';

function MainRow()
{
    return(
        <React.Fragment>
            <Row className='sticky-top text-white d-flex justify-content-start align-items-center align-content-center' style={{background: '#0264BF'}}>
                <Col lg={12} className='py-2 d-flex justify-content-center fw-bold fs-3'>
                    <Col>
                        <Link to='/' className='mx-5 fs-3' id='arrow-back'><BiArrowBack/></Link>
                    </Col>
                    <Col><div id='panel-title'>Administrator Panel</div></Col>
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default function LoginPage()
{
    return(
        <React.Fragment>
            <MainRow />
            <Row id='main-page-row' className='min-vh-100'>
                <Col xs={2} className='text-center text-white' id='vertical-navbar'>
                    <Sidebar/>
                </Col>
                <Col xs={10} className='text-center' id='body-page'>
                    <Outlet />
                </Col>
            </Row>
        </React.Fragment>
    );
}


