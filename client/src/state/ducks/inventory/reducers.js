import types from "./types";
import { combineReducers } from "redux";

const initialState = {
  inventorySummary: {
    barance: 10000,
    quantity: 0,
    totalCap: 0, // total capital
  },
  items: {},
};

const util = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const newState = JSON.parse(JSON.stringify(state));
      const addedItemName = action.item.name;
      const addedItemPrice = action.item.price;
      if (!!newState.items[addedItemName]) {
        newState.items[addedItemName].total += 1;
      } else {
        newState.items = {
          ...newState.items,
          [addedItemName]: {
            name: addedItemName,
            price: addedItemPrice,
            total: 1,
          },
        };
      }
      newState.inventorySummary.barance -= addedItemPrice;
      newState.inventorySummary.totalCap += addedItemPrice;
      newState.inventorySummary.quantity += 1;
      return newState;
    default:
      return state;
  }
};

const inventoryReducer = combineReducers({
  util,
});

export default inventoryReducer;
