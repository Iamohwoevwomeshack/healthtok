import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <h1>about</h1>,
  },
  {
    path: "/",
    element: <h1>appiontment</h1>,
  },
  {
    path: "/",
    element: <h1>contact us</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
