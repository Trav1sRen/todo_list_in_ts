import { combineReducers, createStore } from "redux";
import { Todo } from "../App";
import { todosReducer } from "./reducer";

export interface IRootState {
  todos: Todo[];
}

export default createStore(combineReducers({ todos: todosReducer }));
