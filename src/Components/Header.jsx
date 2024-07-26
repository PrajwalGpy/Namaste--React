import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const NavBar = () => {
  let [login, setLogin] = useState(true);
  let useOnline2 = useOnline();
  function chnsge() {
    setLogin((prev) => !prev);
  }
  return (
    <div className="flex justify-between px-10 my-8 shadow-lg">
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
            <Link to="/Contact">Minu</Link>
          </li>
          <li className="mx-10 w-8 text-xl">
            <Link to="/Glosery">Glosery</Link>
          </li>
          <li className="mx-10 w-8 text-xl">
            <Link to="/Contact">Contact</Link>
          </li>
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
