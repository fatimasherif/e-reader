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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
    ],
  },
  {
    path: "*",
    element: <Navigate to={""} />,
  },
]);
