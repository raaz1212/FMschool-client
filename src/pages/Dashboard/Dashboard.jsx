import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-200 p-4">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/selected-classes" className="text-blue-500">
              My Selected Classes
            </Link>
          </li>
          <li>
            <Link to="/enrolled-classes" className="text-blue-500">
              My Enrolled Classes
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
