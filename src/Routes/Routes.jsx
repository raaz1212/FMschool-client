import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ClassesPage from "../pages/Classes/Classes";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/Instructors/Instructor";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Registration/Registration";
import StudentDashboard from "../pages/StudentDash/Dashboard";
import SelectedClassesTable from "../pages/StudentDash/SelectedClasses";
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
        element: <SelectedClassesTable />,
      },
      // {
      //   path: "/myenrolledclass",
      //   element: <MyCart></MyCart>,
      // },
      // {
      //   path: "/payment",
      //   element: <Payment></Payment>,
      // },
    ],
  },
]);
export default routes;
