import { LunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/LunchObjects';
import { DefaultMenuItemLayout } from "../MenuDesignOne/MenuDesignOne"; 

import { Container } from 'react-bootstrap';


export default function Lunch() 
{
    const lunchMenu = LunchObjects();
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {lunchMenu.map(function(menuItem, menuItemIndex)
            {
                return(
                    <DefaultMenuItemLayout item={menuItem} />
                );
            }
            )}
        </Container>
    );
}