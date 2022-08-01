import './MenuNav.css';

import { LayoutButton } from "../MainNavbar/LayoutItem";
import MenuObjects from "../../../../services/LocalStorage/json-objects/Layout/MenuObjects";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";

export default function MenuNav() 
{
    const menuObjects = MenuObjects();
    return(
        <Container fluid>
            <Navbar className='align-items-center align-content-center justify-content-center'>
                <Nav pills defaultActiveKey='dinner' className='my-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>
                    <Row className='d-flex justify-content-center align-items-center align-content-center'>
                        <Col md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects.dinner} id='layout-1'/></Col>
                        <Col md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects.lunch} /></Col>
                        <Col md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects.brunch} /></Col>
                        <Col md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects.drinks} /></Col>
                    </Row>
                </Nav>
            </Navbar>
        </Container>
    )
}