import * as types from "../constants/coupon.constants";

const initialState = {
  loading: "idle",
  coupon: {},
  coupons: [{ categories: [] }],
};
const couponReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COUPONS_REQUEST:
    case types.CREATE_COUPON_REQUEST:
    case types.GET_SINGLE_COUPON_REQUEST:
    case types.DELETE_COUPON_REQUEST:
      return { ...state, loading: "loading" };
    case types.GET_COUPONS_SUCCESS:
      return { ...state, coupons: payload, loading: "succeeded" };
    case types.GET_SINGLE_COUPON_SUCCESS:
      return { ...state, coupon: payload, loading: "succeeded" };

    case types.DELETE_COUPON_SUCCESS:
      return {
        ...state,
        loading: "succeeded",
        coupons: state.coupons.filter((c) => c._id !== payload),
      };
    case types.GET_COUPONS_FAIL:
    case types.GET_SINGLE_COUPON_FAIL:
    case types.CREATE_COUPON_FAIL:
    case types.DELETE_COUPON_FAIL:
      return { ...state, loading: "failed", error: payload };
    default:
      return state;
  }
};

export default couponReducer;
