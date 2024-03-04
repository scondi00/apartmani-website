function Cijena(props) {
  const maxPrice = props.price.reduce((max, item) => {
    return Math.max(max, item.pricePerNight);
  }, -Infinity);

  const minPrice = props.price.reduce((min, item) => {
    return Math.min(min, item.pricePerNight);
  }, Infinity);

  return (
    <>
      <h4>Maximalna cijena: {maxPrice}</h4>
      <h4>Minimalna cijena: {minPrice}</h4>
    </>
  );
}
export default Cijena;
