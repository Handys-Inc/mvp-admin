import React from "react";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";
import Providers from "./Home/components/Providers"


function Tradespersons() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <Providers />
            </div>
        </div>
    );
}

export default Tradespersons;