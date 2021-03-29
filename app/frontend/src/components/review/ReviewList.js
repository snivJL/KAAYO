import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((r) => (
          <li key={r._id}>
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
