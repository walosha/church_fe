import { createBrowserRouter } from "react-router-dom";
import Login from "@/modules/auth/login";
import HomePage from "@/modules/homepage";
import Error from "@/modules/auth/error";
import Register from "@/modules/auth/register";
import Dashboard from "@/modules/dashboard";
import ProtectedRoute from "@/modules/auth/protected";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
