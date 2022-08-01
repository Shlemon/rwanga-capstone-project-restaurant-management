import './LayoutItem.css';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LayoutItem(props) {
    return(
        <Nav.Item>
            <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventKey} className='fs-5 fw-bold'>
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