import { Reducer } from "redux";
import { Todo } from "../App";
import {
  AddTodoAction,
  DeleteTodoAction,
  UpdateAllTodoStatusAction,
  UpdateTodoStatusAction,
} from "./action";
import { TodoActionType } from "./actionType";

const todosReducer: Reducer<
  Todo[],
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoStatusAction
  | UpdateAllTodoStatusAction
> = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case TodoActionType.ADD_TODO: {
      const { todo } = action as AddTodoAction;
      return [todo, ...state];
    }

    case TodoActionType.UPDATE_TODO_STATUS: {
      const { id, done } = action as UpdateTodoStatusAction;
      return state.map((todo) => (todo.id === id ? { ...todo, done } : todo));
    }

    case TodoActionType.UPDATE_ALL_TODO_STATUS: {
      const { done } = action as UpdateAllTodoStatusAction;
      return state.map((todo) => ({ ...todo, done }));
    }

    case TodoActionType.DELETE_TODO: {
      const { id } = action as DeleteTodoAction;
      return state.filter((todo) => todo.id !== id);
    }

    case TodoActionType.DELETE_DONE_TODOS: {
      return state.filter((todo) => !todo.done);
    }

    default:
      return state;
  }
};

export { todosReducer };
