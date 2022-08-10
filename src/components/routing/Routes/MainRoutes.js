import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNav from '../../../components/layout/navigation/MainNavbar/MainNav';
import MainFooter from '../../../components/layout/footer/MainFooter/MainFooter';
import { MenuDesignOne } from '../../../pages/Menus/Default/MenuDesignOne/MenuDesignOne';
import { RoutesObject } from "./DefaultRoutes";

import { useSelector } from 'react-redux';

export default function MainRouter()
{
    const pageData = useSelector((state) => state.menuPages);

    const pages = pageData.pages;
    const routes = RoutesObject();

    return (
        <>
            <Routes>
                <Route path='/' element={<MainNav />} >
                <Route index element={routes.home} />
                <Route path='/mainmenu' element={routes.main_menu} >
                    <Route index element={<MenuDesignOne menuType={pages[0].pageContent} />} />
                        {pages.map(function(page, pageIndex){
                            return <Route key={pageIndex} path={page.pageName} element={<MenuDesignOne menuType={page.pageContent} />} />;
                        })}
                    </Route>
                <Route path='/contact' element={routes.contact} />
                <Route path='/login' element={routes.login} />
                <Route path='/dashboard' element={routes.dashboard} />
                <Route path='*' element={routes.no_page} />
                </Route>
            </Routes>
            <MainFooter /> 
        </>
    );
}