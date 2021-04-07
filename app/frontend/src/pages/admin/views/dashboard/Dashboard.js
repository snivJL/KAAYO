import React, { lazy, useEffect } from "react";

import { useDispatch } from "react-redux";
import userActions from "../../../../redux/actions/user.actions";
import orderActions from "../../../../redux/actions/order.actions";
import authActions from "../../../../redux/actions/auth.actions";
import messageActions from "../../../../redux/actions/message.actions";
import productActions from "../../../../redux/actions/product.actions";
import couponActions from "../../../../redux/actions/coupon.actions";
import OrderListPage from "../../OrderListPage";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.setAdminMode());
  }, [dispatch]);
  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(orderActions.getAllOrders());
  }, [dispatch]);
  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(messageActions.getAllMessages());
  }, [dispatch]);
  useEffect(() => {
    dispatch(couponActions.getAllCoupons());
  }, [dispatch]);
  return (
    <>
      <WidgetsDropdown />
      <OrderListPage isNew={true} />
    </>
  );
};

export default Dashboard;
