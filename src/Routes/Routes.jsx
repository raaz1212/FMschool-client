import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ClassesPage from "../pages/Classes/Classes";
import AllUsersPage from "../pages/Dashboard/AllUsers";
import StudentDashboard from "../pages/Dashboard/Dashboard";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/Instructors/Instructor";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Navbar />
        <StudentDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/selected-classes",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsersPage />,
      },
      // {
      //   path: "/payment",
      //   element: <Payment></Payment>,
      // },
    ],
  },
]);
export default routes;
