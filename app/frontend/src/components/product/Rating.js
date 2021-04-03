import React from "react";

const Rating = ({ value, numReviews }) => {
  return (
    <div className="rating flex mx-auto">
      <span style={{ color: "#FFE234" }}>
        <i
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          className={
            value >= 2
              ? "fa fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          className={
            value >= 3
              ? "fa fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          className={
            value >= 4
              ? "fa fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "#FFE234" }}>
        <i
          className={
            value >= 5
              ? "fa fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      {numReviews && (
        <div className="pl-2 ">
          ({numReviews > 0 ? numReviews : "0"})
          {/* {numReviews > 0
          ? numReviews > 1
            ? " reviews"
            : " review"
          : "No reviews yet"} */}
        </div>
      )}
    </div>
  );
};

export default Rating;
