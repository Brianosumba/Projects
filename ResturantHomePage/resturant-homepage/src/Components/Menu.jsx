import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActivecategory] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("../menu.json");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching the menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory, menuItems]);

  return (
    <div id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-tabs">
        {["all", "breakfast", "lunch", "dinner", "dessert"].map((category) => (
          <button
            key={category}
            onClick={() => setActivecategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
