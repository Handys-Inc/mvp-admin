import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Team from "./components/Team"


function Tradespersons() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <Team />
            </div>
        </div>
    );
}

export default Tradespersons;