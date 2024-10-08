import Sidebar from "./Sidebar";
import MainContainer from  "./MainContainer";
import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="grid grid-flow-col bg-black">
        <Sidebar/>
        <Outlet/>
        </div>
    );
};
export default Body;