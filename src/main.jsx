import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Mounting from "./components/Mounting";
import Updating from "./components/Updating";
import UnMounting from "./components/UnMounting";
import Body from "./Body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "mounting",
        element: <Mounting />,
      },
      {
        path: "umnounting",
        element: <UnMounting />,
      },
      {
        path: "updating",
        element: <Updating />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
