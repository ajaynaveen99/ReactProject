import React from "react";
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const routerpage = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to="/login" replace />},
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <UserDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerpage} />
);
