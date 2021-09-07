/* 
  In here, do some processing before perform an action.
*/

import actions from "./actions";

const sellItem = (roomId, itemId) => {
  return actions.sellItem(roomId, itemId);
};

export default {
  sellItem,
};
