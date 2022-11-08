import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import ServiceAll from "../components/pages/services/ServiceAll";
import SingleService from "../components/pages/services/SingleService";
import Error from "../components/shared/Error";
import Main from "../layouts/Main";

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
        path: "/services",
        element: <ServiceAll></ServiceAll>,
        loader: () => fetch("http://localhost:5000/services/all"),
      },
      {
        path: "/services/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/all/${params.id}`),
      },
    ],
  },
]);
