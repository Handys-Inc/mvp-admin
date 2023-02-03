import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Layout from "../../components/Layout/Layout"
import Customers from "./components/Customers"


function Home() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <Customers />
            </div>
        </div>
    );
}

export default Home;