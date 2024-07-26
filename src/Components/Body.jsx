import React, { useState, useEffect } from "react";
import { resList } from "../utils/resCardsItems";
import RestList from "./Reastorent";
import Shrimran from "./Shrimran";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  let [fillter, setFileter] = useState([]);
  let [filleredres, setfilleredres] = useState([]);
  let [tecxt, setText] = useState("");

  function fill() {
    let fillter1 = fillter.filter((item) => {
      return item.info.avgRating >= 4.5;
    });
    setfilleredres(fillter1);
  }
  function reset() {
    setfilleredres(fillter);
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
    setfilleredres(
      josnData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log(fillter);

  let idOnline = useOnline();

  if (!idOnline) {
    return <h1>Offline</h1>;
  }
  return fillter.length == [] ? (
    <Shrimran />
  ) : (
    <div className="main-contianer">
      <div className="search">
        <input
          type="text"
          id="search-bar"
          onChange={(e) => {
            return setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let filter = fillter.filter((item) => {
              return item.info.name.toLowerCase().includes(tecxt.toLowerCase());
            });
            return setfilleredres(filter);
          }}
        >
          Search
        </button>
        <button onClick={fill}>top rated Reastorent</button>
        <button onClick={reset}>Reset</button>
      </div>
      {filleredres.length === 0 ? (
        <h1>Nothig</h1>
      ) : (
        <div className="flex flex-wrap mx-32">
          {filleredres.map((item) => {
            return (
              <Link key={item.info.id} to={"/restorent/" + item.info.id}>
                <RestList data={item} />;
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
