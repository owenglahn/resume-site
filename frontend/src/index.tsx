import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>
);
