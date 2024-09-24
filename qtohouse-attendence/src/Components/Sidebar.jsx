import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../assets/css/custom-scrollbar.css"; // Custom CSS file for scrollbar

function SidebarMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleToggleSubMenu = (subMenuName) => {
    setOpenSubMenu(openSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <Sidebar className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 px-4 py-6 overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black">
      <div className="flex justify-center items-center my-6">
        <img src={logo} alt="logo" className="w-[100px]" />
      </div>

      <Menu>
        <SubMenu 
          label="Attendance" 
          className="text-gray-700" 
          open={openSubMenu === 'attendance'}
          onOpenChange={() => handleToggleSubMenu('attendance')}
        >
          <MenuItem className="hover:bg-gray-100">
            <Link to="/charts">Charts</Link>
          </MenuItem>
          <MenuItem className="hover:bg-gray-100">
            <Link to="/lists">Lists</Link>
          </MenuItem>
        </SubMenu>

        <SubMenu 
          label="Rules and Regulations" 
          className="text-gray-700" 
          open={openSubMenu === 'rules'}
          onOpenChange={() => handleToggleSubMenu('rules')}
        >
          <SubMenu label="Profile">
            <MenuItem className="hover:bg-gray-100">
              <Link to="/profile">Profile Page</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100">Profile Page Settings</MenuItem>
          </SubMenu>
          <MenuItem className="hover:bg-gray-100">FAQs</MenuItem>
          <MenuItem className="hover:bg-gray-100">Privacy Policy</MenuItem>
          <MenuItem className="hover:bg-gray-100">Terms and Conditions</MenuItem>
        </SubMenu>

        <SubMenu 
          label="Settings" 
          className="text-gray-700" 
          open={openSubMenu === 'settings'}
          onOpenChange={() => handleToggleSubMenu('settings')}
        >
          <SubMenu label="Attendance">
            <MenuItem className="hover:bg-gray-100">
              <Link to="/shifts">Shifts</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100">Salary</MenuItem>
            <MenuItem className="hover:bg-gray-100">
              <Link to="/holidays">Holidays</Link>
            </MenuItem>
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
