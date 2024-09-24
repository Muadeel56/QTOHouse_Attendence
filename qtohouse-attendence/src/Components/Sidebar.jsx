import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { EventAvailable as AttendanceIcon, Gavel as RuleIcon, Settings as SettingsIcon, AccountCircle as ProfileIcon, Help as FAQIcon, Lock as PrivacyIcon, Description as TermsIcon, Assignment as ProjectIcon } from '@mui/icons-material'; // Import icons
import logo from "../assets/images/logo.svg";
import "../assets/css/custom-scrollbar.css"; // Custom CSS file for scrollbar

function SidebarMenu({ isSidebarOpen }) {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleToggleSubMenu = (subMenuName) => {
    setOpenSubMenu(openSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <Sidebar
      className={`fixed top-0 left-0 h-full bg-white shadow-md z-50 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} overflow-hidden`}
    >
      {/* Logo */}
      <div className="flex justify-center items-center my-6">
        <img src={logo} alt="logo" className={`transition-all duration-300 ${isSidebarOpen ? 'w-[100px]' : 'w-10'}`} />
      </div>

      {/* Menu */}
      <Menu>
        {/* Attendance SubMenu */}
        <SubMenu
          label={isSidebarOpen ? "Attendance" : <AttendanceIcon />}
          className="text-gray-700"
          open={openSubMenu === "attendance"}
          onOpenChange={() => handleToggleSubMenu("attendance")}
          icon={<AttendanceIcon />}
        >
          <MenuItem icon={<AttendanceIcon />} className="hover:bg-gray-100">
            <Link to="/charts">Charts</Link>
          </MenuItem>
          <MenuItem icon={<AttendanceIcon />} className="hover:bg-gray-100">
            <Link to="/lists">Lists</Link>
          </MenuItem>
        </SubMenu>

        {/* Rules and Regulations SubMenu */}
        <SubMenu
          label={isSidebarOpen ? "Rules and Regulations" : <RuleIcon />}
          className="text-gray-700"
          open={openSubMenu === "rules"}
          onOpenChange={() => handleToggleSubMenu("rules")}
          icon={<RuleIcon />}
        >
          <SubMenu label={isSidebarOpen ? "Profile" : <ProfileIcon />} icon={<ProfileIcon />}>
            <MenuItem icon={<ProfileIcon />} className="hover:bg-gray-100">
              <Link to="/profile">Profile Page</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100">Profile Page Settings</MenuItem>
          </SubMenu>
          <MenuItem icon={<FAQIcon />} className="hover:bg-gray-100">
            FAQs
          </MenuItem>
          <MenuItem icon={<PrivacyIcon />} className="hover:bg-gray-100">
            Privacy Policy
          </MenuItem>
          <MenuItem icon={<TermsIcon />} className="hover:bg-gray-100">
            Terms and Conditions
          </MenuItem>
        </SubMenu>

        {/* Settings SubMenu */}
        <SubMenu
          label={isSidebarOpen ? "Settings" : <SettingsIcon />}
          className="text-gray-700"
          open={openSubMenu === "settings"}
          onOpenChange={() => handleToggleSubMenu("settings")}
          icon={<SettingsIcon />}
        >
          <SubMenu label={isSidebarOpen ? "Attendance" : <AttendanceIcon />} icon={<AttendanceIcon />}>
            <MenuItem icon={<AttendanceIcon />} className="hover:bg-gray-100">
              <Link to="/shifts">Shifts</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100">Salary</MenuItem>
            <MenuItem icon={<AttendanceIcon />} className="hover:bg-gray-100">
              <Link to="/holidays">Holidays</Link>
            </MenuItem>
            <MenuItem className="hover:bg-gray-100">Overtime</MenuItem>
            <MenuItem className="hover:bg-gray-100">Profile Settings</MenuItem>
          </SubMenu>
          <MenuItem icon={<ProjectIcon />} className="hover:bg-gray-100">Project</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
