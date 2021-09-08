import { combineReducers } from "redux";
import { io } from "socket.io-client";

const initialState = [];

const ENDPOINT = "localhost:5000";
const socket = io(ENDPOINT);
socket.on("hello", (messages) => {
  messages.forEach((message) => {
    initialState.push(message);
  });
});

const util = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const chatReducer = combineReducers({
  util,
});

export default chatReducer;
