import './MenuNav.css';

import { LayoutButton } from "../MainNavbar/LayoutItem";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { MenuObjects } from '../../../routing/Routes/DefaultRoutes';

import { GetDefaultMenuPages } from '../../../firestore-ops/MainQueries';

export default function MenuNav() 
{
    //const menuObjects = MenuObjects();
    const [dataObjects, menuObjects] = GetDefaultMenuPages();
    return(
        <Container fluid>
            <Navbar className='align-items-center align-content-center justify-content-center'>
                <Nav pills defaultActiveKey='dinner' className='my-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>
                    <Row className='d-flex justify-content-center align-items-center align-content-center'>
                        {Object.keys(menuObjects).map(function(key, keyIndex) {
                            return <Col key={keyIndex} md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects[key]}/></Col>
                        })}
                    </Row>
                </Nav>
            </Navbar>
        </Container>
    )
}