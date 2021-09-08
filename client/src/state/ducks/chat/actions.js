import types from "./types";

export const addMessages = (messages) => ({
  type: types.ADD_MESSAGES,
  messages: messages
});

export default {
  addMessages,
};
