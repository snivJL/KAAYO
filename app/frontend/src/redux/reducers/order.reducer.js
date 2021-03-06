import * as types from "../constants/order.constants";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || [],
  paymentMethod: JSON.parse(localStorage.getItem("paymentMethod")) || [],
  orderCreated: false,
  loading: "idle",
  orderList: [],
  totalOrders: 0,
  validCoupon: JSON.parse(localStorage.getItem("validCoupon")) || {
    discount: 0,
  },
  userFromOrder: false,
};
const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      const existItem = state.cart.find(
        (x) => x.product._id === payload.product._id
      );
      if (existItem)
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.product._id === payload.product._id
              ? { ...x, qty: x.qty + payload.qty }
              : x
          ),
        };
      else return { ...state, cart: [...state.cart, payload] };
    case types.REMOVE_FROM_CART: {
      const existItem = state.cart.find(
        (x) => x.product._id === payload.product._id
      );
      if (existItem)
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.product._id === payload.product._id
              ? { ...x, qty: x.qty - payload.qty }
              : x
          ),
        };
      else return state;
    }
    case types.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((p) => p.product._id !== payload),
      };
    case types.SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: payload };
    case types.SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: payload, orderCreated: false };
    case types.SAVE_LOCATION:
      return { ...state, userFromOrder: true };
    case types.CREATE_ORDER_REQUEST:
    case types.GET_ALL_ORDERS_REQUEST:
    case types.UPDATE_ORDER_REQUEST:
    case types.APPLY_COUPON_REQUEST:
    case types.ORDER_PAY_REQUEST:
      return { ...state, loading: "loading" };
    case types.CREATE_ORDER_SUCCESS:
      return { ...state, loading: "succeeded", orderCreated: true, cart: [] };
    case types.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orderList: payload.order,
        pageCount: payload.totalPages,
        totalOrders: payload.totalOrders,
        loading: "succeeded",
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: "succeeded",
        orderList: state.orderList.map((o) =>
          o._id === payload._id ? payload : o
        ),
      };
    case types.APPLY_COUPON_SUCCESS:
      return { ...state, validCoupon: payload, loading: "succeeded" };
    case types.CLEAR_COUPON_SUCCESS:
      return { ...state, validCoupon: {} };
    // case types.ORDER_PAY_RESET:

    case types.CREATE_ORDER_FAIL:
    case types.GET_ALL_ORDERS_FAIL:
    case types.UPDATE_ORDER_FAIL:
    case types.APPLY_COUPON_FAIL:
    case types.ORDER_PAY_FAIL:
    case types.CLEAR_COUPON_FAIL:
      return { ...state, loading: "failed", error: payload };
    default:
      return state;
  }
};

export default orderReducer;
