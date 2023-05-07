import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./shared/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
