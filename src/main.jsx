import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="d-flex flex-column mainContainer">
      <Header />
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);
