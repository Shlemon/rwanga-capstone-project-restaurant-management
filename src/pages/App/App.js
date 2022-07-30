import './App.css';
import React from 'react';
import "../../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from '../../components/layout/navigation/MainNavbar/MainNav';

import RoutesObject from '../../services/LocalStorage/route-objects/PageRoutes/RoutesObject';
import MenuRoutes from '../../services/LocalStorage/route-objects/MenuRoutes/MenuRoutes';
import MainFooter from '../../components/layout/footer/MainFooter/MainFooter';
import LoginPage from '../../views/Login/LoginPage/LoginPage';

function App() {
  const routes = RoutesObject();
  const menuRoutes = MenuRoutes();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainNav />} >
          <Route index element={routes.home} />
          <Route path='/mainmenu' element={routes.main_menu} >
              <Route index element={menuRoutes.dinner} />
              <Route path='dinner' element={menuRoutes.dinner} />
              <Route path='lunch' element={menuRoutes.lunch} />
              <Route path='brunch' element={menuRoutes.brunch} />
              <Route path='drinks' element={menuRoutes.drinks} />
          </Route>
          <Route path='/reserve' element={routes.reserve} />
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
