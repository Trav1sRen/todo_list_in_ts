import {Reducer} from 'redux';
import {TodoType} from "../App";
import {TodoAction} from "./action";
import {TodoActionType} from "./actionType";

const todoListReducer: Reducer<TodoType[], TodoAction> = (preTodos = [], action) => {
    const {todos, type} = action;

    switch (type) {
        case TodoActionType.ADD:
            return [...todos, ...preTodos];
        case TodoActionType.UPDATE:
            return preTodos.map(preTodo => todos.map(todo => todo.id).includes(preTodo.id) ?
                todos.find(todo => todo.id === preTodo.id) as TodoType : preTodo);
        case TodoActionType.DELETE:
            return preTodos.filter(todo =>
                !todos.map(todo => todo.id).includes(todo.id));
        default:
            return preTodos;
    }
}

export default todoListReducer;