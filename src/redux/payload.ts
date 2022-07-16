import { Todo } from "./slice";

export interface AddTodoPayload {
  newTodo: Todo;
}

export interface DeleteTodoPayload {
  id: string;
}

export interface UpdateTodoStatusPayload {
  id: string;
  done: boolean;
}

export interface UpdateAllTodoStatusPayload {
  done: boolean;
}
