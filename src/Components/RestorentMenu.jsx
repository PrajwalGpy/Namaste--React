import { useState, useEffect } from "react";
import Shrimran from "./Shrimran";

const ReastorentMenu = () => {
  let [restData, setRestData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      let response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0153961&lng=77.6346399&restaurantId=391270&catalog_qa=undefined&submitAction=ENTER"
      );
      let json = await response.json();
      setRestData(json);
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(restData);
  if (!restData) return <Shrimran />;
  try {
    let { name, costForTwoMessage, cuisines } =
      restData.data.cards[2].card.card.info || {};
    let { itemCards } =
      restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card;

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
