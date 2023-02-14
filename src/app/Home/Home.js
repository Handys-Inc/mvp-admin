import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Layout from "../../components/Layout/Layout"
import Customers from "./components/Customers"
import CustomersAlt from "./components/CustomersAlt";



function Home() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                <CustomersAlt />
                {/* <Table /> */}
            </div>
        </div>
    );
}

export default Home;