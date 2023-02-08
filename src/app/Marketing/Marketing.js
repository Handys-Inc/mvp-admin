import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import MarketingChart from "./components/MarketingChart"

function Marketing() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <MarketingChart />
            </div>
        </div>
    )
}

export default Marketing;