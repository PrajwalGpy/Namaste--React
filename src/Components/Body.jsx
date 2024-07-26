import React, { useState, useEffect } from "react";
import { resList } from "../utils/resCardsItems";
import RestList, { GetPromoted } from "./Reastorent";
import Shrimran from "./Shrimran";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  let [fillter, setFileter] = useState([]);
  let [filleredres, setfilleredres] = useState([]);
  let [tecxt, setText] = useState("");
  let PromoTed = GetPromoted(RestList);

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
    <div className="w-[80%] m-auto">
      <div className="search">
        <input
          type="text"
          id="search-bar"
          onChange={(e) => {
            return setText(e.target.value);
          }}
          className="p-2 m-2 font-semibold  rounded-md border-2 border-black"
        />
        <button
          onClick={() => {
            let filter = fillter.filter((item) => {
              return item.info.name.toLowerCase().includes(tecxt.toLowerCase());
            });
            return setfilleredres(filter);
          }}
          className="p-2 m-2 font-semibold  bg-slate-200 rounded-md hover:bg-slate-300"
        >
          Search
        </button>
        <button
          onClick={fill}
          className="p-2 m-2 font-semibold  bg-slate-200 rounded-md hover:bg-slate-300"
        >
          top rated Reastorent
        </button>
        <button
          onClick={reset}
          className="p-2 m-2 font-semibold bg-slate-200 rounded-md hover:bg-slate-300"
        >
          Reset
        </button>
      </div>
      {filleredres.length === 0 ? (
        <h1>Nothig</h1>
      ) : (
        <div className="flex flex-wrap  items-center   ">
          {filleredres.map((item) => {
            return item.info.avgRating >= 4.5 ? (
              <Link key={item.info.id} to={"/restorent/" + item.info.id}>
                <PromoTed data={item} />
              </Link>
            ) : (
              <Link key={item.info.id} to={"/restorent/" + item.info.id}>
                <RestList data={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
