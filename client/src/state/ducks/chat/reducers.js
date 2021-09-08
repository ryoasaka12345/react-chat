import { combineReducers } from "redux";
import types from "./types";
const initialState = [];

const util = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGES:
      action.messages.forEach((message) => {
        state.push(message);
      });
      return state;
    default:
      return state;
  }
};

const chatReducer = combineReducers({
  util,
});

export default chatReducer;
