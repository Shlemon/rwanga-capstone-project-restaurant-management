import './LayoutItem.css';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

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
    const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

    if(!isAuthenticated) {
        return(
            <Nav.Item>
                <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventKey} className='fs-5 fw-bold' id='layout-link-link'>
                    Settings
                </Nav.Link>
            </Nav.Item>
        );
    } else {
        return(
            <Nav.Item>
                <Nav.Link as={Link} to={'/dashboard'} eventKey={'link-dashboard'} className='fs-5 fw-bold' id='layout-link-link'>
                    Settings
                </Nav.Link>
            </Nav.Item>
        );
    }
}