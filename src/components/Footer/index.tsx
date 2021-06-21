import React, {ChangeEvent, FC} from 'react';
import "./index.css";
import {TodoType} from "../../App";
import {deleteTodoAction, TodoAction, updateTodoAction} from "../../redux/action";
import {connect} from "react-redux";
import {ActionCreator} from "redux";

interface IProps {
    todos: TodoType[],
    deleteTodo: ActionCreator<TodoAction>,
    updateTodo: ActionCreator<TodoAction>
}

const Footer = ({deleteTodo, updateTodo, todos}: IProps) => {
    const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
        updateTodo(todos.map(todo => ({...todo, done: event.target.checked})));

    const handleClick = () => {
        deleteTodo(todos.filter(todo => todo.done));
    }

    return (
        <div className="todo-footer">
            <label>
                <input checked={todos.length !== 0 && todos.length === todos.filter(todo => todo.done).length}
                       onChange={handleCheck}
                       type="checkbox"/>
            </label>
            <span>
                <span>Done: {todos.filter(todo => todo.done).length}</span> / All: {todos.length}
            </span>
            <button onClick={handleClick} className="btn btn-danger">Clear done items</button>
        </div>
    );
}

const mapStateToProps = (todos: TodoType[]) => ({todos});

const mapDispatchToProps = {
    deleteTodo: deleteTodoAction,
    updateTodo: updateTodoAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer as FC);
