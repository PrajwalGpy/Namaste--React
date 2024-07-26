import { CDN_URL } from "../utils/consent";

let RestorentTonnglemenu = ({ data }) => {
  console.log(data);
  return data.map((i) => {
    console.log(i);
    return i.card.card.itemCards.map((ip) => {
      return (
        <div>
          <p className="text-left px-6">{ip.card.info.name}</p>
          <p>{ip.card.info.price / 100}</p>
          <p>{ip.card.info.description}</p>
          <img src={CDN_URL + ip.card.info.imageId} alt="" />
        </div>
      );
    });
  });
};
export default RestorentTonnglemenu;
