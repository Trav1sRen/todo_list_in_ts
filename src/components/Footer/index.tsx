import React, {ChangeEvent, FC} from 'react';
import "./index.css";
import {TodoType} from "../../App";
import {
    deleteDoneTodosAction,
    DeleteDoneTodosAction,
    updateAllTodoStatusAction,
    UpdateAllTodoStatusAction
} from "../../redux/action";
import {connect} from "react-redux";
import {ActionCreator} from "redux";

interface IProps {
    todos: TodoType[],
    deleteDoneTodos: ActionCreator<DeleteDoneTodosAction>,
    updateAllTodoStatus: ActionCreator<UpdateAllTodoStatusAction>
}

const Footer = ({deleteDoneTodos, updateAllTodoStatus, todos}: IProps) => {
    const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
        updateAllTodoStatus(event.target.checked);

    const handleClick = () => {
        deleteDoneTodos();
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
    deleteDoneTodos: deleteDoneTodosAction,
    updateAllTodoStatus: updateAllTodoStatusAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer as FC);
