import {Reducer} from 'redux';
import {TodoType} from "../App";
import {TodoActionType} from "./actionType";
import {AddTodoAction, DeleteTodoAction, UpdateAllTodoStatusAction, UpdateTodoStatusAction} from "./action";

const todoListReducer: Reducer<TodoType[],
    AddTodoAction | DeleteTodoAction | UpdateTodoStatusAction | UpdateAllTodoStatusAction> =
    (preTodos = [], action) => {
        const {type} = action;

        switch (type) {
            case TodoActionType.ADD_TODO: {
                const {todo} = action as AddTodoAction;
                return [todo, ...preTodos];
            }

            case TodoActionType.UPDATE_TODO_STATUS: {
                const {id, done} = action as UpdateTodoStatusAction;
                return preTodos.map(todo => todo.id === id ? {...todo, done} : todo);
            }

            case TodoActionType.UPDATE_ALL_TODO_STATUS: {
                const {done} = action as UpdateAllTodoStatusAction;
                return preTodos.map(todo => ({...todo, done}));
            }

            case TodoActionType.DELETE_TODO: {
                const {id} = action as DeleteTodoAction;
                return preTodos.filter(todo => todo.id !== id);
            }

            case TodoActionType.DELETE_DONE_TODOS: {
                return preTodos.filter(todo => !todo.done);
            }

            default:
                return preTodos;
        }
    }

export default todoListReducer;