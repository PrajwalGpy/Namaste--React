import React, { useState } from "react";
import { goo } from "../utils/resCardsItems";
import RestList from "./Reastorent";

const Body = () => {
  let [fillter, setFileter] = useState(goo);

  function fill() {
    let fillter1 = goo.filter((item) => {
      return item.info.avgRating > 4;
    });
    setFileter(fillter1);
  }
  function cooo() {
    setFileter(goo);
  }
  console.log(fillter);
  return (
    <div className="main-contianer">
      <div className="search">
        {/* <input type="text" id="search-bar" />
        <label htmlFor="search-bar">Search</label> */}
        <button onClick={fill}>top rated Reastorent</button>
        <button onClick={cooo}>Reset</button>
      </div>
      <div className="resContiner">
        {fillter.map((item) => {
          return <RestList data={item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
