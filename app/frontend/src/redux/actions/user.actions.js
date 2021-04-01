import api from "../api";
import * as types from "../constants/user.constants";
import { toast } from "react-toastify";

const userActions = {};

userActions.register = (user) => async (dispatch) => {
  const { name, email, password } = user;
  try {
    dispatch({ type: types.CREATE_USER_REQUEST });
    const { data } = await api.post("/user", { name, email, password });
    dispatch({ type: types.CREATE_USER_SUCCESS, payload: data.data.user });
  } catch (error) {
    console.error(error);
    toast.error(
      error && error.errors && error.errors.message
        ? error.errors.message
        : error
    );
    dispatch({
      type: types.CREATE_USER_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

userActions.getCurrentUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.GET_CURRENT_USER_REQUEST });
    console.log("HERE", getState().auth.token);
    const { data } = await api.get("/user/me");
    dispatch({
      type: types.GET_CURRENT_USER_SUCCESS,
      payload: data.data.user,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_CURRENT_USER_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
    if (error.errors.message === "Token expired") {
      localStorage.removeItem("token");
      toast.error("Token expired, please log in again");
    }
  }
};

userActions.getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_REQUEST });
    const { data } = await api.get("/user");
    dispatch({ type: types.GET_USERS_SUCCESS, payload: data.data.users });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_USERS_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

userActions.makePayment = (userId, orderId) => async (dispatch) => {
  try {
    dispatch({ type: types.MAKE_PAYMENT_REQUEST });
    const { data } = await api.put(`/user/${userId}/payment`, { orderId });
    dispatch({ type: types.MAKE_PAYMENT_SUCCESS, payload: data.data.order });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.MAKE_PAYMENT_FAIL,
      payload: error.errors.message,
    });
    toast.error(error.errors.message);
  }
};

userActions.getUserOrders = (userId) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USER_ORDER_REQUEST });
    const { data } = await api.get(`/user/${userId}/order`);
    dispatch({ type: types.GET_USER_ORDER_SUCCESS, payload: data.data.orders });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_USER_ORDER_FAIL,
      error:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

userActions.cancelOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_ORDER_REQUEST });
    await api.delete(`/order/${orderId}/delete`);
    dispatch({ type: types.DELETE_ORDER_SUCCESS, payload: orderId });
    toast.dark("Order canceled!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.DELETE_ORDER_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
userActions.selectUser = (user) => (dispatch) => {
  dispatch({ type: types.SELECT_USER, payload: user });
};
export default userActions;
