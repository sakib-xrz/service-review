import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import About from "../components/pages/about/About";
import AddServices from "../components/pages/add-services/AddServices";
import Blog from "../components/pages/blog/Blog";
import Home from "../components/pages/home/Home";
import MyReview from "../components/pages/my-review/MyReview";
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
        path: "/about",
        element: <About></About>
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
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/all/${params.id}`),
      },
      {
        path: "/my-review",
        element: <MyReview></MyReview>,
      },
      {
        path: "/add-services",
        element: <AddServices></AddServices>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ],
  },
]);
