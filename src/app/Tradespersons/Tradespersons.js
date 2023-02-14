import React, {useMemo} from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Providers from "./components/Providers"
import ProvidersAlt from "./components/ProvidersAlt";


function Tradespersons() {

    return (
        <div>
            <Header />
            <div className="flex">
                <SideNav />
                {/* <Providers /> */}
                <ProvidersAlt />
            </div>
        </div>
    );
}

export default Tradespersons;