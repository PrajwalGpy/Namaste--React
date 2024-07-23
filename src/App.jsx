import React, { useState } from "react";

let Gooo = () => {
  let [color, setColor] = useState(true);

  function click() {
    setColor((prev) => !prev);
  }

  return (
    <div>
      <h1
        className="gooo"
        style={{ background: color ? "red" : " green " }}
        onClick={click}
      >
        What is your name
      </h1>
    </div>
  );
};

export let App = () => {
  return (
    <div>
      <Gooo />
      <div>Goooooo</div>
      <div>
        Goooooo
        <div>Goooooo</div>
      </div>
    </div>
  );
};
