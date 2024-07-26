let RestorentTonnglemenu = ({ data }) => {
  console.log(data);
  return data.map((i) => {
    console.log(i);
    return i.card.card.itemCards.map((ip) => {
      return (
        <div>
          <p>{ip.card.info.name}</p>
          <p></p>
          <p></p>
        </div>
      );
    });
  });
};
export default RestorentTonnglemenu;
