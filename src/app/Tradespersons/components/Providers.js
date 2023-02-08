import React, {useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import TableHeader from "../../../components/TableHeader/TableHeader";
import Modal from "../../../components/Modal/Modal";
import ServiceHistory from "./ServiceHistory";

import Picture3 from "../../../assets/images/profile_picture3.svg";

function Providers() {
  const columns = [
    { field: 'name', 
      headerName: 'Users', 
      width: 180,
      renderCell: ({value}) => (
        <div className="flex">
          <img className="w-15 mr-2" src={Picture3} alt="user" />
           <div>{value}</div>
        </div>
        ),
    },
    { field: 'serviceHistory', 
      headerName: 'Service history', 
      width: 130,
      renderCell: () => (
        <button onClick={viewServiceHistory}>View</button>
      )
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'joined', headerName: 'Joined', width: 130 },
    { field: 'lastLogin', headerName: 'Last login', type: 'date', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone #', type: 'number', width: 130 },
    { field: 'kyc', headerName: 'KYC', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
  ];
  
  const rows = [
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Unverified", status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified",status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Unverified", status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Unverified", status: "Suspended" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
    { name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", kyc: "Verified", status: "Active" },
  ];

  let [serviceHistoryOpen, setServiceHistoryOpen] = useState(false);

  function viewServiceHistory() {
    setServiceHistoryOpen(true)
  }
    return (
        <div className="ml-10 h-screen w-3/4">
           <TableHeader />
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.email}
                rowsPerPage={-1}
                classes={{
                    headerRow: "text-left text-base font-sans",
                    cell: "text-left text-base font-sans"
                  }}
            />
            <Modal 
            isOpen={serviceHistoryOpen}
            setIsOpen={setServiceHistoryOpen}
            title="Service History"
            >
              <ServiceHistory/>
            </Modal>
        </div>
    )
}

export default Providers;