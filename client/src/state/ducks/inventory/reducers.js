import types from "./types";
import { combineReducers } from "redux";

const initialState = {
  barance: 10000,
  quantity: 10,
  totalCap: 0,
};

const util = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const inventoryReducer = combineReducers({
  util,
})

export default inventoryReducer;
