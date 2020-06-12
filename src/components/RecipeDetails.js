import React, { useState } from "react";

const RecipeDetails = (props) => {
  const [favourites, setFavourites] = useState([]);
  const { onClickRating, dataSource } = props;
  const strongStyle = {
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "black",
  };
  const fontStyle = {
    fontSize: "20px",
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
    <div className="card" key={dataSource.id}>
      <img
        src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
        alt="Avatar"
      />
      <div className="card-details">
        <i
          className={
            favourites.includes(dataSource) ? "fas fa-heart" : "far fa-heart"
          }
          style={fontStyle}
          onClick={() => onClickFavourites(dataSource)}
        >
          <span style={{ marginLeft: "5px" }}>{dataSource.favorites}</span>
        </i>
        <i
          className="far fa-star"
          style={fontStyle}
          onClick={() => onClickRating(dataSource)}
        >
          {dataSource.rating}
        </i>
        <h3
          style={{
            paddingBottom: 0,
            marginTop: "10px",
            lineheight: "0.4em",
          }}
        >
          {dataSource.name}
        </h3>

        <h5 style={{ margin: 0, padding: 0 }}>{dataSource.headline}</h5>
        <hr />
        <p>
          <strong style={strongStyle}>Ingredients:</strong>
          {dataSource.ingredients + "  "}
        </p>
        <p>
          <strong style={strongStyle}>Calories:</strong> {dataSource.calories}
        </p>
        <p>
          <strong style={strongStyle}>Time:</strong> {dataSource.time}
        </p>
        <p>
          <strong style={strongStyle}>Proteins:</strong> {dataSource.proteins}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
