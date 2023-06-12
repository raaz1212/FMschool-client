import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ClassesPage from "../pages/Classes/Classes";
import AllUsersPage from "../pages/Dashboard/Admin/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddClassPage from "../pages/Dashboard/Instructor/AddClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/Instructors/Instructor";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Registration/Registration";
import AdminRoute from "./AdminRoute";
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
        <Dashboard />
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
      {
        path: "/dashboard/courses",
        element: <AddClassPage></AddClassPage>,
      },
    ],
  },
]);
export default routes;
