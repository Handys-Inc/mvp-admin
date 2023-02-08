import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import RevenueChart from "./components/RevenueChart"

function Revenue() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <RevenueChart />
            </div>
        </div>
    )
}

export default Revenue;