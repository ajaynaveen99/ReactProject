export default function ResturantCard(props) {

  const { name, price, rating, deliveryTime, cuisine, image } = props.restro;
  console.log(props);
  console.log(props.restro);
  return (
    <> 
     <div className="restroCard" >
      <img src={image} alt="Resturant Image"
        width={200} height={200} />
      <h2>{name}</h2>
      <h3>Price:{price}</h3>
      <h3>Rating:{rating}</h3>
      <h3>Delivery Time:{deliveryTime}</h3>
      <h3>Cuisine: {cuisine}</h3></div>
    </>
  );
}