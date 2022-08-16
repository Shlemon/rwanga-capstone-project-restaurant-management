import React from "react";
import { Routes, Route } from "react-router-dom";

import MainNav from '../../../components/layout/navigation/MainNavbar/MainNav';
import { MenuDesignOne } from '../../../pages/Menus/Default/MenuDesignOne/MenuDesignOne';
import { RoutesObject } from "./DefaultRoutes";

import { useSelector } from 'react-redux';


import Dashboard from '../../../pages/Login/LoginPage/Pages/Dashboard/Dashboard';
import MenuPages from '../../../pages/Login/LoginPage/Pages/MenuPages/MenuPages';

export default function MainRouter()
{
    const pageData = useSelector((state) => state.menuPages);
    const pages = pageData.pages;
    const routes = RoutesObject();

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<MainNav />} >
                    <Route index element={routes.home} />
                    <Route path='/mainmenu' element={routes.main_menu} >
                        <Route index element={<MenuDesignOne menuType={pages.Sides.pageContent} />} />
                        {Object.entries(pages).map(function(page, pageIndex){
                            page = page[1];
                            return <Route key={pageIndex} path={page.pageName} element={<MenuDesignOne menuType={page.pageContent} />} />;
                        })}
                        </Route>
                    <Route path='/contact' element={routes.contact} />
                    <Route path='/login' element={routes.login} />
                    <Route path='*' element={routes.no_page} />
                </Route>             
                <Route path='/dashboard' element={routes.dashboard} >
                    <Route index element={<MenuPages/>} />
                    <Route path='home/add' element={<Dashboard />} />
                    <Route path='home/edit' element={<Dashboard />} />
                    <Route path='menu_pages/add' element={<MenuPages />} />
                    <Route path='menu_pages/edit' element={routes.menu_edit} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}