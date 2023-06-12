import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";

const Dashboard = () => {
  const { role } = useContext(AuthContext);
  console.log(role);
  const isAdmin = role === "admin";
  const isInstructor = role === "instructor";

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-200 p-4">
        {isAdmin && (
          <>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard/all-users" className="text-blue-500">
                  Manage Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/classes" className="text-blue-500">
                  Manage Classes
                </Link>
              </li>
            </ul>
          </>
        )}
        {isInstructor && (
          <>
            <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard/courses" className="text-blue-500">
                  Add Course
                </Link>
              </li>
              <li>
                <Link to="/dashboard/students" className="text-blue-500">
                  My Students
                </Link>
              </li>
            </ul>
          </>
        )}
        {!isAdmin && !isInstructor && (
          <>
            <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard/selected-classes"
                  className="text-blue-500"
                >
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/enrolled-classes" className="text-blue-500">
                  My Enrolled Classes
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
