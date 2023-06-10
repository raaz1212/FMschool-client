import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Darklight from "../Theme/DarkLight";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="pt-2 ps-2">
        <Darklight />
      </div>

      <nav className="navbar">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-2">
          <div className="text-lg font-semibold">FMschool</div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Link
                to="/"
                className="mt-4 block sm:inline-block sm:mt-0 mr-4 text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/instructors"
                className="block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium"
              >
                Instructors
              </Link>

              <Link
                to="/classes"
                className="block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium"
              >
                Classes
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="block mt-4 sm:inline-block sm:mt-0 mr-4 text-base font-medium"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="sm:hidden">
            <button
              className="block ml-auto px-2 py-1 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 11H5v2h14v-2zm0-7H5v2h14V4zm0 14H5v-2h14v2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
            <div className={`${isOpen ? "block" : "hidden"} py-2`}>
              <Link
                to="/"
                className="block px-4 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/instructors"
                className="block px-4 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Instructors
              </Link>

              <Link
                to="/classes"
                className="block px-4 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Classes
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </>
              )}
              {user ? (
                <div className="flex items-center space-x-4 ps-4">
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      title={user.displayName}
                      className="rounded-full w-8 h-8 cursor-pointer"
                    />
                  </div>
                  <button onClick={handleSignOut} className="btn btn-square">
                    <FaSignOutAlt />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-square mt-4 sm:mt-0 w-full"
                >
                  <CgProfile />
                  LogIn
                </Link>
              )}
            </div>
          </div>

          <div className="hidden sm:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                    className="rounded-full w-8 h-8 cursor-pointer"
                  />
                </div>
                <button onClick={handleSignOut} className="btn btn-square ">
                  <FaSignOutAlt />
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-square ">
                <CgProfile />
                LogIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
