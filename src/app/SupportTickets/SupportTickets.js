import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Ticket from "./components/Ticket";
import TicketAlt from "./components/TicketAlt";

import Search from "./components/Search"

function JobInformation() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-4 mt-3 grid grid-cols-3 gap-3">
                        <Ticket/>
                        <TicketAlt/>
                        <TicketAlt/>
                        <Ticket/>
                        <Ticket/>
                        <TicketAlt/>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default JobInformation;