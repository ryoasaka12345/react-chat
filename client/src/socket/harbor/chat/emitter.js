import { chatOperations } from "../../../state/ducks/chat";

export const emitter = (dispatch, socket, event, body) => {
  switch (event) {
    case "CONNECTION_TEST":
      console.log("EMITTER CONNECTION TEST", dispatch);
      return;
    case "JOIN_ROOM":
      let roomId = body;
      socket.emit("chat", "JOIN_ROOM", roomId, (responce) => {
        let messages = responce.messages;
        dispatch(chatOperations.addMessages(messages));
      });
      return;
    default:
      console.log("UNSPECIFIED EVENT");
      return;
  }
};

export default emitter;
