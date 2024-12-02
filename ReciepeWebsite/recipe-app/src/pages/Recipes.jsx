import React, { useEffect, useState } from "react";
import { fetchRecipesByCategory } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [category, setCategory] = useState("chicken");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipesByCategory(category); // Use the category state
        setRecipes(data || []); // Fallback to an empty array
        setFilteredRecipes(data || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
        setFilteredRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, [category]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  if (loading) return <p>Loading recipes...</p>;

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
