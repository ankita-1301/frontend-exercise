import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ dataSource, onClose, onSubmit, show }) => {
  // Return Modal only when props - show is true
  if (!show) {
    return null;
  }

  const [currentRate, setcurrentRate] = useState(1);

  useEffect(() => {
    fetchRatingStarts();
  }, []);

  const fetchRatingStarts = () => {
    //get all star elements
    let stars = document.querySelectorAll(".star");

    //attach onClick event
    stars.forEach((star) => star.addEventListener("click", setRating));

    //get current rating
    let rating = parseInt(
      document.querySelector(".stars").getAttribute("data-rating")
    );

    //get targetted star
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent("click"));
  };

  const setRating = (ev) => {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll(".star");
    let match = false;
    let counter = 0;
    stars.forEach(function (star, index) {
      match ? star.classList.remove("rated") : star.classList.add("rated");
      //are we currently looking at the span that was clicked
      if (star === span) {
        match = true;
        counter = index + 1;
      }
    });
    document.querySelector(".stars").setAttribute("data-rating", counter);
    setcurrentRate(counter);
  };

  return (
    <div className="modal" id="modal">
      <h2>{dataSource.name}</h2>
      <hr />
      <div className="modal-content">
        <div className="stars" data-rating="1">
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
        </div>
      </div>
      <div className="modal-actions">
        <button
          className="toggle-button"
          type="submit"
          onClick={() => onSubmit(currentRate)}
        >
          Submit
        </button>
        <button className="toggle-button" onClick={() => onClose(dataSource)}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  dataSource: PropTypes.object,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
export default Modal;
