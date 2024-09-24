import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import logo from '../assets/images/logo.svg'

function SidebarMenu() {
  return (
        <Sidebar collapsedWidth={0}>
            <div className='flex justify-center items-center my-6 '>
                <img src={logo} alt="logo" className='w-[100px] '/>
            </div>
        
      <Menu>
        <SubMenu label="Dashboard">
        <MenuItem>Home</MenuItem>
        <MenuItem>Reviews</MenuItem>
        </SubMenu>
        <MenuItem>Team</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Sidebar>    
  )
}

export default SidebarMenu