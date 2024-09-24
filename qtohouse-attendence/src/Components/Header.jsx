import React, { useState } from 'react';
import { TextField, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Light/Dark mode icon
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header({ toggleSidebar, isSidebarOpen }) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle check-in status
  const handleCheckIn = () => {
    setIsCheckedIn(!isCheckedIn);
  };

  // Toggle light/dark mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] h-20 z-50 bg-white px-4 shadow">
      <div className="flex justify-between items-center h-full">
        {/* Left Side: Menu Logo and Search */}
        <div className="flex items-center gap-4">
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <SearchIcon />
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              sx={{ ml: 1 }}
            />
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Check In */}
          <IconButton onClick={handleCheckIn} color={isCheckedIn ? 'success' : 'default'}>
            <CheckCircleIcon />
          </IconButton>

          {/* Light/Dark Mode Toggle */}
          <IconButton onClick={handleThemeToggle} color={isDarkMode ? 'warning' : 'default'}>
            <Brightness4Icon />
          </IconButton>

          {/* Notifications with Badge */}
          <IconButton>
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile */}
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
