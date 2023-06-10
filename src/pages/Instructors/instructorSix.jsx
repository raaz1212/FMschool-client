import React, { useState, useEffect } from "react";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error));
  }, []);

  const getRandomInstructors = () => {
    const shuffledInstructors = instructors.sort(() => 0.5 - Math.random());
    return shuffledInstructors.slice(0, 6);
  };

  const randomInstructors = getRandomInstructors();

  return (
    <div className="p-4 m-8">
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
        Our Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="shadow-cyan-400 rounded-lg shadow-md p-2 flex flex-col items-center"
          >
            <img
              className="w-full h-48 object-contain mb-6"
              src={instructor.image}
              alt={instructor.name}
            />
            <h3 className="text-lg font-bold mb-1">{instructor.name}</h3>
            <p className="mb-1 text-xs">{instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
