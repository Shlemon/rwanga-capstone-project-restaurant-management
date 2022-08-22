import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import MainNav from '../../../components/layout/navigation/MainNavbar/MainNav';
import { MenuDesignOne } from '../../../pages/Menus/Default/MenuDesignOne/MenuDesignOne';
import { RoutesObject } from "./DefaultRoutes";


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
                        {Object.entries(pages).map(
                            (page, pageIndex) => {
                                page = page[1];
                                return <Route key={pageIndex} path={page.pageName.replaceAll(" ", "")} element={<MenuDesignOne menuType={page.pageContent} />} />;
                            })}
                        </Route>
                    <Route path='/contact' element={routes.contact} />
                    <Route path='/login' element={routes.login} />
                </Route>             
                <Route path='/dashboard' element={routes.dashboard} >
                    <Route index element={routes.menu_add} />
                    <Route path='home/add' element={routes.stories_add} />
                    <Route path='home/edit' element={routes.stories_edit} />
                    <Route path='menu_pages/add' element={routes.menu_add} />
                    <Route path='menu_pages/edit' element={routes.menu_edit} />
                    <Route path='menu_pages/delete' element={routes.menu_delete} />
                    <Route path='menu_pages/settings' element={routes.menu_settings} />
                </Route>
                <Route path='*' element={routes.no_page} />
            </Routes>
        </React.Fragment>
    );
}