import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { FaHome } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { RiListSettingsLine, RiListSettingsFill } from 'react-icons/ri';
import { MdOutlineFastfood, MdAdd, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Link } from 'react-router-dom';

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <React.Fragment>
      <div id="header" style={{height: '100%'}}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="mt-4">
          <div className="logotext text-center">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? (<RiListSettingsLine />) : (<RiListSettingsFill />)}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <SubMenu title='Home' icon={<FaHome/>}>
                  <MenuItem icon={<MdAdd/>}>Add Story<Link to='home/add'/></MenuItem>
                  <MenuItem icon={<MdEdit/>}>Edit Story<Link to='home/edit'/></MenuItem>
                  <MenuItem icon={<MdDeleteForever/>}>Delete Story<Link to='home/delete'/></MenuItem>
              </SubMenu>
              <SubMenu title='Menu Pages' icon={<MdOutlineFastfood />}>
                  <MenuItem icon={<MdAdd/>}>Add Menu Page<Link to='menu_pages/add'/></MenuItem>
                  <MenuItem icon={<MdEdit/>}>Edit Menu Page<Link to='menu_pages/edit'/></MenuItem>
                  <MenuItem icon={<MdDeleteForever/>}>Delete Menu Page<Link to='menu_pages/delete'/></MenuItem>
              </SubMenu>
            <MenuItem icon={<BiCog/>}>Settings<Link to='menu_pages/settings'/></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter style={{border: 'none', height: '100%'}}>
            <div className="closemenu mb-5" onClick={menuIconClick} style={{height: '100%'}}>
                    {/* changing menu collapse icon on click */}
                {menuCollapse ? (<FiArrowRightCircle/>) : (<FiArrowLeftCircle/>)}
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;