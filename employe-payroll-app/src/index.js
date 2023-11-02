import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context

import AuthenticationProvider from "./context/AuthenticationContext";

// Routing

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root";
import Index from "./routes";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Personal from "./routes/personal";
import Login from "./routes/login";
const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "personal",
        element: <Personal />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthenticationProvider>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthenticationProvider>
);
