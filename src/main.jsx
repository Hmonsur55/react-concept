import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import First from "./Components/First";
import Friends from "./Components/Friends";
import FriendDetails from "./Components/FriendDetails";
import Posts from "./Components/Posts";
import DetailsPost from "./Components/DetailsPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friend/:FriendID",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.FriendID}`
          ),
      },
      {
        path: "/post",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:PostId",
        element: <DetailsPost></DetailsPost>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
