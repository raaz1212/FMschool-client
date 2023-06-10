import React, { useEffect, useState } from "react";

const SelectedClassesTable = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = () => {
    // Fetch the classes data
    fetch("http://localhost:5000/classes")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error));
  };

  // Retrieve selected classes from local storage
  const selectedClasses =
    JSON.parse(localStorage.getItem("selectedClasses")) || [];

  const handleDelete = (classId) => {
    // Remove the class from selectedClasses in local storage
    const updatedSelectedClasses = selectedClasses.filter(
      (id) => id !== classId
    );
    localStorage.setItem(
      "selectedClasses",
      JSON.stringify(updatedSelectedClasses)
    );

    fetchClasses(); // Refetch the classes data after deleting a selected class
  };

  const handlePay = () => {
    // Implement the logic for payment
    // You can redirect the user to a payment gateway or perform any other necessary actions
    alert("Payment functionality will be implemented here.");
  };

  return (
    <div className="p-4 m-8">
      <h2 className="text-4xl font-bold mb-16 text-center">
        My Selected Classes
      </h2>
      {selectedClasses.length === 0 ? (
        <p className="text-center">No classes selected.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left">Class Name</th>
              <th className="px-6 py-4 text-left">Instructor</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((classId) => {
              // Find the selected class in the classes array
              const selectedClass = classes.find(
                (course) => course._id === classId
              );
              if (!selectedClass) {
                return null; // Handle case where selected class is not found
              }
              return (
                <tr key={classId}>
                  <td className="px-6 py-4">{selectedClass.name}</td>
                  <td className="px-6 py-4">{selectedClass.instructorName}</td>
                  <td className="px-6 py-4">${selectedClass.price}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleDelete(classId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {selectedClasses.length > 0 && (
        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedClassesTable;
