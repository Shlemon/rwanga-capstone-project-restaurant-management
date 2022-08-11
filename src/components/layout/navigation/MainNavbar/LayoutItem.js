import './LayoutItem.css';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux-store/slices/authenticationSlice';

export function LayoutItem(props) {
    return(
        <Nav.Item>
            <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventKey} className='fs-5 fw-bold' id='layout-link-link'>
                {props.data.title}
            </Nav.Link>
        </Nav.Item>
    );
}

export function LayoutButton(props)
{
    return(
        <Nav.Item id='layout-button'>
                <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventKey} className='fw-bold' id='layout-button-link'>
                    {props.data.title}
                </Nav.Link>
        </Nav.Item>
    );
}

export function LoginButton(props){
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

    console.log('Auth ', isAuthenticated);
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

    if(!isAuthenticated) {
        return(
            <Nav.Item id='layout-button'>
                    <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventKey} className='fs-5 fw-bold' id='layout-link-link'>
                        Login
                    </Nav.Link>
            </Nav.Item>
        );
    } else {
        return(
            <Nav.Item className='fs-5 fw-bold' id='layout-button' onClick={logoutButton}>
                <Nav.Link className='fw-bold' id='layout-link-link'>
                    Logout
                </Nav.Link>
            </Nav.Item>
        );
    }
}