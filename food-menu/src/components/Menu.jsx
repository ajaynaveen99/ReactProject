import { useState } from "react";

function Menu({ items }) {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setMenuItems(filtered);
    }
  };

  return (
    <div>
      <div className="btn-container">
        {allCategories.map((cat, index) => (
          <button key={index} className="filter-btn" onClick={() => filterItems(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="section-center">
        {menuItems.map(({ id, title, price, img, desc }) => (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Menu;
