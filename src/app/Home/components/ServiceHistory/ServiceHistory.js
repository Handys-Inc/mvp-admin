import React from "react";
import Table from "../../../../components/Table/Table";

function ServiceHistory() {
    const data = [
        {handyperson: "John Doe, Painter", date: "May 21, 2022", description:"Painting kitchen blue" , amount: `$195 CAD`},
        {handyperson: "Sandra Leah, Plumber", date: "May 21, 2022", description: "Fixing sink", amount: `$65 CAD`},
        {handyperson: "Diana Ross, Cleaner", date: "May 21, 2022", description: "Fixing sink", amount: `$200 CAD`},
        {handyperson: "Sam Hanna, Painter", date: "May 21, 2022", description: "Painting bedroom", amount: `$307 CAD`},
        {handyperson: "Jamie Lane, Cleaner", date: "May 21, 2022", description: "Cleaning bathroom", amount: `$195 CAD`},
        {handyperson: "Dan Schuter, Electrician", date: "May 21, 2022", description: "Fixing lights in kitchen and room", amount: `$210 CAD`}
    ];
    
    const columns = [
        { Header: 'Handy Person', 
          accessor: 'handyperson',
          Cell: ({value}) => (
            <div className="flex py-5 px-3">{value}</div>
            ),
          },
        { Header: 'Date', accessor: 'date', Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ),}, 
        { Header: 'Description', accessor: 'description', Cell: ({value}) => (
          <div className="flex py-5 px-3">{value}</div>
          ),},
        { Header: 'Amount', accessor: 'amount', Cell: ({value}) => (
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
