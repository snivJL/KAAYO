import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item className={step1 && !step2 && "border-b-2 border-green-600"}>
        {step1 ? (
          <Nav.Link as={Link} to="login">
            Sign In
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className={step2 && !step3 && "border-b-2 border-green-600"}>
        {step2 ? (
          <Nav.Link as={Link} to="/shipping">
            Shipping
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className={step3 && !step4 && "border-b-2 border-green-600"}>
        {step3 ? (
          <Nav.Link as={Link} to="/payment">
            Payment
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className={step4 && "border-b-2 border-green-600"}>
        {step4 ? (
          <Nav.Link as={Link} to="placeorder">
            Place Order
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
