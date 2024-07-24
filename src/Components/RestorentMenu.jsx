import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/consent";
import Shrimran from "./Shrimran";

const ReastorentMenu = () => {
  let [restData, setRestData] = useState(null);
  let { resId } = useParams();
  console.log("resId:", resId);

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]); // Add resId to the dependency array

  const fetchData = async () => {
    try {
      let response = await fetch(`${MENU_API}${resId}`);
      let json = await response.json();
      setRestData(json);
      console.log("Fetched data:", json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
      <div className="rest-menu-container">
        <h1>{name}</h1>
        <h2>{costForTwoMessage}</h2>
        <p>{cuisines ? cuisines.join(", ") : "No cuisines available"}</p>
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
