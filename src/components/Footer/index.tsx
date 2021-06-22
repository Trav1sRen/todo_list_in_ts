import React, {ChangeEvent} from 'react';
import {Dispatch} from 'redux';
import "./index.css";
import {TodoType} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {
    DeleteDoneTodosAction,
    deleteDoneTodosAction,
    updateAllTodoStatusAction,
    UpdateAllTodoStatusAction
} from "../../redux/action";

const Footer = () => {
    const todos = useSelector<TodoType[], TodoType[]>(state => state);

    const dispatch = useDispatch<Dispatch<DeleteDoneTodosAction | UpdateAllTodoStatusAction>>();

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(updateAllTodoStatusAction(event.target.checked));

    const handleClick = () => {
        dispatch(deleteDoneTodosAction());
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

export default Footer;