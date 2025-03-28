import React from "react";
import Navbar from "../components/Navbar.jsx";

const Layout = ({children=null, pageTitle = "Hello Daniel"}) => {
    return (
        <div className="bg-[#f0f0e0] min-h-screen flex flex-col">
            <div className="text-center py-4 text-lg font-bold">{pageTitle}</div>

            {children}

            <Navbar />
        </div>
    )
}

export default Layout;