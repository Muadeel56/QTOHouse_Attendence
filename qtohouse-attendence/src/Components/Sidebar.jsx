import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  EventAvailable as AttendanceIcon,
  Gavel as RulesIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material"; // Icons import
import logo from "../assets/images/logo.svg";
import "../assets/css/custom-scrollbar.css"; // Custom CSS file for scrollbar

function SidebarMenu({ isSidebarMinimized }) {
  // State to track which SubMenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Function to handle submenu click and close others
  const handleSubMenuClick = (menuName) => {
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === menuName ? null : menuName));
  };

  return (
    <Sidebar
      collapsed={isSidebarMinimized} // Use the collapsed prop to control sidebar state
      className="fixed top-0 left-0 h-full bg-white dark:bg-black shadow-md z-50 transition-all duration-300"
    >
      {/* Logo section */}
      <div className="flex justify-center items-center my-6 cursor-pointer">
        {!isSidebarMinimized && (
          <img src={logo} alt="logo" className="w-[50px]" />
        )}
      </div>

      <Menu>
        {/* Attendance Parent Menu */}
        <SubMenu
          label="Attendance"
          icon={<AttendanceIcon />}
          className="text-gray-700 dark:text-black"
          open={openSubMenu === "attendance"}
          onOpenChange={() => handleSubMenuClick("attendance")}
        >
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">
            <Link to="/charts">Charts</Link>
          </MenuItem>
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">
            <Link to="/lists">Lists</Link>
          </MenuItem>
        </SubMenu>

        {/* Rules and Regulations Parent Menu */}
        <SubMenu
          label="Rules and Regulations"
          icon={<RulesIcon />}
          className="text-gray-700 dark:text-black"
          open={openSubMenu === "rules"}
          onOpenChange={() => handleSubMenuClick("rules")}
        >
          <SubMenu label="Profile">
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">
              <Link to="/profile">Profile Page</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">
              Profile Page Settings
            </MenuItem>
          </SubMenu>
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">FAQs</MenuItem>
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">Privacy Policy</MenuItem>
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-black">Terms and Conditions</MenuItem>
        </SubMenu>

        {/* Settings Parent Menu */}
        <SubMenu
          label="Settings"
          icon={<SettingsIcon />}
          className="text-gray-700 dark:text-black"
          open={openSubMenu === "settings"}
          onOpenChange={() => handleSubMenuClick("settings")}
        >
          <SubMenu label="Attendance">
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/shifts">Shifts</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">Salary</MenuItem>
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/holidays">Holidays</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">Overtime</MenuItem>
            <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">Profile Settings</MenuItem>
          </SubMenu>
          <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">Project</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
