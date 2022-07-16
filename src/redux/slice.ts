import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddTodoPayload,
  DeleteTodoPayload,
  UpdateAllTodoStatusPayload,
  UpdateTodoStatusPayload,
} from "./payload";

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[]; // For holding the reference(but RTK already integrates Immer)
}

const initialState: TodoState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload: { newTodo } }: PayloadAction<AddTodoPayload>) {
      state.todos = [newTodo, ...state.todos];
    },
    updateTodoStatus(
      state,
      { payload: { id, done } }: PayloadAction<UpdateTodoStatusPayload>
    ) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, done } : todo
      );
    },
    updateAllTodoStatus(
      state,
      { payload: { done } }: PayloadAction<UpdateAllTodoStatusPayload>
    ) {
      state.todos = state.todos.map((todo) => ({ ...todo, done }));
    },
    deleteTodo(state, { payload: { id } }: PayloadAction<DeleteTodoPayload>) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    deleteDoneTodos(state) {
      state.todos = state.todos.filter(({ done }) => !done);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  deleteDoneTodos,
  updateAllTodoStatus,
  updateTodoStatus,
} = todoSlice.actions;
export { todoSlice };
