import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-5xl text-center font-bold mb-4">Our Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
