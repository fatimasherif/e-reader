import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./context/Authprovier";

import { routers } from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  </React.StrictMode>
);
