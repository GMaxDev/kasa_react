import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import About from "../pages/about/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />
  }
]);
