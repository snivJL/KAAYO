import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import orderActions from "../../redux/actions/order.actions";
import CheckoutSteps from "../../components/CheckoutSteps";
import SignUpNowModal from "./SignUpNowModal";
import api from "../../redux/api";
import { PayPalButton } from "react-paypal-button-v2";

const PlaceOrderPage = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [sdk, setSdk] = useState(false);
  const paymentMethod = useSelector((state) => state.order.paymentMethod);
  if (!paymentMethod) history.push("/payment");
  const order = useSelector((state) => state.order);
  const { cart, orderCreated } = order;
  const user = useSelector((state) => state.user.userInfo);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const successPaymentHandler = (paymentResult) => {
    dispatch(orderActions.payOrder(order._id, paymentResult));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (orderCreated) history.push("/order/summary");
  }, [history, orderCreated]);
  useEffect(() => {
    if (!isAuthenticated) handleShow();

    //adding paypal script dynamically
    const addPaypalScript = async () => {
      const { data: clientId } = await api.get("/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => setSdk(true);
      document.body.appendChild(script);
      console.log(sdk);
    };
    if (paymentMethod === "Paypal") addPaypalScript();
    //eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 />

      <div className="flex justify-center ">
        <SignUpNowModal
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
        />
        <div className="flex flex-col w-full p-8 text-gray-700  pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="p-4 bg-gray-100 rounded-full mb-3">
            <h1 className="ml-2 text-center font-bold uppercase ">
              Order Summary
            </h1>
          </div>
          <div className="flex">
            <table className="w-2/3 text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="text-left">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-left md:table-cell">Unit price</th>
                  <th className="text-center">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <a href="/">
                        <img
                          src={item.product.images[0].imageUrl}
                          className="w-20 rounded transform hover:scale-110"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="/">
                        <p className="mb-2 md:ml-4">{item.product.name}</p>
                        <form action="" method="POST">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                orderActions.deleteFromCart(item.product._id)
                              )
                            }
                            className="text-gray-700 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="text-left">
                      {
                        <ButtonGroup>
                          <Button
                            size="sm"
                            variant="light"
                            onClick={() =>
                              dispatch(
                                orderActions.removeFromCart(
                                  undefined,
                                  item.product
                                )
                              )
                            }
                            disabled={item.qty === 0}
                          >
                            -
                          </Button>
                          <Button size="md" variant="light" disabled>
                            {item.qty}
                          </Button>
                          <Button
                            size="sm"
                            variant="light"
                            onClick={() =>
                              dispatch(
                                orderActions.addToCart(undefined, item.product)
                              )
                            }
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      }
                    </td>
                    <td>
                      <span className="text-sm lg:text-base font-medium">
                        &#8363;
                        {item.product.price}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="text-sm lg:text-base font-medium">
                        &#8363;
                        {item.product.price * item.qty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-1/3">
              <div className="p-2 bg-gray-100 rounded-full">
                <h3 className="ml-2 font-bold uppercase text-center">
                  Order Details
                </h3>
              </div>
              <div className="p-2">
                <div className="flex justify-between border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-xs lg:text-xs font-bold text-center text-gray-800">
                    Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-xs font-bold text-center text-gray-900">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    )}
                  </div>
                </div>
                <div className="flex justify-between pt-1 border-b">
                  <div className="flex lg:px-4 lg:py-2 m-2 text-xs lg:text-xs font-bold text-gray-800">
                    <form action="" method="POST">
                      <button type="submit" className="mr-2 mt-1 lg:mt-2">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          className="w-3 text-red-600 hover:text-red-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                      </button>
                    </form>
                    Coupon "90off"
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-xs font-bold text-center text-green-700">
                    &#8363;0
                  </div>
                </div>
                <div className="flex justify-between pt-1 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-xs lg:text-xs font-bold text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-xs font-bold text-center text-gray-900">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    )}
                  </div>
                </div>
                <div className="flex justify-between pt-1 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-xs lg:text-xs font-bold text-center text-gray-800">
                    Shipping
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-xs font-bold text-center text-gray-900">
                    &#8363; 40000
                  </div>
                </div>
                <div className="flex justify-between pt-1 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-md lg:text-md font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-xl font-bold text-red-600">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    ) + 40000}
                  </div>
                </div>

                {paymentMethod.toString() !== "Paypal" ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        orderActions.createOrder(order, cartPrice, user)
                      );
                    }}
                    disabled={cart.length === 0}
                    className="flex justify-center w-full px-10 py-3 my-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span className="ml-2 mt-5px">Place Order</span>
                  </button>
                ) : (
                  <PayPalButton
                    amount={cartPrice}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={successPaymentHandler}
                  />
                )}
              </div>
            </div>
            <hr className="pb-6 mt-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderPage;
