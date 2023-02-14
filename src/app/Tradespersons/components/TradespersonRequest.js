import React, {useState} from "react";
import Popover from '@mui/material/Popover';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Picture from "../../../assets/images/profile_picture.svg";
import Picture3 from "../../../assets/images/profile_picture3.svg"

function TradespersonRequest(props) {

    const [anchorEl, setAnchorEl] = useState(null);

    function resolveTicket() {
        console.log("resolved")
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
                    <p className="text-center">Completed</p>
                </div>
                <p
                className={`text-center ${
                    props.status === "Completed" ? "bg-backgroundGreen text-green" : "bg-lightOrange text-orange"
                }`}
                >
                  {props.status}  
                </p>
                <BiDotsHorizontalRounded size={15} className="text-gray mr-3" onClick={handlePopverOpen} />
            </div>
            <div className="flex flex-row justify-between px-3 py-2">
                 {/* Tradesperson */}
                 <div className="flex flex-col">
                    <p className="text-base">Tradesperson</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture3} alt="profile" />
                        <p className="text-gray text-sm">John Dalley</p>
                    </div>
                </div>

                {/* Customer */}
                <div className="flex flex-col">
                    <p className="text-base">Customer</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture} alt="profile" />
                        <p className="text-gray text-sm">Janice Hutchinson</p>
                    </div>
                </div>
            </div>

                {/* Issue */}
            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Skills</p>
                    <p className="text-gray text-sm">Painter, Electrician</p>
                </div>
            </div>

                 {/* Issue */}
            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Description</p>
                    <p className="text-gray text-sm">Paint my kitchen and bedroom blue</p>
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
              <div className="flex my-2 mx-2" onClick={resolveTicket}>
                <p className="ml-2 text-sm"> Mark as open </p>
              </div>
            </Popover>
        </div>

    )
}

export default TradespersonRequest;