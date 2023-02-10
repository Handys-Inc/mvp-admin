import React, {useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import Popover from '@mui/material/Popover';

import TableHeader from "../../../components/TableHeader/TableHeader";
import Modal from "../../../components/Modal/Modal";
import ServiceHistory from "./ServiceHistory/ServiceHistory";
import UpdateAccountStatus from "./AccountStatus/UpdateAccountStatus";

import Picture from "../../../assets/images/profile_picture.svg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Settings from "../../../assets/icons/gears.svg";

function Customers() {

  const columns = [
    { field: 'name', 
      headerName: 'Users', 
      width: 200,  
      renderCell: ({value}) => (
        <div className="flex">
          <img className="w-15 mr-2" src={Picture} alt="user" />
           <div>{value}</div>
        </div>
        ),},
    { field: 'serviceHistory', 
      headerName: 'Service history', 
      width: 130,
      renderCell: () => (
        <button className="text-underline" onClick={viewServiceHistory}>View</button>
      )
     },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'joined', headerName: 'Joined', width: 130 },
    { field: 'lastLogin', headerName: 'Last login', type: 'date', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone #', type: 'number', width: 130 },
    { field: 'status', 
      headerName: 'Status', 
      width: 100,
      renderCell: (row) => (
        <div
          className={`text-center ${
            row.value === "Active" ? "text-lightGreen" : "text-red"
          }`}
        >
          {row.value}
        </div>
      ), 
    },
    {  
      width: 50,
      renderCell: (row) => (
        <BiDotsHorizontalRounded size={15} className="text-gray" onClick={handlePopverOpen} />
      ), 
    },
  ];
  
  const rows = [
    { id: 1, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { id: 2, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 3, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { id: 4, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 5, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 6, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
    { id: 7, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 8, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 9, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Active" },
    { id: 10,name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788",  status: "Suspended" },
  ];

  const [serviceHistoryOpen, setServiceHistoryOpen] = useState(false);
  const [updateAccountStatus, setUpdateAccountStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function viewServiceHistory() {
    setServiceHistoryOpen(true)
  }

  function updateStatus() {
    handlePopoverClose();
    setUpdateAccountStatus(true)
  }

  const handlePopverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div className="ml-10 h-screen w-3/4">
            <TableHeader />
            
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.id}
                renderPagination={() => null}
                classes={{
                    headerRow: "text-left text-sm font-sans",
                    cell: "text-left text-sm font-sans"
                  }}
            />

            <Modal 
            isOpen={serviceHistoryOpen}
            setIsOpen={setServiceHistoryOpen}
            title="Service History"
            >
              <ServiceHistory/>
            </Modal>

            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            >
              <div className="flex my-2 mx-2" onClick={updateStatus}>
                <img className="w-5" src={Settings} alt="gears"/>
                <p className="ml-2 text-sm"> Update account status </p>
              </div>
            </Popover>

            <Modal 
            isOpen={updateAccountStatus}
            setIsOpen={setUpdateAccountStatus}
            title="Update account status"
            >
              <UpdateAccountStatus/>
            </Modal>
        </div>
    )
}

export default Customers;