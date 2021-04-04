import * as types from "../constants/auth.constants";

const initialState = {
  user: {},
  userInfo: {},
  isAuthenticated: !!localStorage.getItem("token"),
  loading: "idle",
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: "loading",
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
      return {
        ...state,
        token: payload.accessToken,
        user: payload.user,
        loading: "succeeded",
        isAuthenticated: true,
      };
    case types.GET_CURRENT_USER_SUCCESS:
      return { ...state, userInfo: payload, loading: "succeeded" };
    case types.LOGIN_USER_FAIL:
    case types.LOGIN_GOOGLE_FAIL:
    case types.LOGIN_FACEBOOK_FAIL:
    case types.GET_CURRENT_USER_FAIL:
      return { ...state, loading: "failed" };
    case types.LOGOUT_USER:
      return { ...state, isAuthenticated: false, userInfo: [], token: null };
    default:
      return state;
  }
};

export default authReducer;
