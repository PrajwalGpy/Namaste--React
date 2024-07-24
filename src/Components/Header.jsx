import React, { useState } from "react";

const NavBar = () => {
  let [login, setLogin] = useState(true);
  function chnsge() {
    setLogin((prev) => !prev);
  }
  return (
    <div className="navabr-container">
      <img src="/QuickBiteLOGO1.png" alt="logo" />
      <div className="nav-item">
        <ul>
          <li>ABout</li>
          <li>Minu</li>
          <li>Contact</li>
          <li onClick={chnsge}>{login ? "Login" : "LogOut"}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
