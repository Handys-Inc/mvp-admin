import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
//import CompletedJob from "../CompletedJobs/components/CompletedJob";

import Search from "../CompletedJobs/components/Search"

function ScheduledJobs() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-2 mt-3 ">
                        {/* <CompletedJob/> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduledJobs;