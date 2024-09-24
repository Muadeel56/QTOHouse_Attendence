import Header from "./Components/Header";
import SidebarMenu from "./Components/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="h-full">
      <Header />
      <SidebarMenu />
      
      <div className="main-content ml-64 mt-20 p-6 bg-gray-100 min-h-screen">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
