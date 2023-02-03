import React  from "react";
import { NavLink } from "react-router-dom";

import { MdOutlinePersonPin,  } from "react-icons/md";
import { BiBriefcaseAlt2, BiInfoSquare, BiCheckSquare, BiCalendarMinus, BiSupport } from "react-icons/bi";
import { FaBullhorn } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiStackLine, RiTicketLine } from "react-icons/ri";

function SideNav() {
    // const links = [
    //     { href: "/team", label: "Customer" },
    //     { href: "/", label: "Tradesperson" },
    //     { href: "/", label: "Revenue" },
    //     { href: "/", label: "Marketing" },
    //     { href: "/", label: "Job Information" },
    //     { href: "/", label: "Support tickets" },
    //     { href: "/", label: "Dispute resolution" },
    //     { href: "/", label: "Refund request" },
    //     { href: "/", label: "Tradesperson requests" },
    //     { href: "/", label: "Scheduled jobs" },
    //     { href: "/", label: "Completed jobs" },
    //   ];


    return (
        <div className="flex flex-col justify-between items-center w-72 px-5 pt-5 pb-3 h-full border-r-2 border-faintGray">
            <div className="w-full">
                <div className="mt-3">
                    <p className="text-xs font-extrabold">USER MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2 my-2">
                            <MdOutlinePersonPin size={22} className="inline text-center"/><NavLink to="/customers" className={"text-lg"}>Customer</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiBriefcaseAlt2 size={22} className="inline text-center"/><NavLink to="/providers" className={"text-lg"}>Tradesperson</NavLink>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-xs font-extrabold">REPORTING</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <GiReceiveMoney size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Revenue</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBullhorn size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Marketing</NavLink>
                        </div>
                    </div>
                </div>
            
                <div className="mt-3">
                    <p className="text-xs font-extrabold">JOB MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <BiInfoSquare size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Job Information</NavLink>
                        </div>
                    </div>
                    
                </div>
            
                <div className="mt-3">
                    <p className="text-xs font-extrabold">SUPPORT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <RiTicketLine size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Support tickets</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiSupport size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Dispute resolution</NavLink>
                        </div>
                        
                    </div>
                </div>
            
                <div className="mt-3">
                    <p className="text-xs font-extrabold">PAYOUTS</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <BiCheckSquare size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Refund request</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiStackLine size={20} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Tradesperson requests</NavLink>
                        </div>
                        
                    </div>
                </div>
            
                <div className="mt-3">
                    <p className="text-xs font-extrabold">SCHEDULING</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <BiCalendarMinus size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Scheduled jobs</NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiCheckSquare size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Completed jobs</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default SideNav;