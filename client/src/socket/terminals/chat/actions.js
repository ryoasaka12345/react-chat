/* 
  update the state by receiving from the server
*/
import { chatOperations } from "../../../state/ducks/chat";

const Util = (dispatch, receive) => {
  dispatch(chatOperations.addMessages(receive.messages));
};

export default Util;
