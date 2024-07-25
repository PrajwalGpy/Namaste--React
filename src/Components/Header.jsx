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
    <div className="navabr-container">
      <Link to="/">
        <img src="/QuickBiteLOGO1.png" alt="logo" />
      </Link>
      <div className="nav-item">
        <ul>
          <li>{console.log(useOnline2)}</li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/Contact">ABout</Link>
          </li>
          <li>
            <Link to="/Contact">Minu</Link>
          </li>
          <li>
            <Link to="/Glosery">Glosery</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li onClick={chnsge} className="login">
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
