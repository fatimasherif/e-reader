import React from "react";
import Library from "./modules/Library/Library";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./modules/Home/Home";
import Login from "./modules/Authentication/Login";
import Register from "./modules/Authentication/Register";
import App from "./App";
import Latestread from "./modules/Latestread.js/Latestread";
import Savedbooks from "./modules/Savedbooks/Savedbooks";
import Booksdetails from "./modules/Books/Booksdetails";
import AddBook from "./modules/ManageBooks/AddBook";
import UpdateBook from "./modules/ManageBooks/UpdateBook";
import ManageBooks from "./modules/ManageBooks/ManageBooks";
import ContactUs from "./modules/ContactUs/ContactUs";
import PdfViewer from "./modules/PdfViewer/PdfViewer";
import ManageChapters from "./modules/Managechapters/manageChapters";
import Addchapter from "./modules/Managechapters/Addchapter";
import Updatechapter from "./modules/Managechapters/Updatechapter";
import Guest from "./middlewear/Guest.js";
export const routers = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        element: <Guest />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/details",
        element: <Booksdetails />,
      },
      {
        path: "/pdf",
        element: <PdfViewer />,
      },
      {
        path: "/latest",
        element: <Latestread />,
      },
      {
        path: "/saved",
        element: <Savedbooks />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/details",
        element: <Booksdetails />,
      },
      {
        path: "/manage-books",

        children: [
          {
            path: "",
            element: <ManageBooks />,
          },
          {
            path: "add",
            element: <AddBook />,
          },
          {
            path: "update",
            element: <UpdateBook />,
          },
        ],
      },
      {
        path: "/manage-chapters",

        children: [
          {
            path: "",
            element: <ManageChapters />,
          },
          {
            path: "add-chapters",
            element: <Addchapter />,
          },
          {
            path: "update-chapter",
            element: <Updatechapter />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={""} />,
  },
]);
