import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 
import { DinnerObjects } from '../../../../services/LocalStorage/json-objects/Menu/DinnerObjects';

export default function Dinner()
{
    return(
        <MenuDesignOne menuType={DinnerObjects()} />
    );
}