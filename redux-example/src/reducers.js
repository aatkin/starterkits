import { combineReducers } from "redux";
import { ADD_TODO } from "./actions";

const initialState = [];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
