import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Home from "../components/pages/home/Home";
import ServiceAll from "../components/pages/services/ServiceAll";
import SingleService from "../components/pages/services/SingleService";
import Error from "../components/shared/Error";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <ServiceAll></ServiceAll>,
        loader: () => fetch("http://localhost:5000/services/all"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <SingleService></SingleService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/all/${params.id}`),
      },
    ],
  },
]);
