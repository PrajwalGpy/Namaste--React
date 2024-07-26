import CDN_URL from "../utils/consent";

const RestList = (props) => {
  let { data } = props;
  let { name, cuisines, costForTwo, cloudinaryImageId, avgRating } = data?.info;
  return (
    <div className="m-10 w-[200px]  hover:shadow-indigo-500/40 bg-gray-300">
      <div className="imgcont">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating}</p>
    </div>
  );
};
export default RestList;
