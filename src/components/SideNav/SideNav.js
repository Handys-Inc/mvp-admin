import React, { useState, useEffect }  from "react";
import { NavLink, useLocation } from "react-router-dom";

import { MdOutlinePersonPin,  } from "react-icons/md";
import { BiCheckSquare, BiCalendarMinus, BiSupport, BiBriefcase } from "react-icons/bi";
import { BsInfoSquare, BsMegaphone } from "react-icons/bs"
import { IoBriefcaseOutline, IoMegaphoneOutline } from "react-icons/io"
import { RiStackLine, RiTicketLine } from "react-icons/ri";
import {GiReceiveMoney} from "react-icons/gi"
import Money from "../../assets/icons/sack-dollar.svg"
import Megaphone from "../../assets/icons/megaphone.svg"
import Briefcase from "../../assets/icons/briefcase.svg"
import Info from "../../assets/icons/square-info.svg"
import Ticket from "../../assets/icons/ticket-alt.svg"
import Person from "../../assets/icons/person.svg"
import Support from "../../assets/icons/following.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'


function SideNav() {
    const [activeLink, setActiveLink] = useState("/customer");
    const location = useLocation();

    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);

    return (
        <nav className="flex flex-col justify-between items-center w-64 px-5 pt-5 pb-3 h-full border-r-2 border-faintGray">
            <ul className="flex flex-col w-full ml-auto">
                {/* User Management */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold">USER MANAGEMENT</p>
                        <li className="flex items-center mt-3 gap-1">
                                <NavLink to="/customers" 
                                    className={`nav-link ${ activeLink === "/customers" ? "text-primary" : "text-black"} text-base`}
                                    onClick={() => {
                                        setActiveLink("/customers")
                                        }} 
                                   >
                                        <MdOutlinePersonPin size={20} className="inline text-center mr-3"/>
                                        Customer
                                </NavLink>
                        </li>
                        <li className="flex items-center mt-3 gap-1">
                                <NavLink to="/providers" 
                                    className={`nav-link ${ activeLink === "/providers" ? "text-primary" : "text-black"} text-base`}
                                    onClick={() => {
                                        setActiveLink("/providers")
                                        }} 
                                    >
                                        <BiBriefcase size={20} className="inline text-center mr-3"/>
                                        Tradesperson
                                </NavLink>
                        </li>
                </div>

                {/* Reporting */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold mt-3">REPORTING</p>
                        <li className="flex items-center mt-3 gap-1">
                                <NavLink to="/revenue" 
                                    className={`nav-link ${ activeLink === "/revenue" ? "text-primary" : "text-black"} text-base`}
                                    onClick={() => {
                                        setActiveLink("/revenue")
                                        }}
                                    >
                                        <GiReceiveMoney size={20} className="inline text-center mr-3 "/>
                                    Revenue
                                </NavLink>
                        </li>
                        <li className="flex items-center mt-3 gap-1">
                                <NavLink to="/marketing" 
                                    className={`nav-link ${ activeLink === "/marketing" ? "text-primary" : "text-black"} text-base`}
                                    onClick={() => {
                                        setActiveLink("/marketing")}}>
                                <BsMegaphone size={20} className="inline text-center mr-3"/>
                                Marketing
                            </NavLink>
                        </li>
                </div>
            
                {/* Job Management */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold mt-3">JOB MANAGEMENT</p>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/job-info" 
                                className={`nav-link ${ activeLink === "/job-info" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/job-info")}}>
                                    <BsInfoSquare size={20} className="inline text-center mr-3"/>
                                Job information
                            </NavLink>
                        </li>
                </div>
            
                {/*  Support */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold  mt-3">SUPPORT</p>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/tickets" 
                                className={`nav-link ${ activeLink === "/tickets" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/tickets")}}>
                                    <RiTicketLine size={20} className="inline text-center mr-3"/>
                                Support tickets
                            </NavLink>
                        </li>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/disputes" 
                                className={`nav-link ${ activeLink === "/disputes" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/disputes")}}>
                                    <BiSupport size={20} className="inline text-center mr-3"/>
                                Dispute resolution
                            </NavLink>
                        </li>
                </div>
            
                {/*  Payouts */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold mt-3">PAYOUTS</p>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/refund-requests" 
                                className={`nav-link ${ activeLink === "/refund-requests" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/refund-requests")}}>
                                <BiCheckSquare size={20} className="inline text-center mr-2"/>
                                Refund requests
                            </NavLink>
                        </li>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/tradesperson-requests" 
                                className={`nav-link ${ activeLink === "/tradesperson-requests" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/tradesperson-requests")}}>
                                <RiStackLine size={20} className="inline text-center mr-2"/>
                                Tradesperson requests
                            </NavLink>
                        </li>
                </div>
            
                {/*  Scheduling */}
                <div className="mt-3">
                    <p className="text-xs text-black font-extrabold mt-3">SCHEDULING</p>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/scheduled-jobs" 
                                className={`nav-link ${ activeLink === "/scheduled-jobs" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/scheduled-jobs")}}>
                                <BiCalendarMinus size={20} className="inline text-center mr-2"/>
                                Scheduled jobs
                            </NavLink>
                        </li>
                        <li className="flex items-center mt-3 gap-1">
                            <NavLink to="/completed-jobs" 
                                className={`nav-link ${ activeLink === "/completed-jobs" ? "text-primary" : "text-black"} text-base`}
                                onClick={() => {
                                    setActiveLink("/completed-jobs")}}>
                                <BiCheckSquare size={20} className="inline text-center mr-2"/>
                                Completed jobs
                            </NavLink>
                        </li>
                </div>
            </ul>
            
            
        </nav>
    )
}

export default SideNav;