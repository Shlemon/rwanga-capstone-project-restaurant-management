import Dinner from '../../../../pages/Menus/Default/Dinner/Dinner';
import Lunch from '../../../../pages/Menus/Default/Lunch/Lunch';
import Brunch from '../../../../pages/Menus/Default/Brunch/Brunch';
import Drinks from '../../../../pages/Menus/Default/Drinks/Drinks';


const MenuRoutes = () => {
    return {
        dinner: Dinner(),
        lunch: Lunch(),
        brunch: Brunch(),
        drinks: Drinks()
    }
}

export default MenuRoutes;