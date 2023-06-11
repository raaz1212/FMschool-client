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
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center">Our Classes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
