import React from "react";
import { goo } from "../utils/resCardsItems";
import RestList from "./Reastorent";

const Body = () => {
  return (
    <div className="main-contianer">
      <div className="search">
        <input type="text" id="search-bar" />
        <label htmlFor="search-bar">Search</label>
      </div>
      <div className="resContiner">
        {goo.map((item) => {
          return <RestList data={item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
