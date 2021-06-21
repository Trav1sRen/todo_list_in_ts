import {TodoType} from "../../App";
import React, {ChangeEvent, FC, useState} from "react";
import "./index.css";
import {connect} from "react-redux";
import {ActionCreator} from "redux";
import {DeleteTodoAction, deleteTodoAction, UpdateTodoStatusAction, updateTodoStatusAction} from "../../redux/action";

interface IProps extends TodoType {
    deleteTodo: ActionCreator<DeleteTodoAction>,
    updateTodoStatus: ActionCreator<UpdateTodoStatusAction>
}

const Item = ({deleteTodo, updateTodoStatus, ...todo}: IProps) => {
    const {id, name, done} = todo;

    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(flag);

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        updateTodoStatus(id, event.target.checked);
    }

    const handleClick = () => {
        if (window.confirm('Are u sure to delete this Todo?')) {
            deleteTodo(id);
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
    updateTodoStatus: updateTodoStatusAction
};

export default connect(null, mapDispatchToProps)(Item as FC);
