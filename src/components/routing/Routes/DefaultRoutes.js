import Home from '../../../pages/Home/Home';
import MainMenu from '../../../pages/Menus/MainMenu';
import Contact from '../../../pages/Contact/Contact';
import NoPage from '../../../pages/NoPage/NoPage';
import LoginForm from '../../../pages/Login/LoginForm/LoginForm';
import LoginPage from '../../../pages/Login/LoginPage/LoginPage';

// TBD
// Or maybe leave this here, main navbar pages are static
// and they shouldnt be edited by the admin
// Plus, this object contains code. To upload this to 
// firestore, make sure to create pointers to Pages.
export function RoutesObject() {
    const routes_object = {
        home: Home(),
        main_menu: MainMenu(),
        contact: Contact(),
        login: LoginForm(),
        dashboard: LoginPage(),
        no_page: NoPage()
    };
    return routes_object;
}