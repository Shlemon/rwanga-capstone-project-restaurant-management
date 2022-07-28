import './Drinks.css';
import { DrinksObjects } from '../../../../services/LocalStorage/json-objects/Menu/DrinksObjects';
import { MenuDesignOne } from '../MenuDesignOne/MenuDesignOne';


export default function Drinks()
{
    const drinkMenu = DrinksObjects();
    return(
        <MenuDesignOne currentMenu={drinkMenu} />
    );
}