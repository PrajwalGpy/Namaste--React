import { useDispatch } from "react-redux";
import CDN_URL from "../utils/consent";

import Retorentinneritems from "./retorentinneritems";

let RestorentTonnglemenu = ({ data }) => {
  console.log(data);
  return data.map((i) => {
    console.log("jpppp", i);
    return i.card.card.itemCards.map((ip, index) => {
      return (
        <div
          key={index}
          // className="flex justify-between m-10  border-slate-600 border-b-4 p-7 items-center"
        >
          <Retorentinneritems ip={ip} />
        </div>
      );
    });
  });
};
export default RestorentTonnglemenu;
