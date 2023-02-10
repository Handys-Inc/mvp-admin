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
//import Person from "../../assets/icons/person.svg"
import Person from "../../assets/icons/svg/Person";
import Following from "../../assets/icons/svg/Following";
import Support from "../../assets/icons/following.svg"


const active = "#CE1449"
const black = "#282828"
function SideNavAlt() {
    const [activeLink, setActiveLink] = useState("/customers");

    return (
        <div className="flex flex-col justify-between items-center w-64 px-5 pt-5 pb-3 h-full border-r-2 border-faintGray">
            <div className="w-full ml-auto">
                {/* User Management */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">USER MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-3">
                            <NavLink to="/customers" 
                                className={`${ activeLink === "/customers" ? "text-primary" : "text-black"} text-base`} 
                                onClick={(event) => {
                                    event.preventDefault();
                                    setActiveLink("/customers");
                                    }}>
                                    <Person  className="inline text-center mr-2 " fill={activeLink === "/customers" ? active : black} size={22}/>
                                    {/* <BiCheckSquare size={22} className="inline text-center mr-2"/> */}
                                    {/* <img 
                                    style={{ stroke: activeLink === "/customers" ? active : "#282828" }}
                                    className={`w-5 inline text-center mr-3 ${ activeLink === "/customers" ? "stroke-primary fill-primary" : ""}`} src={Person} alt="person"/> */}
                                    Customer
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-3">
                            <NavLink to="/providers" 
                                className={`${ activeLink === "/providers" ? "text-primary" : "text-black"} text-base`} 
                                onClick={(event) => {
                                    event.preventDefault();
                                    setActiveLink("/providers")
                                    }}>
                                    <img className="w-5 inline text-center mr-3 " src={Briefcase} alt="briefcase"/>
                                    Tradesperson
                            </NavLink>
                        </div>
                        
                    </div>
                </div>

                {/* Reporting */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">REPORTING</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/revenue" 
                                className={`${ activeLink === "/revenue" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/revenue")}>
                                <img className="w-5 inline text-center mr-3 " src={Money} alt="sack of money"/>
                                Revenue
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/marketing" 
                                className={`${ activeLink === "/marketing" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/marketing")}>
                                <img className="w-5 inline text-center mr-3 " src={Megaphone} alt="megaphone"/>
                                Marketing
                            </NavLink>
                        </div>
                    </div>
                </div>
            
                {/* Job Management */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">JOB MANAGEMENT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/job-info" 
                                className={`${ activeLink === "/job-info" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/job-info")}>
                                <img className="w-5 inline text-center mr-3 " src={Info} alt="infomation-square"/>
                                Job Information
                            </NavLink>
                        </div>
                    </div> 
                </div>
            
                {/*  Support */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">SUPPORT</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/tickets" 
                                className={`${ activeLink === "/tickets" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/tickets")}>
                                <img className="w-5 inline text-center mr-3 " src={Ticket} alt="tickets"/>
                                Support tickets
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/disputes" 
                                className={`${ activeLink === "/disputes" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/disputes")}>
                                    <Following  className="inline text-center mr-3 " fill={activeLink === "/disputes" ? active : black} size={22}/>
                                    {/* <img className="w-5 inline text-center mr-3 " src={Support} alt="tickets"/> */}
                                Dispute resolution
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            
                {/*  Payouts */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">PAYOUTS</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/refund-requests" 
                                className={`${ activeLink === "/refund-requests" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/refund-requests")}>
                                <BiCheckSquare size={22} className="inline text-center mr-2"/>
                                Refund requests
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/tradesperson-requests" 
                                className={`${ activeLink === "/tradesperson-requests" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/tradesperson-requests")}>
                                <RiStackLine size={22} className="inline text-center mr-2"/>
                                Tradesperson requests
                            </NavLink>
                        </div>
                    </div>
                </div>
            
                {/*  Scheduling */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">SCHEDULING</p>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex items-center gap-2">
                            <NavLink to="/scheduled-jobs" 
                                className={`${ activeLink === "/scheduled-jobs" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => setActiveLink("/scheduled-jobs")}>
                                <BiCalendarMinus size={22} className="inline text-center mr-2"/>
                                Scheduled jobs
                            </NavLink>
                            {/* <BiCalendarMinus size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Scheduled jobs</NavLink> */}
                        </div>
                        <div className="flex items-center gap-2">
                            <NavLink to="/completed-jobs" 
                                className={`${ activeLink === "/completed-jobs" ? "text-primary" : "text-black"} text-base`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    setActiveLink("/completed-jobs")}}>
                                <BiCheckSquare size={22} className="inline text-center mr-2"/>
                                Completed jobs
                            </NavLink>
                            {/* <BiCheckSquare size={22} className="inline text-center"/><NavLink to="/" className={"text-lg"}>Completed jobs</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default SideNavAlt;