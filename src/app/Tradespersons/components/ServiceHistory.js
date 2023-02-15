import React from "react";
import Table from "../../../components/Table/Table";

function ServiceHistory() {
    const data = [
        {customer: "John Doe", date: "May 21, 2022", description:"Painting kitchen blue" , amount: `$195 CAD`},
        {customer: "Sandra Leah", date: "May 21, 2022", description: "Fixing sink", amount: `$65 CAD`},
        {customer: "Diana Ross", date: "May 21, 2022", description: "Fixing sink", amount: `$200 CAD`},
        {customer: "Sam Hanna", date: "May 21, 2022", description: "Painting bedroom", amount: `$307 CAD`},
        {customer: "Jamie Lane", date: "May 21, 2022", description: "Cleaning bathroom", amount: `$195 CAD`},
        {customer: "Dan Schuter", date: "May 21, 2022", description: "Fixing lights in kitchen and room", amount: `$210 CAD`}
    ];
    
    const columns = [
        { Header: 'Customer', 
          accessor: 'customer', 
          Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ), },
        { Header: 'Date', 
          accessor: 'date', 
          Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ),}, 
        { Header: 'Description', 
          accessor: 'description', 
          Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ),},
        { Header: 'Amount', 
          accessor: 'amount', 
          Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ),}
    ]

  return (
    <div className="flex my-5 ">
        <div className="m-auto h-96 w-auto">
          <Table 
                data={data}
                columns={columns}
            />
        </div>
    </div>
  );
}

export default ServiceHistory;