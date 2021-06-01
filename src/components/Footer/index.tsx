import React, {ChangeEvent, useContext} from 'react';
import "./index.css";
import {TodoContext} from "../../App";

const Footer = () => {
    const {todos, setTodo} = useContext(TodoContext);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const allChecked = event.target.checked;
        setTodo(todos => todos.map(todo => {
            todo.done = allChecked;
            return todo;
        }));
    }

    const handleClick = () => {
        setTodo(todos => todos.filter(todo => !todo.done));
    }

    return (
        <div className="todo-footer">
            <label>
                <input onChange={handleCheck} type="checkbox"/>
            </label>
            <span>
                <span>Done: {todos.filter(todo => todo.done).length}</span> / All: {todos.length}
            </span>
            <button onClick={handleClick} className="btn btn-danger">Clear done items</button>
        </div>
    );
}

export default Footer;
