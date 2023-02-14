import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";

import Search from "../CompletedJobs/components/Search"
import Calendar from "./components/Calendar";
import DateSelector from "./components/DateSelector";

function ScheduledJobs() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div className="w-10/12">
                    <div className="flex flex-row justify-around items-center">
                    <Search/>
                    <DateSelector />
                    </div>
                    
                    <div className="ml-2 mt-3 w-11/12">
                        <Calendar/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduledJobs;