import types from "./types";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  item: item,
});

export default {
  addItem,
};
