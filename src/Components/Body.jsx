import React, { useState, useEffect } from "react";
import { resList } from "../utils/resCardsItems";
import RestList from "./Reastorent";
import Shrimran from "./Shrimran";

const Body = () => {
  let [fillter, setFileter] = useState([]);

  function fill() {
    let fillter1 = fillter.filter((item) => {
      return item.info.avgRating >= 4.5;
    });
    setFileter(fillter1);
  }
  function reset() {
    setFileter(feacthData);
  }
  useEffect(() => {
    feacthData();
  }, []);

  async function feacthData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0153961&lng=77.6346399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let josnData = await data.json();
    console.log(josnData);
    setFileter(
      josnData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log(fillter);
  return fillter.length === 0 ? (
    <Shrimran />
  ) : (
    <div className="main-contianer">
      <div className="search">
        {/* <input type="text" id="search-bar" />
        <label htmlFor="search-bar">Search</label> */}
        <button onClick={fill}>top rated Reastorent</button>
        <button onClick={reset}>Reset</button>
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
