import { BrunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/BrunchObjects';
import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 


export default function Brunch()
{
    const brunchMenu = BrunchObjects();
    return(
        <MenuDesignOne currentMenu={brunchMenu} />
    );
}