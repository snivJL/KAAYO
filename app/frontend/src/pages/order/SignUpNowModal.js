import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import orderActions from "../../redux/actions/order.actions";
import { useDispatch } from "react-redux";
const SignUpNowModal = ({ handleShow, handleClose, show }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up And Get Exclusive Deals!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold text-xl">Sign Up Now and:</h2>
            <ul className="space-y-2">
              <li>
                <i class="far fa-check-circle pr-2 text-green-600"></i>
                Get Exclusive Offers
              </li>
              <li>
                {" "}
                <i class="far fa-check-circle pr-2 text-green-600"></i>
                Get A Special Gift For Your Birthday
              </li>
              <li>
                {" "}
                <i class="far fa-check-circle pr-2 text-green-600"></i>
                Save your Info For Faster Purchase
              </li>
              <li>
                {" "}
                <i class="far fa-check-circle pr-2 text-green-600"></i>
                Keep An Order History To Reorder In One Click!
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue as a guest
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              history.push("/login");
              dispatch(orderActions.saveLocation());
            }}
          >
            Log In
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              history.push("/register");
              dispatch(orderActions.saveLocation());
            }}
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpNowModal;
