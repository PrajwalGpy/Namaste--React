import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import Body from "./Components/Body";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import ReastorentMenu from "./Components/RestorentMenu";
let appRender = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restorent/:rid",
        element: <ReastorentMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRender}></RouterProvider>);
