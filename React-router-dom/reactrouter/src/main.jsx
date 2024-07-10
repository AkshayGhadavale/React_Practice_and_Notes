import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../src/Home/Home.jsx";
import Company from "../src/Pages/Company.jsx";
import Marketplace from "../src/Pages/Marketplace.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
