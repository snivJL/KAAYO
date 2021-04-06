import * as types from "../constants/order.constants";
import { toast } from "react-toastify";
import api from "../api";
const orderActions = {};

orderActions.addToCart = (qty = 1, product) => (dispatch, getState) => {
  dispatch({ type: types.ADD_TO_CART, payload: { product, qty } });
  localStorage.setItem("cartItems", JSON.stringify(getState().order.cart));
};

orderActions.removeFromCart = (qty = 1, product) => (dispatch, getState) => {
  dispatch({ type: types.REMOVE_FROM_CART, payload: { product, qty } });
  localStorage.setItem("cartItems", JSON.stringify(getState().order.cart));
};

orderActions.deleteFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: types.DELETE_FROM_CART, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().order.cart));
};

orderActions.saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: types.SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

orderActions.savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: types.SAVE_PAYMENT_METHOD, payload: data.paymentMethod });
  localStorage.setItem("paymentMethod", JSON.stringify(data.paymentMethod));
};

orderActions.getAllOrders = (page = 1) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ALL_ORDERS_REQUEST });
    const { data } = await api.get(`/order?page=${page}`);
    dispatch({ type: types.GET_ALL_ORDERS_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_ALL_ORDERS_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
orderActions.createOrder = (order, cartPrice, user, validCoupon) => async (
  dispatch
) => {
  try {
    //creates flattened array, 1 line per product per quantity to match server
    const productsArray = order.cart
      .map((p) => {
        if (p.qty > 1) {
          return new Array(p.qty).fill(p.product._id, 0, p.qty);
        } else return p.product._id;
      })
      .flat();

    const formatOrder = {};
    formatOrder.products = productsArray;
    formatOrder.shipping = order.shippingAddress;
    formatOrder.status = "pending";
    formatOrder.total = cartPrice;
    formatOrder.user = user;
    formatOrder.validCoupon = validCoupon;
    console.log("action", formatOrder);
    dispatch({ type: types.CREATE_ORDER_REQUEST });
    const { data } = await api.post("/order/add", formatOrder);

    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: data });
    localStorage.removeItem("validCoupon");
    localStorage.removeItem("cartItems");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.CREATE_ORDER_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
    toast.error(error.errors.message);
  }
};

orderActions.updateOrder = (...params) => async (dispatch) => {
  try {
    console.log(params[0]);
    const { id } = params[0];
    dispatch({ type: types.UPDATE_ORDER_REQUEST });
    const { data } = await api.put(`/order/${id}/update`, params[0]);
    console.log("FDP", data);
    dispatch({ type: types.UPDATE_ORDER_SUCCESS, payload: data.data.order });
    toast.info("Order updated!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.UPDATE_ORDER_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
orderActions.saveLocation = () => (dispatch) =>
  dispatch({ type: types.SAVE_LOCATION });

orderActions.payOrder = (orderId, paymentResult) => async (dispatch) => {
  try {
    dispatch({ type: types.ORDER_PAY_REQUEST });
    const { data } = await api.put(`/order/${orderId}/pay`, paymentResult);
    dispatch({ type: types.ORDER_PAY_SUCCESS });
    toast.info("Order paid!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.ORDER_PAY_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

orderActions.applyCoupon = (couponName, cart) => async (dispatch) => {
  try {
    dispatch({ type: types.APPLY_COUPON_REQUEST });
    const { data } = await api.put(`/order/coupon`, { couponName, cart });
    console.log("FDP", data.data.coupon);
    dispatch({ type: types.APPLY_COUPON_SUCCESS, payload: data.data.coupon });
    localStorage.setItem("validCoupon", JSON.stringify(data.data.coupon));
    toast.info("Coupon applied!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.APPLY_COUPON_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

orderActions.clearCoupon = () => (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_COUPON_SUCCESS });
    toast.info("Coupon removed!");
    localStorage.removeItem("validCoupon");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.CLEAR_COUPON_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

export default orderActions;
