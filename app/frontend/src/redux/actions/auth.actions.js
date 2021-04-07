import api from "../api";
import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
const authActions = {};

authActions.login = (values) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const { data } = await api.post(`/auth`, values);
    localStorage.setItem("token", data.data.token);

    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: data.data });
    toast.dark(`Welcome ${data.data.user.name}`);
    // dispatch(userActions.getCurrentUser());
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.LOGIN_USER_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
    toast.error(error.errors.message);
  }
};

authActions.loginFacebook = (user) => async (dispatch) => {
  const access_token = user.accessToken;
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/facebook", { access_token });
    console.log("response token", res.data.accessToken);
    const name = res.data.user.name;
    toast.dark(`Welcome ${name}`);

    // api.defaults.headers.common["authorization"] = "Bearer " + res.data.accessToken;
    localStorage.setItem("token", res.data.accessToken);
    // dispatch(userActions.getCurrentUser());

    dispatch({
      type: types.LOGIN_FACEBOOK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.LOGIN_FACEBOOK_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

authActions.loginGoogle = (user) => async (dispatch) => {
  const access_token = user.accessToken;
  dispatch({ type: types.LOGIN_GOOGLE_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/google", { access_token });
    const name = res.data.user.name;
    toast.dark(`Welcome ${name}`);

    // api.defaults.headers.common["authorization"] =
    //   "Bearer " + res.data.accessToken;
    localStorage.setItem("token", res.data.accessToken);
    // dispatch(userActions.getCurrentUser());

    dispatch({
      type: types.LOGIN_GOOGLE_SUCCESS,
      payload: res.data.accessToken,
    });
  } catch (error) {
    dispatch({
      type: types.LOGIN_GOOGLE_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
authActions.getCurrentUser = () => async (dispatch, getState) => {
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

authActions.logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT_USER });
  dispatch({ type: "CLEAR_USER" });
  toast.dark("See you soon!");
};
authActions.setAdminMode = () => (dispatch) => {
  dispatch({ type: types.SET_ADMIN_MODE });
  toast.dark("Entering admin mode..");
};
export default authActions;
