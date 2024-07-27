import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import Body from "./Components/Body";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import ReastorentMenu from "./Components/RestorentMenu";
import Cart from "./Components/Cart.jsx";

let Glosery = lazy(() => import("./Components/Glosery"));
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
        element: <Contact name={"Prajwal"} />,
      },
      {
        path: "/restorent/:resId",
        element: <ReastorentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Glosery",
        element: (
          <Suspense>
            <Glosery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRender}></RouterProvider>);
