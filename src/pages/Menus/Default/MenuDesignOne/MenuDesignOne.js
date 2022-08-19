import './MenuDesignOne.css';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import React from 'react';


function ItemModal({values, ...props})
{
    return(
        <Modal {...props} size='lg' aria-labeledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton/>
            <Modal.Body>
                <Row>
                    <Col xs={6}>
                        <img src={values.item.image} className='img-fluid rounded-start' alt='menuImg' id='item-img' style={{height: '100%'}}/>
                    </Col>
                    <Col xs={6}>
                        <Col xs={12} className='mb-1' id='card-title' style={{fontSize: '25px'}}>{values.item.name}</Col>
                        <Col xs={12} id='card-text' style={{fontSize: '18px'}}>{values.item.ingredients}</Col>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer id='card-title'>{values.item.price} IQD</Modal.Footer>
        </Modal>
    );
}

function ItemAdd(props)
{
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <React.Fragment>
            <Col sm={6} className='mb-5' onClick={() => setModalShow(true)} id='item-click'>
                <Card className='text-start' id='card-root'>
                    <Row>
                        <Col sm={4}><img src={props.item.image} className='img-fluid rounded-start' alt='menuImg' id='item-img'/></Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Col sm={12} id='card-title'>{props.item.name}</Col>
                                <Col sm={12} id='card-text'>{props.item.ingredients}</Col>
                                {/* <Card.Title id='card-title'>{props.item.name}</Card.Title>
                                <Card.Text id='card-text'>{props.item.ingredients}.</Card.Text> */}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <ItemModal values={props} show={modalShow} onHide={() => setModalShow(false)}/>
        </React.Fragment>
    );
}

function DefaultMenuItemLayout(props)
{
    return(
        <Row className='text-center' id='main-items-container'>
            <Row><Col className='fs-1 mb-4 mt-5' style={{color: '#95BDB2'}}>{props.item.name}</Col></Row>
            <Row className='mt-5'>
                {props.item.items.map(
                    (nextItem, nextItemIndex) => {
                        return <ItemAdd key={nextItemIndex} item={nextItem}/>
                    })}
            </Row>
        </Row>
    )
}

export function MenuDesignOne(props) 
{
    const currentMenu = props.menuType;
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {currentMenu.map(
                (menuItem, menuItemIndex) => {
                    return <DefaultMenuItemLayout key={menuItemIndex} item={menuItem}/>
                })}
        </Container>
    );
}