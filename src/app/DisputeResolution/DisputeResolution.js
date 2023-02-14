import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Dispute from "./components/Dispute";

import Search from "./components/Search"

function DisputeResolution() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-4 mt-3 grid grid-cols-3 gap-3">
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                        <Dispute/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default DisputeResolution;