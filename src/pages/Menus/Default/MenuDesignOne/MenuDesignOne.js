import './MenuDesignOne.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ItemAdd(props)
{
    return(
        <>
        <Col sm={6} className='mb-5'>
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
        </>
    );
}

export function DefaultMenuItemLayout(props)
{
    return(
        <Row className='text-center' id='main-items-container'>
            <Row><Col className='fs-1 mb-4 mt-5' style={{color: '#95BDB2'}}>{props.item.name}</Col></Row>
            <Row className='mt-5'>
                {props.item.items.map(function(nextItem, nextItemIndex)
                {
                    return(
                        <ItemAdd key={nextItemIndex} item={nextItem} />
                    );
                }
                )}
            </Row>
        </Row>
    )
}

export function MenuDesignOne(props) 
{
    const currentMenu = props.menuType;
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {
                currentMenu.map(function(menuItem, menuItemIndex)
                {
                    return <DefaultMenuItemLayout key={menuItemIndex} item={menuItem} />
                }
                )
            }
        </Container>
    );
}