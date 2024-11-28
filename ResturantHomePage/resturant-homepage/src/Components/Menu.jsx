import React, { useEffect, useState } from "react"; // Importing React, useEffect, and useState hooks for managing state and side effects
import axios from "axios"; // Importing axios for making HTTP requests
import "../Styles/Menu.css"; // Importing CSS file for styling the menu component

// Main functional component for the Menu
const Menu = () => {
  // State to store all menu items fetched from the JSON file
  const [menuItems, setMenuItems] = useState([]);

  // State to store the filtered menu items to display based on category selection
  const [filteredItems, setFilteredItems] = useState([]);

  // State to keep track of the active category (default is "all")
  const [activeCategory, setActiveCategory] = useState("all");

  // useEffect to fetch menu items from a JSON file when the component mounts
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("../menu.json"); // Fetching menu data
        setMenuItems(response.data); // Storing the fetched data in the state
        setFilteredItems(response.data); // Initially showing all menu items
      } catch (error) {
        console.error("Error fetching the menu items:", error); // Log error if fetching fails
      }
    };
    fetchMenuItems(); // Trigger the data fetch
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Update the active category state
    if (category === "all") {
      setFilteredItems(menuItems); // Show all items if "all" is selected
    } else {
      // Filter items based on the selected category
      setFilteredItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <div id="menu" className="menu">
      {" "}
      {/* Main container for the menu */}
      <h2>Our Menu</h2> {/* Header for the menu section */}
      {/* Tabs for category selection */}
      <div className="menu-tabs">
        {["all", "breakfast", "lunch", "dinner", "dessert"].map((category) => (
          <button
            key={category} // Unique key for each category
            onClick={() => handleCategoryChange(category)} // Attach category change handler
            className={activeCategory === category ? "active" : ""} // Highlight the active category
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
            {/* Capitalize the first letter of the category */}
          </button>
        ))}
      </div>
      {/* Display the filtered menu items */}
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            {" "}
            {/* Container for each menu item */}
            <img src={item.image} alt={item.name} />{" "}
            {/* Image for the menu item */}
            <h3>{item.name}</h3> {/* Name of the menu item */}
            <p>{item.price}</p> {/* Price of the menu item */}
            <p>{item.description}</p> {/* Description of the menu item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; // Exporting the component for use in other parts of the application
