import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipesByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return response.data.meals;
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};
