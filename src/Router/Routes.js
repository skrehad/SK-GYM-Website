import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Classes from "../Components/Classes/Classes";
import Contact from "../Components/Contact/Contact";
import Gallery from "../Components/Gallery/Gallery";
import GalleryPage2 from "../Components/Gallery/GalleryPage-2/GalleryPage2";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Pricing from "../Components/Pricing/Pricing";
import Register from "../Components/Register/Register";
import Schedule from "../Components/Schedule/Schedule";
import Main from "../LayOuts/Main";
import PrivateRouter from "./PrivateRouter";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/gallery",
          element: (
            <PrivateRouter>
              <Gallery></Gallery>
            </PrivateRouter>
          ),
        },
        {
          path: "/galleryPage-2",
          element: (
            <PrivateRouter>
              <GalleryPage2></GalleryPage2>
            </PrivateRouter>
          ),
        },
        {
          path: "/schedule",
          element: (
            <PrivateRouter>
              <Schedule></Schedule>
            </PrivateRouter>
          ),
        },
        {
          path: "/blog",
          loader: () => fetch("/blog.json"),
          element: <Blogs></Blogs>,
        },
        {
          path: "/pricing",
          element: (
            <PrivateRouter>
              {" "}
              <Pricing></Pricing>
            </PrivateRouter>
          ),
        },
        {
          path: "/classes",
          loader: () => fetch("/classes.json"),
          element: <Classes></Classes>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
