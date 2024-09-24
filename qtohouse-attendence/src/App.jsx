import Header from "./Components/Header";
import SidebarMenu from "./Components/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="h-full">
      {/* Fixed header */}
      <Header />

      {/* Main content container */}
      <div className="flex">
        {/* Fixed sidebar */}
        <div className="w-64 fixed top-0 left-0 h-full">
          <SidebarMenu />
        </div>

        {/* Main content, positioned after the header and sidebar */}
        <div className="flex-grow ml-64 mt-20 p-6 bg-gray-100 min-h-screen">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
