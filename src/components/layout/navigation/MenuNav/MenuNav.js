import './MenuNav.css';

import { LayoutButton } from "../MainNavbar/LayoutItem";
import MenuObjects from "../../../../services/LocalStorage/json-objects/Layout/MenuObjects";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function MenuNav() 
{
    const menuObjects = MenuObjects();
    return(
        <Container>
            <Navbar className='mx-5'>
                <Nav pills defaultActiveKey='/dinner' className='gap-4 justify-content-center' style={{width: '100%'}}>
                    <LayoutButton data={menuObjects.dinner} id='layout-1'/>
                    <LayoutButton data={menuObjects.lunch} />
                    <LayoutButton data={menuObjects.brunch} />
                    <LayoutButton data={menuObjects.drinks} />
                </Nav>
            </Navbar>
        </Container>
    )
}