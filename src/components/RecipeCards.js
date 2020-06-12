import React, { useState } from "react";
import recipeData from "../../recipes.json";
import Modal from "./Modal";
import RecipeDetails from "./RecipeDetails";

const RecipeCards = (props) => {
  const [recipes] = useState(recipeData);
  const [showModal, setShowModal] = useState(false);
  const [currentReceipe, setCurrentReceipe] = useState({});

  const onClickRating = (event) => {
    setShowModal(!showModal);
    setCurrentReceipe(event);
  };

  const onSubmitRating = (event) => {
    setShowModal(!showModal);
    recipes.map((r) => {
      if (r.id === currentReceipe.id) {
        let average = r.rating ? (r.rating + event) / 2.0 : event;
        r.rating = !Number.isInteger(average) ? average.toFixed(1) : average;
      }
    });
  };

  return (
    <div>
      <Modal
        onClose={onClickRating}
        onSubmit={onSubmitRating}
        show={showModal}
      ></Modal>
      <div className="grid-container" key="grid-container">
        {recipes.map((recipe) => {
          return (
            <RecipeDetails
              dataSource={recipe}
              onClickRating={onClickRating}
              onSubmitRating={onSubmitRating}
            ></RecipeDetails>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCards;
