import React, {useState} from "react";
import Popover from '@mui/material/Popover';

import TableHeader from "../../../components/TableHeader/TableHeader";
import Modal from "../../../components/Modal/Modal";
import ServiceHistory from "./ServiceHistory/ServiceHistory";
import UpdateAccountStatus from "./AccountStatus/UpdateAccountStatus";

import Picture from "../../../assets/images/profile_picture.svg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Settings from "../../../assets/icons/gears.svg";

import Table from "../../../components/Table/Table";

function CustomersAlt() {
    const columns = [
        {
            Header: 'User ID',
            accessor: 'id',
        },
        {
          Header: 'Users',
          accessor: 'name',
          Cell: ({value}) => (
              <div className="flex py-5">
                <img className="w-15 mr-2" src={Picture} alt="user" />
                 <div className="flex content-center">{value}</div>
              </div>
              ),
        },
        {
          Header: 'Service history',
          accessor: 'serviceHistory',
          Cell: () => (
              <button className="underline" onClick={viewServiceHistory}>View</button>
            )
        },
        {
          Header: 'Email',
          accessor: 'email',
          Cell: ({ value }) => <div className="py-5">{value}</div>
        },
        {
          Header: 'Joined',
          accessor: 'joined',
          Cell: ({ value }) => <div className="py-5">{value}</div>
        },
        {
        Header: 'Last login',
        accessor: 'lastLogin',
        Cell: ({ value }) => <div className="py-5">{value}</div>
      },
        {
          Header: 'Phone #',
          accessor: 'phoneNumber',
          Cell: ({ value }) => <div className="py-5">{value}</div>
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: (row) => (
            <div
            className={`text-center py-5 ${
                row.value === "Active" ? "text-lightGreen" : "text-red"
            }`}>
                {row.value}
            </div>
          )
        },
        {
            accessor: 'openMore',
            Cell: (row) => (
              <BiDotsHorizontalRounded size={15} className="text-gray" onClick={handlePopverOpen} />
            ), 
          },
      ]

  const data = [
    { id: 1, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Suspended" },
    { id: 2, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 3, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Suspended" },
    { id: 4, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 5, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 6, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Suspended" },
    { id: 7, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 8, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 9, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
    { id: 10, name: 'James Adams', email: 'jamesadams@mail.com', joined: "May 5, 2022", lastLogin: "Dec 5, 2022", phoneNumber: "(901) 899 788", status: "Active" },
  ];

  let [serviceHistoryOpen, setServiceHistoryOpen] = useState(false);
  const [updateAccountStatus, setUpdateAccountStatus] = useState(false);
  const [updateKYCAccountStatus, setUpdateKYCStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function viewServiceHistory() {
    setServiceHistoryOpen(true)
  }

  function updateKYCStatus() {
    handlePopoverClose();
    setUpdateKYCStatus(true)
  }

  function updateAccount() {
    handlePopoverClose();
    setUpdateAccountStatus(true)
  }

  const handlePopverOpen = (event) => {
    console.log(anchorEl)
    setAnchorEl(event.target);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div className="ml-10 h-screen w-3/4">
           <TableHeader />
           <Table 
                data={data}
                columns={columns}
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
              <div className="flex my-2 mx-2" onClick={updateAccount}>
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

export default CustomersAlt;