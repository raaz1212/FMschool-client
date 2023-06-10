import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <nav className="w-1/4 h-screen bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/selected-classes"
              className="text-blue-500 hover:underline"
            >
              My Selected Classes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/enrolled-classes"
              className="text-blue-500 hover:underline"
            >
              My Enrolled Classes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/payment"
              className="text-blue-500 hover:underline"
            >
              Payment
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 h-screen p-4">
        {/* Render the child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
