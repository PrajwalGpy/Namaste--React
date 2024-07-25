import ReastorentMenu from "../Components/RestorentMenu";
import { MENU_API } from "./consent";
import { useState, useEffect } from "react";

const useResorebtMenu = (resId) => {
  let [restInfo, setrestInfo] = useState();
  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]); // Add resId to the dependency array

  const fetchData = async () => {
    let response = await fetch(`${MENU_API}${resId}`);
    let json = await response.json();
    setrestInfo(json);
    console.log("Fetched data:", json);
  };
  return restInfo;
};
export default useResorebtMenu;
