import {useState} from "react";
function Header() {
  return (<>
   <div className="header">
    <img className="logo"
      src="https://i.pinimg.com/1200x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"
      alt="Logo"
      width={100}
      height={100}
    />
   <ul className="nav-items">
      <li>Home</li>
      <li> About</li>
      <li>Contact</li>
      <li>Cart</li></ul>
      </div>
    </>
  
  );
}
 let restaurants = [
  {
    "id": 1,
    "name": "Spice Garden",
    "cuisine": "Indian",
    "rating": 4.5,
    "deliveryTime": "30 mins",
    "image": "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/11/06222823/best-indian-restaurants-in-kl-kuala-lumpur-malaysia-ginriksha-1260x900.jpg",
    "location": "MG Road, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 2,
    "name": "Pasta Palace",
    "cuisine": "Italian",
    "rating": 4.2,
    "deliveryTime": "25 mins",
    "image": "https://tse2.mm.bing.net/th/id/OIP.j2RDGnzLPDIuVzDQa73hewAAAA?pid=ImgDet&w=300&h=400&rs=1&o=7&rm=3",
    "location": "Indiranagar, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 3,
    "name": "Sushi World",
    "cuisine": "Japanese",
    "rating": 4.8,
    "deliveryTime": "40 mins",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f3/9d/a0/caption.jpg?w=1200&h=-1&s=1",
    "location": "Koramangala, Bengaluru",
    "priceRange": "$$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 4,
    "name": "Burger Hub",
    "cuisine": "American",
    "rating": 4.0,
    "deliveryTime": "20 mins",
    "image": "https://d223iynz9gx8rj.cloudfront.net/uploads/michelin-star-restaurants-in-india-3-1677221541.jpg",
    "location": "Whitefield, Bengaluru",
    "priceRange": "$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 5,
    "name": "Taco Fiesta",
    "cuisine": "Mexican",
    "rating": 4.3,
    "deliveryTime": "35 mins",
    "image": "https://d223iynz9gx8rj.cloudfront.net/uploads/michelin-star-restaurants-in-india-3-1677221541.jpg",
    "location": "HSR Layout, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 6,
    "name": "Dragon Wok",
    "cuisine": "Chinese",
    "rating": 4.1,
    "deliveryTime": "30 mins",
    "image": "https://livingoutjoy.com/wp-content/uploads/2023/02/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus-2048x1367.jpg",
    "location": "BTM Layout, Bengaluru",
    "priceRange": "$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 7,
    "name": "Falafel House",
    "cuisine": "Middle Eastern",
    "rating": 4.6,
    "deliveryTime": "45 mins",
    "image": "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/11/06222823/best-indian-restaurants-in-kl-kuala-lumpur-malaysia-ginriksha-1260x900.jpg",
    "location": "Jayanagar, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 8,
    "name": "Pizza Planet",
    "cuisine": "Italian",
    "rating": 4.4,
    "deliveryTime": "25 mins",
    "image": "https://picsum.photos/seed/pizzaplanet/300/200",
    "location": "Malleshwaram, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 9,
    "name": "BBQ Nation",
    "cuisine": "Grill & Barbecue",
    "rating": 4.7,
    "deliveryTime": "50 mins",
    "image": "https://picsum.photos/seed/bbqnation/300/200",
    "location": "Marathahalli, Bengaluru",
    "priceRange": "$$$",
    "avgPrice": "₹300–₹500"
  },
  {
    "id": 10,
    "name": "Healthy Bowl",
    "cuisine": "Salads & Smoothies",
    "rating": 4.5,
    "deliveryTime": "20 mins",
    "image": "https://picsum.photos/seed/healthybowl/300/200",
    "location": "Electronic City, Bengaluru",
    "priceRange": "$$",
    "avgPrice": "₹300–₹500"
  }
]


function Body() {

  const [currentRating, setCurrentRating]= useState(restaurants);

  return (
    <>
    <button className="btn-filter" onClick={()=> {
      const restra=(currentRating.filter(restro => restro.rating > 4.5))
      setCurrentRating(restra)}}
      >Above4.5</button>
    <div className="restroCard-list">

      

      {currentRating.map((restroCard)=>(<ResturantCard  restro={restroCard}/>))}
           
     </div></>
  );
}

function ResturantCard(props) {

  const {name, price, rating, deliveryTime, cuisine, image} =props.restro;
  console.log(props);
  console.log(props.restro);
  return(
    <>  <div className="restroCard" >
     
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

export default function App() {
  return (
    <div>
    <Header />
    <Body />
    </div>
  );
}
