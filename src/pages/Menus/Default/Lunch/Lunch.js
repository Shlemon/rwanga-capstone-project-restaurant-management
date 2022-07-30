import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 
import { LunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/LunchObjects';

export default function Lunch() 
{
    return(
        <MenuDesignOne menuType={LunchObjects()} />
    );
}