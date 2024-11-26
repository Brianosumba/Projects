import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]); // All menu items from jsonfile
  const [filteredItems, setFilteredItems] = useState([]); // Filtered items to display
  const [activeCategory, setActiveCategory] = useState("all"); // "all" is the default category

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("../menu.json");
        setMenuItems(response.data);
        setFilteredItems(response.data); // Display all items initially
      } catch (error) {
        console.error("Error fetching the menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredItems(menuItems); // Show all items for "all" category
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category === category) // Filter by category
      );
    }
  };

  return (
    <div id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-tabs">
        {["all", "breakfast", "lunch", "dinner", "dessert"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
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
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
