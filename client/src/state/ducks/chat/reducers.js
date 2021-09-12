import { assertBreakStatement } from "@babel/types";
import { combineReducers } from "redux";
import types from "./types";
const initialState = [];

const util = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_MESSAGES:
      return initialState;
    case types.ADD_MESSAGES:
      const newState = [];
      action.messages.forEach((message) => {
        newState.push(message);
      });
      return newState;
    default:
      return state;
  }
};

const chatReducer = combineReducers({
  util,
});

export default chatReducer;
