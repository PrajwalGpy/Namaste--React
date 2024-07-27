import { useDispatch, useSelector } from "react-redux";
import Retorentinneritems from "./retorentinneritems";
import { removeAll } from "../utils/cartSlice";

const Cart = () => {
  let selecter = useSelector((store) => store.cart.items);
  let dispatch = useDispatch();
  function removeall() {
    return dispatch(removeAll());
  }
  return (
    <div>
      <div>cart</div>
      <button onClick={removeall}>Remove all</button>
      <div className="">
        {selecter.map((item, index) => (
          <Retorentinneritems key={index} ip={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
