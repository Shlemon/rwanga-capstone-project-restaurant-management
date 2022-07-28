import { LunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/LunchObjects';
import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 


export default function Lunch() 
{
    const lunchMenu = LunchObjects();
    return(
        <MenuDesignOne currentMenu={lunchMenu} />
    );
}