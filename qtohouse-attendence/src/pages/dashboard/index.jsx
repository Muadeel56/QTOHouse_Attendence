import React from "react";
import SidebarMenu from "../../Components/Sidebar";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => {
      const firstName = params.row?.firstName ?? '';
      const lastName = params.row?.lastName ?? '';
      return `${firstName} ${lastName}`;
    },
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Attendances</h1>
        <p>Attendance - Attendances</p>
      </div>
      <div className="p-4 h-full bg-white mt-10">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-xl font-semibold">Add, Edit & Remove</h1>
          <div className="flex justify-between w-full items-center">
            <div>
              <button className="px-4 py-2 bg-green-500 text-white rounded ">
                + Add
              </button>
              <button className="px-4 py-2 mx-2 bg-red-500 text-white rounded">
                Delete Selected
              </button>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <InputLabel id="demo-simple-select-label">Estimators</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Estimators"
                >
                  <MenuItem value={10}>Civil Engineers</MenuItem>
                  <MenuItem value={20}>Mechanical Engineers</MenuItem>
                  <MenuItem value={30}>Electrical Engineers</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Months</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Months"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-label">Previous Days</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Previous Days"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
          </div>
        </div>
        {/* <div>
        <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
