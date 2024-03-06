import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutMe from "./components/About/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContactMe from "./components/Contact/ContactMe.jsx";
import ErrorPage from "./error-page";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <AboutMe />,
      },

      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contactme",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
