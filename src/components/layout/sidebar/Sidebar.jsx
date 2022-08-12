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
import { MdOutlineFastfood, MdAdd, MdEdit } from 'react-icons/md';

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
    <>
      <div id="header">
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
                    <MenuItem icon={<MdAdd />}>Add Story<Link to='home/add'/></MenuItem>
                    <MenuItem icon={<MdEdit />}>Edit Story<Link to='home/edit' /></MenuItem>
                </SubMenu>

                <SubMenu title='Menu Pages' icon={<MdOutlineFastfood />}>
                    <MenuItem icon={<MdAdd />}>Add Menu Page<Link to='menu_pages/add'/></MenuItem>
                    <MenuItem icon={<MdEdit />}>Edit Menu Page<Link to='menu_pages/edit' /></MenuItem>
                </SubMenu>

              <MenuItem icon={<BiCog />}>Settings</MenuItem>

            </Menu>
          </SidebarContent>
          <SidebarFooter style={{border: 'none'}}>
            <div className="closemenu mb-5" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                    <FiArrowRightCircle/>
                ) : (
                    <FiArrowLeftCircle/>
                )}
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;