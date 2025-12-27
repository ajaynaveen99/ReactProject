import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestuarentMenu = () => {
  const { id } = useParams(); // dynamic restaurant id
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    if (id) fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/menus?restaurantId=${id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      // json-server always returns array
      if (!json.length) {
        setMenu([]);
        setRestaurantName("No menu found");
        return;
      }

      const restaurant = json[0];

      setRestaurantName(restaurant.name);

      setMenu(
        restaurant?.cards?.cards?.[0]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards || []
      );
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <div>
      <h1>Name of the Restaurant</h1>
      <h2>{restaurantName}</h2>

      {menu.length === 0 && <h3>No items available</h3>}

      {menu.map((item, index) =>
        item?.card?.card?.itemCards ? (
          <div key={index}>
            <h2>{item.card.card.title}</h2>

            {item.card.card.itemCards.map((dish) => {
              const { id, name, price, defaultPrice } = dish.card.info;
              const finalPrice = price ?? defaultPrice;

              return (
                <li key={id}>
                  {name} – ₹{finalPrice ? finalPrice / 100 : "N/A"}
                </li>
              );
            })}
          </div>
        ) : null
      )}
    </div>
  );
};

export default RestuarentMenu;
