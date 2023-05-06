import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx"; 
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./Components/ErrorElement/ErrorElement.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { SharedLayout } from "./Components/SharedLayout/SharedLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: '*',
        element: <h1>404</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
