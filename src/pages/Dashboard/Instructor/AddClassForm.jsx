import React, { useContext, useState } from "react";
import { AuthContext } from "../../../components/Auth/AuthProvider";

const AddClassForm = ({
  handleSubmit,
  handleImageChange,
  uploadButtonText,
}) => {
  const { user } = useContext(AuthContext);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <div className="mb-4">
        <label
          htmlFor="className"
          className="block text-gray-700 font-bold mb-2"
        >
          Class Name:
        </label>
        <input
          type="text"
          id="name"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label>{uploadButtonText}</label>
        <input
          type="file"
          id="image"
          onChange={(event) => {
            handleImageChange(event.target.files[0]);
          }}
          className="file-input file-input-ghost w-full max-w-xs"
          accept="image/*"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructorName"
          className="block text-gray-700 font-bold mb-2"
        >
          Instructor Name:
        </label>
        <input
          type="text"
          id="instructorName"
          value={user?.displayName || ""}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructorEmail"
          className="block text-gray-700 font-bold mb-2"
        >
          Instructor Email:
        </label>
        <input
          type="email"
          id="instructorEmail"
          value={user?.email || ""}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="availableSeats"
          className="block text-gray-700 font-bold mb-2"
        >
          Available Seats:
        </label>
        <input
          type="number"
          id="availableSeats"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price:
        </label>
        <input
          type="text"
          id="price"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddClassForm;
