import types from "./types";
import { combineReducers } from "redux";

const initialState = {
  list: [
    { no: 0, name: "apple", price: 120, count: 30 },
    { no: 1, name: "banana", price: 90, count: 30 },
    { no: 2, name: "orange", price: 110, count: 30 },
    { no: 3, name: "lemon", price: 200, count: 30 },
    { no: 4, name: "strawberry", price: 200, count: 30 },
  ],
};

const util = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const itemsReducer = combineReducers({
  util,
});

export default itemsReducer;
