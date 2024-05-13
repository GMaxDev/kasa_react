import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Location from "../pages/location/location";
import About from "../pages/about/about";
import ErrorPage from "../pages/error-page/error-page";
import Layout from "../components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,

      },
      {
        path: "/location/:id",
        element: <Location />,

      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
