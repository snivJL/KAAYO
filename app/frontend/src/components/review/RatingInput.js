import React from "react";

const Rating = ({ handleInput, rating }) => {
  return (
    <div className="rating flex py-2">
      <span style={{ color: "#FFE234" }}>
        <i
          onClick={() => handleInput(1)}
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          onClick={() => handleInput(2)}
          className={
            rating >= 2
              ? "fa fa-star"
              : rating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          onClick={() => handleInput(3)}
          className={
            rating >= 3
              ? "fa fa-star"
              : rating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          onClick={() => handleInput(4)}
          className={
            rating >= 4
              ? "fa fa-star"
              : rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          onClick={() => handleInput(5)}
          className={
            rating >= 5
              ? "fa fa-star"
              : rating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
