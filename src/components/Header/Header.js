import React from "react";
import logo from "../../assets/logo/logo.svg";

import { NavLink } from "react-router-dom";
import Profile from "../../assets/images/profile.png";

import { Menu } from '@headlessui/react'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"


function Header() {
    const links = [
        { href: "/team", label: "Team" },
        { href: "/", label: "Logout" },
      ];

    return (
        <div className="">
            <div className="flex flex-row justify-between items-center px-5 pt-5 pb-3">
                <NavLink to="/">
                    <img className="w-20 md:w-28" src={logo} alt="Logo" />
                </NavLink>

                <div className="ml-auto flex items-center gap-3">
                    <img className="w-15" src={Profile} alt="user" />
                    <h3 className="text-lg">Handys Inc</h3>
                    <Menu>
                        <Menu.Button><MdOutlineKeyboardArrowDown size={24} className="inline text-center"/></Menu.Button>
                            <Menu.Items className="absolute right-0 mt-20 mr-10 w-56 origin-bottom-left divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    {links.map((link) => (
                                    <Menu.Item key={link.href} as="div">
                                        {({ active }) => (
                                        <a href={link.href}>
                                            <button
                                            className={`${
                                                active
                                                ? "text-black bg-lightSecondary"
                                                : "text-gray"
                                            } group flex w-full items-center rounded-full px-4 py-3 text-lg font-normal`}
                                            >
                                            {/* {active ? <span>Active</span> : <div>Inactive</div>} */}
                                            {link.label}
                                            </button>
                                        </a>
                                        )}
                                    </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                    </Menu> 
                </div>
            </div>
            
            <div className="text-faintGray">
                <hr />
            </div>
        </div>
        
    );
}

export default Header;