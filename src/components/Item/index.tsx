import {TodoType} from "../../App";
import React, {ChangeEvent, FC, useState} from "react";
import "./index.css";
import {deleteTodoAction, TodoAction, updateTodoAction} from "../../redux/action";
import {connect} from "react-redux";
import {ActionCreator} from "redux";

interface IProps extends TodoType {
    deleteTodo: ActionCreator<TodoAction>,
    updateTodo: ActionCreator<TodoAction>
}

const Item = ({deleteTodo, updateTodo, ...todo}: IProps) => {
    const {name, done} = todo;

    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(flag);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        updateTodo([{...todo, done: event.target.checked}]);
    }

    const handleClick = () => {
        if (window.confirm('Are u sure to delete this Todo?')) {
            deleteTodo([todo]);
        }
    }

    return (
        <li style={{backgroundColor: mouseState ? '#ddd' : 'white'}} onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}>
            <label>
                <input onChange={handleCheck} type="checkbox" checked={done}/>
                <span>{name}</span>
            </label>
            <button onClick={handleClick} className="btn btn-danger"
                    style={{display: mouseState ? 'block' : 'none'}}>Delete
            </button>
        </li>
    );
}

const mapDispatchToProps = {
    deleteTodo: deleteTodoAction,
    updateTodo: updateTodoAction
};

export default connect(null, mapDispatchToProps)(Item as FC);
