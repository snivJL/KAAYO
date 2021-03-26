import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderPlacedPage = () => {
  const order = useSelector((state) => state.order);
  const { shippingAddress } = order;
  return (
    <div className="flex justify-center pb-4 ">
      <div className="flex flex-col items-center w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-1/2 lg:w-1/2">
        <i className="far fa-check-circle fa-4x text-green-500 pb-2"></i>
        <p className="text-lg weight-bold pb-2">Order Placed!</p>
        <p className="text-md pb-2">
          Thank you for ordering, a confirmation email has been sent
        </p>
        <div className="bg-green-500 text-white w-4/5 p-3 rounded-lg">
          <p className="pb-5 flex items-center">
            <i className="fas fa-shipping-fast fa-2x pr-2"></i>Your order will
            be sent at this address:{" "}
          </p>
          <p className="pb-2">
            <i className="fas fa-map-marker-alt pr-2"></i>
            {shippingAddress.address}, {shippingAddress.city},
            {shippingAddress.country}
          </p>
          <p className="pb-2">
            <i className="fas fa-mobile-alt pr-2"></i>
            0903316327
          </p>
        </div>
        <p className="text-md py-2">Enjoy your KA.A.YO</p>
        <Link to="/">Back to main page</Link>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
