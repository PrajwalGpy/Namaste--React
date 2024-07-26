import CDN_URL from "../utils/consent";
import ".././App.css";

const RestList = (props) => {
  let { data } = props;
  let { name, cuisines, costForTwo, cloudinaryImageId, avgRating } = data?.info;
  return (
    <div className="gap-10 w-[240px]  hover:scale-90  transition-transform m-6 ">
      <div className=" object-contain w-60 h-[10rem] ">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="  w-[100%] h-[100%] object-cover rounded-[1.125rem]"
        />
      </div>
      <h2 className="font-bold text-base">{name}</h2>
      <p>{costForTwo}</p>
      <p className="cuisines">{cuisines.join(",")}</p>
      <p>{avgRating}</p>
    </div>
  );
};
export default RestList;
