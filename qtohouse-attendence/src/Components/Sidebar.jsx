import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import logo from "../assets/images/logo.svg";
import "../assets/css/custom-scrollbar.css"; // Custom CSS file for scrollbar

function SidebarMenu() {
  // State to track which submenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Handler to toggle submenus
  const handleToggleSubMenu = (subMenuName) => {
    setOpenSubMenu(openSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <Sidebar className="top-0 left-0 w-64 h-full bg-white shadow-md z-40 px-4 py-6 overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black">
      <div className="flex justify-center items-center my-6">
        <img src={logo} alt="logo" className="w-[100px]" />
      </div>

      <Menu>
        {/* Attendance SubMenu */}
        <SubMenu 
          label="Attendance" 
          className="text-gray-700" 
          open={openSubMenu === 'attendance'}
          onOpenChange={() => handleToggleSubMenu('attendance')}
        >
          <MenuItem className="hover:bg-gray-100">Charts</MenuItem>
          <MenuItem className="hover:bg-gray-100">Lists</MenuItem>
        </SubMenu>

        {/* Rules and Regulations SubMenu */}
        <SubMenu 
          label="Rules and Regulations" 
          className="text-gray-700" 
          open={openSubMenu === 'rules'}
          onOpenChange={() => handleToggleSubMenu('rules')}
        >
          <SubMenu label="Profile">
            <MenuItem className="hover:bg-gray-100">Profile Page</MenuItem>
            <MenuItem className="hover:bg-gray-100">Profile Page Settings</MenuItem>
          </SubMenu>
          <MenuItem className="hover:bg-gray-100">FAQs</MenuItem>
          <MenuItem className="hover:bg-gray-100">Privacy Policy</MenuItem>
          <MenuItem className="hover:bg-gray-100">Terms and Conditions</MenuItem>
        </SubMenu>

        {/* Settings SubMenu */}
        <SubMenu 
          label="Settings" 
          className="text-gray-700" 
          open={openSubMenu === 'settings'}
          onOpenChange={() => handleToggleSubMenu('settings')}
        >
          <SubMenu label="Attendance">
            <MenuItem className="hover:bg-gray-100">Shifts</MenuItem>
            <MenuItem className="hover:bg-gray-100">Salary</MenuItem>
            <MenuItem className="hover:bg-gray-100">Holidays</MenuItem>
            <MenuItem className="hover:bg-gray-100">Overtime</MenuItem>
            <MenuItem className="hover:bg-gray-100">Profile Settings</MenuItem>
          </SubMenu>
          <MenuItem className="hover:bg-gray-100">Project</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
