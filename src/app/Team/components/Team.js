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
import TableWithID from "../../../components/Table/TableWithID";

import Picture2 from "../../../assets/images/profile_picture2.svg";



function Team() {

    const columns = [
        { accessor: 'id', 
          Header: 'User ID', type:'number', 
          Cell: ({ value }) => 
            <div className="py-5">{value}</div>
          },
        { accessor: 'name', 
          Header: 'Users', 
          width: 180, 
          Cell: ({value}) => (
            <div className="flex py-5">
              <img className="w-15 mr-2" src={Picture2} alt="user" />
               <div>{value}</div>
            </div>
            ),
        },
        { accessor: 'email', 
          Header: 'Email', 
          width: 210, 
          Cell: ({ value }) => 
            <div className="py-5">{value}</div>
          },
        { accessor: 'createdBy', 
          Header: 'Created by', 
          width: 180,
          Cell: ({ value }) => 
            <div className="py-5">{value}</div>
        },
        { accessor: 'permissions',
          type: 'actions', 
          Header: 'Permissions', 
          width: 100,
          Cell: ({row}) => (
            <div className="flex items-center justify-center">
              <BiEdit size={20} className="text-primary" onClick={userAccess}/>
            </div>
          )
          },
        { accessor: 'status', 
          type: 'actions', 
          Header: 'Status', 
          width: 130,
          Cell: ({row}) => (
            <div className="flex items-center justify-center gap-3">
              <BiPencil size={20} className="text-green" onClick={editUser}/>
              <MdLockOutline size={20} className="text-brown" onClick={changePassword}/> 
              <RiDeleteBinLine size={20} className="text-red" onClick={deleteUser} />
            </div>
          )}
      ];

      const data = [
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
            <TableWithID 
                data={data}
                columns={columns}
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