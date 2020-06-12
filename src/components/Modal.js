import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const onClose = (e) => {
    props.onClose();
  };
  const onSubmit = () => {
    props.onSubmit(currentRate);
  };
  if (!props.show) {
    return null;
  }

  const [currentRate, setcurrentRate] = useState(1);

  useEffect(() => {
    let stars = document.querySelectorAll(".star");
    stars.forEach((star) => star.addEventListener("click", setRating));

    let rating = parseInt(
      document.querySelector(".stars").getAttribute("data-rating")
    );
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent("click"));
  }, []);

  function setRating(ev) {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll(".star");
    let match = false;
    let num = 0;
    stars.forEach(function (star, index) {
      match ? star.classList.remove("rated") : star.classList.add("rated");
      //are we currently looking at the span that was clicked
      if (star === span) {
        match = true;
        num = index + 1;
      }
    });
    document.querySelector(".stars").setAttribute("data-rating", num);
    setcurrentRate(num);
  }

  return (
    <div className="modal" id="modal">
      <h2>Modal Window</h2>
      <div className="content">
        <div className="stars" data-rating="1">
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
          <span className="far fa-star star">&nbsp;</span>
        </div>
      </div>
      <div className="actions">
        <button className="toggle-button" type="submit" onClick={onSubmit}>
          Submit
        </button>
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
