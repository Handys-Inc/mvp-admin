import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import TradespersonRequest from "./components/TradespersonRequest";
import TradespersonRequestAlt from "./components/TradespersonRequestAlt";

import Search from "./components/Search"

function TradespersonRequests() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-4 mt-3 grid grid-cols-3 gap-3">
                        <TradespersonRequest/>
                        <TradespersonRequestAlt/>
                        <TradespersonRequestAlt/>
                        <TradespersonRequest/>
                        <TradespersonRequest/>
                        <TradespersonRequestAlt/>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default TradespersonRequests;