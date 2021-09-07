import { assertCompletionStatement } from "@babel/types";
import actions from "./actions";

const addItem = (item) => {
  return actions.addItem(item);
};

export default {
  addItem,
};
