import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import JobCard from "./components/JobCard";
import JobCardAlt from "./components/JobCardAlt";
import JobCardAlt2 from "./components/JobCardAlt2";
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
                        <JobCard/>
                        <JobCard/>
                        <JobCardAlt2/>
                        <JobCardAlt/>
                        <JobCardAlt2/>
                        <JobCard/>
                        <JobCard/>
                        <JobCardAlt2/>
                        <JobCardAlt/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default JobInformation;