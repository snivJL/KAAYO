import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import orderActions from "../redux/actions/order.actions";

const AddToCartButton = ({ qty = 1, product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(orderActions.addToCart(qty, product));
  };
  return (
    <button
      onClick={addToCart}
      className="uppercase add-cart-button block py-2 w-full border-2 bg-white border-green-500 font-bold text-green-800 hover:text-white"
      type="button"
      disabled={product.countInStock === 0}
    >
      {product.countInStock === 0 ? "Out of Stock" : "Add to cart"}
    </button>
  );
};

export default AddToCartButton;
