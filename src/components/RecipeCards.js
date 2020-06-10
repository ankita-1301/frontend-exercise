import React, { useState } from "react";
import recipeData from "../../recipes.json";

const RecipeCards = (props) => {
  const [favourite, setFavourite] = useState([]);
  const [recipes] = useState(recipeData);

  const strongStyle = {
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "black",
  };
  const fontStyle = {
    fontSize: "28px",
    float: "right",
    margin: "17px 23px 0px 0px",
    paddingBottom: "79px",
    cursor: "pointer",
  };

  const onClickFavourite = (event) => {
    let exists = favourite.filter((r) => r.id === event.id).length;
    if (!exists) {
      setFavourite([...favourite, ...[event]]);
    } else {
      setFavourite([...favourite.filter((r) => r.id !== event.id)]);
    }
  };

  return (
    <div className="grid-container">
      {recipes.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <img
              src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
              alt="Avatar"
            />
            <div className="card-details">
              {favourite.includes(recipe) ? (
                <i
                  className="fas fa-heart"
                  style={fontStyle}
                  onClick={() => onClickFavourite(recipe)}
                ></i>
              ) : (
                <i
                  className="far fa-heart"
                  style={fontStyle}
                  onClick={() => onClickFavourite(recipe)}
                ></i>
              )}

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
