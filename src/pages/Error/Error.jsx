import React from "react";
import { Link } from "react-router-dom";
import image404 from "../../assets/84918-404-error-doodle-animation.gif";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={image404} alt="404" className="w-64 mb-8" />
      <h1 className="text-3xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
