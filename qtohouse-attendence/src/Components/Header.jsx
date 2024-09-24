import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Badge, Menu, MenuItem, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Light/Dark mode icon
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import dayjs from 'dayjs'; // For handling time formatting

function Header({ toggleSidebar, isSidebarOpen }) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for dropdown
  const [checkInTime, setCheckInTime] = useState(null); // Store check-in time
  const [totalTime, setTotalTime] = useState(0); // Store total time since check-in

  // Toggle check-in status
  const handleCheckIn = () => {
    if (!isCheckedIn) {
      const currentTime = dayjs();
      setCheckInTime(currentTime);
    } else {
      setCheckInTime(null);
      setTotalTime(0);
    }
    setIsCheckedIn(!isCheckedIn);
  };

  // Calculate time difference since check-in
  useEffect(() => {
    if (isCheckedIn && checkInTime) {
      const interval = setInterval(() => {
        const currentTime = dayjs();
        const diff = currentTime.diff(checkInTime, 'second');
        setTotalTime(diff);
      }, 1000);
      return () => clearInterval(interval); // Clean up on unmount or stop checking
    }
  }, [isCheckedIn, checkInTime]);

  // Convert totalTime from seconds to hours, minutes, and seconds
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  // Toggle light/dark mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Open dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] h-20 z-50 bg-white dark:bg-gray-800 px-4 shadow transition-colors duration-300">
      <div className="flex justify-between items-center h-full">
        {/* Left Side: Menu Logo and Search */}
        <div className="flex items-center gap-4">
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
            <SearchIcon />
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              sx={{ ml: 1 }}
              className="dark:text-gray-200"
            />
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Check In Dropdown */}
          <div>
            <IconButton
              onClick={handleClick}
              color={isCheckedIn ? 'success' : 'error'}
            >
              <CheckCircleIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div className="p-4" style={{ width: '250px' }}>
                <Typography variant="h6">Today Record</Typography>
                <Typography
                  variant="body2"
                  color={isCheckedIn ? 'green' : 'red'}
                >
                  {isCheckedIn ? `Check-in Time: ${checkInTime.format('YYYY-MM-DD HH:mm:ss')}` : 'Currently Checked Out'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {isCheckedIn ? formatTime(totalTime) : '0 hours 0 minutes 0 seconds'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Since: {isCheckedIn ? checkInTime.format('YYYY-MM-DD HH:mm:ss') : 'N/A'}
                </Typography>
                <Button
                  onClick={() => {
                    handleCheckIn();
                    handleClose();
                  }}
                  variant="contained"
                  color={isCheckedIn ? 'error' : 'success'}
                  fullWidth
                  className="mt-4"
                >
                  {isCheckedIn ? 'Check Out' : 'Check In'}
                </Button>
              </div>
            </Menu>
          </div>

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
