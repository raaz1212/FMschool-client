import React, { useState, useEffect } from "react";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-4 m-8">
      <h2 className="text-4xl font-bold mb-16 text-center">Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="bg-sky-100 rounded-lg shadow-lg p-4"
          >
            <img
              className="w-full h-48 object-contain mb-4 rounded-lg"
              src={instructor.image}
              alt={instructor.name}
            />
            <h3 className="text-xl font-bold mb-2 text-black">
              {instructor.name}
            </h3>
            <p className="mb-2 text-lg font-semibold text-black">
              Email: {instructor.email}
            </p>
            {instructor.numClasses && (
              <p className="mb-2 text-lg font-semibold text-black">
                Number of Classes: {instructor.numClasses}
              </p>
            )}
            {instructor.classes && (
              <p className="mb-4 text-lg font-semibold text-black">
                Class: {instructor.classes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
