import {Action, ActionCreator} from "redux";
import {TodoActionType} from "./actionType";
import {TodoType} from "../App";

interface TodoAction extends Action<TodoActionType> {
    todos: TodoType[]
}

const addTodoAction: ActionCreator<TodoAction> =
    (todos: TodoType[]) =>
        ({type: TodoActionType.ADD, todos});

const deleteTodoAction: ActionCreator<TodoAction> =
    (todos: TodoType[]) =>
        ({type: TodoActionType.DELETE, todos});

const updateTodoAction: ActionCreator<TodoAction> =
    (todos: TodoType[]) =>
        ({type: TodoActionType.UPDATE, todos});

export {addTodoAction, deleteTodoAction, updateTodoAction};
export type {TodoAction};