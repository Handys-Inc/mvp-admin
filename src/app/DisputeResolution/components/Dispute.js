import React, {useState} from "react";
import Popover from '@mui/material/Popover';
import Modal from "../../../components/Modal/Modal";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Picture from "../../../assets/images/profile_picture.svg";
import Picture3 from "../../../assets/images/profile_picture3.svg"
import ResolveDispute from "./ResolveDispute";

function Dispute(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [resolveDispute, setResolveDispute] = useState(false);

    function resolve() {
        handlePopoverClose();
        setResolveDispute(true)
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
        <div className="w-80 h-min border-none shadow-lg mx-3">
            <div className="flex flex-row justify-between mt-2 px-3 py-2">
                <div className="bg-backgroundGreen w-max h-max rounded-full text-green text-base">
                    <p className="text-center">Resolved</p>
                </div>
                <p
                className={`text-center ${
                    props.status === "Resolved" ? "bg-backgroundGreen text-green" : "bg-backgroundRed text-red"
                }`}
                >
                  {props.status}  
                </p>
                <BiDotsHorizontalRounded size={15} className="text-gray mr-3" onClick={handlePopverOpen} />
            </div>
            <div className="flex flex-row justify-between px-3 py-2">
                {/* Customer */}
                <div className="flex flex-col">
                    <p className="text-base">Customer</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture} alt="profile" />
                        <p className="text-gray text-sm">Janice Hutchinson</p>
                    </div>
                </div>

                {/* Tradesperson */}
                <div className="flex flex-col">
                    <p className="text-base">Tradesperson</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture3} alt="profile" />
                        <p className="text-gray text-sm">John Dalley, Painter</p>
                    </div>
                </div>
            </div>


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
              <div className="flex my-2 mx-2" onClick={resolve}>
                <p className="ml-2 text-sm"> Mark as resolved </p>
              </div>
            </Popover>

            <Modal 
            isOpen={resolveDispute}
            setIsOpen={setResolveDispute}
            title="Resolve for"
            >
              <ResolveDispute/>
            </Modal>
        </div>

    )
}

export default Dispute;