import { useMemo } from "react";
import { combineReducers } from "redux";
import types from "./types";

const util = (state = null, action) => {
  switch (action.type) {
    case types.SET_CONNECTION:
      console.log("set connection");
      return action.connection;
    default:
      return state;
  }
};

const socketReducer = combineReducers({
  util,
});

export default socketReducer;
