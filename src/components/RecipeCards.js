import React, { useState } from "react";
import recipeData from "../../recipes.json";

const RecipeCards = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [recipes] = useState(recipeData);

  const strongStyle = {
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "black",
  };
  const fontStyle = {
    fontSize: "28px",
    float: "right",
    margin: "10px 23px 0px 0px",
    paddingBottom: "79px",
    cursor: "pointer",
    color: "#343434",
  };

  const onClickFavourites = (event) => {
    let exists = favourites.filter((r) => r.id === event.id).length;
    if (!exists) {
      setFavourites([...favourites, ...[event]]);
      recipes.map((r) => {
        if (r.id === event.id) r.favorites++;
      });
    } else {
      setFavourites([...favourites.filter((r) => r.id !== event.id)]);
      recipes.filter((r) => {
        if (r.id === event.id) r.favorites--;
      });
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
              {favourites.includes(recipe) ? (
                <i
                  className="fas fa-heart"
                  style={fontStyle}
                  onClick={() => onClickFavourites(recipe)}
                >
                  <span style={{ marginLeft: "5px" }}>{recipe.favorites}</span>
                </i>
              ) : (
                <i
                  className="far fa-heart"
                  style={fontStyle}
                  onClick={() => onClickFavourites(recipe)}
                >
                  <span style={{ marginLeft: "5px" }}>{recipe.favorites}</span>
                </i>
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
