import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Flexibles = lazy(() => import("./pages/Flexibles"));

export const Router = createBrowserRouter([
  { path: "/", element: <h1>Hello, World</h1> },
  {
    path: "/flexible",
    children: [
      {
        path: "",
        element: <Flexibles />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page non trouvé</h1>,
  },
]);
