import CDN_URL from "../utils/consent";
import "../App.css";

const RestList = (props) => {
  let { data } = props;
  let { name, cuisines, costForTwo, cloudinaryImageId, avgRating } = data?.info;
  return (
    <div className="gap-10 w-[240px] hover:scale-90 transition-transform m-6 relative">
      <div className="object-contain w-60 h-[10rem]">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="w-[100%] h-[100%] object-cover rounded-[1.125rem]"
        />
      </div>
      <h2 className="font-bold text-base">{name}</h2>
      <p>{costForTwo}</p>
      <p className="cuisines">{cuisines.join(",")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export let GetPromoted = (RestList) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-neutral-50 z-10 p-1 rounded">
          Promoted
        </label>
        <RestList {...props} />
      </div>
    );
  };
};

export default RestList;
