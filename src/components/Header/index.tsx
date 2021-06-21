import './index.css';
import {nanoid} from "nanoid";
import React, {FC, KeyboardEvent} from 'react';
import {connect} from 'react-redux';
import {addTodoAction, TodoAction} from "../../redux/action";
import {ActionCreator} from "redux";

interface IProps {
    addTodo: ActionCreator<TodoAction>
}

const Header = ({addTodo}: IProps) => {
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // This assignment is necessary!!!
            const val = event.currentTarget.value;

            if (val.trim() === '') {
                alert('Cannot input empty value!');
                return;
            }

            addTodo([{
                id: nanoid(),
                name: val,
                done: false
            }]);

            event.currentTarget.value = '';
        }
    }

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="Input the Todo item, Click 'Enter'"/>
        </div>
    );
}

const mapDispatchToProps = {
    addTodo: addTodoAction
};

export default connect(null, mapDispatchToProps)(Header as FC);
