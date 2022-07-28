import { DinnerObjects } from '../../../../services/LocalStorage/json-objects/Menu/DinnerObjects';
import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 


export default function Dinner()
{
    const dinnerMenu = DinnerObjects();
    return(
        <MenuDesignOne currentMenu={dinnerMenu} />
    );
}