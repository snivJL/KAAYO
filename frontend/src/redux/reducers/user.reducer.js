import * as types from "../constants/user.constants";

const initialState = {
  userInfo: {},
  users: [],
  myOrders: [],
  loading: "idle",
  error: null,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_USER_REQUEST:
    case types.GET_USERS_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.GET_USER_ORDER_REQUEST:
    case types.MAKE_PAYMENT_REQUEST:
    case types.TOPUP_USER_REQUEST:
    case types.DELETE_ORDER_REQUEST:
      return { ...state, loading: "loading" };
    case types.CREATE_USER_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
      return { ...state, userInfo: payload, loading: "succeeded" };
    case types.SELECT_USER:
      return { ...state, selectedUser: payload };
    case types.GET_USERS_SUCCESS:
      return { ...state, users: payload, loading: "succeeded" };
    case types.GET_USER_ORDER_SUCCESS:
      return { ...state, myOrders: payload, loading: "succeeded" };
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        myOrders: state.myOrders.filter((o) => o._id !== payload),
        loading: "succedeed",
      };

    case types.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        myOrders: state.myOrders.map((o) =>
          o._id === payload._id ? payload : o
        ),
        loading: "succedeed",
      };

    case types.CREATE_USER_FAIL:
    case types.GET_CURRENT_USER_FAIL:
    case types.GET_USER_ORDER_FAIL:
    case types.DELETE_ORDER_FAIL:
    case types.GET_USERS_FAIL:
    case types.MAKE_PAYMENT_FAIL:
      return { ...state, error: payload, loading: "failed" };
    default:
      return state;
  }
};

export default userReducer;
