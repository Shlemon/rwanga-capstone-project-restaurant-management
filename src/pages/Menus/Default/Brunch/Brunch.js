import { BrunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/BrunchObjects';
import { DefaultMenuItemLayout } from "../MenuDesignOne/MenuDesignOne"; 

import { Container } from 'react-bootstrap';


export default function Brunch()
{
    const brunchMenu = BrunchObjects();
    return(
        <Container fluid style={{backgroundColor: '#FEFDED', color: '#0C594D', fontWeight: 'bold'}}>
            {brunchMenu.map(function(menuItem, menuItemIndex)
            {
                return(
                    <DefaultMenuItemLayout item={menuItem} />
                );
            }
            )}
        </Container>
    );
}