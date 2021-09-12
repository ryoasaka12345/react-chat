import actions from "./actions";

const initMessages = () => {
  return actions.initMessages();
};

const addMessages = (messages) => {
  return actions.addMessages(messages);
};

export default {
  initMessages,
  addMessages,
};
