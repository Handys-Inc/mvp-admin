import React, {useState} from "react";
import Popover from '@mui/material/Popover';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Picture3 from "../../../assets/images/profile_picture3.svg";

function TicketAlt(props) {
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
                <div className="bg-backgroundRed w-max h-max rounded-full text-red text-base">
                    <p className="text-center">Open</p>
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
                        <img className="w-5" src={Picture3} alt="profile" />
                        <p className="text-gray text-sm">Janice Hutchinson</p>
                    </div>
                </div>
            </div>

                {/* Issue */}
            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Issue</p>
                    <p className="text-gray text-sm">Electrician assigned job, Mr. Smith, did not show up at the scheduled time.</p>
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
                <p className="ml-2 text-sm"> Mark as resolved </p>
              </div>
            </Popover>
        </div>

    )
}

export default TicketAlt;