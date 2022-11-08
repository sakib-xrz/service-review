import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/home",
            element: <Home></Home>
        },
        {
            path: "/services",
            element: <Home></Home>
        }
    ]
  },
]);
