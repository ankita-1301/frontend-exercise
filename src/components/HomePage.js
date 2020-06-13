import React from "react";
import RecipeCards from "./RecipeCards";
import recipeData from "../../recipes.json";

const HomePage = () => {
  return <RecipeCards dataSource={recipeData} />;
};

export default HomePage;
