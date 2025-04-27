import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function LayoutWithSidebar({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
