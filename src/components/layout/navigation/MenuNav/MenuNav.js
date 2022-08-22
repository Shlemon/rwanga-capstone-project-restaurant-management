import './MenuNav.css';
import { LayoutButton } from "../MainNavbar/LayoutItem";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';


export default function MenuNav()
{
    const menuObjects = useSelector((state) => state.menuPages.routes);
    return(
        <Container fluid>
            <Navbar className='align-items-center align-content-center justify-content-center'>
                <Nav pills defaultActiveKey='dinner' className='my-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>
                    <Row className='d-flex justify-content-center align-items-center align-content-center'>
                        {Object.keys(menuObjects).map(
                            (key, keyIndex) => {
                            return <Col key={keyIndex} md={3} className='mb-2 d-flex justify-content-center align-items-center align-content-center'><LayoutButton data={menuObjects[key]}/></Col>
                        })}
                    </Row>
                </Nav>
            </Navbar>
        </Container>
    )
}
