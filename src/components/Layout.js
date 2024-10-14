import React from "react";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({children, isLoggedIn}) => {
    
    
    return (
        <>
                { isLoggedIn && (
                <Navbar/>)}
                <main>
                { isLoggedIn && (<Sidebar/>)}
                    {children}
                </main>
        </>
    );
}

export default Layout;
