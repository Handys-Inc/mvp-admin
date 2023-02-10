import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Refund from "./components/Refund"
import Search from "./components/Search"


function RefundRequests() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <div>
                    <Search />
                    <div className="ml-4 mt-3 grid grid-cols-3 gap-3">
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>
                        <Refund/>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default RefundRequests;