import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2 p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center my-4">
          <div className="text-2xl font-semibold">FMschool</div>
          <div className="flex items-center my-4 lg:my-0">
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
        </div>
        <div className="mr-4 mt-4">
          <h4 className="text-gray-800 font-semibold">Services</h4>
          <ul className="mt-2 text-gray-600">
            <li>Online Class</li>
            <li>Offline Class</li>
            <li>Live Session</li>
            <li>Support Session</li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="mr-4">
            <h4 className="text-gray-800 font-semibold">Address</h4>
            <p className="text-gray-600 mt-2">
              123 Main Street, Dhaka, Singapur
              <br />
              Open: Mon-Fri, 9am to 6pm
            </p>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold">Contact</h4>
            <p className="text-gray-600 mt-2">
              Phone: +123456
              <br />
              Email: con@mail.com
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-2">
        &copy; {new Date().getFullYear()} FMschool. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
