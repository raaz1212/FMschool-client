import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/Auth/AuthProvider"; // Replace with the correct path

const ClassesPage = ({ onClassSelect }) => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((response) => response.json())
      .then((data) => {
        const selectedClasses =
          JSON.parse(localStorage.getItem("selectedClasses")) || [];
        const updatedClasses = data.map((course) => {
          if (selectedClasses.includes(course._id)) {
            return { ...course, isSelected: true };
          }
          return course;
        });
        setClasses(updatedClasses);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (classId) => {
    if (!user) {
      alert("Please log in before selecting a class.");
      return;
    }

    setClasses((prevClasses) =>
      prevClasses.map((course) => {
        if (course._id === classId) {
          const isSelected = !course.isSelected;
          if (isSelected) {
            // Add classId to selectedClasses in local storage
            const selectedClasses =
              JSON.parse(localStorage.getItem("selectedClasses")) || [];
            if (!selectedClasses.includes(classId)) {
              selectedClasses.push(classId);
              localStorage.setItem(
                "selectedClasses",
                JSON.stringify(selectedClasses)
              );
            }
          } else {
            // Remove classId from selectedClasses in local storage
            const selectedClasses =
              JSON.parse(localStorage.getItem("selectedClasses")) || [];
            const updatedSelectedClasses = selectedClasses.filter(
              (id) => id !== classId
            );
            localStorage.setItem(
              "selectedClasses",
              JSON.stringify(updatedSelectedClasses)
            );
          }
          return { ...course, isSelected };
        }
        return course;
      })
    );
  };

  return (
    <div className="p-4 m-8">
      <h2 className="text-4xl font-bold mb-16 text-center">Our Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((course) => (
          <div
            key={course._id}
            className={`rounded-lg shadow-lg shadow-orange-300 p-4 ${
              course.isSelected
                ? "bg-green-300"
                : course.availableSeats === 0
                ? "bg-red-600"
                : "bg-sky-50"
            } hover:shadow-md hover:shadow-red-300 transition-all duration-300`}
          >
            <img
              className="w-full h-48 object-contain mb-4 rounded-lg"
              src={course.image}
              alt={course.name}
            />
            <h3 className="text-xl font-bold mb-2 text-black">{course.name}</h3>
            <p className="mb-2 text-lg font-semibold text-black">
              Instructor: {course.instructorName}
            </p>
            <p className="mb-2 text-lg font-semibold text-black">
              Available Seats: {course.availableSeats}
            </p>
            <p className="mb-4 text-lg font-semibold text-black">
              Price: ${course.price}
            </p>
            <p className="text-black mb-6">{course.summary}</p>
            <button
              className={`${
                course.availableSeats === 0
                  ? "bg-red-400 cursor-not-allowed"
                  : course.isSelected
                  ? "bg-blue-500"
                  : "bg-orange-400 hover:bg-orange-600"
              } text-white font-bold py-2 px-4 rounded transition-all duration-300`}
              disabled={course.availableSeats === 0}
              onClick={() => handleSelect(course._id)}
            >
              {course.isSelected ? "Unselect" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
