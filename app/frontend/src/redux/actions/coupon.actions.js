import api from "../api";
import * as types from "../constants/coupon.constants";
import { toast } from "react-toastify";

const couponActions = {};

couponActions.getAllCoupons = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_COUPONS_REQUEST });
    const { data } = await api.get(`/coupon`);
    dispatch({
      type: types.GET_COUPONS_SUCCESS,
      payload: data.data.coupons,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_COUPONS_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

couponActions.createCoupon = (coupon) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_COUPON_REQUEST });
    const { data } = await api.post("/coupon/add", coupon);
    dispatch({ type: types.CREATE_COUPON_SUCCESS, payload: data });
    toast.info("Coupon created!");
  } catch (error) {
    console.error(error);
    toast.dark(error.errors.message);
    dispatch({
      type: types.CREATE_COUPON_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

couponActions.getSingleCoupon = (name) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_COUPON_REQUEST });
    const { data } = await api.get(`/coupon/${name}`);
    dispatch({
      type: types.GET_SINGLE_COUPON_SUCCESS,
      payload: data.data.coupon,
    });
  } catch (error) {
    console.error(error);
    toast.dark(error.errors.message);
    dispatch({
      type: types.GET_SINGLE_COUPON_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

couponActions.deleteCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_COUPON_REQUEST });
    await api.delete(`/coupon/${id}/delete`);
    dispatch({ type: types.DELETE_COUPON_SUCCESS, payload: id });
    toast.info("Coupon deleted!");
  } catch (error) {
    console.error(error);
    toast.dark(error.errors.message);
    dispatch({
      type: types.DELETE_COUPON_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
export default couponActions;
