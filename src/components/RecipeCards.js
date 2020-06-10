import React from "react";
import recipeData from "../../recipes.json";

const RecipeCards = (props) => {
  console.log(recipeData);
  const strongStyle = {
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "black",
  };
  return (
    <div className="grid-container">
      {recipeData.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <img
              src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
              alt="Avatar"
            />
            <div className="card-details">
              <h3
                style={{
                  paddingBottom: 0,
                  marginTop: "10px",
                  lineheight: "0.4em",
                }}
              >
                {recipe.name}
              </h3>
              <h5 style={{ margin: 0, padding: 0 }}>{recipe.headline}</h5>
              <hr />
              <p>
                <strong style={strongStyle}>Ingredients:</strong>
                {recipe.ingredients + "  "}
              </p>
              <p>
                <strong style={strongStyle}>Calories:</strong> {recipe.calories}
              </p>
              <p>
                <strong style={strongStyle}>Time:</strong> {recipe.time}
              </p>
              <p>
                <strong style={strongStyle}>Proteins:</strong> {recipe.proteins}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCards;
