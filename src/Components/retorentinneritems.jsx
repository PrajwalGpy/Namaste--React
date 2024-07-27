import { useDispatch } from "react-redux";
import CDN_URL from "../utils/consent";
import { add } from "../utils/cartSlice";

let Retorentinneritems = ({ ip }) => {
  let dispatch = useDispatch();
  function handleclick(ip) {
    dispatch(add(ip));
  }

  return (
    <div className="flex justify-between m-10  border-slate-600 border-b-4 p-7 items-center">
      <div className="flex flex-col w-9/12">
        <p className="text-left px-6">{ip.card.info.name}</p>
        <p className="text-left px-6"> ₹{ip.card.info.price / 100}</p>
        <p className="text-left px-6"> {ip.card.info.description}</p>
      </div>
      <div className="">
        <div className="w-40 h-40 relative ">
          <button
            className=" absolute bg-black text-white font-semibold text-base p-1 top-0 right-7 "
            onClick={() => handleclick(ip)}
          >
            ADD TO CART
          </button>
          <img
            src={CDN_URL + ip.card.info.imageId}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
export default Retorentinneritems;
