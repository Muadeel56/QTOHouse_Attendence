import React, { useState } from "react";
import SidebarMenu from "../../Components/Sidebar";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

// Sample employee data for the table
const initialEmployeesData = [
  { id: 1, firstName: "John", lastName: "Doe", age: 29, role: "Civil Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours" , BreakIn: "08:00 pm", BreakOut: "09:00 pm"},
  { id: 2, firstName: "Jane", lastName: "Smith", age: 34, role: "Mechanical Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours" , BreakIn: "08:00 pm", BreakOut: "09:00 pm"},
  { id: 3, firstName: "Michael", lastName: "Johnson", age: 40, role: "Electrical Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours" , BreakIn: "08:00 pm", BreakOut: "09:00 pm"},
  { id: 4, firstName: "Emily", lastName: "Davis", age: 25, role: "Civil Engineer", Checkin: "12:00 pm", Checkout: "09:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
  { id: 5, firstName: "David", lastName: "Brown", age: 45, role: "Estimator", Checkin: "03:00 pm", Checkout: "12:00 am", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
];

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'role', headerName: 'Role', width: 160 },
  { field: 'Checkin', headerName: 'Checkin', width: 160 },
  { field: 'Checkout', headerName: 'Checkout', width: 160 },
  { field: 'BreakIn', headerName: 'BreakIn', width: 160 },
  { field: 'BreakOut', headerName: 'BreakOut', width: 160 },
  { field: 'WorkingHours', headerName: 'Working Hours', width: 160 },
  { field: 'Overtime', headerName: 'Overtime', width: 100 },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => (
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute flex space-x-2">
          <button className="px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600">
            Edit
          </button>
          <button className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
            Remove
          </button>
        </div>
      </div>
    ),
  }
];

function Dashboard() {
  // State for storing the filters
  const [filters, setFilters] = useState({ age: '', role: '', checkin: '', workingHours: '' });
  // State for storing the filtered employees data
  const [filteredData, setFilteredData] = useState(initialEmployeesData);

  // Handle the search button click and filter the data
  const handleSearch = () => {
    let filtered = initialEmployeesData;

    if (filters.age) {
      if (filters.age === 'Ten') filtered = filtered.filter(emp => emp.age < 30);
      if (filters.age === 'Twenty') filtered = filtered.filter(emp => emp.age >= 30 && emp.age < 40);
      if (filters.age === 'Thirty') filtered = filtered.filter(emp => emp.age >= 40);
    }

    if (filters.role) {
      filtered = filtered.filter(emp => emp.role === filters.role);
    }

    if (filters.checkin) {
      filtered = filtered.filter(emp => emp.Checkin === filters.checkin);
    }

    if (filters.workingHours) {
      filtered = filtered.filter(emp => emp.WorkingHours === filters.workingHours);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="">
      
      <div className="flex justify-between">
        <h1>Attendances</h1>
        <p>Attendance - Attendances</p>
      </div>

      <div className="p-4 h-full bg-white mt-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">Add, Edit & Remove</h1>

          <div className="flex justify-between w-full items-center">
            <div>
              <button className="px-4 py-2 bg-green-500 text-white rounded">+ Add</button>
              <button className="px-4 py-2 mx-2 bg-red-500 text-white rounded">Delete Selected</button>
            </div>

            {/* Filter Section */}
            <div className="flex gap-4">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={filters.age}
                  onChange={(e) => setFilters({ ...filters, age: e.target.value })}
                >
                  <MenuItem value="Ten">Under 30</MenuItem>
                  <MenuItem value="Twenty">30-39</MenuItem>
                  <MenuItem value="Thirty">40+</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Role"
                  value={filters.role}
                  onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                >
                  <MenuItem value="Civil Engineer">Civil Engineer</MenuItem>
                  <MenuItem value="Mechanical Engineer">Mechanical Engineer</MenuItem>
                  <MenuItem value="Electrical Engineer">Electrical Engineer</MenuItem>
                  <MenuItem value="Estimator">Estimator</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-checkin">Checkin</InputLabel>
                <Select
                  labelId="demo-simple-select-checkin"
                  id="demo-simple-checkin"
                  label="Checkin"
                  value={filters.checkin}
                  onChange={(e) => setFilters({ ...filters, checkin: e.target.value })}
                >
                  <MenuItem value="03:00 pm">03:00 pm</MenuItem>
                  <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-working-hours">Working Hours</InputLabel>
                <Select
                  labelId="demo-simple-select-working-hours"
                  id="demo-simple-select-working-hours"
                  label="Working Hours"
                  value={filters.workingHours}
                  onChange={(e) => setFilters({ ...filters, workingHours: e.target.value })}
                >
                  <MenuItem value="09 Hours">09 Hours</MenuItem>
                  <MenuItem value="08 Hours">08 Hours</MenuItem>
                </Select>
              </FormControl>
              <div className="flex items-center">
                <button className="px-4 py-2  bg-blue-500 text-white rounded" onClick={handleSearch}>
                Search
              </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* DataGrid Table for Employee List */}
        <Paper sx={{ height: 400, width: '100%', marginTop: '40px' }}>
          <DataGrid
            rows={filteredData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Paper>
      </div>
    </div>
  );
}

export default Dashboard;
