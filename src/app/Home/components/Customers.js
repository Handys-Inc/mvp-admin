import React from "react";
import { DataGrid } from '@mui/x-data-grid';

import TableHeader from "../../../components/TableHeader/TableHeader";

const columns = [
    { field: 'name', headerName: 'Users', width: 130 },
    { field: 'serviceHistory', headerName: 'Service history', width: 130 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'joined', headerName: 'Joined', width: 130 },
    { field: 'lastLogin', headerName: 'Last login', type: 'date', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone #', type: 'number', width: 130 },
    { field: 'status', headerName: 'Status', width: 100 },
  ];
  
  const rows = [
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
  ];

function Customers() {
    return (
        <div className="ml-10 h-screen w-3/4">
            <TableHeader />
            
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.email}
                classes={{
                    headerRow: "text-left text-base font-sans",
                    cell: "text-left text-base font-sans"
                  }}
            />
        </div>
    )
}

export default Customers;