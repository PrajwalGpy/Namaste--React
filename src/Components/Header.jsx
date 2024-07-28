import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UseContext from "../utils/contectapi";
import { useSelector } from "react-redux";

const NavBar = () => {
  let itemList = useSelector((store) => store.cart.items);
  let { userName } = useContext(UseContext);
  console.log("logggg", userName);
  let [login, setLogin] = useState(true);
  let useOnline2 = useOnline();
  function chnsge() {
    setLogin((prev) => !prev);
  }
  return (
    <div className="flex justify-between px-10 my-8 shadow-lg items-center">
      <Link to="/">
        <img src="/QuickBiteLOGO1.png" alt="logo" />
      </Link>
      <div className=" ">
        <ul className="flex">
          <li className="mx-10 w-8 text-xl">
            <Link to="/">Menu</Link>
          </li>
          <li className="mx-10 w-8 text-xl">
            <Link to="/Contact">ABout</Link>
          </li>
          <li className="mx-10 w-8 text-xl">
            <Link to="/Contact">Menu</Link>
          </li>

          <li className="mx-10 w-8 text-xl">
            <Link to="/Glosery">Glosery</Link>
          </li>
          <li className="mx-10 w-8 text-xl">
            <Link to="/cart">Cart({itemList.length}items)</Link>
          </li>
          {/* <li>{userName}</li> */}
          <li onClick={chnsge} className="mx-10 w-8 text-xl">
            {login ? "Login" : "LogOut"}{" "}
            <div
              className="online"
              style={{ background: useOnline2 ? "green" : "red" }}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
