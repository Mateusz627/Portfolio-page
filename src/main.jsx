import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutMe from "./components/subpages/AboutMe.jsx";
import Projects from "./components/subpages/Projects.jsx";
import ContactMe from "./components/subpages/ContactMe.jsx";
import ErrorPage from "./error-page";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactme",
    element: <ContactMe />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
