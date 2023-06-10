import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl text-gray-700 mr-2">
            <FaFacebook />
          </div>
          <div className="text-2xl text-gray-700 mr-2">
            <FaTwitter />
          </div>
          <div className="text-2xl text-gray-700">
            <FaInstagram />
          </div>
        </div>
        <div className="text-sm">
          <p>Contact: info@yourwebsite.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-2">
        &copy; {new Date().getFullYear()} Your Website Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
