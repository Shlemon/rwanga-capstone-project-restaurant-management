import { Container, Row, Col } from 'react-bootstrap';


function ItemAdd(props)
{
    return(
        <>
        <Col lg={6} className='mb-3'>
            <h6 className='fs-5 fw-bold'>{props.item.name}</h6>
            <h6 id='item-description'>{props.item.ingredients}</h6>
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
                        <ItemAdd item={nextItem} />
                    );
                }
                )}
            </Row>
        </Container>
    )
}

export function MenuDesignOne(props) 
{
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {
                props.currentMenu.map(function(menuItem, menuItemIndex)
                {
                    return <DefaultMenuItemLayout item={menuItem} />
                }
                )
            }
        </Container>
    );
}