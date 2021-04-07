import React, { useState } from "react";
import RatingInput from "./RatingInput";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product.actions";
import Spinner from "react-bootstrap/Spinner";
const ReviewInput = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const loadingPostReviews = useSelector(
    (state) => state.product.loadingPostReviews
  );
  console.log(name, email, title, comment, rating);
  const handleInput = (inputRating) => setRating(inputRating);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(
      productActions.createReview(
        { name, email, rating, title, comment },
        productId
      )
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      id="commentform"
      className="text-gray-800 w-1/2"
    >
      <p className="comment-notes">
        <span id="email-notes">Your email address will not be published.</span>
        Required fields are marked *
      </p>
      <p className="comment-form-author">
        {/* <label for="author">
          Name<span className="required">*</span>
        </label> */}
        <input
          onChange={(e) => setName(e.target.value)}
          id="author"
          name="author"
          className="border-b-2 py-2"
          type="text"
          value={name}
          size="30"
          required=""
          placeholder="Name*"
        />
      </p>
      <p>
        {/* <label for="email">
          Email<span className="required">*</span>
        </label> */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
          value={email}
          size="30"
          required=""
          className="border-b-2 py-2"
          placeholder="Email*"
        />
      </p>
      <p>
        {/* <label for="email">
          Email<span className="required">*</span>
        </label> */}
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          type="title"
          value={title}
          size="30"
          required=""
          className="border-b-2 py-2"
          placeholder="Title*"
        />
      </p>
      <RatingInput handleInput={handleInput} rating={rating} />
      <p className="comment-form-comment">
        {/* <label for="comment">
          Your review<span className="required">*</span>
        </label> */}
        <textarea
          onChange={(e) => setComment(e.target.value)}
          id="comment"
          name="comment"
          cols="45"
          rows="6"
          required=""
          className="border-b-2 py-2"
          placeholder="Your Review*"
        ></textarea>
      </p>

      <p className="form-submit  mx-auto rounded-lg w-1/3">
        <button
          name="submit"
          type="submit"
          id="submit"
          className="bg-white-200 py-2 px-4 border border-green-300 text-gray-700"
          value="Submit"
        >
          {loadingPostReviews && <Spinner />}Submit
        </button>
      </p>
    </form>
  );
};

export default ReviewInput;
