import React, { useState, useEffect } from "react";

const PopularClassesPage = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((response) => response.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        const topClasses = sortedClasses.slice(0, 6);
        setPopularClasses(topClasses);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularClasses.map((course) => (
          <div
            key={course._id}
            className="rounded-lg shadow-md shadow-lime-400 p-4"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-auto object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">{course.name}</h3>
            <p className="text-sm mb-2">Instructor: {course.instructorName}</p>

            <p className="text-sm mb-2">Price: ${course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassesPage;
