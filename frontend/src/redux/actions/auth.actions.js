import api from "../api";
import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
const authActions = {};

authActions.login = (values) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const { data } = await api.post(`/auth`, values);

    api.defaults.headers.common["authorization"] = "Bearer " + data.data.token;

    localStorage.setItem("token", data.data.token);

    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: data.data });
    toast.success(`Welcome ${data.data.user.name}`);
  } catch (error) {
    console.error(error);
    dispatch({ type: types.LOGIN_USER_FAIL, payload: error.errors.message });
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
    toast.success(`Welcome ${name}`);

    dispatch({
      type: types.LOGIN_FACEBOOK_SUCCESS,
      payload: res.data.accessToken,
    });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.accessToken;
    localStorage.setItem("accessToken", res.data.accessToken);
  } catch (error) {
    dispatch({ type: types.LOGIN_FACEBOOK_FAIL, payload: error });
  }
};

authActions.loginGoogle = (user) => async (dispatch) => {
  const access_token = user.accessToken;
  dispatch({ type: types.LOGIN_GOOGLE_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/google", { access_token });
    const name = res.data.user.name;
    toast.success(`Welcome ${name}`);
    dispatch({
      type: types.LOGIN_GOOGLE_SUCCESS,
      payload: res.data.accessToken,
    });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.accessToken;
    localStorage.setItem("accessToken", res.data.accessToken);
  } catch (error) {
    dispatch({ type: types.LOGIN_GOOGLE_FAIL, payload: error });
  }
};

authActions.logout = () => async (dispatch) => {
  console.log("LOGOUT");
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT_USER });
  toast.success("See you soon!");
};
console.log(authActions);
export default authActions;