import types from "./types";
import { combineReducers } from "redux";

const initialState = [
  [
    { id: 0, name: "apple", price: 120, count: 30 },
    { id: 1, name: "banana", price: 90, count: 30 },
    { id: 2, name: "orange", price: 110, count: 30 },
    { id: 3, name: "lemon", price: 200, count: 30 },
    { id: 4, name: "strawberry", price: 200, count: 30 },
  ],
  [
    { id: 0, name: "desk", price: 120, count: 30 },
    { id: 1, name: "chair", price: 90, count: 30 },
    { id: 2, name: "shelf", price: 110, count: 30 },
    { id: 3, name: "light", price: 200, count: 30 },
    { id: 4, name: "mirror", price: 200, count: 30 },
  ],
  [
    { id: 0, name: "water", price: 120, count: 30 },
    { id: 1, name: "green-tea", price: 90, count: 30 },
    { id: 2, name: "coffie", price: 110, count: 30 },
    { id: 3, name: "lemon", price: 200, count: 30 },
  ],
  [
    { id: 0, name: "iphone", price: 120, count: 30 },
    { id: 1, name: "xperia", price: 90, count: 30 },
    { id: 2, name: "galaxy", price: 110, count: 30 },
  ],
  [
    { id: 0, name: "Naruto", price: 120, count: 30 },
    { id: 1, name: "ONEPIECE", price: 90, count: 30 },
    { id: 2, name: "HUNTER x HUNTER", price: 110, count: 30 },
    { id: 3, name: "STARWARS", price: 200, count: 30 },
  ],
];

const util = (state = initialState, action) => {
  switch (action.type) {
    case types.SELL_ITEM:
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.roomId][action.itemId].count -= 1;
      return newState;
    default:
      return state;
  }
};

const itemsReducer = combineReducers({
  util,
});

export default itemsReducer;
