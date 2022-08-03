import { LayoutItem } from './LayoutItem';
import './MainNav.css';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LayoutObjects } from '../../../routing/Routes/DefaultRoutes';


export default function MainNav() {
    const layoutObjects = LayoutObjects();
    return(
        <>
        <Container fluid style={{background: "#fffded"}}>
            <Navbar expand="sm" className='justify-content-start text-center align-items-center align-content-center'>
                <Navbar.Brand className="fs-2 fw-bold">Lava Rest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav pills defaultActiveKey="/" className="gap-5 justify-content-center align-items-center" id='dropdown-nav-break' style={{width: "100%"}}>
                        <LayoutItem data={layoutObjects.home} />
                        <LayoutItem data={layoutObjects.main_menu} />
                        <LayoutItem data={layoutObjects.contact} />
                        <LayoutItem data={layoutObjects.login} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        <Outlet />
        </>
    );
}