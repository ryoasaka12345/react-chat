import actions from "./actions";

const initMessages = () => {
  return actions.initMessages();
};

const addMessage = (message) => {
  return actions.addMessage(message);
};

const addMessages = (messages) => {
  return actions.addMessages(messages);
};

export default {
  initMessages,
  addMessage,
  addMessages,
};
