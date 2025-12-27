export default function ResturantCard(props) {
  console.log("props in restro card",props.restro);
  console.log("props in restro card info",props.restro.card.card.info);

  const { name, cloudinaryImageId,avgRating,costForTwo,cuisines,sla } = props.restro.card.card.info;
  console.log(props);
  console.log(props.restro);
  return (
    <> 
     <div className="restroCard" >
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Resturant Image"
        width={200} height={200} />
      <h2>{name}</h2>
      <h3>Price:{costForTwo}</h3>
      <h3>Rating:{avgRating}</h3>
      <h3>Delivery Time:{sla.deliveryTime}</h3>
      <h3>Cuisine: {cuisines[1]}</h3></div>
    </>
  );
}