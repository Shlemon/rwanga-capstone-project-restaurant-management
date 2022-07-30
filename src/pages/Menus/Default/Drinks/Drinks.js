import './Drinks.css';
import { MenuDesignOne } from '../MenuDesignOne/MenuDesignOne';
import { DrinksObjects } from '../../../../services/LocalStorage/json-objects/Menu/DrinksObjects';

export default function Drinks()
{
    return(
        <MenuDesignOne menuType={DrinksObjects()} />
    );
}