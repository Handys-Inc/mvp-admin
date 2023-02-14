import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import CompletedJob from "./components/CompletedJob";

import Search from "./components/Search"

function CompletedJobs() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-4 mt-3 grid grid-cols-3 gap-3">
                        <CompletedJob/>
                        <CompletedJob/>
                        <CompletedJob/>
                        <CompletedJob/>
                        <CompletedJob/>
                        <CompletedJob/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedJobs;