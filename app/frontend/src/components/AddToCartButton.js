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
    <Button
      onClick={addToCart}
      className="btn-block text-gray-900"
      style={{ backgroundColor: "#Dee5c5", border: "none" }}
      type="button"
      disabled={product.countInStock === 0}
    >
      {product.countInStock === 0 ? "Out of Stock" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
