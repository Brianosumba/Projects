import React, { useEffect, useState } from "react";
import { fetchRecipesByCategory } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // Store all fetched recipes
  const [searchTerm, setSearchTerm] = useState(""); // User's search input
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Recipes matching the search term
  const [category, setCategory] = useState("chicken"); // Selected category (default: chicken)
  const [loading, setLoading] = useState(true); // Show loading state

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true); // Indicate loading state
      try {
        const data = await fetchRecipesByCategory(category); // Fetch recipes by category
        setRecipes(data || []); // Set recipes (fallback to empty array if no data)
        setFilteredRecipes(data || []); // Set filtered recipes initially to all fetched recipes
      } catch (error) {
        console.error("Error fetching recipes:", error); // Log errors
        setRecipes([]); // Reset states on error
        setFilteredRecipes([]);
      } finally {
        setLoading(false); // End loading state
      }
    };

    getRecipes(); // Fetch data on component mount or category change
  }, [category]); // Effect dependency: runs when `category` changes

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  const handleSearchClick = () => {
    const filtered = recipes.filter(
      (recipe) =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) // Match recipes
    );
    setFilteredRecipes(filtered); // Update filtered recipes state
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category state
  };

  if (loading) return <p>Loading recipes...</p>; // Show loading message

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="seafood">Seafood</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search Recipes"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearchClick}>Search</button>

      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
