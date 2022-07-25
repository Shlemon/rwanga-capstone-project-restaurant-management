import './Drinks.css';
import { Container, Row, Col } from 'react-bootstrap';
import { DrinksObjects } from '../../../../services/LocalStorage/json-objects/Menu/DrinksObjects';
import { DefaultMenuItemLayout } from '../MenuDesignOne/MenuDesignOne';


export default function Drinks()
{
    const drinkMenu = DrinksObjects();
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {drinkMenu.map(function(menuItem, menuItemIndex)
            {
                return(
                    <DefaultMenuItemLayout item={menuItem} />
                );
            }
            )}
        </Container>
    );
}