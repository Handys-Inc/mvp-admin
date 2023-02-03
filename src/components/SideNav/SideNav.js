import React  from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
    const links = [
        { href: "/team", label: "Customer" },
        { href: "/", label: "Tradesperson" },
        { href: "/", label: "Revenue" },
        { href: "/", label: "Marketing" },
        { href: "/", label: "Job Information" },
        { href: "/", label: "Support tickets" },
        { href: "/", label: "Dispute resolution" },
        { href: "/", label: "Refund request" },
        { href: "/", label: "Tradesperson requests" },
        { href: "/", label: "Scheduled jobs" },
        { href: "/", label: "Completed jobs" },
      ];


    return (
        <div className="flex flex-col justify-between items-center w-28 px-5 pt-5 pb-3">
            <div className="w-full">
                <div >
                    USER MANAGEMENT
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Customer</NavLink>
                        <NavLink to="/">Tradesperson</NavLink>
                    </div>
                </div>

                <div>
                    REPORTING
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Revenue</NavLink>
                        <NavLink to="/">Marketing</NavLink>
                    </div>
                </div>
            
                <div>
                    JOB MANAGEMENT
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Job Information</NavLink>
                    </div>
                    
                </div>
            
                <div>
                    SUPPORT
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Support tickets</NavLink>
                        <NavLink to="/">Dispute resolution</NavLink>
                    </div>
                </div>
            
                <div>
                    PAYOUTS
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Refund request</NavLink>
                        <NavLink to="/">Tradesperson requests</NavLink>
                    </div>
                </div>
            
                <div>
                    SCHEDULING
                    <div className="flex flex-col justify-between pb-5">
                        <NavLink to="/">Scheduled jobs</NavLink>
                        <NavLink to="/">Completed jobs</NavLink>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default SideNav;