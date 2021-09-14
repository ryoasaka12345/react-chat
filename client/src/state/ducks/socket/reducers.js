import { useMemo } from "react";
import { combineReducers } from "redux";
import socketIOClient from "socket.io-client";

const ENDPOINT = "localhost:5000";
const socket = socketIOClient(ENDPOINT);
const initialState = { socket: socket };

const util = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log("state: socket");
      return initialState;
  }
};

const socketReducer = combineReducers({
  util,
});

export default socketReducer;
