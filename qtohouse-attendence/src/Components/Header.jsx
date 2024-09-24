import React from 'react';
import { TextField } from '@mui/material';

function Header() {
  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] h-20 z-50 bg-white px-4 shadow">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-4">
          <p>Menu Logo</p>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
        <div className="flex items-center gap-4">
          <button>Check In</button>
          <button>Light Dark Mode</button>
          <button>Notifications</button>
          <button>Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
