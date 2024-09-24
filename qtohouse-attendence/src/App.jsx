import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SidebarMenu from "./Components/Sidebar";
import Dashboard from "./pages/dashboard";
// Import other pages when needed
// import Charts from "./pages/charts";
// import Lists from "./pages/lists"; // Example pages
// import ProfilePage from "./pages/profile";
// import Shifts from "./pages/shifts";
// import Holidays from "./pages/holidays";

function App() {
  return (
    <Router>
      <div className="h-full">
        {/* Fixed header */}
        <Header />
        
        {/* Main content container */}
        <div className="flex">
          {/* Fixed sidebar */}
          <div className="w-64 fixed top-0 left-0 h-full z-50">
            <SidebarMenu />
          </div>

          {/* Main content, positioned after the header and sidebar */}
          <div className="flex-grow ml-64 mt-20 p-6 bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/charts" element={<Charts />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/shifts" element={<Shifts />} />
              <Route path="/holidays" element={<Holidays />} /> */}
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
