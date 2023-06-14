import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ClassesPage from "../pages/Classes/Classes";
import AllUsersPage from "../pages/Dashboard/Admin/AllUsers";
import NewClassList from "../pages/Dashboard/Admin/NewClasses";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddClassPage from "../pages/Dashboard/Instructor/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/ListedClass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import NotFoundPage from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import InstructorsPage from "../pages/Instructors/Instructor";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Registration/Registration";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
    errorElement: <NotFoundPage />,
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
        path: "/dashboard/payments",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-history",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsersPage />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/new-classes",
        element: (
          <AdminRoute>
            <NewClassList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <InstructorRoute>
            <AddClassPage />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/listed-class",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);
export default routes;
