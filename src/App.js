import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./styles.css";

import Home from "./pages/HomePage/Home";
import S24UXWorks from "./pages/ProjectsPage/S24/UXWorks";
import Layout from "./components/Layouts/Layout";
import ErrorPage from "./pages/ErrorPage";
import DancerWebsite from "./pages/ProjectsPage/Dance/DancerWebsite";

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
        path: "ux-s24",
        element: <S24UXWorks />,
      },
      {
        path: "ux-dancer",
        element: <DancerWebsite />,
      },
    ],
    errorElement: <ErrorPage />,
  },

  { path: "/", element: <ScrollRestoration /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
    //   <ScrollRestoration />
    // </RouterProvider>
  );
}

export default App;
