import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

function ServiceHistory() {
    const rows = [
        {customer: "John Doe", date: "May 21, 2022", description:"Painting kitchen blue" , amount: `$195 CAD`},
        {customer: "Sandra Leah", date: "May 21, 2022", description: "Fixing sink", amount: `$65 CAD`},
        {customer: "Diana Ross", date: "May 21, 2022", description: "Fixing sink", amount: `$200 CAD`},
        {customer: "Sam Hanna", date: "May 21, 2022", description: "Painting bedroom", amount: `$307 CAD`},
        {customer: "Jamie Lane", date: "May 21, 2022", description: "Cleaning bathroom", amount: `$195 CAD`},
        {customer: "Dan Schuter", date: "May 21, 2022", description: "Fixing lights in kitchen and room", amount: `$210 CAD`}
    ];
    
    const columns = [
        { field: 'customer', headerName: 'Customer', width: 200 },
        { field: 'date', headerName: 'Date', width: 130}, 
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'amount', headerName: 'Amount', width: 130}
    ]

  return (
    <div className="flex my-5 ">
        <div className="m-auto h-96 w-11/12">
            <DataGrid
            rows={rows}
            columns={columns}
            getRowId={row => row.customer}
            rowsPerPage={-1}
            classes={{
                    headerRow: "text-left text-base font-sans",
                    cell: "text-left text-base font-sans"
                  }}
            />
        </div>
    </div>
  );
}

export default ServiceHistory;