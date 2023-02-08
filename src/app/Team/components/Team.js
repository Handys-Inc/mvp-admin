import {React, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import { BiSearch, BiPencil, BiEdit } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import AddAdmin from "./AddAdmin";
import EditUser from "./EditUser";
import ChangePassword from "./ChangePassword";
import DeleteUser from "./DeleteUser";
import UserAccess from "./UserAccess";

import Picture2 from "../../../assets/images/profile_picture2.svg";



function Team() {
  
  // const statusIcons = [
  //   <BiPencil size={20} className="text-green" onClick={editUser}/>,
  //   <MdLockOutline size={20} className="text-brown" onClick={changePassword}/>, 
  //   <RiDeleteBinLine size={20} className="text-red" onClick={deleteUser} />
  // ]

    const columns = [
        { field: 'id', headerName: 'User ID', type:'number', width: 70},
        { field: 'name', 
          headerName: 'Users', 
          width: 180, 
          renderCell: ({value}) => (
            <div className="flex">
              <img className="w-15 mr-2" src={Picture2} alt="user" />
               <div>{value}</div>
            </div>
            ),
        },
        { field: 'email', headerName: 'Email', width: 210 },
        { field: 'createdBy', headerName: 'Created by', width: 180 },
        { field: 'permissions',
          type: 'actions', 
          headerName: 'Permissions', 
          width: 100,
          getActions: () => [
            <BiEdit size={20} className="text-red" onClick={userAccess}/>,
        ]},
        { field: 'status', 
          type: 'actions', 
          headerName: 'Status', 
          width: 130, 
          getActions: () => [
            <BiPencil size={20} className="text-green" onClick={editUser}/>,
            <MdLockOutline size={20} className="text-brown" onClick={changePassword}/>, 
            <RiDeleteBinLine size={20} className="text-red" onClick={deleteUser} />
        ]}
      ];

      const rows = [
        { id: 1, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: "" },
        { id: 2, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 3, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 4, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 5, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 6, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 7, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 8, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 9, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
        { id: 10, name: 'James Adams', email: 'jamesadams@mail.com', createdBy: "John Doe", permissions: ""},
      ];

    let [isOpen, setIsOpen] = useState(false);
    let [editUserOpen, setEditUserOpen] = useState(false);
    let [changePasswordOpen, setChangePasswordOpen] = useState(false);
    let [deleteUserOpen, setDeleteUserOpen] = useState(false);
    let [userAccessOpen, setUserAccessOpen] = useState(false);

    function closeModal() {
      setIsOpen(false)
    }
  
    function openAdminModal() {
      setIsOpen(true)
    }
    function editUser(){
      setEditUserOpen(true)
    }

    function changePassword(){
      setChangePasswordOpen(true)
    }

    function deleteUser(){
      setDeleteUserOpen(true)
    }

    function userAccess(){
      setUserAccessOpen(true)
    }

    return (
        <div className="ml-10 h-screen w-3/4">
            <div className="flex justify-between items-center">
                <h3 className="my-4">Admins</h3>
                <div className="ml-auto flex items-center gap-4 mr-3">
                    <BiSearch size={20} className="inline text-center"/>
                    <div className="text-faintGray">
                        <hr />
                    </div>
                    <FiSettings size={20} className="inline text-center"/>
                    <Button onClick={openAdminModal}> Add admin </Button>
                </div>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.id}
                classes={{
                    headerRow: "text-left text-base font-sans",
                    cell: "text-left text-base font-sans"
                  }}
            />
            <Modal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Create new admin"
            >
              <AddAdmin/>
            </Modal>
            <Modal 
            isOpen={editUserOpen}
            setIsOpen={setEditUserOpen}
            title="Edit User"
            >
              <EditUser/>
            </Modal>
            <Modal 
            isOpen={changePasswordOpen}
            setIsOpen={setChangePasswordOpen}
            title="Change Password"
            >
              <ChangePassword/>
            </Modal>
            <Modal 
            isOpen={deleteUserOpen}
            setIsOpen={setDeleteUserOpen}
            >
              <DeleteUser/>
            </Modal>
            <Modal 
            isOpen={userAccessOpen}
            setIsOpen={setUserAccessOpen}
            title="Edit User Access"
            >
              <UserAccess/>
            </Modal>
            
        </div>
    )
}

export default Team;