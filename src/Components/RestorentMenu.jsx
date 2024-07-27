import { useParams } from "react-router-dom";
import useRestorentMenu from "../utils/useRestorentMenu"; // Fixed typo in import
import { useState } from "react";
import RestorentTonnglemenu from "./RestorentTonnglemenu";
import Shrimran from "./Shrimran";

const RestorentMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-5xl font-bold">{name}</h1>
      <h2 className="font-bold">{costForTwoMessage}</h2>
      <p className="font-bold">
        {cuisines ? cuisines.join(", ") : "No cuisines available"}
      </p>
      {categaryfilter.map((i, index) => {
        // Added index to key
        return (
          <div
            key={index}
            className="bg-slate-300 w-6/12 mx-auto my-8 py-2 shadow-lg text-center text-xl font-bold"
          >
            <div className="flex justify-between px-3">
              <p>{i?.card?.card?.title}</p>
              <span onClick={() => toggle(index)} className="cursor-pointer">
                V
              </span>
            </div>
            {activeIndex === index && (
              <RestorentTonnglemenu data={categaryfilter} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestorentMenu; // Fixed typo in export
