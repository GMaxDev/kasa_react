import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="d-flex flex-column mainContainer">
      <Header />
      <Content />
    </div>
    <Footer />
  </React.StrictMode>
);
