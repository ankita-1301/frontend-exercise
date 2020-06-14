import React, { useState } from "react";
import recipes from "../../recipes.json";
import PropTypes from "prop-types";

const RecipeDetails = ({ onClick, dataSource }) => {
  const [favourites, setFavourites] = useState([]);
  const [recipeData] = useState(recipes);

  const onClickFavourites = (userFav) => {
    let recipeExists = favourites.filter((r) => r.id === userFav.id).length;
    if (!recipeExists) {
      setFavourites([...favourites, ...[userFav]]);
      recipeData.map((r) => {
        if (r.id === userFav.id) r.favorites++;
      });
    } else {
      setFavourites([...favourites.filter((r) => r.id !== userFav.id)]);
      recipeData.filter((r) => {
        if (r.id === userFav.id) r.favorites--;
      });
    }
  };

  return (
    <div className="card" key={dataSource.id}>
      <img src={dataSource.image} alt="Avatar" />
      <div className="card-details">
        <i
          className={
            favourites.includes(dataSource) ? "fas fa-heart" : "far fa-heart"
          }
          onClick={() => onClickFavourites(dataSource)}
        >
          <span>{dataSource.favorites}</span>
        </i>
        <i className="far fa-star" onClick={() => onClick(dataSource)}>
          <span>{dataSource.rating}</span>
        </i>
        <h3>{dataSource.name}</h3>

        <h5>{dataSource.headline}</h5>
        <hr />
        <p>
          <strong>Ingredients:</strong>
          {dataSource.ingredients + "  "}
        </p>
        <p>
          <strong>Calories:</strong> {dataSource.calories}
        </p>
        <p>
          <strong>Time:</strong> {dataSource.time}
        </p>
        <p>
          <strong>Proteins:</strong> {dataSource.proteins}
        </p>
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  dataSource: PropTypes.object,
  onClick: PropTypes.func,
};

RecipeDetails.defaultProps = {
  dataSource: {},
  onClick: () => {},
};

export default RecipeDetails;
