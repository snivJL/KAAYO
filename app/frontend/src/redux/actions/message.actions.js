import api from "../api";
import * as types from "../constants/message.constants";
import { toast } from "react-toastify";

const messageActions = {};

messageActions.getAllMessages = (keywords = "", page = 1) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_ALL_MESSAGES_REQUEST });
    const { data } = await api.get(`/message`);
    dispatch({
      type: types.GET_ALL_MESSAGES_SUCCESS,
      payload: data.data.message,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_ALL_MESSAGES_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

messageActions.createMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_MESSAGE_REQUEST });
    const { data } = await api.post("/message/add", message);
    dispatch({ type: types.CREATE_MESSAGE_SUCCESS, payload: data });
    toast.info("Message sent!");
  } catch (error) {
    console.error(error);
    toast.dark(error.errors.message);
    dispatch({
      type: types.CREATE_MESSAGE_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

messageActions.markAsRead = (message) => async (dispatch) => {
  try {
    dispatch({ type: types.MARK_AS_READ_REQUEST });
    api.put(`/message/${message._id}/update`, { ...message, isRead: true });
    dispatch({ type: types.MARK_AS_READ_SUCCESS, payload: message._id });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.MARK_AS_READ_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

messageActions.deleteMessage = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_MESSAGE_REQUEST });
    api.delete(`/message/${id}/delete`);
    dispatch({ type: types.DELETE_MESSAGE_SUCCESS, payload: id });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.DELETE_MESSAGE_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};
export default messageActions;
