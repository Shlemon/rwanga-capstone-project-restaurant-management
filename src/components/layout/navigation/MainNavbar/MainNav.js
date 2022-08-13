import { LayoutItem, LoginButton } from './LayoutItem';
import './MainNav.css';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import MainFooter from '../../footer/MainFooter/MainFooter';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux-store/slices/authenticationSlice';
import React from 'react';

export default function MainNav() {
    const layoutObjects = useSelector((state) => state.mainPages.routes);
    const isAuth = useSelector((state) => state.authentication.isAuthenticated);
    return(
        <React.Fragment>
            <Container fluid style={{background: "#fffded"}} id='parent-container'>
                <Navbar expand="sm" className='justify-content-start text-center align-items-center align-content-center'>
                    <Navbar.Brand className="fs-2 fw-bold">Lava Rest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav pills defaultActiveKey="/" className="gap-5 justify-content-center align-items-center" id='dropdown-nav-break' style={{width: "100%"}}>
                            <LayoutItem data={layoutObjects.home} />
                            <LayoutItem data={layoutObjects.main_menu} />
                            <LayoutItem data={layoutObjects.contact} />
                            <LoginButton data={layoutObjects.login} />
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        {isAuth ? <ShowSignedIn /> : ''}
                    </Form>
                </Navbar>
            </Container>
            <Outlet />
            <MainFooter />
        </React.Fragment>
    );
}


function ShowSignedIn()
{
    const dispatch = useDispatch();
    const logoutButton = () => {
        const dialog = window.confirm("Are you sure you want to log out?");
        if (dialog) {
            console.log('Logging out...')
            dispatch(logout());
            window.alert('Logged out.');
        }
        else {
            console.log('Logout Canceled.')
        }
    }
    return(
        <div onClick={logoutButton} id='logout-btn'>
            Log Out
        </div>
    );
}