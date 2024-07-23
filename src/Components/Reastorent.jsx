import CDN_URL from "../utils/consent";

const RestList = (props) => {
  let { data } = props;
  let { name, cuisines, costForTwo, cloudinaryImageId } = data?.info;
  return (
    <div className="res-container">
      <div className="imgcont">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      <p>{cuisines.join(",")}</p>
    </div>
  );
};
export default RestList;
