import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import SidebarMenu from './Components/Sidebar';
import Dashboard from './pages/dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="h-full">
        {/* Fixed header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        {/* Main content container */}
        <div className="flex">
          {/* Sidebar */}
          <SidebarMenu isSidebarOpen={isSidebarOpen} />

          {/* Main content, positioned after the header and sidebar */}
          <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} mt-20 p-6 bg-gray-100 min-h-screen`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
