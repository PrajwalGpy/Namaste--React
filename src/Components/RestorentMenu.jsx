import { useParams } from "react-router-dom";
import useRestorentMenu from "../utils/useRestorentMenu"; // Fixed typo in import
import { useState } from "react";
import RestorentTonnglemenu from "./RestorentTonnglemenu";

import Shrimran from "./Shrimran";

const RestorentMenu = () => {
  let [tongle, settongle] = useState(true);
  // Fixed typo in component name
  let { resId } = useParams();
  console.log("resId:", resId);
  let restData = useRestorentMenu(resId);

  console.log("restData:", restData);
  if (!restData) return <Shrimran />;

  let { name, costForTwoMessage, cuisines } =
    restData?.data?.cards[2]?.card?.card?.info || {};
  let itemCards =
    restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  console.log(
    "itemCards:",
    restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  let categaryfilter =
    restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categaryfilter);

  console.log("kanle");

  function togale() {
    settongle((prev) => !prev); // Corrected the state update logic
  }
  console.log(tongle);

  return (
    <div className="  w-[80%] m-auto ">
      <h1 className="text-5xl font-bold ">{name}</h1>
      <h2 className=" font-bold ">{costForTwoMessage}</h2>
      <p className=" font-bold ">
        {cuisines ? cuisines.join(", ") : "No cuisines available"}
      </p>
      {categaryfilter.map((i, index) => {
        // Added index to key
        return (
          <div
            key={index}
            className="bg-gray-400 w-[100%]  m-10 text-center text-xl font-bold"
          >
            <div className="flex justify-between px-3">
              <p>{i?.card?.card?.title}</p>
              <span onClick={togale}>V</span>
            </div>
            {!tongle ? <RestorentTonnglemenu data={categaryfilter} /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default RestorentMenu; // Fixed typo in export
