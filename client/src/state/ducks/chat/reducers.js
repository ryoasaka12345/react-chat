import { combineReducers } from "redux";

const initialState = [
  [
    {
      author: "Master of Room 0",
      content: "this is Room 0",
    },
  ],
  [
    {
      author: "Master of Room 1",
      content: "this is Room 1",
    },
  ],
  [
    {
      author: "Master of Room 2",
      content: "this is Room 2",
    },
  ],
  [
    {
      author: "Master of Room 3",
      content: "this is Room 3",
    },
  ],
  [
    {
      author: "Master of Room 4",
      content: "this is Room 4",
    },
  ],
];

const util = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const chatReducer = combineReducers({
  util,
});

export default chatReducer;
