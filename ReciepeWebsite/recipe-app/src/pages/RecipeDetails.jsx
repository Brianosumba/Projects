import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };
    getRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>Ingredients</h2>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
