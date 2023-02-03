import React from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

function Layout({ children }) {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Header />
      <div>
        <SideNav />
        {children}
      </div>
    </div>
  );
}

export default Layout;