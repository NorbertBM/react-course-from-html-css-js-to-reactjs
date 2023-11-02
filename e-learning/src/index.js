import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import RefactoredApp from "./RefactoredApp";

// Routing

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routs

import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import About from "./routes/about";
import Index from "./routes/index";
import Login from "./routes/login";
import FruitsApp from "./Examples/Context/FruitsApp";

// Context
import ThemeWrapper from "./context/ThemeWrapper";
import StyledComponent from "./Examples/StyledComponent";
// Create a router

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1 className="title">Hello from React Router </h1>,
    // element: <RefactoredApp />,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
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
        path: "login",
        element: <Login />,
      },
    ],
  },
  // {
  //   path: "home",
  //   element: <Home />,
  // },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeWrapper>
    <React.StrictMode>
      {/* <RefactoredApp /> */}
      <RouterProvider router={router} />
      {/* <FruitsApp /> */}
      {/* <StyledComponent /> */}
    </React.StrictMode>
  </ThemeWrapper>
);
