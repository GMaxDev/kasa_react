import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import About from "../pages/about/about";
import Layout from "../components/layout/layout";
import ErrorPage from "../pages/error-page/error-page";


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
        path: "/about",
        element: <About />
      }
    ]
  }
]);
