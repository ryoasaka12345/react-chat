/* 
Send a status change request to the reducer via action.
*/
import types from "./types";

export const sellItem = (roomId, itemId) => ({
  type: types.SELL_ITEM,
  roomId: roomId,
  itemId: itemId,
});

export default {
  sellItem,
};
