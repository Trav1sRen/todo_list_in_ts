import React, {useContext} from 'react';
import Item from "../Item";
import './index.css';
import {TodoContext} from "../../App";


const List = () => {
    const {todos} = useContext(TodoContext);

    return (
        <ul className="todo-main">
            {todos.map(todo => <Item key={todo.id} {...todo}/>)}
        </ul>
    )
}

export default List;