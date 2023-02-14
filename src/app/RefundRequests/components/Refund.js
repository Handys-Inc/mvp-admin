import React, {useState} from "react";
import Popover from '@mui/material/Popover';
import Modal from "../../../components/Modal/Modal";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Picture from "../../../assets/images/profile_picture.svg";
import Picture3 from "../../../assets/images/profile_picture3.svg"

function Refund(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    
    function approve() {
        handlePopoverClose();
    }

    function decline() {
        handlePopoverClose();
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
                    <p className="text-center">Approved</p>
                </div>
                <p
                className={`text-center ${
                    props.status === "Approved" ? "bg-backgroundGreen text-green" : "bg-backgroundRed text-red"
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
            </div>

            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Job description</p>
                    <p className="text-gray text-sm">Paint my kitchen blue</p>
                </div>
            </div>

                {/* Issue */}
            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Refund reason</p>
                    <p className="text-gray text-sm">Service wasn’t done right and on time</p>
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
              <div className="flex my-2 mx-2" onClick={approve}>
                <p className="ml-2 text-sm"> Approve refund </p>
              </div>
              <div className="flex my-2 mx-2" onClick={decline}>
                <p className="ml-2 text-sm"> Decline refund </p>
              </div>
            </Popover>
        </div>

    )
}

export default Refund;