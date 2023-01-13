import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { ResetCss } from "./resetCss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<h1>Chargement...</h1>}>
      <ResetCss />
      <RouterProvider router={Router} />
    </React.Suspense>
  </React.StrictMode>
);
