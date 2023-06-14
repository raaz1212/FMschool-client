import React, { useEffect, useState } from "react";
import axios from "axios";

const NewClassList = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/classdata");
        setClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      await axios.put(`http://localhost:5000/classdata/${classId}`, {
        status: "approved",
      });

      setClasses((prevClasses) =>
        prevClasses.map((classItem) =>
          classItem._id === classId
            ? { ...classItem, status: "approved" }
            : classItem
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewApprove = async () => {
    try {
      const newClass = {
        name: "New Class",
        instructorName: "John Doe",
        instructorEmail: "john.doe@example.com",
        availableSeats: 10,
        price: 50,
        status: "pending",
      };

      await axios.post("http://localhost:5000/classes", newClass);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.put(`http://localhost:5000/classdata/${classId}`, {
        status: "denied",
      });
      const updatedClasses = classes.map((classItem) => {
        if (classItem._id === classId) {
          return { ...classItem, status: "denied" };
        }
        return classItem;
      });
      setClasses(updatedClasses);
    } catch (error) {
      console.error(error);
    }
  };

  const [feedbackText, setFeedbackText] = useState("");

  const handleSendFeedback = (classId) => {
    const selectedClass = classes.find(
      (classItem) => classItem._id === classId
    );
    setSelectedClass(selectedClass);
    setModalOpen(true);
  };

  const handleModalSend = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/classdata/${selectedClass._id}`,
        {
          feedback: feedbackText,
        }
      );
      setSelectedClass((prevClass) => ({
        ...prevClass,
        feedback: feedbackText,
      }));
      setFeedbackText("");
      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Class Image</th>
            <th className="text-left">Class Name</th>
            <th className="text-left">Instructor Name</th>
            <th className="text-left">Instructor Email</th>
            <th className="text-left">Available Seats</th>
            <th className="text-left">Price</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id} className="border-2">
              <td>
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-20 h-20 rounded my-10"
                />
              </td>
              <td>{classItem.name}</td>
              <td>{classItem.instructorName}</td>
              <td>{classItem.instructorEmail}</td>
              <td>{classItem.availableSeats}</td>
              <td>{classItem.price}</td>
              <td>{classItem.status}</td>
              <td>
                <div className="flex flex-col">
                  <div onClick={() => handleNewApprove()}>
                    <button
                      className="px-2 py-1 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      disabled={classItem.status !== "pending"}
                      onClick={() => handleApprove(classItem._id)}
                    >
                      Approve
                    </button>
                  </div>
                  <button
                    className="px-2 py-1 mb-2 bg-red-500 text-white rounded hover:bg-red-600"
                    disabled={classItem.status !== "pending"}
                    onClick={() => handleDeny(classItem._id)}
                  >
                    Deny
                  </button>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    disabled={classItem.status == "pending"}
                    onClick={() => handleSendFeedback(classItem._id)}
                  >
                    Feedback
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedClass && modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Send Feedback</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleModalClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <textarea
              className="w-full h-32 border border-gray-300 rounded mb-4 p-2"
              placeholder="Enter feedback..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleModalSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewClassList;
