import React, { useState } from "react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabChange(1)}
        >
          My Selected Classes
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabChange(2)}
        >
          My Enrolled Classes
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabChange(3)}
        >
          Payment History
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 1 && (
        <div>
          {/* My Selected Classes content */}
          <p>Content for My Selected Classes tab goes here</p>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          {/* My Enrolled Classes content */}
          <p>Content for My Enrolled Classes tab goes here</p>
        </div>
      )}

      {activeTab === 3 && (
        <div>
          {/* Payment History content */}
          <p>Content for Payment History tab goes here</p>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
