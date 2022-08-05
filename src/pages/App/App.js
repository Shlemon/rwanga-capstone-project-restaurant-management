import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import MainNav from '../../components/layout/navigation/MainNavbar/MainNav';
import MainFooter from '../../components/layout/footer/MainFooter/MainFooter';
import LoginPage from '../../pages/Login/LoginPage/LoginPage';

import { MenuDesignOne } from '../Menus/Default/MenuDesignOne/MenuDesignOne';
import { PagesObject } from '../Menus/Default/MenuDesignOne/MenuPagesData/MenuPagesData';
import { RoutesObject } from '../../components/routing/Routes/DefaultRoutes';

import { db } from '../../Firebase/firestore-cloud';
import { doc, collection, onSnapshot } from 'firebase/firestore';

function App() {
  const [mainRoutes, setMainRoutes] = useState({});
  const mainRouteRef = collection(db, 'pages', 'main-pages', 'first');
  
  useEffect(() => {
    const unsub = onSnapshot(mainRouteRef, (doc) => {
      doc.forEach(
        item => {
          //console.log(item.id);
          //console.log(item.data());
          setMainRoutes(oldDict => ({...oldDict, [item.id]: item.data()}));
        }
      )
    },
    (error) => {
      console.log(`Error encountered ${error}`);
    });
    return () => unsub();
  }, []);

  const routes = RoutesObject();
  const pages = PagesObject();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainNav />} >
          <Route index element={routes.home} />
          <Route path='/mainmenu' element={routes.main_menu} >
            <Route index element={<MenuDesignOne menuType={pages[0].pageContent} />} />
            {pages.map(function(page, pageIndex){
              return <Route path={page.pageName} element={<MenuDesignOne menuType={page.pageContent} />} />;
            })}
          </Route>
          <Route path='/contact' element={routes.contact} />
          <Route path='/login' element={routes.login} />
          <Route path='/dashboard' element={LoginPage()} />
          <Route path='*' element={routes.no_page} />
        </Route>
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
