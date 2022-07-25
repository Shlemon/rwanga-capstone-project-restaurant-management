import Home from '../../../../pages/Home/Home';
import MainMenu from '../../../../pages/Menus/MainMenu';
import Events from '../../../../pages/Events/Events';
import Reserve from '../../../../pages/Reserve/Reserve';
import Contact from '../../../../pages/Contact/Contact';
import NoPage from '../../../../pages/NoPage/NoPage';


const RoutesObject = () => {
    const routes_object = {
        home: Home(),
        main_menu: MainMenu(),
        events: Events(),
        reserve: Reserve(),
        contact: Contact(),
        no_page: NoPage()
    };
    return routes_object;
}
export default RoutesObject;