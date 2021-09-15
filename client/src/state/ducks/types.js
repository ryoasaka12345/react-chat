/* 
  action types of dispatch actions).
  
  注意：type名を同じにすると両方のdispatchが発生する。
  （例）：
      1. ./items/reducers.js　に case "ADD_MESSAGES"を追加。
      2. ./chat/reducers.js に case "ADD_MESSAGES"を追加。
      
      ... dispatch({"ADD_MESSAGES", messages})とやると、両方のdispatchが起動する。
        (試しに双方のreducerにconsole.logを入れると理解できる。)
*/

const INIT_MESSAGES = `INIT_MESSAGES`;
const ADD_MESSAGE = `ADD_MESSAGE`;
const ADD_MESSAGES = `ADD_MESSAGES`;

const ADD_ITEM = `ADD_ITEM`;
const EXCLUDE_ITEM = `EXCLUDE_ITEM`;

const SELL_ITEM = "SELL_ITEM";


