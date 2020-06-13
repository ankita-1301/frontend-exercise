import React, { useState } from "react";
import Modal from "./Modal";
import RecipeDetails from "./RecipeDetails";
import reduxStore from "../stores/reduxStore";

const RecipeCards = () => {
  const [localStore] = useState(reduxStore.getState());
  const [showModal, setShowModal] = useState(false);
  const [currentReceipe, setCurrentReceipe] = useState({});

  const onClick = (recipe) => {
    setShowModal(!showModal);
    setCurrentReceipe(recipe);
  };

  const onSubmit = (userRating) => {
    setShowModal(!showModal);
    reduxStore.dispatch({
      type: "ADD_RATE",
      payload: {
        recipe: { id: currentReceipe.id, rate: userRating },
      },
    });
  };

  return (
    <div>
      <Modal
        onClose={onClick}
        onSubmit={onSubmit}
        show={showModal}
        dataSource={currentReceipe}
        key="modal"
      ></Modal>

      <div className="grid-container" key="grid-container">
        {localStore.recipeData.map((recipe) => {
          return (
            <RecipeDetails
              dataSource={recipe}
              onClick={onClick}
              onSubmit={onSubmit}
              key={recipe.id}
            ></RecipeDetails>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCards;
