import React, { lazy, useEffect } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../../../redux/actions/user.actions";
import orderActions from "../../../../redux/actions/order.actions";
import messageActions from "../../../../redux/actions/message.actions";
import productActions from "../../../../redux/actions/product.actions";
import couponActions from "../../../../redux/actions/coupon.actions";
import OrderListPage from "../../OrderListPage";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));
const Dashboard = () => {
  const dispatch = useDispatch();
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
