import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import logo from "../assets/images/logo.svg";

function SidebarMenu() {
  return (
    <Sidebar className="fixed top-0 left-0 w-64 h-full bg--700 text- z-40 px-4 py-6">
      <div className="flex justify-center items-center my-6 ">
        <img src={logo} alt="logo" className="w-[100px]" />
      </div>

      <Menu>
        <SubMenu label="Attendance">
          <MenuItem>Charts</MenuItem>
          <MenuItem>Lists</MenuItem>
        </SubMenu>
        <SubMenu label="Rules and Regulations">
          <SubMenu label="Profile">
            <MenuItem>Profile Page</MenuItem>
            <MenuItem>Profile Page Settings</MenuItem>
          </SubMenu>
          <MenuItem>FAQs</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Terms and Conditions</MenuItem>
        </SubMenu>
        <SubMenu label="Settings">
          <SubMenu label="Attendance">
            <MenuItem>Shifts</MenuItem>
            <MenuItem>Salary</MenuItem>
            <MenuItem>Holidays</MenuItem>
            <MenuItem>Overtime</MenuItem>
            <MenuItem>Profile Settings</MenuItem>
          </SubMenu>
          <MenuItem>Project</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
