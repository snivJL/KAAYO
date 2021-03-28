import * as types from "../constants/message.constants";

const initialState = {
  loading: "idle",
  messages: [],
};
const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_MESSAGES_REQUEST:
    case types.CREATE_MESSAGE_REQUEST:
    case types.MARK_AS_READ_REQUEST:
    case types.DELETE_MESSAGE_REQUEST:
      return { ...state, loading: "loading" };
    case types.GET_ALL_MESSAGES_SUCCESS:
      return { ...state, messages: payload, loading: "succeeded" };
    case types.MARK_AS_READ_SUCCESS:
      return {
        ...state,
        loading: "succeeded",
        messages: state.messages.map((m) =>
          m._id === payload ? { ...m, isRead: true } : m
        ),
      };
    case types.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: "succeeded",
        messages: state.messages.filter((m) => m._id !== payload),
      };
    case types.GET_ALL_MESSAGES_FAIL:
    case types.CREATE_MESSAGE_FAIL:
    case types.MARK_AS_READ_FAIL:
    case types.DELETE_MESSAGE_FAIL:
      return { ...state, loading: "failed", error: payload };
    default:
      return state;
  }
};

export default messageReducer;
