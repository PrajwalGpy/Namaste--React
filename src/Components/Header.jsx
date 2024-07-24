import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let [login, setLogin] = useState(true);
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
          <li>
            <Link to="/Contact">ABout</Link>
          </li>
          <li>
            <Link to="/Contact">Minu</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li onClick={chnsge}>{login ? "Login" : "LogOut"}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
