import { MenuDesignOne } from "../MenuDesignOne/MenuDesignOne"; 
import { BrunchObjects } from '../../../../services/LocalStorage/json-objects/Menu/BrunchObjects';

export default function Brunch()
{
    return(
        <MenuDesignOne menuType={BrunchObjects()} />
    );
}