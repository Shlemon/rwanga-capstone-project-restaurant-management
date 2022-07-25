import { DinnerObjects } from '../../../../services/LocalStorage/json-objects/Menu/DinnerObjects';
import { DefaultMenuItemLayout } from "../MenuDesignOne/MenuDesignOne"; 

import { Container } from 'react-bootstrap';

export default function Dinner()
{
    const dinnerMenu = DinnerObjects();
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {dinnerMenu.map(function(menuItem, menuItemIndex)
            {
                return(
                    <DefaultMenuItemLayout item={menuItem} />
                );
            }
            )}
        </Container>
    );
}