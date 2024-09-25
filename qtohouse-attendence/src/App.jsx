import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SidebarMenu from "./Components/Sidebar";
import Dashboard from "./pages/dashboard"; // This is the attendance list

function App() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  // Toggle the sidebar between minimized and expanded
  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <Router>
      <div className="h-full">
        {/* Fixed header */}
        <Header toggleSidebar={toggleSidebar} isSidebarMinimized={isSidebarMinimized} />
        
        {/* Main content container */}
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300 ${
              isSidebarMinimized ? 'w-20' : 'w-64'
            }`}
          >
            <SidebarMenu isSidebarMinimized={isSidebarMinimized} />
          </div>

          {/* Main content, positioned after the header and sidebar */}
          <div
            className={`flex-grow transition-all duration-300 ${
              isSidebarMinimized ? 'ml-20' : 'ml-64'
            } mt-20 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen`}
          >
            <Routes>
              {/* Default route */}
              <Route path="/" element={<Dashboard />} />
              
              {/* Add route for the attendance list */}
              <Route path="/lists" element={<Dashboard />} /> {/* "Lists" will display the attendance dashboard */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
