import React, {FC} from 'react';
import Item from "../Item";
import './index.css';
import {TodoType} from "../../App";
import {connect} from "react-redux";

interface IProps {
    todos: TodoType[]
}

const List = ({todos}: IProps) => (
    <ul className="todo-main">
        {todos.map(todo => <Item key={todo.id} {...todo}/>)}
    </ul>
);

const mapStateToProps = (todos: TodoType[]) => ({todos});

export default connect(mapStateToProps, null)(List as FC);