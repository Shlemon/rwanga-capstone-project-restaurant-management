import Home from '../../../pages/Home/Home';
import MainMenu from '../../../pages/Menus/MainMenu';
import Contact from '../../../pages/Contact/Contact';
import NoPage from '../../../pages/NoPage/NoPage';
import LoginForm from '../../../pages/Login/LoginForm/LoginForm';


export function RoutesObject() {
    const routes_object = {
        home: Home(),
        main_menu: MainMenu(),
        contact: Contact(),
        login: LoginForm(),
        no_page: NoPage()
    };
    return routes_object;
}


export function LayoutObjects() {
    return (
    {
        home: {title: 'Home', route: '/', eventkey: '/'},
        main_menu: {title: 'Menus', route: '/mainmenu', eventkey: 'link-main-menu'},
        contact: {title: 'Contact', route: '/contact', eventkey: 'link-contact'},
        login: {title: 'Login', route: '/login' , eventkey: 'link-login'},
    }
    );
}


export function MenuObjects() {
    return(
        {
            dinner: {title: 'Sides', route: 'Sides', eventkey: 'link-dinner'},
            lunch: {title: 'Burgers', route: 'Burgers', eventkey: 'link-lunch'},
            brunch: {title: 'Drinks', route: 'Drinks', eventkey: 'link-brunch'},
            drinks: {title: 'Sandwhiches', route: 'Sandwhiches', eventkey: 'link-drinks'},
        }
    );
}