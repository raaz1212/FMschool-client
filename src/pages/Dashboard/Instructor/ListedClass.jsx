import React, { useContext, useEffect, useState } from "react";
import { myClass } from "../../../components/Auth/AddedClass";
import { AuthContext } from "../../../components/Auth/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const fetchClasses = () => {
    myClass(user?.email)
      .then((data) => setClasses(data))
      .catch((error) => console.log("Error fetching classes:", error));
  };

  useEffect(() => {
    fetchClasses();
  }, [user]);

  console.log(classes);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">Class Name</th>
            <th className="py-2">Status</th>
            <th className="py-2">Total Enrolled Students</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id} className="bg-white shadow">
              <td className="py-4 px-6">{classItem.name}</td>
              <td className="py-4 px-6">{classItem.status}</td>
              <td className="py-4 px-6">0</td>
              <td className="py-4 px-6">
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => handleViewFeedback(classItem.id)}
                >
                  View Feedback
                </span>
                <span
                  className="ml-2 text-green-500 cursor-pointer hover:underline"
                  onClick={() => handleUpdateClass(classItem.id)}
                >
                  Update
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
