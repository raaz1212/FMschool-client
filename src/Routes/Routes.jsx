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
      {
        path: "/dashboard",
        element: <StudentDashboard />,
      },
    ],
  },
]);
export default routes;
