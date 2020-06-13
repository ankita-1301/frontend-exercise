import React, { useState } from "react";
import Modal from "./Modal";
import RecipeDetails from "./RecipeDetails";

const RecipeCards = ({ dataSource }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentReceipe, setCurrentReceipe] = useState({});

  const onClickRating = (event) => {
    setShowModal(!showModal);
    setCurrentReceipe(event);
  };

  const onSubmitRating = (userRating) => {
    setShowModal(!showModal);
    dataSource.forEach((data) => {
      if (data.id === currentReceipe.id) {
        let average = data.rating ? (data.rating + userRating) / 2 : userRating;
        data.rating = !Number.isInteger(average) ? average.toFixed(1) : average;
      }
    });
  };

  return (
    <div>
      <Modal
        onClose={onClickRating}
        onSubmit={onSubmitRating}
        show={showModal}
        dataSource={currentReceipe}
      ></Modal>

      <div className="grid-container" key="grid-container">
        {dataSource.map((recipe) => {
          return (
            <RecipeDetails
              dataSource={recipe}
              onClickRating={onClickRating}
              onSubmitRating={onSubmitRating}
              key={recipe.id}
            ></RecipeDetails>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCards;
