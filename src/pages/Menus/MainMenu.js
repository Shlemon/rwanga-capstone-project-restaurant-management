import './MainMenu.css';

import MenuNav from '../../components/layout/navigation/MenuNav/MenuNav';

import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainMenu = () => 
{
    return(
        <>
        <Container fluid id='mainmenu-body'>
            <Row>
                <h1 id='menu-img'>Menus</h1>
            </Row>
            <Row className='mt-4'>
                <Col id='menu-selection-section'>
                    <MenuNav />
                </Col>
            </Row>
        </Container>
        <Outlet />
        </>
    );
};

export default MainMenu;