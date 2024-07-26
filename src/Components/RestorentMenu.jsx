import { useParams } from "react-router-dom";
import useResorebtMenu from "../utils/useRestorentMenu";

import Shrimran from "./Shrimran";

const ReastorentMenu = () => {
  let { resId } = useParams();
  console.log("resId:", resId);
  let restData = useResorebtMenu(resId);

  console.log("restData:", restData);
  if (!restData) return <Shrimran />;

  try {
    let { name, costForTwoMessage, cuisines } =
      restData?.data?.cards[2]?.card?.card?.info || {};
    let itemCards =
      restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards || [];

    console.log("itemCards:", itemCards);

    return (
      <div className="  w-[80%] m-auto ">
        <h1 className="text-5xl font-bold ">{name}</h1>
        <h2 className=" font-bold ">{costForTwoMessage}</h2>
        <p className=" font-bold ">
          {cuisines ? cuisines.join(", ") : "No cuisines available"}
        </p>
        <ul>
          {itemCards.length > 0 ? (
            itemCards.map((item, index) => (
              <li key={index}>
                {item.card.info.name} Rs.{" "}
                {item.card.info.finalPrice / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            ))
          ) : (
            <li>No items available</li>
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error accessing data:", error);
    return <Shrimran />;
  }
};

export default ReastorentMenu;
