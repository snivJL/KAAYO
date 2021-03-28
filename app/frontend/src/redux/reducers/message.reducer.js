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
      return { ...state, loading: "loading" };
    case types.GET_ALL_MESSAGES_SUCCESS:
      return { ...state, messages: payload, loading: "succeeded" };
    case types.GET_ALL_MESSAGES_FAIL:
    case types.CREATE_MESSAGE_FAIL:
      return { ...state, loading: "failed", error: payload };
    default:
      return state;
  }
};

export default messageReducer;
