import React, { useState } from "react";
import RatingInput from "./RatingInput";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product.actions";
import Spinner from "react-bootstrap/Spinner";
const ReviewInput = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const loadingPostReviews = useSelector(
    (state) => state.product.loadingPostReviews
  );
  const handleInput = (inputRating) => setRating(inputRating);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productActions.createReview(
        { name: userInfo.name, rating, title, comment },
        productId
      )
    );
  };
  return (
    <form onSubmit={handleSubmit} className="my-4 flex w-full items-center">
      <RatingInput handleInput={handleInput} rating={rating} />
      <div className="flex flex-col w-full">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className=" px-4 w-full py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="title (*)"
        />
        <input
          onChange={(e) => setComment(e.target.value)}
          className=" px-4 w-full py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Your comment"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-around px-8 rounded-r-lg bg-green-400 text-gray-800 font-bold py-8 px-4 uppercase border-green-500 border-t border-b border-r"
      >
        {loadingPostReviews === "loading" && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {loadingPostReviews === "loading" ? "Posting" : "Post"}
      </button>
    </form>
  );
};

export default ReviewInput;
