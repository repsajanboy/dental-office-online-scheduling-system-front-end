import React from "react";
import { FaUser, FaCalendarAlt, FaHistory, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 shadow-md p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-8">ToothFairy</h2>
        <nav className="space-y-6">
          <Link to="/dashboard" className="flex items-center gap-3 text-white hover:text-blue-500 cursor-pointer">
            <FaCalendarAlt /> <span>Appointments</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 text-white hover:text-blue-500 cursor-pointer">
            <FaUser /> <span>Profile</span>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3 text-white hover:text-red-500 cursor-pointer">
        <FaSignOutAlt /> <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
