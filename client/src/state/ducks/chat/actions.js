import types from "./types";

export const initMessages = () => ({
  type: types.INIT_MESSAGES,
});

export const addMessages = (messages) => ({
  type: types.ADD_MESSAGES,
  messages: messages,
});

export default {
  initMessages,
  addMessages,
};
