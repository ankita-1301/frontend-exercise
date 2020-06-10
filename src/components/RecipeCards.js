import React from "react";
import recipeData from "../../recipes.json";

const RecipeCards = (props) => {
  console.log(recipeData);
  return (
    <div className="grid-container">
      {recipeData.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <img
              src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
              alt="Avatar"
            />
            <h2>{recipe.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCards;
