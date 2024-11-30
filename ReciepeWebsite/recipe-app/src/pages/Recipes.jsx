import React, { useEffect, useState } from "react";
import { fetchRecipesByCategory } from "../services/api";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipesByCategory("Seafood");
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div>
      <h1>Recipes</h1>
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
