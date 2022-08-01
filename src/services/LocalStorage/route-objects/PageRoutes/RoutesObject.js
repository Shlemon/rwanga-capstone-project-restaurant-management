import Home from '../../../../pages/Home/Home';
import MainMenu from '../../../../pages/Menus/MainMenu';
import Contact from '../../../../pages/Contact/Contact';
import NoPage from '../../../../pages/NoPage/NoPage';
import LoginForm from '../../../../views/Login/LoginForm/LoginForm';

const RoutesObject = () => {
    const routes_object = {
        home: Home(),
        main_menu: MainMenu(),
        contact: Contact(),
        login: LoginForm(),
        no_page: NoPage()
    };
    return routes_object;
}
export default RoutesObject;