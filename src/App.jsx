import React, { useContext, useState, useEffect } from "react";
import NavBar from "./Components/Header";
import UseContext from "./utils/contectapi";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
export let App = () => {
  let goooo = " Prajwal Gopal Poojary";
  let [userdname, setUsername] = useState(goooo);

  return (
    <Provider store={appStore}>
      <div>
        <UseContext.Provider value={{ userName: userdname, setUsername }}>
          <NavBar />
          <Outlet />
        </UseContext.Provider>
      </div>
    </Provider>
  );
};
