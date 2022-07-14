import { Action, ActionCreator } from "redux";
import { Todo } from "../App";
import { TodoActionType } from "./actionType";

interface AddTodoAction extends Action<TodoActionType> {
  todo: Todo;
}

interface DeleteTodoAction extends Action<TodoActionType> {
  id: string;
}

interface UpdateTodoStatusAction extends Action<TodoActionType> {
  id: string;
  done: boolean;
}

interface UpdateAllTodoStatusAction extends Action<TodoActionType> {
  done: boolean;
}

interface DeleteDoneTodosAction extends Action<TodoActionType> {}

const addTodoAction: ActionCreator<AddTodoAction> = (todo: Todo) => ({
  type: TodoActionType.ADD_TODO,
  todo,
});

const deleteTodoAction: ActionCreator<DeleteTodoAction> = (id: string) => ({
  type: TodoActionType.DELETE_TODO,
  id,
});

const updateTodoStatusAction: ActionCreator<UpdateTodoStatusAction> = (
  id: string,
  done: boolean
) => ({ type: TodoActionType.UPDATE_TODO_STATUS, id, done });

const updateAllTodoStatusAction: ActionCreator<UpdateAllTodoStatusAction> = (
  done: boolean
) => ({ type: TodoActionType.UPDATE_ALL_TODO_STATUS, done });

const deleteDoneTodosAction: ActionCreator<DeleteDoneTodosAction> = () => ({
  type: TodoActionType.DELETE_DONE_TODOS,
});

export {
  addTodoAction,
  deleteTodoAction,
  updateTodoStatusAction,
  updateAllTodoStatusAction,
  deleteDoneTodosAction,
};
export type {
  AddTodoAction,
  DeleteTodoAction,
  UpdateTodoStatusAction,
  UpdateAllTodoStatusAction,
  DeleteDoneTodosAction,
};
