import './MenuNav.css';

import { LayoutButton } from "../MainNavbar/LayoutItem";
import MenuObjects from "../../../../services/LocalStorage/json-objects/Layout/MenuObjects";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function MenuNav() 
{
    const menuObjects = MenuObjects();
    return(
        <Container>
            <Navbar expand='md' className='mx-5 align-items-center align-content-center justify-content-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav pills defaultActiveKey='dinner' className='gap-4 my-3 justify-content-center align-items-center' style={{width: '100%'}}>
                        <LayoutButton data={menuObjects.dinner} id='layout-1'/>
                        <LayoutButton data={menuObjects.lunch} />
                        <LayoutButton data={menuObjects.brunch} />
                        <LayoutButton data={menuObjects.drinks} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}