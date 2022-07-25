import { LayoutItem } from './LayoutItem';
import './MainNav.css';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LayoutObjects from '../../../../services/LocalStorage/json-objects/Layout/LayoutObjects';


export default function MainNav() {
    const layoutObjects = LayoutObjects();
    return(
        <>
        <Container fluid style={{background: "#fffded"}}>
            <Navbar expand="lg" className='mx-5 gap-5'>
                <Navbar.Brand className="fs-2 fw-bold justify-content-center">Lava Rest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav pills defaultActiveKey="/" className="gap-5 mx-5 justify-content-center" style={{width: "100%"}}>
                        <LayoutItem data={layoutObjects.home} />
                        <LayoutItem data={layoutObjects.main_menu} />
                        <LayoutItem data={layoutObjects.events} />
                        <LayoutItem data={layoutObjects.reserve} />
                        <LayoutItem data={layoutObjects.contact} />
                    </Nav>
                    <LayoutItem data={layoutObjects.login} />
                </Navbar.Collapse>
            </Navbar>
        </Container>
        <Outlet />
        </>
    );
}