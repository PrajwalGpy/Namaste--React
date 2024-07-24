import React from "react";
import NavBar from "./Components/Header";

import "./App.css";
import { Outlet } from "react-router-dom";
export let App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
