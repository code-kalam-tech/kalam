import "./index.css";

import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
    errorElement: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
