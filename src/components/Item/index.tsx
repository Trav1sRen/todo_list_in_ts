import {TodoContext, TodoType} from "../../App";
import React, {ChangeEvent, useContext, useState} from "react";
import "./index.css";

const Item = ({id, name, done}: TodoType) => {
    const {setTodo} = useContext(TodoContext);
    const [mouseState, setMouseState] = useState<boolean>();

    const handleMouse = (flag: boolean) =>
        () => setMouseState(flag);

    const handleCheck = (id: string) =>
        (event: ChangeEvent<HTMLInputElement>) =>
            setTodo(todos =>
                todos.map(todo => todo.id === id ? {...todo, done: event.target.checked} : todo));

    const handleClick = (id: string) =>
        () => {
            if (window.confirm('Are u sure to delete this Todo?')) {
                setTodo(todos => todos.filter(todo => todo.id !== id));
            }
        }

    return (
        <li style={{backgroundColor: mouseState ? '#ddd' : 'white'}} onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}>
            <label>
                <input onChange={handleCheck(id)} type="checkbox" checked={done}/>
                <span>{name}</span>
            </label>
            <button onClick={handleClick(id)} className="btn btn-danger"
                    style={{display: mouseState ? 'block' : 'none'}}>Delete
            </button>
        </li>
    );
}

export default Item;
