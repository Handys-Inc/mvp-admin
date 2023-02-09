import React, { useState }  from "react";
import { NavLink } from "react-router-dom";

import { MdOutlinePersonPin,  } from "react-icons/md";
import {  BiCheckSquare, BiCalendarMinus, BiSupport } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import Money from "../../assets/icons/sack-dollar.svg"
import Megaphone from "../../assets/icons/megaphone.svg"
import Briefcase from "../../assets/icons/briefcase.svg"
import Info from "../../assets/icons/square-info.svg"
import Ticket from "../../assets/icons/ticket-alt.svg"


function SideNav() {
    const [activeLink, setActiveLink] = useState("/customers");

    return (
        <div className="flex flex-col justify-between items-center w-72 px-5 pt-5 pb-3 h-full border-r-2 border-faintGray">
            <div className="w-full ml-auto">
                {/* User Management */}
                <div className="mt-3">
                    <p className="text-xs font-extrabold">USER MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-3">
                            <NavLink to="/customers" 
                                className={`${ activeLink === "/customers" ? "text-primary" : "text-black"} text-lg`} 
                                onClick={() => setActiveLink("/customers")}>
                                    <MdOutlinePersonPin size={22} className="inline text-center mr-3"/>
                                    Customer
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-3">
                            <NavLink to="/providers" 
                                className={`${ activeLink === "/providers" ? "text-primary" : "text-black"} text-lg`} 
                                onClick={() => setActiveLink("/providers")}>
                                    <img className="w-5 inline text-center mr-3 " src={Briefcase} alt="briefcase"/>
                                    Tradesperson
                            </NavLink>
                        </div>
                        
                    </div>
                </div>

                {/* Reporting */}
                <div className="mt-3">
                    <p className="text-xs font-extrabold">REPORTING</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/revenue" 
                                className={`${ activeLink === "/revenue" ? "text-primary" : "text-black"} text-lg`}
                                onClick={() => setActiveLink("/revenue")}>
                                <img className="w-5 inline text-center mr-3 " src={Money} alt="sack of money"/>
                                Revenue
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/marketing" 
                                className={`${ activeLink === "/marketing" ? "text-primary" : "text-black"} text-lg`}
                                onClick={() => setActiveLink("/marketing")}>
                                <img className="w-5 inline text-center mr-3 " src={Megaphone} alt="megaphone"/>
                                Marketing
                            </NavLink>
                        </div>
                    </div>
                </div>
            
                {/* Job Management */}
                <div className="mt-3">
                    <p className="text-xs font-extrabold">JOB MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/job-info" 
                                className={`${ activeLink === "/job-info" ? "text-primary" : "text-black"} text-lg`}
                                onClick={() => setActiveLink("/job-info")}>
                                <img className="w-5 inline text-center mr-3 " src={Info} alt="infomation-square"/>
                                Job Information
                            </NavLink>
                        </div>
                    </div> 
                </div>
            
                {/*  Support */}
                <div className="mt-3">
                    <p className="text-xs font-extrabold">SUPPORT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/tickets" 
                                className={`${ activeLink === "/tickets" ? "text-primary" : "text-black"} text-lg`}
                                onClick={() => setActiveLink("/tickets")}>
                                <img className="w-5 inline text-center mr-3 " src={Ticket} alt="tickets"/>
                                Support tickets
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/disputes" 
                                className={`${ activeLink === "/disputes" ? "text-primary" : "text-black"} text-lg`}
                                onClick={() => setActiveLink("/disputes")}>
                                <BiSupport size={22} className="inline text-center mr-2"/>
                                Dispute resolution
                            </NavLink>
                            {/* <BiSupport size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Dispute resolution</NavLink> */}
                        </div>
                        
                    </div>
                </div>
            
                {/*  Payouts */}
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
            
                {/*  Scheduling */}
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