import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

// Sample employee data for the table
const initialEmployeesData = [
  { id: 1, firstName: "John", lastName: "Doe", age: 29, role: "Civil Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 34, role: "Mechanical Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
  { id: 3, firstName: "Michael", lastName: "Johnson", age: 40, role: "Electrical Engineer", Checkin: "03:00 pm", Checkout: "12:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
  { id: 4, firstName: "Emily", lastName: "Davis", age: 25, role: "Civil Engineer", Checkin: "12:00 pm", Checkout: "09:00 pm", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
  { id: 5, firstName: "David", lastName: "Brown", age: 45, role: "Estimator", Checkin: "03:00 pm", Checkout: "12:00 am", WorkingHours: "09 Hours", Overtime: "0 hours", BreakIn: "08:00 pm", BreakOut: "09:00 pm" },
];

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 130, headerClassName: 'dark-header' },
  { field: 'lastName', headerName: 'Last Name', width: 130, headerClassName: 'dark-header' },
  { field: 'role', headerName: 'Role', width: 160, headerClassName: 'dark-header' },
  { field: 'Checkin', headerName: 'Checkin', width: 160, headerClassName: 'dark-header' },
  { field: 'Checkout', headerName: 'Checkout', width: 160, headerClassName: 'dark-header' },
  { field: 'BreakIn', headerName: 'BreakIn', width: 160, headerClassName: 'dark-header' },
  { field: 'BreakOut', headerName: 'BreakOut', width: 160, headerClassName: 'dark-header' },
  { field: 'WorkingHours', headerName: 'Working Hours', width: 160, headerClassName: 'dark-header' },
  { field: 'Overtime', headerName: 'Overtime', width: 100, headerClassName: 'dark-header' },
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
  const [filters, setFilters] = useState({ age: '', role: '', checkin: '', workingHours: '' });
  const [filteredData, setFilteredData] = useState(initialEmployeesData);

  const handleSearch = () => {
    let filtered = initialEmployeesData;

    // Apply filter logic here

    setFilteredData(filtered);
  };

  return (
    <div className="dark:text-gray-300">
      <div className="flex justify-between">
        <h1 className="text-black dark:text-white">Attendances</h1>
        <p className="text-gray-600 dark:text-gray-400">Attendance - Attendances</p>
      </div>

      <div className="p-4 h-full bg-white dark:bg-gray-900 mt-10 rounded-md shadow-md">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-black dark:text-white">Add, Edit & Remove</h1>

          <div className="flex justify-between w-full items-center">
            <div>
              <button className="px-4 py-2 bg-green-500 text-white rounded">+ Add</button>
              <button className="px-4 py-2 mx-2 bg-red-500 text-white rounded">Delete Selected</button>
            </div>

            {/* Filter Section */}
            <div className="flex gap-4">
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <InputLabel id="demo-simple-select-label" className="dark:text-white">Employees</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Employees"
                  value={filters.age}
                  onChange={(e) => setFilters({ ...filters, age: e.target.value })}
                  className="dark:text-white dark:bg-gray-800"
                >
                  <MenuItem value="Ten">Muhammad Adeel</MenuItem>
                  <MenuItem value="Twenty">Danish Irfan</MenuItem>
                  <MenuItem value="Thirty">Fayz Sarfraz</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-label" className="dark:text-white">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Role"
                  value={filters.role}
                  onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                  className="dark:text-white dark:bg-gray-800"
                >
                  <MenuItem value="Civil Engineer">Civil Engineer</MenuItem>
                  <MenuItem value="Mechanical Engineer">Mechanical Engineer</MenuItem>
                  <MenuItem value="Electrical Engineer">Electrical Engineer</MenuItem>
                  <MenuItem value="Estimator">Estimator</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-checkin" className="dark:text-white">Checkin</InputLabel>
                <Select
                  labelId="demo-simple-select-checkin"
                  id="demo-simple-checkin"
                  label="Checkin"
                  value={filters.checkin}
                  onChange={(e) => setFilters({ ...filters, checkin: e.target.value })}
                  className="dark:text-white dark:bg-gray-800"
                >
                  <MenuItem value="03:00 pm">03:00 pm</MenuItem>
                  <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-working-hours" className="dark:text-white">Working Hours</InputLabel>
                <Select
                  labelId="demo-simple-select-working-hours"
                  id="demo-simple-select-working-hours"
                  label="Working Hours"
                  value={filters.workingHours}
                  onChange={(e) => setFilters({ ...filters, workingHours: e.target.value })}
                  className="dark:text-white dark:bg-gray-800"
                >
                  <MenuItem value="09 Hours">09 Hours</MenuItem>
                  <MenuItem value="08 Hours">08 Hours</MenuItem>
                </Select>
              </FormControl>
              <div className="flex items-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DataGrid Table for Employee List */}
        <Paper sx={{ height: 400, width: '100%', marginTop: '40px' }} className="dark:bg-gray-800">
          <DataGrid
            rows={filteredData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            checkboxSelection
            disableSelectionOnClick
            className="dark:text-white dark:bg-gray-800"
            sx={{
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'white',
                color: 'black',
                '&.dark': {
                  backgroundColor: 'gray',
                  color: 'white',
                },
              },
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: 'white',
                color: 'black',
                '&.dark': {
                  backgroundColor: 'gray',
                  color: 'white',
                },
              },
            }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Dashboard;
