import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/recipes">Recipes</Link>
      </nav>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Recipes Route */}
        <Route path="recipes" element={<Recipes />} />

        {/* Recipe Details Route */}
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
