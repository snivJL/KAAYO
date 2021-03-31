import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
