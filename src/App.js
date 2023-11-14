import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {} from "@chakra-ui/react";

import Home from "./pages/HomePage/Home";
import Sandbox from "./pages/SandboxPages/Sandbox";
import UXWorks from "./pages/ProjectsPage/UXWorks";
import Layout from "./components/Layouts/Layout";
import ErrorPage from "./pages/ErrorPage";

// This simple app doesn't necessarily use route, but I want to practise the setup here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sandbox",
        element: <Sandbox />,
      },
      {
        path: "ux",
        element: <UXWorks />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
