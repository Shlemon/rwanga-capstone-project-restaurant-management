import './MenuDesignOne.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ItemAdd(props)
{
    return(
        <>
        <Col lg={6} className='mb-3'>
            <Card className='text-start' id='card-root'>
                <Row>
                    <Col md={4}><img src={props.item.image} className='img-fluid rounded-start' alt='menuImg' id='item-img'/></Col>
                    <Col md={8}>
                        <Card.Body>
                            <Col md={12} id='card-title'>{props.item.name}</Col>
                            <Col md={12} id='card-text'>{props.item.ingredients}</Col>
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
        <Container className='text-center p-5'>
            <Row><Col className='fs-1 mb-4 mt-5' style={{color: '#95BDB2'}}>{props.item.name}</Col></Row>
            <Row className='mx-5 px-5 mt-5'>
                {props.item.items.map(function(nextItem, nextItemIndex)
                {
                    return(
                        <ItemAdd key={nextItem} item={nextItem} />
                    );
                }
                )}
            </Row>
        </Container>
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
                    return <DefaultMenuItemLayout item={menuItem} />
                }
                )
            }
        </Container>
    );
}